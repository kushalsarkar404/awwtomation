import fs from "fs"
import path from "path"

import matter from "gray-matter"

/**
 * Markdown collection: content/guides.
 *
 * Frontmatter: title (required), description, date (YYYY-MM-DD), color (card
 * background, hex), noindex. "## Q: … / A: …" blocks become FAQ schema.
 */

export type Collection = "guides"

export interface Article {
  collection: Collection
  slug: string
  title: string
  description: string
  date: string
  color: string
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

export function readingMinutes(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 220))
}

export function extractFaqs(content: string): ArticleFaq[] {
  const pattern = /#{2,6}\s*Q:\s*(.+?)\n+\s*(?:\*\*A\*\*:|\*\*A:\*\*|A:)\s*([\s\S]+?)(?=\n#{2,6}\s*Q:|\n##\s|\n---|$)/g
  return Array.from(content.matchAll(pattern))
    .map((match) => ({ question: clean(match[1] ?? ""), answer: clean(match[2] ?? "") }))
    .filter((faq) => faq.question && faq.answer)
}
