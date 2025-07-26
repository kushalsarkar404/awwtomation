

import TemplateDetailPage from "./UI"
import { getTemplateBySlug } from "@/lib/template-utils"
import type { Metadata } from "next"

interface TemplateDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const template = getTemplateBySlug(params.slug)

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

export default function Page({ params }: TemplateDetailPageProps) {
  return <TemplateDetailPage slug={params.slug} />
}
