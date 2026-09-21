import { BecauseItWorks, FeatureRows, SeenThis, TestimonialRail } from "@/components/mc/landing/body"
import { ManychatComparison, NepalPricing } from "@/components/mc/landing/extras"
import { Finale } from "@/components/mc/landing/finale"
import { LandingHero } from "@/components/mc/landing/hero"
import { CascadeSteps } from "@/components/mc/landing/steps"
import { LandingFooter } from "@/components/mc/landing-footer"
import { Faq } from "@/components/mc/sections/faq"
import { SeoJsonLd } from "@/components/seo/json-ld"
import type { UseCasePage } from "@/content/mc-types"
import { buildBreadcrumbSchema, buildFaqSchema, buildHowToSchema, buildWebPageSchema, pageMetadata } from "@/lib/seo"

export function landingPageMetadata(page: UseCasePage) {
  return pageMetadata({ ...page.seo, path: page.path })
}

export function UseCasePageView({ page }: { page: UseCasePage }) {
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({ ...page.seo, path: page.path }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: page.name, href: page.path },
          ]),
          buildFaqSchema(page.faqs),
          buildHowToSchema({
            name: page.steps.title,
            description: page.steps.body,
            steps: page.steps.items.map((step) => ({ name: step.title, text: step.body })),
          }),
        ]}
      />
      <LandingHero page={page} />
      <SeenThis page={page} />
      <BecauseItWorks page={page} />
      {page.extra === "manychat-comparison" ? <ManychatComparison /> : null}
      {page.extra === "nepal-pricing" ? <NepalPricing /> : null}
      <FeatureRows page={page} />
      <TestimonialRail title={page.testimonialsTitle} />
      <CascadeSteps page={page} />
      <Finale page={page} />
      <Faq faqs={page.faqs} title="Questions, answered" dark={false} />
      <LandingFooter accent={page.accent} bubbles={page.footerBubbles} />
    </>
  )
}
