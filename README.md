# awwtomation.com

Marketing site for **Awwtomation**: Instagram and Facebook comment-to-DM automation, built in Kathmandu. The product itself lives in a separate repo and runs at `app.awwtomation.com`; every signup and login button on this site points there (`src/lib/brand.ts`).

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4.

```bash
npm install
npm run dev     # local site
npm test        # 410 list, pricing maths, content integrity
npm run lint
npm run build
```

## Page layouts

The site follows ManyChat's page architecture. Desktop sizes were measured from ManyChat at an 1800px-wide viewport and scale with the viewport (`vw`) below that.

| Layout | Pages | Template |
|---|---|---|
| Marketing (hero, Automatically, feature tabs, big word, before/after, see it in action, steps, FAQ) | `/`, `/product/*`, `/for/*` | `src/components/templates/marketing-page.tsx` |
| Use-case landing (tilted photo stack, comment thread, feature rows, cascading steps, finale, framed footer) | `/use-case/*`, `/manychat-alternative`, `/instagram-automation-nepal` | `src/components/templates/use-case-page.tsx` |
| Pricing (plans, comparison table, plan picker) | `/pricing` | `src/app/pricing/page.tsx` |
| Articles | `/how-to`, `/blog` | `src/components/mc/article-card.tsx`, `article-page.tsx` |

## Where things live

| What | Where |
|---|---|
| Menus, footer columns, sitemap paths | `src/lib/nav.ts` |
| Home, product and business-type copy | `src/content/marketing.ts` |
| Use-case copy | `src/content/use-case-pages.ts` (+ `seo-landing-pages.ts`) |
| Chat mock-up scripts | `src/content/chats.ts` |
| SEO + FAQs for pricing, about, legal | `src/content/bespoke.ts` |
| How-to guides and blog posts (Markdown) | `content/guides/`, `content/blog/` |
| Plans, rupee conversion (`NPR_PER_USD`) | `src/lib/pricing.ts` (keep USD in step with the app's `lib/billing/plans.ts`) |
| Design tokens (colours, type scale, grid, glass nav) | `src/app/globals.css` |
| Header (full logo at the top, glass bar with the mark once scrolled) | `src/components/nav/site-header.tsx` |
| Sections and primitives | `src/components/mc/` |
| Retired agency URLs served `410 Gone` | `src/lib/gone-paths.ts`, handled in `src/proxy.ts` |
| Markdown for AI crawlers, `llms.txt` | `src/lib/agent-content.ts` |

## Rules for content

- **Only claim what the app does.** No WhatsApp, TikTok, SMS, email or AI pages. The app supports Instagram and Facebook only. Instagram doesn't tell apps about new follows, so nothing may promise a DM "when someone follows".
- **Keep copy short** and original: layouts follow ManyChat, words don't. `npm test` enforces title and description lengths.
- **No em dashes.** Use a comma, a colon, a full stop or brackets instead. `npm test` fails on any `\u2014` in `src/`, `content/` or this file.
- **Placeholders.** `PhotoSlot` marks every photo and video still to be shot and names what goes there; testimonial cards are placeholders until real, approved quotes exist. Never invent customer quotes or numbers.

## SEO notes

- The old agency URLs return `410 Gone` with `X-Robots-Tag: noindex`. They must stay crawlable (not blocked in `robots.txt`) so Google sees the 410.
- Every page has a canonical, OG/Twitter tags and breadcrumb schema; FAQ, HowTo, ItemList, Person and BlogPosting schema where they apply.
- AI crawlers (and `Accept: text/markdown`) get a Markdown version of each page at `<path>.md`.
- Fonts are open-licence stand-ins for ManyChat's: Archivo (display), Figtree (body), Geist Mono (labels). The share image uses Archivo instances in `src/app/fonts/`.
