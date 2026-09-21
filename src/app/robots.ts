import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/seo"

/**
 * Note what is *not* here: the retired agency URLs are not disallowed. They
 * return 410, and Google has to be able to crawl them to see that. Blocking
 * them in robots.txt would keep them in the index far longer.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
