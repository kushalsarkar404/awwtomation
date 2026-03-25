import { SeoJsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbSchema, buildWebPageSchema, privacyPageSeo } from "@/lib/seo"
import { sharedMetadata } from "../../services/_shared/metadata"
import PrivacyPage from "./UI"

export const metadata = sharedMetadata["privacy-policy"]

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: privacyPageSeo.title,
            description: privacyPageSeo.description,
            path: "/legal/privacy-policy",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/legal/privacy-policy" },
          ]),
        ]}
      />
      <PrivacyPage />
    </>
  )
}
