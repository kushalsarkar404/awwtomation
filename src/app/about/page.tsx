import { SeoJsonLd } from "@/components/seo/json-ld"
import { aboutPageSeo, buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/seo"
import { sharedMetadata } from "../services/_shared/metadata"
import AboutPage from "./UI"

export const metadata = sharedMetadata["about"]

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: aboutPageSeo.title,
            description: aboutPageSeo.description,
            path: "/about",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
          buildFaqSchema(aboutPageSeo.faqs),
        ]}
      />
      <AboutPage />
    </>
  )
}
