import { NextRequest, NextResponse } from "next/server"

import { isGonePath } from "@/lib/gone-paths"
import { allSitePaths } from "@/lib/nav"

/*
 * Two jobs:
 *
 * 1. Answer 410 Gone for every URL from the previous agency site, so those
 *    pages leave the index quickly and stay out.
 * 2. Serve a Markdown rendering of each live page to AI crawlers and to anyone
 *    who asks for `text/markdown`, which is cheaper for them to read than the
 *    full HTML and much likelier to be quoted accurately.
 */

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

const publicContentPaths = new Set(allSitePaths)

function isPublicContentPath(pathname: string) {
  return publicContentPaths.has(pathname) || /^\/how-to\/[^/]+$/.test(pathname)
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

function markNoindex(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow")
  return response
}

/**
 * Body for a retired URL. Kept small and static; it exists so a human who
 * followed an old link lands somewhere useful, not to be indexed.
 */
function gonePage(path: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Page removed · Awwtomation</title>
<style>
  :root { color-scheme: light }
  body { margin:0; min-height:100vh; display:grid; place-items:center; padding:2rem;
         font:16px/1.6 ui-sans-serif,system-ui,-apple-system,sans-serif; color:#18181b; background:#fff }
  main { max-width:32rem }
  h1 { font-size:1.75rem; letter-spacing:-.03em; margin:0 0 .75rem }
  p { color:#63636e; margin:0 0 1.5rem }
  code { background:#f7f7f9; padding:.15em .4em; border-radius:4px; font-size:.875em }
  a.btn { display:inline-block; background:#18181b; color:#fff; text-decoration:none;
          padding:.7rem 1.1rem; border-radius:.625rem; font-weight:500; font-size:.9375rem }
  ul { padding-left:1.1rem; color:#63636e; margin:1.5rem 0 0 }
  li { margin:.35rem 0 }
  a { color:#18181b }
</style>
</head>
<body>
<main>
  <h1>This page has been removed</h1>
  <p><code>${path.replace(/[<>&"]/g, "")}</code> was part of our old automation-agency site. Awwtomation is now a product: comment-to-DM automation for Instagram and Facebook.</p>
  <a class="btn" href="/">Go to the homepage</a>
  <ul>
    <li><a href="/product/instagram">Instagram automation</a></li>
    <li><a href="/use-case/comment-to-dm">Comment-to-DM, explained</a></li>
    <li><a href="/pricing">Pricing in rupees</a></li>
  </ul>
</main>
</body>
</html>`
}

export function proxy(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname

  // 1. Retired agency URLs.
  if (isGonePath(requestedPath)) {
    return new NextResponse(gonePage(requestedPath), {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=3600",
      },
    })
  }

  // 2. Markdown for AI crawlers.
  const path = canonicalPath(requestedPath)
  if (!isPublicContentPath(path)) return markNoindex(NextResponse.next())

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
      return markNoindex(redirect)
    }

    const url = request.nextUrl.clone()
    url.pathname = "/api/agent-content"
    url.search = ""
    url.searchParams.set("path", path)
    return markNoindex(NextResponse.rewrite(url))
  }

  const response = NextResponse.next()
  const markdownPath = path === "/" ? "/index.md" : `${path}.md`
  response.headers.append(
    "Link",
    `<https://www.awwtomation.com${markdownPath}>; rel="alternate"; type="text/markdown"`,
  )
  appendVary(response.headers, "Accept, User-Agent")
  return markNoindex(response)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)"],
}
