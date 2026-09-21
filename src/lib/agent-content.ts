import { bespokePages, type BespokePage } from "@/content/bespoke"
import { marketingPages } from "@/content/marketing"
import type { MarketingPage, UseCasePage } from "@/content/mc-types"
import { manychatAlternativePage, nepalLandingPage } from "@/content/seo-landing-pages"
import { useCasePages } from "@/content/use-case-pages"
import { getArticle, getArticles, type Collection } from "@/lib/articles"
import { brand, SIGNUP_URL } from "@/lib/brand"
import { SITE_URL, type FaqItem } from "@/lib/seo"

/*
 * Markdown versions of every live page for AI crawlers (see proxy.ts), plus
 * /llms.txt and /llms-full.txt. Rendered from the same content objects as the
 * HTML pages.
 */

const landingPages: UseCasePage[] = [...useCasePages, manychatAlternativePage, nepalLandingPage]
const marketingByPath = new Map(marketingPages.map((page) => [page.path, page]))
const landingByPath = new Map(landingPages.map((page) => [page.path, page]))

const absolute = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`)
const mdUrl = (path: string) => (path === "/" ? `${SITE_URL}/index.md` : `${SITE_URL}${path}.md`)

function frontmatter(fields: Record<string, string>) {
  return `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n`
}

function faqMarkdown(faqs: FaqItem[]) {
  return faqs.length ? `\n## Frequently asked questions\n\n${faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n")}\n` : ""
}

function marketingMarkdown(page: MarketingPage) {
  const features = page.features.map((feature) => `### ${feature.title}\n\n${feature.body}`).join("\n\n")
  const flows = page.seeIt.items.map((item) => `- **${item.title}**: ${item.description}`).join("\n")
  const steps = page.steps.items.map((step, index) => `${index + 1}. **${step.title}**: ${step.body}`).join("\n")
  const spotlight = page.spotlight
    ? `\n## ${page.spotlight.title}\n\n${page.spotlight.body}\n\n${page.spotlight.cards
        .map((card) => `- **${card.title}**${card.soon ? " (not built yet)" : ""}: ${card.body}`)
        .join("\n")}\n`
    : ""
  return `${frontmatter({ title: page.seo.title, description: page.seo.description, canonical: absolute(page.path) })}
# ${page.hero.title}

${page.hero.body}

${page.summary}

## ${page.intro.title}

${page.intro.body}

${features}

## ${page.seeIt.title}

${flows}

${spotlight}
## ${page.steps.title}

${steps}
${faqMarkdown(page.faqs)}
---

Start free: ${SIGNUP_URL}
`
}

function landingMarkdown(page: UseCasePage) {
  const rows = page.rows.map((row) => `## ${row.title}\n\n${row.bullets.map((b) => `- **${b.bold}** ${b.rest}`).join("\n")}`).join("\n\n")
  const steps = page.steps.items.map((step, index) => `${index + 1}. **${step.title}**: ${step.body}`).join("\n")
  return `${frontmatter({ title: page.seo.title, description: page.seo.description, canonical: absolute(page.path) })}
# ${page.hero.title}

${page.hero.body}

${page.summary}

${rows}

## ${page.steps.title}

${steps}
${faqMarkdown(page.faqs)}
---

Start free: ${SIGNUP_URL}
`
}

function bespokeMarkdown(page: BespokePage) {
  return `${frontmatter({ title: page.title, description: page.description, canonical: absolute(page.path) })}
# ${page.heading}

${page.markdown()}
${faqMarkdown(page.faqs ?? [])}`
}

function collectionIndex(collection: Collection, path: string, heading: string) {
  const items = getArticles(collection)
  const list = items.length ? items.map((a) => `- [${a.title}](${mdUrl(`${path}/${a.slug}`)}): ${a.description}`).join("\n") : "Nothing published yet."
  return `${frontmatter({ title: heading, canonical: absolute(path) })}\n# ${heading}\n\n${list}\n`
}

export function isAgentContentPath(pathname: string) {
  return (
    marketingByPath.has(pathname) ||
    landingByPath.has(pathname) ||
    Boolean(bespokePages[pathname]) ||
    pathname === "/blog" ||
    pathname === "/how-to" ||
    /^\/(blog|how-to)\/[a-z0-9-]+$/.test(pathname)
  )
}

export async function getAgentMarkdown(pathname: string): Promise<string | null> {
  const marketing = marketingByPath.get(pathname)
  if (marketing) return marketingMarkdown(marketing)
  const landing = landingByPath.get(pathname)
  if (landing) return landingMarkdown(landing)
  const bespoke = bespokePages[pathname]
  if (bespoke) return bespokeMarkdown(bespoke)
  if (pathname === "/blog") return collectionIndex("blog", "/blog", "Blog")
  if (pathname === "/how-to") return collectionIndex("guides", "/how-to", "How to guides")

  const match = pathname.match(/^\/(blog|how-to)\/([a-z0-9-]+)$/)
  if (match) {
    const article = getArticle(match[1] === "blog" ? "blog" : "guides", match[2])
    if (!article || article.noindex) return null
    return `${frontmatter({ title: article.title, description: article.description, canonical: absolute(pathname) })}\n# ${article.title}\n\n${article.content}\n`
  }
  return null
}

export function buildLlmsTxt() {
  const link = (path: string, title: string, description: string) => `- [${title}](${mdUrl(path)}): ${description}`
  const group = (title: string, pages: { path: string; name: string; seo: { description: string } }[]) =>
    `## ${title}\n\n${pages.map((p) => link(p.path, p.name, p.seo.description)).join("\n")}`

  const products = marketingPages.filter((p) => p.path.startsWith("/product/"))
  const business = marketingPages.filter((p) => p.path.startsWith("/solution/"))
  const guides = getArticles("guides")

  return `# ${brand.name}

> ${brand.description} Built in Kathmandu, Nepal. Works with Instagram Business and Creator accounts and Facebook Pages, with a free plan of 100 DMs a month. It does not support WhatsApp, TikTok, Telegram, SMS or email.

${group("Product", products)}

${group("Solutions by business type", business)}

${group("Solutions by use case", useCasePages)}

## Resources

${link("/pricing", "Pricing", bespokePages["/pricing"].description)}
${link("/how-to", "How to guides", "Step-by-step setups for Instagram and Messenger automation.")}
${guides.map((g) => link(`/how-to/${g.slug}`, g.title, g.description)).join("\n")}
${link("/about", "About", bespokePages["/about"].description)}
${link("/manychat-alternative", "ManyChat alternative", manychatAlternativePage.seo.description)}
${link("/instagram-automation-nepal", "Instagram automation in Nepal", nepalLandingPage.seo.description)}

## Optional

- [Full text of every page](${SITE_URL}/llms-full.txt)
`
}

export async function buildLlmsFullTxt() {
  const paths = [
    ...marketingPages.map((p) => p.path),
    ...landingPages.map((p) => p.path),
    ...Object.keys(bespokePages),
    "/how-to",
    ...getArticles("guides").map((g) => `/how-to/${g.slug}`),
  ]
  const docs = await Promise.all(paths.map((path) => getAgentMarkdown(path)))
  return `# ${brand.name}: full site content\n\n${docs.filter(Boolean).join("\n\n")}`
}
