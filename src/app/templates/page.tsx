import { SeoJsonLd } from "@/components/seo/json-ld"
import { automationTemplates } from "@/data/automation-templates"
import { buildBreadcrumbSchema, buildFaqSchema, buildItemListSchema, buildWebPageSchema, templateLibrarySeo } from "@/lib/seo"
import { sharedMetadata } from "../services/_shared/metadata"
import TemplatesPage from "./UI"

export const metadata = sharedMetadata["templates"]

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: templateLibrarySeo.title,
            description: templateLibrarySeo.description,
            path: "/templates",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Templates", href: "/templates" },
          ]),
          buildItemListSchema({
            title: "Free Automation Templates",
            path: "/templates",
            items: automationTemplates.map((template) => ({
              name: template.title,
              href: `/templates/${template.slug}`,
            })),
          }),
          buildFaqSchema(templateLibrarySeo.faqs),
        ]}
      />
      <TemplatesPage />
    </>
  )
}
