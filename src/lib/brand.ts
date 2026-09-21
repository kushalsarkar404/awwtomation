/**
 * Brand constants for the marketing site.
 *
 * Mirrors the product app's `lib/brand.ts` so the two never drift. If the
 * wordmark or support address changes, change it in both places.
 */
export const brand = {
  name: "Awwtomation",
  wordmark: "Awwtomation.",
  tagline: "Instagram and Facebook comment-to-DM automation, built for Nepal.",
  description:
    "Awwtomation sends an automatic DM to anyone who comments a keyword on your Instagram or Facebook post, replies publicly under their comment, and saves them as a contact you can follow up with.",
  supportEmail: "support@awwtomation.com",
  company: "Awwtomation",
  country: "Nepal",
  city: "Kathmandu",
  colors: { ink: "#18181B", lavender: "#C1C1D7" },
} as const

/** Where the product lives. Every CTA on the marketing site points here. */
export const APP_URL = "https://app.awwtomation.com"
export const SIGNUP_URL = `${APP_URL}/login`
export const LOGIN_URL = `${APP_URL}/login`
