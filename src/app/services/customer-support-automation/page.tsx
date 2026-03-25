import { SeoJsonLd } from "@/components/seo/json-ld"
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, buildWebPageSchema, getServiceBreadcrumbs, serviceDefinitions } from "@/lib/seo"
import { sharedMetadata } from "../_shared/metadata"

export const metadata = sharedMetadata["customer-support-automation"]

import CustomerSupportAutomationPage from "./UI"

export default function Page() {
  const service = serviceDefinitions["customer-support-automation"]

  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: service.title,
            description: service.description,
            path: service.href,
          }),
          buildBreadcrumbSchema(getServiceBreadcrumbs(service)),
          buildFaqSchema(service.faqs),
          buildServiceSchema(service),
        ]}
      />
      <CustomerSupportAutomationPage />
    </>
  )
} 
