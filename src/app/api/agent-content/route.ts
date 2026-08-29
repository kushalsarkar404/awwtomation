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

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const pathname = normalizePath(requestUrl.searchParams.get("path"))

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
