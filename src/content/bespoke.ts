import { brand } from "@/lib/brand"
import { formatNpr, limitText, NPR_PER_USD, PLANS, toNpr } from "@/lib/pricing"
import type { FaqItem } from "@/lib/seo"

/** SEO, FAQs and Markdown summaries for pages that don't use a content template. */
export interface BespokePage {
  path: string
  title: string
  description: string
  heading: string
  faqs?: FaqItem[]
  markdown: () => string
}

const starter = PLANS.find((plan) => plan.id === "starter")!
const npr = (usd: number) => formatNpr(toNpr(usd))

export const planLines = () =>
  PLANS.map((plan) => {
    const price = plan.priceUsd === 0 ? "free" : `${npr(plan.priceUsd)} a month, billed as $${plan.priceUsd} USD`
    return `- **${plan.label}** (${price}): ${plan.limits.map(limitText).join(", ")}.`
  }).join("\n")

/** ManyChat facts, checked against help.manychat.com in September 2026. */
export const MANYCHAT_CHECKED = "September 2026"

export const MANYCHAT_COMPARISON: { label: string; awwtomation: string; manychat: string }[] = [
  { label: "Channels", awwtomation: "Instagram, Facebook Messenger", manychat: "Instagram, Messenger, WhatsApp, TikTok, Telegram, SMS, email" },
  { label: "What you pay for", awwtomation: "DMs sent each month", manychat: "Active contacts each month" },
  { label: "Free plan", awwtomation: "100 DMs a month, 3 automations", manychat: "Up to 25 active contacts a month" },
  { label: "Entry paid plan", awwtomation: `Starter · ${npr(15)}/month ($15), 2,000 DMs, 3 accounts`, manychat: "Essential · $17/month, up to 250 active contacts" },
  { label: "Mid plan", awwtomation: `Pro · ${npr(49)}/month ($49), 15,000 DMs, 10 accounts`, manychat: "Pro · $39/month, up to 2,500 active contacts" },
  { label: "Going over the limit", awwtomation: "Sending pauses until next month. No overage charges.", manychat: "Pro charges $0.05 per extra active contact" },
  { label: "Prices shown in", awwtomation: "Nepali rupees, charged in USD", manychat: "US dollars" },
  { label: "AI-written replies", awwtomation: "No", manychat: "Yes, from Pro" },
  { label: "Integrations and API", awwtomation: "No, CSV import and export", manychat: "Integrations; API on Advanced" },
  { label: "Follow check before sending", awwtomation: "Yes", manychat: "Yes" },
]

export const pricingSeo: BespokePage = {
  path: "/pricing",
  title: "Pricing: Free, Starter, Pro & Agency Plans",
  description: `Free plan with 100 DMs a month. Paid plans from ${npr(starter.priceUsd)} a month. Save 20% with yearly billing. No overage charges.`,
  heading: "Plans for every stage of growth",
  faqs: [
    { question: "Is there a free plan?", answer: "Yes. One account, three automations and 100 DMs a month, free forever. No card needed." },
    { question: "Why are prices in rupees but charged in dollars?", answer: "Payments are processed in US dollars. Rupee prices are a conversion so you can see the cost at a glance." },
    { question: "Can I pay with a Nepali bank card?", answer: "Yes, if your card is enabled for international online payments in US dollars." },
    { question: "What counts as a DM?", answer: "Every message sent through Awwtomation, including broadcasts and inbox replies. Messages you receive are free." },
    { question: "What happens if I hit my DM limit?", answer: "Sending pauses until next month. You're never charged overage, and you can upgrade any time." },
    { question: "Can I cancel any time?", answer: "Yes. Your plan keeps working until the end of the period you paid for." },
  ],
  markdown: () =>
    `Awwtomation has four plans. Prices are shown in Nepali rupees (converted at Rs ${NPR_PER_USD} per US dollar, rounded to the nearest 100) and charged in US dollars.\n\n${planLines()}\n\nYearly billing saves about 20%. Every message sent through Awwtomation counts as one DM; incoming messages are free. At the monthly limit, sending pauses until the next month, and there are no overage charges. Broadcasts are included from Starter.`,
}

export const aboutSeo: BespokePage = {
  path: "/about",
  title: "About Awwtomation: Built in Kathmandu",
  description: "Awwtomation is Instagram and Facebook DM automation built in Kathmandu by Prakhyat Shrestha and Kushal Sarkar, for creators, shops and agencies.",
  heading: "We help businesses sell in the DMs",
  markdown: () =>
    `Awwtomation is Instagram and Facebook Messenger automation built in Kathmandu, Nepal, for creators, shops and agencies.\n\n## Founders\n\n- **Prakhyat Shrestha**, co-founder, engineering. Kathmandu, Nepal.\n- **Kushal Sarkar**, co-founder, data and operations. Atlanta, USA.\n\n## Principles\n\n- Secure channel connections without password sharing.\n- Honest about limits: Instagram and Facebook only.\n- Your data is yours: export or delete it any time.\n\nContact: ${brand.supportEmail}`,
}

export const legalSeo: BespokePage[] = [
  { path: "/legal/privacy-policy", title: "Privacy Policy", description: "How Awwtomation collects, uses and protects personal data.", heading: "Privacy Policy", markdown: () => `The full privacy policy is at https://www.awwtomation.com/legal/privacy-policy. Questions: ${brand.supportEmail}.` },
  { path: "/legal/terms-and-conditions", title: "Terms and Conditions", description: "The terms that govern use of Awwtomation.", heading: "Terms and Conditions", markdown: () => `The full terms are at https://www.awwtomation.com/legal/terms-and-conditions. Questions: ${brand.supportEmail}.` },
  {
    path: "/legal/data-deletion",
    title: "Data Deletion Instructions",
    description: "How to delete data Awwtomation stores about an account, a channel or an audience member.",
    heading: "Data Deletion Instructions",
    markdown: () => `Disconnect or delete a channel from Channels in the app, delete a workspace or organization from Settings, remove Awwtomation from Instagram or Facebook settings, use Facebook's data deletion request, or email ${brand.supportEmail}. Full instructions: https://www.awwtomation.com/legal/data-deletion.`,
  },
]

export const bespokePages: Record<string, BespokePage> = Object.fromEntries([pricingSeo, aboutSeo, ...legalSeo].map((page) => [page.path, page]))
