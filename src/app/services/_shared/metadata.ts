import type { Metadata } from "next"

import {
  aboutPageSeo,
  absoluteUrl,
  blogIndexSeo,
  homePageSeo,
  privacyPageSeo,
  serviceDefinitions,
  SITE_NAME,
  templateLibrarySeo,
  termsPageSeo,
  type ServiceKey,
  servicesHubSeo,
} from "@/lib/seo"

const defaultRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
}

const serviceImages: Record<ServiceKey, string> = {
  "blog-automation": "/images/blog-automation.png",
  "crm-automation": "/images/crm-automation.png",
  "customer-support-automation": "/awwtomation-og.webp",
  "email-marketing-automation": "/images/email-marketing-automation.png",
  "seo-automation": "/images/seo-automation.png",
  "social-media-automation": "/images/social-media-automation.png",
}

function buildMetadata({
  title,
  description,
  keywords,
  path,
  imagePath = "/awwtomation-og.webp",
  type = "website",
}: {
  title: string
  description: string
  keywords: string[]
  path: string
  imagePath?: string
  type?: "website" | "article"
}): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(imagePath)
  const markdownUrl = absoluteUrl(path === "/" ? "/index.md" : `${path}.md`)

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: defaultRobots,
    alternates: {
      canonical,
      types: {
        "text/markdown": markdownUrl,
      },
    },
    icons: {
      icon: "/favicon.png",
    },
  }
}

const serviceMetadata = Object.fromEntries(
  Object.values(serviceDefinitions).map((service) => [
    service.key,
    buildMetadata({
      title: service.title,
      description: service.description,
      keywords: [service.primaryKeyword, ...service.secondaryKeywords],
      path: service.href,
      imagePath: serviceImages[service.key],
    }),
  ]),
) as Record<ServiceKey, Metadata>

export const sharedMetadata: Record<string, Metadata> = {
  homepage: buildMetadata({
    title: homePageSeo.title,
    description: homePageSeo.description,
    keywords: homePageSeo.keywords,
    path: "/",
  }),
  blog: buildMetadata({
    title: blogIndexSeo.title,
    description: blogIndexSeo.description,
    keywords: blogIndexSeo.keywords,
    path: "/blog",
    imagePath: "/images/blog-automation.png",
  }),
  services: buildMetadata({
    title: servicesHubSeo.title,
    description: servicesHubSeo.description,
    keywords: servicesHubSeo.keywords,
    path: "/services",
    imagePath: "/awwtomation-team.webp",
  }),
  ...serviceMetadata,
  about: buildMetadata({
    title: aboutPageSeo.title,
    description: aboutPageSeo.description,
    keywords: aboutPageSeo.keywords,
    path: "/about",
    imagePath: "/awwtomation-team.webp",
  }),
  templates: buildMetadata({
    title: templateLibrarySeo.title,
    description: templateLibrarySeo.description,
    keywords: templateLibrarySeo.keywords,
    path: "/templates",
    imagePath: "/automated-seo-report-template.png",
  }),
  "privacy-policy": buildMetadata({
    title: privacyPageSeo.title,
    description: privacyPageSeo.description,
    keywords: privacyPageSeo.keywords,
    path: "/legal/privacy-policy",
    imagePath: "/favicon.png",
  }),
  "terms-and-conditions": buildMetadata({
    title: termsPageSeo.title,
    description: termsPageSeo.description,
    keywords: termsPageSeo.keywords,
    path: "/legal/terms-and-conditions",
    imagePath: "/favicon.png",
  }),
}
