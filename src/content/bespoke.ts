import { brand } from "@/lib/brand"
import { BILLING_NOTES, formatUsd, limitText, MIN_ANNUAL_SAVING, PLANS } from "@/lib/pricing"
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

export const planLines = () =>
  PLANS.map((plan) => {
    const price = `${formatUsd(plan.priceUsd)} a month, or ${formatUsd(plan.priceAnnualUsd)} a year`
    return `- **${plan.label}** (${price}): ${[...plan.limits.map(limitText), ...plan.features].join(", ")}.`
  }).join("\n")

export const pricingSeo: BespokePage = {
  path: "/pricing",
  title: "Pricing: Starter, Pro & Agency Chat Marketing Plans",
  description: `Chat marketing plans for Instagram and Messenger from ${formatUsd(starter.priceUsd)} a month. Every feature on every plan, AI replies included. Save ${MIN_ANNUAL_SAVING}% yearly. No overage charges.`,
  heading: "Plans for every stage of growth",
  faqs: [
    { question: "Is there a free plan?", answer: "No. You can sign up, connect an account and build automations before you pay, but nothing is sent until you choose a plan." },
    { question: "What currency are prices in?", answer: `US dollars. Starter is ${formatUsd(starter.priceUsd)} a month, and paying yearly costs ${MIN_ANNUAL_SAVING}% less.` },
    { question: "Can I pay with a Nepali bank card?", answer: "Yes, if your card is enabled for international online payments in US dollars. Payments are handled by Dodo Payments." },
    { question: "What counts as a DM?", answer: "Automated replies, broadcasts and replies from the inbox. Public replies under comments don't count, and counts reset on the 1st of every month." },
    { question: "What happens if I hit my DM limit?", answer: "Messages stop until the reset or until you upgrade. You're never charged for extra messages." },
    { question: "Can I cancel any time?", answer: "Yes, from Settings. Your plan stays active until the end of the period you paid for." },
  ],
  markdown: () =>
    `Awwtomation has three plans, priced in US dollars. Every plan has every feature, including AI replies; plans differ by limits.\n\n${planLines()}\n\n${BILLING_NOTES.map((note) => `- ${note}`).join("\n")}`,
}

export const aboutSeo: BespokePage = {
  path: "/about",
  title: "About Us: Chat Marketing Built in Kathmandu, Nepal",
  description: "Awwtomation is Nepal's No.1 chat marketing platform for Instagram and Messenger, built in Kathmandu by Prakhyat Shrestha and Kushal Sarkar.",
  heading: "We help businesses sell in the DMs",
  markdown: () =>
    `Awwtomation is Nepal's No.1 chat marketing platform for Instagram and Facebook Messenger, built in Kathmandu for creators, shops and agencies.\n\n## Founders\n\n- **Prakhyat Shrestha**, co-founder, engineering. Kathmandu, Nepal.\n- **Kushal Sarkar**, co-founder, data and operations. Atlanta, USA.\n\n## Principles\n\n- Secure channel connections without password sharing.\n- Honest about limits: Instagram and Facebook only.\n- Your data is yours: export your contacts or delete everything any time.\n\nContact: ${brand.supportEmail}`,
}

export const legalSeo: BespokePage[] = [
  { path: "/legal/privacy-policy", title: "Privacy Policy", description: "How Awwtomation collects, uses and protects personal data.", heading: "Privacy Policy", markdown: () => `The full privacy policy is at https://www.awwtomation.com/legal/privacy-policy. Questions: ${brand.supportEmail}.` },
  { path: "/legal/terms-and-conditions", title: "Terms and Conditions", description: "The terms that govern use of Awwtomation.", heading: "Terms and Conditions", markdown: () => `The full terms are at https://www.awwtomation.com/legal/terms-and-conditions. Questions: ${brand.supportEmail}.` },
  {
    path: "/legal/data-deletion",
    title: "Data Deletion Instructions",
    description: "How to delete data Awwtomation stores about an account, a channel or an audience member.",
    heading: "Data Deletion Instructions",
    markdown: () => `Disconnect or delete a connected account from the Dashboard in the app, delete a workspace or organization from Settings, remove Awwtomation from Instagram or Facebook settings, use Facebook's data deletion request, or email ${brand.supportEmail}. Full instructions: https://www.awwtomation.com/legal/data-deletion.`,
  },
]

export const bespokePages: Record<string, BespokePage> = Object.fromEntries([pricingSeo, aboutSeo, ...legalSeo].map((page) => [page.path, page]))
