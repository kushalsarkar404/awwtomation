import { getAgentMarkdown, isAgentContentPath } from "@/lib/agent-content"
import { SITE_URL } from "@/lib/seo"

export const dynamic = "force-dynamic"

function normalizePath(value: string | null) {
  if (!value) return null

  try {
    const decoded = decodeURIComponent(value)
    if (!decoded.startsWith("/") || decoded.includes("..") || decoded.includes("\\")) return null
    return decoded.length > 1 ? decoded.replace(/\/$/, "") : decoded
  } catch {
    return null
  }
}

/**
 * The page a Markdown request is for. Direct calls pass `?path=`. Requests
 * rewritten by proxy.ts arrive with the *original* URL (e.g. /pricing.md),
 * because a rewrite does not change request.url for the route handler, so
 * the path is read back off the .md URL.
 */
function resolvePath(url: URL) {
  const fromQuery = url.searchParams.get("path")
  if (fromQuery) return normalizePath(fromQuery)
  if (url.pathname === "/index.md") return "/"
  if (url.pathname.endsWith(".md")) return normalizePath(url.pathname.slice(0, -3))
  return null
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const pathname = resolvePath(requestUrl)

  if (!pathname || !isAgentContentPath(pathname)) {
    return new Response("# Not found\n", {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8", "X-Robots-Tag": "noindex" },
    })
  }

  const markdown = await getAgentMarkdown(pathname)
  if (!markdown) {
    return new Response("# Not found\n", {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8", "X-Robots-Tag": "noindex" },
    })
  }

  const canonical = `${SITE_URL}${pathname}`
  const alternate = pathname === "/" ? `${SITE_URL}/index.md` : `${SITE_URL}${pathname}.md`

  return new Response(markdown, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
      "Content-Language": "en",
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${canonical}>; rel="canonical", <${alternate}>; rel="alternate"; type="text/markdown"`,
      Vary: "Accept, User-Agent",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, follow",
    },
  })
}
