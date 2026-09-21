import { marked } from "marked"
import Link from "next/link"

import { McButton } from "@/components/mc/button"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { extractFaqs, readingMinutes, type Article } from "@/lib/articles"
import { SIGNUP_URL } from "@/lib/brand"
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, SITE_NAME } from "@/lib/seo"

export async function ArticleView({ article, backHref, backLabel }: { article: Article; backHref: string; backLabel: string }) {
  const html = await marked.parse(article.content)
  const faqs = extractFaqs(article.content)
  const path = `${backHref}/${article.slug}`

  return (
    <>
      <SeoJsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": article.collection === "guides" ? "HowTo" : "BlogPosting",
            ...(article.collection === "guides" ? { name: article.title } : { headline: article.title }),
            description: article.description,
            datePublished: article.date || undefined,
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Organization", name: SITE_NAME },
          },
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: backLabel, href: backHref },
            { name: article.title, href: path },
          ]),
          ...(faqs.length ? [buildFaqSchema(faqs)] : []),
        ]}
      />
      <article>
        <header data-nav="dark" className="bg-white px-5 pb-12 pt-32 text-center sm:pt-40">
          <Link href={backHref} className="mc-label text-mute hover:text-ink">
            ← {backLabel}
          </Link>
          <h1 className="mc-h2 mx-auto mt-6 max-w-[52rem]">{article.title}</h1>
          <p className="mc-sub mx-auto mt-6 max-w-[36rem]">{article.description}</p>
          <p className="mc-label-sm mt-6 text-mute">{readingMinutes(article.content)} min read</p>
        </header>
        <div className="mc-grid mx-auto aspect-[21/8] max-w-[1100px]" style={{ backgroundColor: article.color }} aria-hidden />
        <div className="prose-content mx-auto max-w-[720px] px-5 py-16" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="mx-auto mb-28 flex max-w-[720px] flex-col items-start gap-5 rounded-[28px] bg-yellow px-8 py-10 sm:mx-auto">
          <p className="mc-h4">Try it on your account</p>
          <McButton href={SIGNUP_URL} variant="black" size="lg">
            Start for free
          </McButton>
        </div>
      </article>
    </>
  )
}
