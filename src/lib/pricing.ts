/**
 * Pricing shown on the marketing site.
 *
 * Mirrors `lib/billing/plans.ts` in the product app, which is what Dodo
 * Payments actually charges: US dollars, three paid plans, no free tier. A new
 * account can connect an account and build automations before paying, but
 * nothing is sent until it picks a plan.
 *
 * Every plan has every feature and no plan caps DMs; plans differ by the
 * limits below. The built-in AI model comes with Pro and Agency; Starter's AI
 * agents use the workspace's own key. Keep the numbers in step with the app
 * when they change there.
 */

export type PlanId = "starter" | "pro" | "agency"

export interface Plan {
  id: PlanId
  label: string
  description: string
  priceUsd: number
  priceAnnualUsd: number
  /** Headline limits, in the order they should render. */
  limits: { label: string; value: string; one: string; many: string }[]
  features: string[]
  featured?: boolean
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    label: "Starter",
    description: "For one shop with two accounts.",
    priceUsd: 20,
    priceAnnualUsd: 192,
    limits: [
      { label: "Connected accounts", value: "2", one: "connected account", many: "connected accounts" },
      { label: "Workspaces", value: "1", one: "workspace", many: "workspaces" },
      { label: "Automations", value: "10", one: "automation", many: "automations" },
      { label: "Contacts", value: "2,500", one: "contact", many: "contacts" },
      { label: "Broadcasts a month", value: "10", one: "broadcast a month", many: "broadcasts a month" },
      { label: "Team members", value: "1", one: "team member", many: "team members" },
    ],
    features: ["No DM limit", "5 AI agents on your own AI key", "90 days of logs, 30 days of chats", "Email support"],
    featured: true,
  },
  {
    id: "pro",
    label: "Pro",
    description: "For teams running several accounts.",
    priceUsd: 49,
    priceAnnualUsd: 470,
    limits: [
      { label: "Connected accounts", value: "10", one: "connected account", many: "connected accounts" },
      { label: "Workspaces", value: "5", one: "workspace", many: "workspaces" },
      { label: "Automations", value: "100", one: "automation", many: "automations" },
      { label: "Contacts", value: "10,000", one: "contact", many: "contacts" },
      { label: "Broadcasts a month", value: "50", one: "broadcast a month", many: "broadcasts a month" },
      { label: "Team members", value: "5", one: "team member", many: "team members" },
    ],
    features: ["No DM limit", "3,000 built-in AI replies a month", "180 days of logs, 30 days of chats", "Priority support"],
  },
  {
    id: "agency",
    label: "Agency",
    description: "For agencies with many clients.",
    priceUsd: 149,
    priceAnnualUsd: 1430,
    limits: [
      { label: "Connected accounts", value: "40", one: "connected account", many: "connected accounts" },
      { label: "Workspaces", value: "20", one: "workspace", many: "workspaces" },
      { label: "Automations", value: "500", one: "automation", many: "automations" },
      { label: "Contacts", value: "50,000", one: "contact", many: "contacts" },
      { label: "Broadcasts a month", value: "200", one: "broadcast a month", many: "broadcasts a month" },
      { label: "Team members", value: "20", one: "team member", many: "team members" },
    ],
    features: ["No DM limit", "15,000 built-in AI replies a month", "1 year of logs, 30 days of chats", "Priority support", "Dedicated onboarding"],
  },
]

/** "$20", "$1,430". */
export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
}

/** "1 team member", "5 team members". */
export function limitText(limit: Plan["limits"][number]): string {
  return `${limit.value} ${limit.value === "1" ? limit.one : limit.many}`
}

/** Whole-percent saving of annual vs 12 × monthly. */
export function annualSavingsPercent(plan: Plan): number {
  return Math.round((1 - plan.priceAnnualUsd / (plan.priceUsd * 12)) * 100)
}

/** The smallest saving across plans, which is what the "save X%" toggle promises. */
export const MIN_ANNUAL_SAVING = Math.min(...PLANS.map(annualSavingsPercent))

/** The cheapest monthly price, for "from $X a month" copy. */
export const STARTING_PRICE_USD = Math.min(...PLANS.map((plan) => plan.priceUsd))

/**
 * Special pricing for Nepal: yearly only, in Nepali rupees. Not charged by
 * the app's checkout; a Nepal visitor fills the "Nepal Pricing" form in
 * GoHighLevel and the team sets the plan up. The option labels must match the
 * "Nepal Plan" dropdown field in GoHighLevel exactly, or the form can't
 * preselect the plan.
 */
export const NEPAL_PRICES_NPR: Record<PlanId, number> = { starter: 19999, pro: 49999, agency: 149999 }

/** "Rs 19,999", "Rs 149,999". */
export function formatNpr(amount: number): string {
  return `Rs ${amount.toLocaleString("en-US")}`
}

/** The GoHighLevel dropdown option for a plan: "Pro (Rs 49,999 a year)". */
export function nepalPlanOption(plan: Plan): string {
  return `${plan.label} (${formatNpr(NEPAL_PRICES_NPR[plan.id])} a year)`
}

