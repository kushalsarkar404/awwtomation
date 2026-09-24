import type { MetadataRoute } from "next"

import { getArticles } from "@/lib/articles"
import { allSitePaths } from "@/lib/nav"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = allSitePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }))
  const articles = [
    ...getArticles("blog").map((article) => `/blog/${article.slug}`),
    ...getArticles("guides").map((article) => `/how-to/${article.slug}`),
  ].map((path) => ({ url: absoluteUrl(path), lastModified: new Date() }))

  return [...staticPages, ...articles]
}
