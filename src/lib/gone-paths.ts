/**
 * URLs from the previous automation-agency site.
 *
 * These are served `410 Gone` rather than redirected. The old pages were about
 * n8n, CRMs and email platforms. Nothing on this site is a genuine equivalent,
 * and Google treats an irrelevant redirect as a soft 404 anyway. A 410 is the
 * fastest honest signal that the page is not coming back.
 *
 * Important: these paths must stay crawlable in robots.txt. Blocking them would
 * stop Google ever seeing the 410, and they would sit in the index for months.
 *
 * Do not delete this list once the URLs drop out of the index: old backlinks
 * and bookmarks keep arriving for years, and a 410 is the right answer to all
 * of them.
 */

/** Old service pages, plus the hub they hung off. */
const goneServicePaths = [
  "/services",
  "/services/blog-automation",
  "/services/crm-automation",
  "/services/customer-support-automation",
  "/services/email-marketing-automation",
  "/services/seo-automation",
  "/services/social-media-automation",
]

/** Old n8n/Make workflow templates, and the listing page they hung off. */
const goneTemplatePaths = [
  "/templates",
  "/templates/automated-seo-reports-ga4-gsc",
  "/templates/automated-reddit-commenting",
  "/templates/reddit-commenting-automation",
]

/** The agency-era blog index and its 22 posts. */
const goneBlogSlugs = [
  "age-of-automation-how-ai-became-essential",
  "ai-video-generator-creators-guide",
  "ai-voice-generator-guide-for-realistic-ai-voice",
  "best-email-marketing-platforms",
  "best-live-chat-software-for-businesses",
  "best-open-source-email-marketing-platforms",
  "best-seo-tools-to-supercharge-audience-growth",
  "crm-integration-ultimate-guide-to-unify-business-operations",
  "drive-sales-with-email-marketing-automation",
  "go-high-level-crm-automation-guide",
  "guide-to-master-email-marketing-for-business",
  "key-features-of-email-automation-platform",
  "low-code-vs-no-code-automation-business-guide",
  "make-vs-n8n-automation-platform-comparison",
  "small-business-workflow-automation-n8n-make-guide",
  "top-ai-image-generators-for-content-creation",
  "top-crm-tool",
  "top-project-management-tool",
  "what-is-agentic-ai-complete-guide",
  "what-is-rpa-robotic-process-automation-guide",
  "why-crm-tools-are-essential-for-business",
  "why-link-building-cant-be-fully-automated",
]

export const GONE_PATHS: ReadonlySet<string> = new Set([
  ...goneServicePaths,
  ...goneTemplatePaths,
  "/blog",
  ...goneBlogSlugs.map((slug) => `/blog/${slug}`),
])

/**
 * True when a request should be answered with 410. Matches the `.md` variants
 * the AI-agent layer serves too, so a crawler asking for `/services.md` gets
 * the same answer as one asking for `/services`.
 */
export function isGonePath(pathname: string): boolean {
  const path = pathname.endsWith(".md") ? pathname.slice(0, -3) : pathname
  const normalised = path.length > 1 ? path.replace(/\/+$/, "") : path
  return GONE_PATHS.has(normalised)
}

/** Count used by the de-indexing note in the docs. */
export const GONE_PATH_COUNT = GONE_PATHS.size
