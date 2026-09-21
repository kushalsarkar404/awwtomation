import { ArticleCard } from "@/components/mc/article-card"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { getArticles } from "@/lib/articles"
import { buildBreadcrumbSchema, buildItemListSchema, buildWebPageSchema, pageMetadata } from "@/lib/seo"

const seo = {
  title: "How To Guides: Instagram & Messenger Automation",
  description: "Step-by-step guides to Instagram and Facebook automation: send links from comments, collect emails, auto-reply to DMs and more.",
  path: "/how-to",
}

export const metadata = pageMetadata(seo)

export default function HowToPage() {
  const guides = getArticles("guides")
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
      <section data-nav="dark" className="bg-white px-5 pb-20 pt-32 text-center lg:pb-[5vw] lg:pt-[9.5vw]">
        <h1 className="mc-h1">How to guides</h1>
        <p className="mc-sub mx-auto mt-6 max-w-[30rem] lg:mt-[2vw] lg:max-w-[34vw]">Step-by-step setups for the automations people use most.</p>
      </section>
      <section className="bg-white px-5 pb-32 sm:px-10 lg:pb-[10vw]">
        <div className="mx-auto grid max-w-[1390px] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:w-[77.8vw] xl:max-w-none xl:gap-[1.4vw]">
          {guides.map((guide) => (
            <ArticleCard key={guide.slug} article={guide} prefix="How to" />
          ))}
        </div>
      </section>
    </>
  )
}
