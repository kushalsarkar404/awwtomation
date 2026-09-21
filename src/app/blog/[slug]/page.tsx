import { notFound } from "next/navigation"

import { ArticleView } from "@/components/mc/article-page"
import { getArticle, getArticles } from "@/lib/articles"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return getArticles("blog").map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getArticle("blog", slug)
  if (!post) return {}
  return {
    ...pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` }),
    robots: { index: false, follow: false },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getArticle("blog", slug)
  if (!post) notFound()
  return <ArticleView article={post} backHref="/blog" backLabel="Blog" />
}
