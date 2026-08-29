import type { MetadataRoute } from "next"

import { automationTemplates } from "@/data/automation-templates"
import { getIndexablePostsData } from "@/lib/blog"
import { serviceDefinitions, SITE_URL } from "@/lib/seo"

const staticPaths = [
  "/",
  "/about",
  "/services",
  ...Object.values(serviceDefinitions).map((service) => service.href),
  "/templates",
  "/blog",
  "/legal/privacy-policy",
  "/legal/terms-and-conditions",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.7,
  }))

  const templateEntries: MetadataRoute.Sitemap = automationTemplates.map((template) => ({
    url: `${SITE_URL}/templates/${template.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = getIndexablePostsData().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date || undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticEntries, ...templateEntries, ...blogEntries]
}