/** GoHighLevel form "Nepal Pricing", opened from the Nepal pricing cards. */
export const NEPAL_FORM_ID = "fEy4HvDbLSGOmgRZd0Ne"
export const NEPAL_FORM_URL = `https://api.leadconnectorhq.com/widget/form/${NEPAL_FORM_ID}`

/** Link that opens the pricing page on its Nepal tab. */
export const NEPAL_PRICING_PATH = "/pricing?region=np"

/** At most this many automated DMs go to one contact from one account in a day, on every plan. */
export const FAIR_USE_DMS_PER_CONTACT_PER_DAY = 50

/**
 * How billing works, in the app's own words. Shown on the pricing page and in
 * its Markdown twin.
 */
export const BILLING_NOTES = [
  `Prices are in US dollars. Paying yearly costs ${MIN_ANNUAL_SAVING}% less than twelve monthly payments.`,
  "Payments are handled by Dodo Payments, which also takes care of tax and invoices.",
  "You can sign up, connect an account and build automations before you pay. Nothing is sent until you choose a plan.",
  "DMs have no monthly limit on any plan. Instagram and Facebook still pace how fast an account can send, and we follow that.",
  `To keep your accounts safe, one contact gets at most ${FAIR_USE_DMS_PER_CONTACT_PER_DAY} automated DMs a day from one account.`,
  "On Starter, AI agents reply with your own AI key, billed by your provider. Pro and Agency include built-in AI replies, which reset on the 1st of every month. At the limit, AI steps send the agent's fallback reply until the reset. Agents on your own key keep replying, and you are never charged for extra.",
  "At the contact limit, new people who comment or message you are not saved: no contact, no inbox thread and no automated reply until you upgrade.",
  "Chats are kept for 30 days, and delivery logs, link clicks and analytics for your plan's log history. Contacts, automations and broadcast totals are kept.",
  "Upgrades apply straight away, and you pay the difference for the rest of the billing period.",
  "You can cancel from Settings at any time. Your plan stays active until the end of the period you paid for.",
]

/**
 * The full comparison table. Limits, sizes and support differ by plan: every
 * plan has every feature.
 */
export const COMPARISON: { group: string; rows: { label: string; values: (string | boolean)[] }[] }[] = [
  {
    group: "Limits",
    rows: [
      { label: "Connected Instagram accounts and Facebook Pages", values: ["2", "10", "40"] },
      { label: "Workspaces", values: ["1", "5", "20"] },
      { label: "Automations", values: ["10", "100", "500"] },
      { label: "DMs sent a month", values: ["No limit", "No limit", "No limit"] },
      { label: "Contacts", values: ["2,500", "10,000", "50,000"] },
      { label: "Broadcasts a month", values: ["10", "50", "200"] },
      { label: "AI agents per workspace", values: ["5", "10", "15"] },
      { label: "Built-in AI replies a month", values: [false, "3,000", "15,000"] },
      { label: "Pipelines per workspace", values: ["5", "10", "15"] },
      { label: "Log history", values: ["90 days", "180 days", "1 year"] },
      { label: "Chat history", values: ["30 days", "30 days", "30 days"] },
      { label: "Team members", values: ["1", "5", "20"] },
    ],
  },
  {
    group: "Sizes",
    rows: [
      { label: "Steps per automation", values: ["20", "50", "100"] },
      { label: "Longest delay step", values: ["1 day", "7 days", "7 days"] },
      { label: "Keywords per automation", values: ["20", "50", "100"] },
      { label: "Tracked links", values: ["20", "100", "500"] },
      { label: "Saved segments per workspace", values: ["5", "20", "50"] },
      { label: "Stages per pipeline", values: ["6", "10", "12"] },
      { label: "Own AI keys per workspace", values: ["1", "3", "5"] },
      { label: "CSV import rows per file", values: ["500", "2,000", "5,000"] },
      { label: "CSV export rows per file", values: ["2,500", "10,000", "50,000"] },
    ],
  },
  {
    group: "Features",
    rows: [
      { label: "Comment, DM and story-reply triggers", values: [true, true, true] },
      { label: "Flow builder", values: [true, true, true] },
      { label: "Follow check", values: [true, true, true] },
      { label: "Public replies under comments", values: [true, true, true] },
      { label: "AI agents on your own AI key", values: [true, true, true] },
      { label: "Inbox for Instagram and Messenger", values: [true, true, true] },
      { label: "Contacts, stages and segments", values: [true, true, true] },
      { label: "CSV import and export", values: [true, true, true] },
      { label: "Tracked links and analytics", values: [true, true, true] },
      { label: "MCP server for Claude, ChatGPT and other AI apps", values: [true, true, true] },
    ],
  },
  {
    group: "Support",
    rows: [
      { label: "Email support", values: [true, true, true] },
      { label: "Priority support", values: [false, true, true] },
      { label: "Dedicated onboarding", values: [false, false, true] },
    ],
  },
]
