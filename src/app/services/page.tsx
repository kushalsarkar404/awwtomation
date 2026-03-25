import { SeoJsonLd } from "@/components/seo/json-ld"
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
  serviceCards,
  servicesHubSeo,
} from "@/lib/seo"
import { sharedMetadata } from "./_shared/metadata"

export const metadata = sharedMetadata["services"]

import AutomationServicesPage from "./UI"

export default function Page() {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: servicesHubSeo.title,
            description: servicesHubSeo.description,
            path: "/services",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]),
          buildFaqSchema(servicesHubSeo.faqs),
          buildItemListSchema({
            title: "Automation Services",
            path: "/services",
            items: serviceCards.map((card) => ({ name: card.title, href: card.href })),
          }),
        ]}
      />
      <AutomationServicesPage />
    </>
  )
}
