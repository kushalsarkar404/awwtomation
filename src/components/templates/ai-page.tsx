import { AiBeforeAfter, AiChannels, AiFeatureSlides, AiKeyBand, AiSteps, AiTriptych } from "@/components/mc/ai/bands"
import { AiHero } from "@/components/mc/ai/hero"
import { AiMcp } from "@/components/mc/ai/mcp"
import { Faq } from "@/components/mc/sections/faq"
import { SeoJsonLd } from "@/components/seo/json-ld"
import type { MarketingPage } from "@/content/mc-types"
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/seo"

/**
 * The AI page runs on its own dark layout rather than the shared ManyChat
 * product template: near-black throughout, bold display headings and a
 * feature carousel, with the MCP server as a section of its own.
 *
 * It reads the same `MarketingPage` content the other product pages do, so SEO,
 * llms.txt and the content tests keep working unchanged.
 */
export function AiPageView({ page }: { page: MarketingPage }) {
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
        ]}
      />

      <AiHero page={page} />
      <AiTriptych page={page} />
      <AiFeatureSlides page={page} />
      <AiMcp page={page} />
      <AiKeyBand page={page} />
      <AiChannels page={page} />
      <AiBeforeAfter page={page} />
      <AiSteps page={page} />
      <Faq faqs={page.faqs} spot={page.theme.spot} />
    </>
  )
}
