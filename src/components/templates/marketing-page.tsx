import { Automatically } from "@/components/mc/sections/automatically"
import { BeforeAfter } from "@/components/mc/sections/before-after"
import { BigWord } from "@/components/mc/sections/big-word"
import { Channels } from "@/components/mc/sections/channels"
import { Faq } from "@/components/mc/sections/faq"
import { FeatureTabs } from "@/components/mc/sections/feature-tabs"
import { MarketingHero } from "@/components/mc/sections/hero"
import { SectionIntro } from "@/components/mc/sections/intro"
import { ProofStrip } from "@/components/mc/sections/proof-strip"
import { SeeItInAction } from "@/components/mc/sections/see-it"
import { Steps } from "@/components/mc/sections/steps"
import { SeoJsonLd } from "@/components/seo/json-ld"
import type { MarketingPage } from "@/content/mc-types"
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, pageMetadata } from "@/lib/seo"

export function marketingMetadata(page: MarketingPage) {
  return pageMetadata({ ...page.seo, path: page.path })
}

/**
 * Home, product and business-type pages share this layout. The home page
 * runs the big-word/channels block before the before-and-after; product pages
 * run it just before the FAQ, the same order as the ManyChat pages.
 */
export function MarketingPageView({ page }: { page: MarketingPage }) {
  const isHome = page.path === "/"
  const crumbs = isHome ? [{ name: "Home", href: "/" }] : [{ name: "Home", href: "/" }, { name: page.name, href: page.path }]

  const bigWord = (
    <>
      <BigWord page={page} />
      <Channels page={page} />
    </>
  )

  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema({ ...page.seo, path: page.path }),
          buildBreadcrumbSchema(crumbs),
          buildFaqSchema(page.faqs),
        ]}
      />

      <MarketingHero page={page} />
      <Automatically page={page} />
      <ProofStrip label={page.proof} />

      <section className="bg-white pb-20 pt-28 lg:pb-[6.55vw] lg:pt-[11.8vw]">
        <SectionIntro icon={page.intro.icon} color={page.theme.spot} title={page.intro.title} body={page.intro.body} />
      </section>
      <FeatureTabs page={page} />

      {isHome ? bigWord : null}

      <section className="bg-white pb-10 pt-28 lg:pb-0 lg:pt-[11.8vw]">
        <SectionIntro icon={page.beforeAfter.icon} color={page.theme.spot} title={page.beforeAfter.title} body={page.beforeAfter.body} />
      </section>
      <BeforeAfter page={page} />

      <section className="bg-white pb-12 pt-20 lg:pb-[4vw] lg:pt-[2.25vw]">
        <SectionIntro icon={page.seeIt.icon} color={page.theme.spot} title={page.seeIt.title} body={page.seeIt.body} />
      </section>
      <SeeItInAction page={page} />
      <div className="-mt-px bg-white pt-16 lg:pt-[5vw]">
        <Steps page={page} compactTop />
      </div>

      {isHome ? null : bigWord}

      <Faq faqs={page.faqs} spot={page.theme.spot} />
    </>
  )
}
