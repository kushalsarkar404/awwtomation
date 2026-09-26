/**
 * Pricing shown on the marketing site.
 *
 * Mirrors `lib/billing/plans.ts` in the product app, which is what Dodo
 * Payments actually charges: US dollars, three paid plans, no free tier. A new
 * account can connect an account and build automations before paying, but
 * nothing is sent until it picks a plan.
 *
 * Every plan has every feature; plans differ only by the limits below. Keep
 * the numbers in step with the app when they change there.
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
    description: "For a shop with a few accounts.",
    priceUsd: 15,
    priceAnnualUsd: 144,
    limits: [
      { label: "Connected accounts", value: "3", one: "connected account", many: "connected accounts" },
      { label: "Automations", value: "20", one: "automation", many: "automations" },
      { label: "DMs a month", value: "2,000", one: "DM a month", many: "DMs a month" },
      { label: "Contacts", value: "10,000", one: "contact", many: "contacts" },
      { label: "Broadcasts a month", value: "20", one: "broadcast a month", many: "broadcasts a month" },
      { label: "Team members", value: "3", one: "team member", many: "team members" },
    ],
    features: ["90 days of history", "Email support"],
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
      { label: "Automations", value: "100", one: "automation", many: "automations" },
      { label: "DMs a month", value: "15,000", one: "DM a month", many: "DMs a month" },
      { label: "Contacts", value: "50,000", one: "contact", many: "contacts" },
      { label: "Broadcasts a month", value: "100", one: "broadcast a month", many: "broadcasts a month" },
      { label: "Team members", value: "10", one: "team member", many: "team members" },
    ],
    features: ["180 days of history", "Priority support"],
  },
  {
    id: "agency",
    label: "Agency",
    description: "For agencies with many clients.",
    priceUsd: 149,
    priceAnnualUsd: 1430,
    limits: [
      { label: "Connected accounts", value: "50", one: "connected account", many: "connected accounts" },
      { label: "Automations", value: "1,000", one: "automation", many: "automations" },
      { label: "DMs a month", value: "100,000", one: "DM a month", many: "DMs a month" },
      { label: "Contacts", value: "250,000", one: "contact", many: "contacts" },
      { label: "Broadcasts a month", value: "500", one: "broadcast a month", many: "broadcasts a month" },
      { label: "Team members", value: "50", one: "team member", many: "team members" },
    ],
    features: ["1 year of history", "Priority support", "Dedicated onboarding"],
  },
]

/** "$15", "$1,430". */
export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
}

/** "1 team member", "3 team members". */
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
 * How billing works, in the app's own words (its pricing page). Shown on the
 * pricing page and in its Markdown twin.
 */
export const BILLING_NOTES = [
  `Prices are in US dollars. Paying yearly costs ${MIN_ANNUAL_SAVING}% less than twelve monthly payments.`,
  "Payments are handled by Dodo Payments, which also takes care of tax and invoices.",
  "You can sign up, connect an account and build automations before you pay. Nothing is sent until you choose a plan.",
  "DM counts reset on the 1st of every month. Automated replies, AI replies, broadcasts and replies from the inbox all count; public replies under comments don't.",
  "If you reach your limit, messages stop until the reset or until you upgrade. You are never charged for extra messages.",
  "At the contact limit, new people who comment or message you are not saved: no contact, no inbox thread and no automated reply until you upgrade.",
  "Conversations and delivery logs older than your plan's history are deleted. Contacts, automations and broadcast totals are kept.",
  "Upgrades apply straight away, and you pay the difference for the rest of the billing period.",
  "You can cancel from Settings at any time. Your plan stays active until the end of the period you paid for.",
]

/**
 * The full comparison table. Only "Limits" and support differ by plan: every
 * plan has every feature.
 */
export const COMPARISON: { group: string; rows: { label: string; values: (string | boolean)[] }[] }[] = [
  {
    group: "Limits",
    rows: [
      { label: "Connected Instagram accounts and Facebook Pages", values: ["3", "10", "50"] },
      { label: "Workspaces", values: ["3", "10", "50"] },
      { label: "Automations", values: ["20", "100", "1,000"] },
      { label: "DMs sent a month", values: ["2,000", "15,000", "100,000"] },
      { label: "Contacts", values: ["10,000", "50,000", "250,000"] },
      { label: "Broadcasts a month", values: ["20", "100", "500"] },
      { label: "AI agents per workspace", values: ["3", "10", "25"] },
      { label: "Pipelines per workspace", values: ["3", "10", "20"] },
      { label: "Conversation and log history", values: ["90 days", "180 days", "1 year"] },
      { label: "Team members", values: ["3", "10", "50"] },
    ],
  },
  {
    group: "Features",
    rows: [
      { label: "Comment, DM and story-reply triggers", values: [true, true, true] },
      { label: "Flow builder", values: [true, true, true] },
      { label: "Follow check", values: [true, true, true] },
      { label: "Public replies under comments", values: [true, true, true] },
      { label: "AI replies", values: [true, true, true] },
      { label: "Inbox for Instagram and Messenger", values: [true, true, true] },
      { label: "Contacts, stages and segments", values: [true, true, true] },
      { label: "CSV import", values: [true, true, true] },
      { label: "Tracked links and analytics", values: [true, true, true] },
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
