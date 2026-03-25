import type { Metadata } from "next"
import HomePageClient from "./home-page-client"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { sharedMetadata } from "./services/_shared/metadata"
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, homePageSeo } from "@/lib/seo"

export const metadata: Metadata = sharedMetadata["homepage"]

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: homePageSeo.title,
            description: homePageSeo.description,
            path: "/",
          }),
          buildBreadcrumbSchema([{ name: "Home", href: "/" }]),
          buildFaqSchema(homePageSeo.faqs),
        ]}
      />
      <HomePageClient />
    </>
  )
}
