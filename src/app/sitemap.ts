import type { MetadataRoute } from "next"

import { getArticles } from "@/lib/articles"
import { allSitePaths } from "@/lib/nav"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = allSitePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }))
  const guides = getArticles("guides").map((article) => ({
    url: absoluteUrl(`/how-to/${article.slug}`),
    lastModified: new Date(),
  }))

  return [...staticPages, ...guides]
}
