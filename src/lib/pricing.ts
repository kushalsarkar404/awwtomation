/**
 * Pricing shown on the marketing site.
 *
 * The USD figures are the contract; they mirror `lib/billing/plans.ts` in the
 * product app, which is what Dodo actually charges. NPR is a *display*
 * conversion so the price reads local; it is always shown next to the USD
 * amount that gets billed, never instead of it.
 *
 * When the rate moves enough to matter, change NPR_PER_USD here and every
 * price on the site follows.
 *
 * Plan features mirror the app's plan copy. The app gates only five things by
 * plan (connected accounts, automations, DMs, team members and broadcasts)
 * so nothing else may be listed as belonging to a higher tier.
 */
export const NPR_PER_USD = 140

/** USD → NPR, rounded to the nearest 100 so prices read as prices. */
export function toNpr(usd: number): number {
  return Math.round((usd * NPR_PER_USD) / 100) * 100
}

export function formatNpr(amount: number): string {
  return `Rs ${amount.toLocaleString("en-US")}`
}

export type PlanId = "free" | "starter" | "pro" | "agency"

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
  cta: string
}

export const PLANS: Plan[] = [
  {
    id: "free",
    label: "Free",
    description: "For trying it on one account.",
    priceUsd: 0,
    priceAnnualUsd: 0,
    limits: [
      { label: "Connected accounts", value: "1", one: "connected account", many: "connected accounts" },
      { label: "Automations", value: "3", one: "automation", many: "automations" },
      { label: "DMs a month", value: "100", one: "DM a month", many: "DMs a month" },
      { label: "Team members", value: "1", one: "team member", many: "team members" },
    ],
    features: ["Every automation feature", "Inbox, contacts and analytics"],
    cta: "Start free",
  },
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
      { label: "Team members", value: "3", one: "team member", many: "team members" },
    ],
    features: ["Everything in Free", "Broadcasts"],
    featured: true,
    cta: "Start free",
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
      { label: "Team members", value: "10", one: "team member", many: "team members" },
    ],
    features: ["Everything in Starter", "Priority support"],
    cta: "Start free",
  },
  {
    id: "agency",
    label: "Agency",
    description: "For agencies running many client accounts.",
    priceUsd: 149,
    priceAnnualUsd: 1430,
    limits: [
      { label: "Connected accounts", value: "50", one: "connected account", many: "connected accounts" },
      { label: "Automations", value: "1,000", one: "automation", many: "automations" },
      { label: "DMs a month", value: "100,000", one: "DM a month", many: "DMs a month" },
      { label: "Team members", value: "50", one: "team member", many: "team members" },
    ],
    features: ["Everything in Pro", "Dedicated onboarding"],
    cta: "Start free",
  },
]

/** "1 team member", "3 team members". */
export function limitText(limit: Plan["limits"][number]): string {
  return `${limit.value} ${limit.value === "1" ? limit.one : limit.many}`
}

/** Whole-percent saving of annual vs 12 × monthly. */
export function annualSavingsPercent(plan: Plan): number {
  if (plan.priceUsd === 0) return 0
  return Math.round((1 - plan.priceAnnualUsd / (plan.priceUsd * 12)) * 100)
}

/** The smallest saving across paid plans, which is what the "save X%" toggle promises. */
export const MIN_ANNUAL_SAVING = Math.min(
  ...PLANS.filter((p) => p.priceUsd > 0).map(annualSavingsPercent),
)

/**
 * The full comparison table. `true` means included on that plan. Rows are
 * grouped; only the "Limits" group and broadcasts actually differ, because
 * that is all the app gates.
 */
export const COMPARISON: { group: string; rows: { label: string; values: (string | boolean)[] }[] }[] = [
  {
    group: "Limits",
    rows: [
      { label: "Connected Instagram accounts and Facebook Pages", values: ["1", "3", "10", "50"] },
      { label: "Automations, including drafts and paused ones", values: ["3", "20", "100", "1,000"] },
      { label: "DMs sent a month", values: ["100", "2,000", "15,000", "100,000"] },
      { label: "Team members, including pending invitations", values: ["1", "3", "10", "50"] },
    ],
  },
  {
    group: "Automation",
    rows: [
      { label: "Comment, DM and story-reply triggers", values: [true, true, true, true] },
      { label: "Public replies under comments", values: [true, true, true, true] },
      { label: "Flow builder with buttons, questions, follow checks and delays", values: [true, true, true, true] },
      { label: "All eight templates", values: [true, true, true, true] },
      { label: "Dry-run testing", values: [true, true, true, true] },
    ],
  },
  {
    group: "Conversations and contacts",
    rows: [
      { label: "Shared Instagram and Messenger inbox", values: [true, true, true, true] },
      { label: "Contacts, tags, custom fields and notes", values: [true, true, true, true] },
      { label: "Pipelines and saved segments", values: [true, true, true, true] },
      { label: "CSV import and export", values: [true, true, true, true] },
      { label: "Broadcasts", values: [false, true, true, true] },
    ],
  },
  {
    group: "Reporting",
    rows: [
      { label: "Analytics and CSV export", values: [true, true, true, true] },
      { label: "Tracked links with click attribution", values: [true, true, true, true] },
      { label: "Delivery log with plain-English reasons", values: [true, true, true, true] },
    ],
  },
  {
    group: "Team and support",
    rows: [
      { label: "Multiple workspaces", values: [true, true, true, true] },
      { label: "Owner, Admin and Member roles", values: [true, true, true, true] },
      { label: "Email support", values: [true, true, true, true] },
      { label: "Priority support", values: [false, false, true, true] },
      { label: "Dedicated onboarding", values: [false, false, false, true] },
    ],
  },
]
