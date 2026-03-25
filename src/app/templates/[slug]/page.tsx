
import TemplateDetailPage from "./UI"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { getTemplateBySlug } from "@/lib/template-utils"
import { absoluteUrl, buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const template = getTemplateBySlug(slug)

  if (!template) {
    return {
      title: "Template Not Found",
      description: "The automation template you are looking for does not exist.",
    }
  }

  const path = `/templates/${slug}`
  const canonicalUrl = absoluteUrl(path)
  const keywords = Array.from(
    new Set([
      template.title.toLowerCase(),
      `${template.category.toLowerCase()} automation template`,
      "free automation template",
      "n8n template",
      ...template.tags.map((tag) => `${tag.toLowerCase()} automation template`),
    ]),
  )

  return {
    title: `${template.title} - Free Automation Template`,
    description: template.metaDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${template.title} - Free Automation Template`,
      description: template.metaDescription,
      url: canonicalUrl,
      images: [
        {
          url: absoluteUrl(template.thumbnail),
          alt: template.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.title} - Free Automation Template`,
      description: template.metaDescription,
      images: [absoluteUrl(template.thumbnail)],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const template = getTemplateBySlug(slug)

  const templateSchema = template
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: template.title,
        description: template.metaDescription,
        image: absoluteUrl(template.thumbnail),
        category: template.category,
        brand: {
          "@type": "Organization",
          name: "Awwtomation",
        },
        offers: {
          "@type": "Offer",
          price: template.currentPrice,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl(`/templates/${slug}`),
        },
      }
    : null

  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: template ? `${template.title} - Free Automation Template` : "Template Not Found",
            description:
              template?.metaDescription ?? "The automation template you are looking for does not exist.",
            path: `/templates/${slug}`,
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Templates", href: "/templates" },
            { name: template?.title ?? "Template Not Found", href: `/templates/${slug}` },
          ]),
          ...(templateSchema ? [templateSchema] : []),
        ]}
      />
      <TemplateDetailPage slug={slug} />
    </>
  )
}
