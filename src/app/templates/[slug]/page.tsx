
import TemplateDetailPage from "./UI"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { getTemplateBySlug } from "@/lib/template-utils"
import { absoluteUrl, buildBreadcrumbSchema, buildWebPageSchema, toMetaDescription, toMetaTitle } from "@/lib/seo"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { automationTemplates } from "@/data/automation-templates"

export function generateStaticParams() {
  return automationTemplates.map((template) => ({ slug: template.slug }))
}

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
  const title = toMetaTitle(`${template.title} | Awwtomation`)
  const description = toMetaDescription(template.metaDescription)
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
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      types: {
        "text/markdown": `${canonicalUrl}.md`,
      },
    },
    openGraph: {
      title,
      description,
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
      title,
      description,
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

  if (!template) {
    notFound()
  }

  const templateSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: template.title,
        description: template.metaDescription,
        image: absoluteUrl(template.thumbnail),
        category: template.category,
        brand: {
          "@id": "https://www.awwtomation.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: template.currentPrice,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl(`/templates/${slug}`),
        },
      }

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
          templateSchema,
        ]}
      />
      <TemplateDetailPage slug={slug} />
    </>
  )
}
