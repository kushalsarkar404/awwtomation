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
