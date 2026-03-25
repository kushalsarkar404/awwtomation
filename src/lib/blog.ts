import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  content: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
  readMore: string[]
  keywords: string[]
}

export interface BlogFaq {
  question: string
  answer: string
}

function parsePost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "")
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    title: typeof data.title === "string" ? data.title : "",
    date: typeof data.date === "string" ? data.date : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    coverImage: typeof data.coverImage === "string" ? data.coverImage : undefined,
    readMore: Array.isArray(data.readMore) ? data.readMore.filter((item): item is string => typeof item === "string") : [],
    keywords: Array.isArray(data.keywords) ? data.keywords.filter((item): item is string => typeof item === "string") : [],
  }
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => parsePost(fileName))
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
