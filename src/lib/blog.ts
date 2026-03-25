import fs from "fs"
import path from "path"
import matter from "gray-matter"

import { getPrimaryServiceForPost } from "@/lib/seo"

const postsDirectory = path.join(process.cwd(), "content/blog")

const blogKeywordOverrides: Record<string, string[]> = {
  "age-of-automation-how-ai-became-essential": [
    "age of automation",
    "business automation",
    "workflow automation",
    "ai automation",
    "process automation",
  ],
  "ai-video-generator-creators-guide": [
    "ai video generator",
    "best ai video generator",
    "video content automation",
    "content creation tools",
    "ai video tools",
  ],
  "ai-voice-generator-guide-for-realistic-ai-voice": [
    "ai voice generator",
    "realistic ai voice",
    "text to speech tools",
    "ai voice tools",
    "content creation automation",
  ],
  "best-live-chat-software-for-businesses": [
    "best live chat software",
    "live chat software for businesses",
    "customer support software",
    "live chat platforms",
    "chatbot tools",
  ],
  "best-seo-tools-to-supercharge-audience-growth": [
    "best seo tools",
    "seo tools",
    "search engine optimization software",
    "seo automation tools",
    "audience growth tools",
  ],
  "crm-integration-ultimate-guide-to-unify-business-operations": [
    "crm integration",
    "crm integration guide",
    "crm automation",
    "business operations integration",
    "crm data sync",
  ],
  "go-high-level-crm-automation-guide": [
    "go high level crm automation",
    "highlevel crm automation",
    "crm automation workflows",
    "lead nurturing automation",
    "crm workflow automation",
  ],
  "low-code-vs-no-code-automation-business-guide": [
    "low code vs no code automation",
    "no code automation",
    "low code automation",
    "business automation tools",
    "workflow automation platform",
  ],
  "make-vs-n8n-automation-platform-comparison": [
    "make vs n8n",
    "n8n vs make",
    "automation platform comparison",
    "workflow automation tools",
    "no code automation",
  ],
  "small-business-workflow-automation-n8n-make-guide": [
    "small business workflow automation",
    "workflow automation for small business",
    "n8n automation",
    "make automation",
    "business process automation",
  ],
  "top-ai-image-generators-for-content-creation": [
    "ai image generator",
    "best ai image generator",
    "content creation tools",
    "ai design tools",
    "marketing content automation",
  ],
  "top-crm-tool": [
    "best crm tools",
    "crm software for business",
    "sales crm tools",
    "customer relationship management software",
    "crm automation",
  ],
  "top-project-management-tool": [
    "best project management tools",
    "project management software",
    "team collaboration tools",
    "workflow management software",
    "productivity tools",
  ],
  "what-is-agentic-ai-complete-guide": [
    "what is agentic ai",
    "ai agents",
    "agentic ai guide",
    "autonomous ai agents",
    "ai workflow automation",
  ],
  "what-is-rpa-robotic-process-automation-guide": [
    "what is rpa",
    "robotic process automation",
    "business process automation",
    "rpa guide",
    "workflow automation",
  ],
  "why-crm-tools-are-essential-for-business": [
    "why crm tools are essential",
    "crm for business growth",
    "customer relationship management",
    "crm benefits",
    "crm automation",
  ],
  "why-link-building-cant-be-fully-automated": [
    "why link building cant be automated",
    "link building automation",
    "seo link building",
    "ai in seo",
    "manual link building",
  ],
}

export interface BlogPost {
  slug: string
  content: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
  readMore: string[]
  keywords: string[]
  noindex: boolean
}

export interface BlogFaq {
  question: string
  answer: string
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)))
}

