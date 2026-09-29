import Link from "next/link"

import { ArticleCard, PlatformBadges } from "@/components/mc/article-card"
import { GuideArt } from "@/components/mc/guide-art"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { getArticles, GUIDE_CATEGORIES, guideStepCount, sortGuides, type Article } from "@/lib/articles"
import { cn } from "@/lib/utils"
import { buildBreadcrumbSchema, buildItemListSchema, buildWebPageSchema, pageMetadata } from "@/lib/seo"

const seo = {
  title: "How-To Guides: Instagram & Messenger Chat Marketing",
  description: "Step-by-step chat marketing guides for Instagram and Facebook Messenger, with screenshots from the app: comment-to-DM, story replies, leads and more.",
  path: "/how-to",
}

export const metadata = pageMetadata(seo)

/** The first guide, two columns wide: the drawing beside the title on ink. */
function FeaturedGuide({ guide }: { guide: Article }) {
  return (
    <Link
      href={`/how-to/${guide.slug}`}
      className="group grid overflow-hidden rounded-[20px] bg-ink text-white shadow-[0_2px_24px_-8px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.28)] sm:col-span-2 lg:grid-cols-[1.1fr_1fr] xl:rounded-[1.4vw]"
    >
      <div className="flex items-center" style={{ backgroundColor: guide.color }}>
        <GuideArt name={guide.art} color={guide.color} className="w-full" />
      </div>
      <div className="flex flex-col justify-center gap-5 p-7 sm:p-9 xl:p-[2.4vw]">
        <p className="mc-label text-yellow">Start here</p>
        <p className="font-display text-[2rem] font-black leading-[0.95] tracking-[-0.03em] xl:text-[clamp(2rem,2.4vw,2.875rem)]">
          <span className="text-white/55">How to </span>
          {guide.title}
        </p>
        <p className="text-[1rem] leading-snug text-white/75 xl:text-[clamp(1rem,1.05vw,1.25rem)]">{guide.description}</p>
        <div className="mt-2 flex items-center justify-between gap-4">
          <PlatformBadges platform={guide.platform} />
          <span className="mc-label-sm flex items-center gap-2">
            {guideStepCount(guide)} steps
            <svg aria-hidden viewBox="0 0 20 12" className="h-3 w-5 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function HowToPage() {
  const guides = sortGuides(getArticles("guides"))
  const first = guides[0]
  const categories = GUIDE_CATEGORIES.map((category) => ({
    ...category,
    guides: guides.filter((guide) => guide.category === category.id),
  })).filter((category) => category.guides.length)

  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema(seo),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "How To Guides", href: "/how-to" },
          ]),
          buildItemListSchema({ name: "How to guides", items: guides.map((g) => ({ name: g.title, description: g.description, href: `/how-to/${g.slug}` })) }),
        ]}
      />
      <section data-nav="dark" className="bg-white px-5 pb-14 pt-32 text-center lg:pb-[4vw] lg:pt-[9.5vw]">
        <p className="mc-label text-mute">{guides.length} guides · screenshots from the app</p>
        <h1 className="mc-h1 mt-6 lg:mt-[1.6vw]">How to guides</h1>
        <p className="mc-sub mx-auto mt-6 max-w-[32rem] lg:mt-[2vw] lg:max-w-[36vw]">Step-by-step setups for the automations people use most, from your first connected account to a full inbox.</p>
        <nav aria-label="Guide topics" className="mx-auto mt-10 flex max-w-[60rem] flex-wrap justify-center gap-2 lg:mt-[3vw]">
          {GUIDE_CATEGORIES.filter((category) => guides.some((guide) => guide.category === category.id)).map((category) => (
            <Link key={category.id} href={`#${category.id}`} className="mc-label rounded-full border border-line px-5 py-3 transition-colors hover:border-ink hover:bg-ink hover:text-white">
              {category.label}
            </Link>
          ))}
        </nav>
      </section>

      <div className="bg-white px-5 pb-32 sm:px-10 lg:pb-[10vw]">
        {categories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={cn("mx-auto max-w-[1390px] scroll-mt-24 xl:w-[77.8vw] xl:max-w-none", index === 0 ? "mt-4" : "mt-24 lg:mt-[6.5vw]")}
          >
            <div className="flex items-end justify-between gap-6 border-b border-line pb-5 lg:pb-[1.2vw]">
              <h2 className="mc-h4">{category.label}</h2>
              <p className="mc-label-sm text-mute">{category.guides.length} {category.guides.length === 1 ? "guide" : "guides"}</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[2.2vw] lg:grid-cols-3 xl:gap-[1.4vw]">
              {category.guides.map((guide) =>
                guide === first ? (
                  <FeaturedGuide key={guide.slug} guide={guide} />
                ) : (
                  <ArticleCard key={guide.slug} article={guide} prefix="How to" steps={guideStepCount(guide)} />
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
