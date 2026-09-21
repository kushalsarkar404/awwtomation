import { ArticleCard } from "@/components/mc/article-card"
import { McButton } from "@/components/mc/button"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { getArticles } from "@/lib/articles"
import { buildBreadcrumbSchema, buildWebPageSchema, pageMetadata } from "@/lib/seo"

const seo = {
  title: "Instagram Automation Blog",
  description: "Ideas and playbooks for selling, growing and saving time with Instagram and Facebook automation.",
  path: "/blog",
}

export const metadata = pageMetadata(seo)

export default function BlogPage() {
  const posts = getArticles("blog")
  return (
    <>
      <SeoJsonLd
        data={[
          buildWebPageSchema(seo),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
          ]),
        ]}
      />
      <section data-nav="dark" className="bg-white px-5 pb-20 pt-32 text-center lg:pb-[5vw] lg:pt-[9.5vw]">
        <h1 className="mc-h1">Blog</h1>
        <p className="mc-sub mx-auto mt-6 max-w-[30rem] lg:mt-[2vw] lg:max-w-[34vw]">Playbooks for selling and growing in the DMs.</p>
      </section>
      <section className="bg-white px-5 pb-32 sm:px-10">
        {posts.length ? (
          <div className="mx-auto grid max-w-[1390px] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:w-[77.8vw] xl:max-w-none xl:gap-[1.4vw]">
            {posts.map((post) => (
              <ArticleCard key={post.slug} article={post} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 rounded-[28px] bg-sage px-8 py-16 text-center xl:max-w-[46vw] xl:rounded-[2vw] xl:py-[5vw]">
            <p className="mc-h4">First posts are on the way</p>
            <p className="mc-sub">Until then, our step-by-step guides cover the automations people set up first.</p>
            <McButton href="/how-to" variant="black" size="lg">
              Read the guides
            </McButton>
          </div>
        )}
      </section>
    </>
  )
}
