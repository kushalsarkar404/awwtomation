import { notFound } from "next/navigation"

import { ArticleView } from "@/components/mc/article-page"
import { getArticle, getArticles } from "@/lib/articles"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return getArticles("guides").map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getArticle("guides", slug)
  if (!guide) return {}
  return pageMetadata({ title: guide.title, description: guide.description, path: `/how-to/${guide.slug}` })
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getArticle("guides", slug)
  if (!guide) notFound()
  return <ArticleView article={guide} backHref="/how-to" backLabel="How To Guides" />
}
