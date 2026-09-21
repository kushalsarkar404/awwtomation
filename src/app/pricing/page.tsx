import { ComparisonTable } from "@/components/mc/pricing/comparison"
import { PlanQuiz } from "@/components/mc/pricing/plan-quiz"
import { PricingPlans } from "@/components/mc/pricing/plans"
import { Faq } from "@/components/mc/sections/faq"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { pricingSeo } from "@/content/bespoke"
import { NPR_PER_USD } from "@/lib/pricing"
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, pageMetadata } from "@/lib/seo"

const seo = { title: pricingSeo.title, description: pricingSeo.description, path: pricingSeo.path }

export const metadata = pageMetadata(seo)

export default function PricingPage() {
  const faqs = pricingSeo.faqs ?? []
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema(seo),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pricing", href: "/pricing" },
          ]),
          buildFaqSchema(faqs),
        ]}
      />

      <section data-nav="dark" className="bg-white px-5 pb-16 pt-32 text-center lg:pb-[4vw] lg:pt-[9.5vw]">
        <h1 className="mc-h1 mx-auto max-w-[28rem] lg:max-w-[66vw]">Plans for every stage of growth</h1>
        <p className="mc-sub mx-auto mt-6 max-w-[30rem] lg:mt-[2vw] lg:max-w-[34vw]">Start free. Upgrade when automation pays for itself.</p>
      </section>

      <section className="bg-white px-5 pb-8 sm:px-10">
        <PricingPlans />
        <p className="mc-label-sm mt-6 text-center text-mute">Prices in NPR at Rs {NPR_PER_USD}/USD · charged in US dollars</p>
      </section>

      <section className="bg-white px-5 pb-10 pt-24 text-center lg:pb-[3.3vw] lg:pt-[9vw]">
        <h2 className="mc-h2">Compare plans</h2>
      </section>
      <ComparisonTable />

      <Faq faqs={faqs} spot="#fb0df7" />
      <PlanQuiz />
    </>
  )
}
