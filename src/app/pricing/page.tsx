import { ComparisonTable } from "@/components/mc/pricing/comparison"
import { PlanQuiz } from "@/components/mc/pricing/plan-quiz"
import { PricingPlans } from "@/components/mc/pricing/plans"
import { Faq } from "@/components/mc/sections/faq"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { pricingSeo } from "@/content/bespoke"
import { BILLING_NOTES } from "@/lib/pricing"
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
        <p className="mc-sub mx-auto mt-6 max-w-[30rem] lg:mt-[2vw] lg:max-w-[34vw]">Every feature on every plan, and no limit on DMs. Choose by how many accounts, contacts and teammates you need.</p>
      </section>

      <section className="bg-white px-5 pb-8 sm:px-10">
        <PricingPlans />
      </section>

      <section className="bg-white px-5 pb-10 pt-24 text-center lg:pb-[3.3vw] lg:pt-[9vw]">
        <h2 className="mc-h2">Compare plans</h2>
      </section>
      <ComparisonTable />

      <section className="bg-white px-5 pb-24 sm:px-10 lg:pb-[8vw]">
        <div className="mx-auto max-w-[1100px] xl:w-[77.8vw] xl:max-w-none">
          <h2 className="mc-h2 text-center">How billing works</h2>
          <ul className="mx-auto mt-10 max-w-[52rem] border-t border-line lg:mt-[3vw]">
            {BILLING_NOTES.map((note) => (
              <li key={note} className="border-b border-line py-4 text-[1rem] leading-relaxed xl:text-[clamp(1rem,1.06vw,1.25rem)]">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq faqs={faqs} spot="#fb0df7" />
      <PlanQuiz />
    </>
  )
}
