import { SeoJsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbSchema, buildWebPageSchema, termsPageSeo } from "@/lib/seo"
import { sharedMetadata } from "../../services/_shared/metadata"
import TermsPage from "./UI"

export const metadata = sharedMetadata["terms-and-conditions"]

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: termsPageSeo.title,
            description: termsPageSeo.description,
            path: "/legal/terms-and-conditions",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Terms and Conditions", href: "/legal/terms-and-conditions" },
          ]),
        ]}
      />
      <TermsPage />
    </>
  )
}
