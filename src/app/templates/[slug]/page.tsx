

import TemplateDetailPage from "./UI"
import { getTemplateBySlug } from "@/lib/template-utils"
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

  return {
    title: `${template.title} - Free Automation Template`,
    description: template.metaDescription,
    openGraph: {
      title: `${template.title} - Free Automation Template`,
      description: template.metaDescription,
      images: [
        {
          url: template.thumbnail,
          alt: template.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.title} - Free Automation Template`,
      description: template.metaDescription,
      images: [template.thumbnail],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <TemplateDetailPage slug={slug} />
}
