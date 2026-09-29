import fs from "fs"
import path from "path"

import matter from "gray-matter"

/**
 * Markdown collection: content/guides.
 *
 * Frontmatter: title (required), description, date (YYYY-MM-DD), color (card
 * background, hex), art (the card drawing, see GuideArt), category, platform,
 * order (position inside its category), noindex. "## Q: … / A: …" blocks
 * become FAQ schema.
 *
 * A "## Steps" section made of "### " headings renders as numbered steps. An
 * image inside a step, `![alt](/how-to/slug/file.webp "app.awwtomation.com/path")`,
 * is a screenshot from the app; its title is the address shown above it.
 */

export type Collection = "guides"

export const GUIDE_CATEGORIES = [
  { id: "getting-started", label: "Getting started" },
  { id: "comments", label: "Comments and stories" },
  { id: "messages", label: "DMs and Messenger" },
  { id: "leads", label: "Leads and contacts" },
  { id: "team", label: "Inbox, team and tools" },
] as const

export type GuideCategory = (typeof GUIDE_CATEGORIES)[number]["id"]
export type GuidePlatform = "instagram" | "facebook" | "both"

export interface Article {
  collection: Collection
  slug: string
  title: string
  description: string
  date: string
  color: string
  art: string
  category: GuideCategory
  platform: GuidePlatform
  order: number
  noindex: boolean
  content: string
}

export interface ArticleFaq {
  question: string
  answer: string
}

const dirFor = (collection: Collection) => path.join(process.cwd(), "content", collection)

function clean(value: string) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function parse(collection: Collection, fileName: string): Article {
  const slug = fileName.replace(/\.md$/, "")
  const { data, content } = matter(fs.readFileSync(path.join(dirFor(collection), fileName), "utf8"))
  const title = typeof data.title === "string" ? data.title : slug
  const excerpt = clean(content).slice(0, 157).replace(/\s+\S*$/, "")
  return {
    collection,
    slug,
    title,
    description: typeof data.description === "string" ? data.description : `${excerpt}…`,
    date: typeof data.date === "string" ? data.date : "",
    color: typeof data.color === "string" ? data.color : "#edf2ee",
    art: typeof data.art === "string" ? data.art : "comment-to-dm",
    category: GUIDE_CATEGORIES.some((c) => c.id === data.category) ? (data.category as GuideCategory) : "getting-started",
    platform: data.platform === "instagram" || data.platform === "facebook" ? data.platform : "both",
    order: typeof data.order === "number" ? data.order : 99,
    noindex: Boolean(data.noindex),
    content,
  }
}

/** Newest first. An empty or missing folder is a normal state. */
export function getArticles(collection: Collection, { includeNoindex = false } = {}): Article[] {
  const dir = dirFor(collection)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => parse(collection, name))
    .filter((article) => includeNoindex || !article.noindex)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getArticle(collection: Collection, slug: string): Article | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null
  const file = `${slug}.md`
  if (!fs.existsSync(path.join(dirFor(collection), file))) return null
  return parse(collection, file)
}

/** Guides in reading order: by category, then by their order inside it. */
export function sortGuides(guides: Article[]) {
  const rank = (a: Article) => GUIDE_CATEGORIES.findIndex((c) => c.id === a.category)
  return [...guides].sort((a, b) => rank(a) - rank(b) || a.order - b.order || a.title.localeCompare(b.title))
}

export function readingMinutes(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 220))
}

export function extractFaqs(content: string): ArticleFaq[] {
  const pattern = /#{2,6}\s*Q:\s*(.+?)\n+\s*(?:\*\*A\*\*:|\*\*A:\*\*|A:)\s*([\s\S]+?)(?=\n#{2,6}\s*Q:|\n##\s|\n---|$)/g
  return Array.from(content.matchAll(pattern))
    .map((match) => ({ question: clean(match[1] ?? ""), answer: clean(match[2] ?? "") }))
    .filter((faq) => faq.question && faq.answer)
}

export interface GuideImage {
  src: string
  alt: string
  /** The address bar shown above the screenshot. */
  address: string
}

export interface GuideStep {
  title: string
  /** Markdown with the screenshots taken out. */
  body: string
  images: GuideImage[]
}

export interface GuideSection {
  heading: string
  body: string
  steps: GuideStep[]
}

export interface ParsedGuide {
  intro: string
  sections: GuideSection[]
}

const IMAGE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g

function takeImages(markdown: string) {
  const images: GuideImage[] = Array.from(markdown.matchAll(IMAGE)).map((match) => ({
    alt: match[1] ?? "",
    src: match[2] ?? "",
    address: match[3] ?? "app.awwtomation.com",
  }))
  return { images, body: markdown.replace(IMAGE, "").replace(/\n{3,}/g, "\n\n").trim() }
}

/**
 * Splits a guide into its intro and "## " sections, with "### " steps pulled
 * out of any section that has them. FAQ blocks ("## Q:") are left out: they
 * render from extractFaqs.
 */
export function parseGuide(content: string): ParsedGuide {
  const [intro = "", ...rest] = content.split(/^## /m)
  const sections = rest
    .map((chunk) => {
      const newline = chunk.indexOf("\n")
      const heading = (newline === -1 ? chunk : chunk.slice(0, newline)).trim()
      const body = newline === -1 ? "" : chunk.slice(newline + 1)
      return { heading, body }
    })
    .filter((section) => !/^Q:/.test(section.heading))
    .map(({ heading, body }) => {
      const [lead = "", ...stepChunks] = body.split(/^### /m)
      const steps = stepChunks.map((chunk) => {
        const newline = chunk.indexOf("\n")
        const title = (newline === -1 ? chunk : chunk.slice(0, newline)).trim()
        return { title, ...takeImages(newline === -1 ? "" : chunk.slice(newline + 1)) }
      })
      return { heading, body: lead.trim(), steps }
    })
  return { intro: intro.trim(), sections }
}

export function guideStepCount(article: Article) {
  return parseGuide(article.content).sections.reduce((sum, section) => sum + section.steps.length, 0)
}

/** "How to send links from Instagram comments", the guide's search title. */
export function guideSeoTitle(article: Article) {
  return `How to ${article.title.charAt(0).toLowerCase()}${article.title.slice(1)}`
}

/** Up to three other guides, from the same topic first. */
export function relatedGuides(article: Article, guides: Article[], count = 3) {
  const others = sortGuides(guides.filter((guide) => guide.slug !== article.slug))
  return [...others.filter((g) => g.category === article.category), ...others.filter((g) => g.category !== article.category)].slice(0, count)
}
