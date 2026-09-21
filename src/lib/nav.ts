/**
 * Site architecture, following ManyChat's menus:
 *   PRODUCT · SOLUTIONS (by business type / by use case) · PRICING · RESOURCES
 *
 * Only what the product app does is listed. Header, footer and sitemap all
 * read from here.
 */

export interface NavLink {
  label: string
  href: string
  blurb?: string
  icon?: "instagram" | "messenger" | "ai"
}

export interface NavColumn {
  heading: string
  links: NavLink[]
}

export interface NavMenu {
  label: string
  href?: string
  /**
   * "channels" = centred icon tiles (Product), "display" = bold lists split by
   * a rule (Solutions), "text" = regular lists (Resources).
   */
  style?: "channels" | "display" | "text"
  columns?: NavColumn[]
}

export const productLinks: NavLink[] = [
  { label: "Instagram", href: "/product/instagram", blurb: "Automate your Instagram marketing", icon: "instagram" },
  { label: "Messenger", href: "/product/messenger", blurb: "Automate your Facebook Page chats", icon: "messenger" },
  { label: "Awwtomation AI", href: "/product/ai", blurb: "Let an agent answer every customer", icon: "ai" },
]

export const businessLinks: NavLink[] = [
  { label: "for Creators", href: "/solution/for-creators" },
  { label: "for eCommerce", href: "/solution/for-ecommerce" },
  { label: "for Agencies", href: "/solution/for-agencies" },
  { label: "for Brands", href: "/solution/for-brand" },
]

export const useCaseLinks: NavLink[] = [
  { label: "Collect Emails", href: "/use-case/collect-emails" },
  { label: "Request to Follow", href: "/use-case/request-to-follow" },
  { label: "Respond to Comments", href: "/use-case/respond-to-comments" },
  { label: "Follow to DM", href: "/use-case/follow-to-dm" },
]

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "How To Guides", href: "/how-to" },
  { label: "About", href: "/about" },
]

export const headerMenus: NavMenu[] = [
  { label: "Product", style: "channels", columns: [{ heading: "Channels", links: productLinks }] },
  {
    label: "Solutions",
    style: "display",
    columns: [
      { heading: "By business type", links: businessLinks },
      { heading: "By use case", links: useCaseLinks },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    style: "text",
    columns: [
      { heading: "Learn", links: resourceLinks.slice(0, 2) },
      { heading: "Company", links: resourceLinks.slice(2) },
    ],
  },
]

export const compareLinks: NavLink[] = [
  { label: "ManyChat alternative", href: "/manychat-alternative" },
  { label: "Instagram automation Nepal", href: "/instagram-automation-nepal" },
]

export const legalLinks: NavLink[] = [
  { label: "Privacy policy", href: "/legal/privacy-policy" },
  { label: "Terms of service", href: "/legal/terms-and-conditions" },
  { label: "Data deletion", href: "/legal/data-deletion" },
]

export const footerColumns: NavColumn[] = [
  { heading: "Product", links: [...productLinks.map(({ label, href }) => ({ label, href })), { label: "Pricing", href: "/pricing" }] },
  { heading: "Solutions", links: businessLinks },
  { heading: "Use cases", links: useCaseLinks },
  { heading: "Resources", links: resourceLinks },
  { heading: "Compare", links: compareLinks },
  { heading: "Other", links: legalLinks },
]

/** Routes that use the stripped-down landing header and footer (ManyChat's use-case pages). */
export const LANDING_PREFIXES = ["/use-case/", "/manychat-alternative", "/instagram-automation-nepal"]

export function isLandingPath(pathname: string) {
  return LANDING_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

/** Every indexable static path. Guides and blog posts are added in sitemap.ts. */
export const allSitePaths: string[] = [
  "/",
  "/pricing",
  ...productLinks.map((l) => l.href),
  ...businessLinks.map((l) => l.href),
  ...useCaseLinks.map((l) => l.href),
  ...resourceLinks.map((l) => l.href),
  ...compareLinks.map((l) => l.href),
  ...legalLinks.map((l) => l.href),
]
