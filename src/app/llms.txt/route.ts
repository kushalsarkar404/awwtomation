import { buildLlmsTxt } from "@/lib/agent-content"

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
