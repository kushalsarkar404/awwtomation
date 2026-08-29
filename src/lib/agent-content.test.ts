import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

import sitemap from "@/app/sitemap"
import {
  buildLlmsTxt,
  getAgentContentEntries,
  getAgentMarkdown,
} from "@/lib/agent-content"

test("agent content registry covers every intended canonical page without duplicates", () => {
  const entries = getAgentContentEntries()
  const paths = entries.map((entry) => entry.path)
  const markdownPaths = entries.map((entry) => entry.markdownPath)

  assert.equal(entries.length, 32)
  assert.equal(new Set(paths).size, entries.length)
  assert.equal(new Set(markdownPaths).size, entries.length)
  assert.ok(entries.every((entry) => entry.markdownPath.endsWith(".md")))
  assert.ok(entries.every((entry) => !entry.path.startsWith("/api/")))
})

test("Markdown representations include canonical facts and one primary heading", async () => {
  const homepage = await getAgentMarkdown("/")
  const crm = await getAgentMarkdown("/services/crm-automation")

  assert.ok(homepage)
  assert.match(homepage, /canonical: "https:\/\/www\.awwtomation\.com\/"/)
  assert.equal(homepage.match(/^# /gm)?.length, 1)
  assert.match(homepage, /## Automation services/)
  assert.match(crm ?? "", /# CRM Automation Service/)
  assert.match(crm ?? "", /## Implementation approach/)
})

test("llms.txt lists every Markdown resource and excludes noindex drafts", () => {
  const llms = buildLlmsTxt()

  for (const entry of getAgentContentEntries()) {
    assert.match(llms, new RegExp(entry.markdownPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
  }

  assert.doesNotMatch(llms, /test-blog|email-marketing-tips/)
  assert.match(llms, /llms-full\.txt/)
  assert.match(llms, /sitemap\.xml/)
})

test("sitemap contains only the 34 canonical indexable HTML routes", () => {
  const entries = sitemap()
  const urls = entries.map((entry) => entry.url)

  assert.equal(entries.length, 34)
  assert.equal(new Set(urls).size, entries.length)
  assert.ok(urls.includes("https://www.awwtomation.com/blog"))
  assert.ok(urls.every((url) => !url.endsWith(".md")))
  assert.ok(urls.every((url) => !url.includes("/api/")))
  assert.ok(urls.every((url) => !url.includes("test-blog")))
})

test("shared UI sources do not render decorative pill headings or visible card numbering", async () => {
  const sources = await Promise.all([
    readFile(new URL("../components/ui/section-heading.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/ui/process-rail.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/ui/feature-rows.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/home-page-client.tsx", import.meta.url), "utf8"),
  ])
  const source = sources.join("\n")

  assert.doesNotMatch(source, /rounded-full[^\n]+uppercase/)
  assert.doesNotMatch(source, /padStart\(/)
  assert.doesNotMatch(source, /\{index \+ 1\}/)
})

test("proxy supports Railway-style Markdown discovery signals", async () => {
  const source = await readFile(new URL("../proxy.ts", import.meta.url), "utf8")

  assert.match(source, /text\/markdown/)
  assert.match(source, /format/)
  assert.match(source, /\.endsWith\("\.md"\)/)
  assert.match(source, /AI_AGENT_PATTERN/)
  assert.match(source, /rel=\"alternate\"/)
})
