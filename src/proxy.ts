import { NextRequest, NextResponse } from "next/server"

const AI_AGENT_PATTERN =
  /claudebot|claude-web|anthropic|gptbot|chatgpt|oai-searchbot|openai|perplexitybot|perplexity|cohere|gemini|googlebot-richsnippets|meta-externalagent|bingbot.*ai|bingpreview|duckassistbot/i

function acceptedTypes(header: string) {
  return header
    .split(",")
    .map((part, index) => {
      const [type, ...parameters] = part.trim().toLowerCase().split(";")
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="))
      const quality = qualityParameter ? Number.parseFloat(qualityParameter.split("=")[1] ?? "0") : 1
      return { type, quality: Number.isFinite(quality) ? quality : 0, index }
    })
    .filter((item) => item.type)
}

function prefersMarkdown(header: string | null) {
  if (!header) return false
  const accepted = acceptedTypes(header)
  const markdown = accepted.find((item) => item.type === "text/markdown")
  if (!markdown || markdown.quality <= 0) return false

  const html = accepted.find((item) => item.type === "text/html" || item.type === "application/xhtml+xml")
  if (!html || html.quality <= 0) return true
  if (markdown.quality !== html.quality) return markdown.quality > html.quality
  return markdown.index < html.index
}

function canonicalPath(pathname: string) {
  if (pathname === "/index.md") return "/"
  if (!pathname.endsWith(".md")) return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname
  return pathname.slice(0, -3) || "/"
}

function isPublicContentPath(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/services" ||
    pathname === "/templates" ||
    pathname === "/blog" ||
    /^\/services\/[^/]+$/.test(pathname) ||
    /^\/templates\/[^/]+$/.test(pathname) ||
    /^\/blog\/[^/]+$/.test(pathname)
  )
}

function appendVary(headers: Headers, value: string) {
  const current = headers.get("Vary")
  const values = new Set(
    `${current ?? ""},${value}`
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  )
  headers.set("Vary", Array.from(values).join(", "))
}

export function proxy(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname
  const path = canonicalPath(requestedPath)
  if (!isPublicContentPath(path)) return NextResponse.next()

  const explicitMarkdownPath = requestedPath.endsWith(".md")
  const explicitMarkdown = explicitMarkdownPath || request.nextUrl.searchParams.get("format") === "md"
  const agentUserAgent = AI_AGENT_PATTERN.test(request.headers.get("user-agent") ?? "")
  const markdownRequested = explicitMarkdown || prefersMarkdown(request.headers.get("accept")) || agentUserAgent

  if (markdownRequested) {
    if (!explicitMarkdownPath) {
      const markdownUrl = request.nextUrl.clone()
      markdownUrl.pathname = path === "/" ? "/index.md" : `${path}.md`
      markdownUrl.search = ""
      const redirect = NextResponse.redirect(markdownUrl, 307)
      appendVary(redirect.headers, "Accept, User-Agent")
      return redirect
    }

    const url = request.nextUrl.clone()
    url.pathname = "/api/agent-content"
    url.search = ""
    url.searchParams.set("path", path)
    return NextResponse.rewrite(url)
  }

  const response = NextResponse.next()
  const markdownPath = path === "/" ? "/index.md" : `${path}.md`
  response.headers.append(
    "Link",
    `<https://www.awwtomation.com${markdownPath}>; rel="alternate"; type="text/markdown"`,
  )
  appendVary(response.headers, "Accept, User-Agent")
  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)"],
}
