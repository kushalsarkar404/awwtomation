import { marked } from "marked"
import Link from "next/link"

import { ArticleCard, PlatformBadges } from "@/components/mc/article-card"
import { McButton } from "@/components/mc/button"
import { GuideArt } from "@/components/mc/guide-art"
import { GuideScreenshot } from "@/components/mc/guide-screenshot"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { extractFaqs, GUIDE_CATEGORIES, parseGuide, readingMinutes, type Article, type GuideSection } from "@/lib/articles"
import { SIGNUP_URL } from "@/lib/brand"
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, SITE_NAME } from "@/lib/seo"

const md = (markdown: string) => marked.parse(markdown, { async: false }) as string

/** Plain text of a step's markdown, for the HowTo schema. */
const plain = (markdown: string) =>
  markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim()

function Steps({ section, stepOffset }: { section: GuideSection; stepOffset: number }) {
  return (
    <ol className="mt-12 space-y-20 lg:mt-[3.5vw] lg:space-y-[6vw]">
      {section.steps.map((step, index) => {
        const number = stepOffset + index + 1
        return (
          <li key={step.title} id={`step-${number}`} className="scroll-mt-28">
            <div className="mx-auto flex max-w-[720px] gap-5 px-5 sm:gap-7 lg:max-w-[max(720px,46vw)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink font-display text-[1.25rem] font-black text-white lg:size-[max(2.75rem,3vw)] lg:text-[clamp(1.25rem,1.45vw,1.75rem)]">
                {number}
              </span>
              <div className="min-w-0 pt-1.5 lg:pt-[0.45vw]">
                <h3 className="text-[1.5rem] font-bold leading-[1.1] tracking-[-0.015em] lg:text-[clamp(1.5rem,1.75vw,2.125rem)]">{step.title}</h3>
                {step.body ? <div className="prose-content prose-step mt-3" dangerouslySetInnerHTML={{ __html: md(step.body) }} /> : null}
              </div>
            </div>
            {step.images.length ? (
              <div className="mx-auto mt-8 max-w-[1040px] space-y-6 px-5 lg:mt-[2.4vw] lg:max-w-[max(1040px,66vw)]">
                {step.images.map((image, imageIndex) => (
                  <GuideScreenshot key={image.src} image={image} priority={number === 1 && imageIndex === 0} />
                ))}
              </div>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

function Section({ section, stepOffset }: { section: GuideSection; stepOffset: number }) {
  if (/^what you need/i.test(section.heading)) {
    return (
      <section className="mx-auto mt-14 max-w-[720px] px-5 lg:max-w-[max(720px,46vw)]">
        <div className="rounded-[24px] bg-fog px-7 py-7 sm:px-9 lg:rounded-[1.6vw]">
          <p className="mc-label text-mute">{section.heading}</p>
          <div className="prose-content prose-needs mt-4" dangerouslySetInnerHTML={{ __html: md(section.body) }} />
        </div>
      </section>
    )
  }
  return (
    <section className="mt-24 lg:mt-[7vw]">
      <div className="mx-auto max-w-[720px] px-5 lg:max-w-[max(720px,46vw)]">
        <h2 className="mc-h4">{section.heading}</h2>
        {section.body ? <div className="prose-content mt-6" dangerouslySetInnerHTML={{ __html: md(section.body) }} /> : null}
      </div>
      {section.steps.length ? <Steps section={section} stepOffset={stepOffset} /> : null}
    </section>
  )
}

export async function ArticleView({ article, backHref, backLabel, related }: { article: Article; backHref: string; backLabel: string; related: Article[] }) {
  const guide = parseGuide(article.content)
  const faqs = extractFaqs(article.content)
  const path = `${backHref}/${article.slug}`
  const steps = guide.sections.flatMap((section) => section.steps)
  const category = GUIDE_CATEGORIES.find((c) => c.id === article.category)
  const offsets = guide.sections.map((_, index) => guide.sections.slice(0, index).reduce((sum, s) => sum + s.steps.length, 0))

  return (
    <>
      <SeoJsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: article.title,
            description: article.description,
            datePublished: article.date || undefined,
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Organization", name: SITE_NAME },
            ...(steps[0]?.images[0] ? { image: absoluteUrl(steps[0].images[0].src) } : {}),
            step: steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step.title,
              text: plain(step.body),
              url: absoluteUrl(`${path}#step-${index + 1}`),
              ...(step.images[0] ? { image: absoluteUrl(step.images[0].src) } : {}),
            })),
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
        <header data-nav="dark" className="bg-white px-5 pb-12 pt-32 text-center sm:pt-40 lg:pb-[3.5vw] lg:pt-[10vw]">
          <nav aria-label="Breadcrumb" className="mc-label flex items-center justify-center gap-2 text-mute">
            <Link href={backHref} className="hover:text-ink">
              {backLabel}
            </Link>
            {category ? (
              <>
                <span aria-hidden>/</span>
                <Link href={`${backHref}#${category.id}`} className="hover:text-ink">
                  {category.label}
                </Link>
              </>
            ) : null}
          </nav>
          <h1 className="mx-auto mt-6 max-w-[56rem] font-display text-[clamp(2.5rem,4.4vw,5.25rem)] font-black leading-[0.9] tracking-[-0.035em] lg:mt-[2vw] lg:max-w-[62vw]">
            <span className="text-mute">How to </span>
            {article.title}
          </h1>
          <p className="mc-sub mx-auto mt-6 max-w-[38rem] lg:mt-[2vw] lg:max-w-[40vw]">{article.description}</p>
          <div className="mc-label-sm mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-mute lg:mt-[2.4vw]">
            <PlatformBadges platform={article.platform} />
            {steps.length ? <span>{steps.length} steps</span> : null}
            <span>{readingMinutes(article.content)} min read</span>
          </div>
        </header>

        <div className="px-5">
          <GuideArt name={article.art} color={article.color} className="mx-auto max-w-[1100px] rounded-[28px] lg:max-w-[68vw] lg:rounded-[2vw]" />
        </div>

        <div className="pb-24 pt-16 lg:pb-[7vw] lg:pt-[5vw]">
          {guide.intro ? (
            <div className="mx-auto max-w-[720px] px-5 lg:max-w-[max(720px,46vw)]">
              <div className="prose-content prose-intro" dangerouslySetInnerHTML={{ __html: md(guide.intro) }} />
            </div>
          ) : null}

          {guide.sections.map((section, index) => (
            <Section key={section.heading} section={section} stepOffset={offsets[index]} />
          ))}

          {faqs.length ? (
            <section className="mx-auto mt-24 max-w-[720px] px-5 lg:mt-[7vw] lg:max-w-[max(720px,46vw)]">
              <h2 className="mc-h4">Questions</h2>
              <div className="mt-6 border-t border-line">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="text-[1.125rem] font-semibold leading-snug lg:text-[clamp(1.125rem,1.2vw,1.375rem)]">{faq.question}</span>
                      <svg viewBox="0 0 18 10" className="h-2.5 w-[18px] shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden>
                        <path d="M1 1l8 8 8-8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </summary>
                    <p className="pb-6 pr-10 text-[1.0625rem] leading-relaxed text-mute lg:text-[clamp(1.0625rem,1.1vw,1.25rem)]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mx-auto mt-24 max-w-[720px] px-5 lg:mt-[7vw] lg:max-w-[max(720px,46vw)]">
            <div className="mc-grid flex flex-col items-start gap-6 overflow-hidden rounded-[28px] bg-yellow px-8 py-10 sm:flex-row sm:items-center sm:justify-between lg:rounded-[2vw] lg:px-[3vw] lg:py-[2.8vw]">
              <div>
                <p className="mc-h4">Try it on your account</p>
                <p className="mt-3 text-[1.0625rem] leading-snug">Build it now. Nothing is sent until you pick a plan.</p>
              </div>
              <McButton href={SIGNUP_URL} variant="black" size="lg">
                Get started
              </McButton>
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="bg-fog px-5 py-24 sm:px-10 lg:py-[7vw]">
          <div className="mx-auto max-w-[1390px] xl:w-[77.8vw] xl:max-w-none">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="mc-h3">More guides</h2>
              <Link href={backHref} className="mc-label underline underline-offset-4">
                All guides
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[3vw] lg:grid-cols-3 xl:gap-[1.4vw]">
              {related.map((guide) => (
                <ArticleCard key={guide.slug} article={guide} prefix="How to" steps={parseGuide(guide.content).sections.reduce((sum, s) => sum + s.steps.length, 0)} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