function inferKeywords(slug: string, title: string) {
  const haystack = `${slug} ${title}`.toLowerCase()
  const inferred = new Set<string>(blogKeywordOverrides[slug] ?? [])

  inferred.add(slug.replace(/-/g, " "))

  if (/email/.test(haystack)) {
    inferred.add("email marketing automation")
  }
  if (/crm|lead/.test(haystack)) {
    inferred.add("crm automation")
  }
  if (/seo|search|link building/.test(haystack)) {
    inferred.add("seo automation")
  }
  if (/social|reddit|instagram|tiktok|linkedin|youtube/.test(haystack)) {
    inferred.add("social media automation")
  }
  if (/support|chat/.test(haystack)) {
    inferred.add("customer support automation")
  }
  if (/automation|workflow|rpa/.test(haystack)) {
    inferred.add("workflow automation")
  }

  return Array.from(inferred).slice(0, 6)
}

function buildExcerpt(content: string, fallbackTitle: string) {
  const clean = cleanMarkdownText(content)
  if (!clean) {
    return fallbackTitle
  }

  if (clean.length <= 180) {
    return clean
  }

  return `${clean.slice(0, 177).replace(/\s+\S*$/, "")}...`
}

function parsePost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "")
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const title = typeof data.title === "string" ? data.title : ""
  const frontmatterKeywords = Array.isArray(data.keywords)
    ? data.keywords.filter((item): item is string => typeof item === "string")
    : []

  return {
    slug,
    content,
    title,
    date: typeof data.date === "string" ? data.date : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : buildExcerpt(content, title),
    coverImage: typeof data.coverImage === "string" ? data.coverImage : undefined,
    readMore: uniqueStrings(
      Array.isArray(data.readMore) ? data.readMore.filter((item): item is string => typeof item === "string") : [],
    ),
    keywords: uniqueStrings([...frontmatterKeywords, ...inferKeywords(slug, title)]),
    noindex: Boolean(data.noindex),
  }
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => parsePost(fileName))
}

export function getIndexablePostsData() {
  return getSortedPostsData().filter((post) => !post.noindex)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return parsePost(`${slug}.md`)
  } catch (error) {
    console.log(error)
    return null
  }
}

export function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

function cleanMarkdownText(value: string) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function extractFaqsFromMarkdown(content: string): BlogFaq[] {
  const faqPattern =
    /#{2,6}\s*Q:\s*(.+?)\n+\s*(?:\*\*A\*\*:|\*\*A:\*\*|\*\*A\*\*|A:)\s*([\s\S]+?)(?=\n#{2,6}\s*Q:|\n##\s|\n---|\n$)/gm

  const faqs = Array.from(content.matchAll(faqPattern)).map((match) => ({
    question: cleanMarkdownText(match[1] ?? ""),
    answer: cleanMarkdownText(match[2] ?? ""),
  }))

  return faqs.filter((faq) => faq.question && faq.answer)
}

function buildKeywordSet(post: BlogPost) {
  return new Set(
    cleanMarkdownText([post.title, post.slug.replace(/-/g, " "), ...post.keywords].join(" "))
      .toLowerCase()
      .split(/\s+/)
      .filter((token) => token.length > 2),
  )
}

export function getRelatedPosts(post: BlogPost, limit = 4) {
  const sourceService = getPrimaryServiceForPost(post)
  const sourceKeywordSet = buildKeywordSet(post)

  return getIndexablePostsData()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const candidateService = getPrimaryServiceForPost(candidate)
      const candidateKeywordSet = buildKeywordSet(candidate)
      let score = 0

      if (post.readMore.includes(candidate.slug)) {
        score += 100
      }

      if (candidate.readMore.includes(post.slug)) {
        score += 20
      }

      if (sourceService && candidateService?.key === sourceService.key) {
        score += 35
      }

      for (const token of sourceKeywordSet) {
        if (candidateKeywordSet.has(token)) {
          score += 4
        }
      }

      return { candidate, score }
    })
    .filter(({ score }) => score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score
      }

      return new Date(right.candidate.date).getTime() - new Date(left.candidate.date).getTime()
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}
