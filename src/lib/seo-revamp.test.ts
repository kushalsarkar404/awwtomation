import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

import { homePageSeo, serviceDefinitions, toMetaDescription, toMetaTitle } from "./seo"
import { sharedMetadata } from "../app/services/_shared/metadata"

test("homepage uses specific AI automation positioning", () => {
  assert.equal(homePageSeo.heroTitle, "AI Automation for the Work Slowing You Down")
  assert.ok(homePageSeo.title.length <= 60)
  assert.ok(homePageSeo.description.length <= 160)
})

test("indexable shared pages use concise metadata and complete social cards", () => {
  for (const [route, metadata] of Object.entries(sharedMetadata)) {
    assert.ok(String(metadata.title).length <= 60, `${route} title is too long`)
    assert.ok(String(metadata.description).length <= 160, `${route} description is too long`)
    assert.ok(metadata.openGraph?.title, `${route} is missing an Open Graph title`)
    assert.ok(metadata.openGraph?.description, `${route} is missing an Open Graph description`)
    assert.ok(metadata.openGraph?.images, `${route} is missing an Open Graph image`)
    assert.ok(metadata.twitter?.title, `${route} is missing a Twitter title`)
    assert.ok(metadata.alternates?.canonical, `${route} is missing a canonical URL`)
  }
})

test("service metadata stays within search snippet limits", () => {
  for (const service of Object.values(serviceDefinitions)) {
    assert.ok(service.title.length <= 60, `${service.key} title is too long`)
    assert.ok(service.description.length <= 160, `${service.key} description is too long`)
  }
})

test("homepage source removes the old image and Trustpilot embeds", async () => {
  const source = await readFile(new URL("../app/home-page-client.tsx", import.meta.url), "utf8")
  const faqSource = await readFile(new URL("../components/faq-accordion.tsx", import.meta.url), "utf8")

  assert.doesNotMatch(source, /hero-image\.png/)
  assert.doesNotMatch(source, /TrustpilotCollector/)
  assert.match(faqSource, /<details/)
})

test("dynamic metadata uses shared title and description limiters", async () => {
  const seoSource = await readFile(new URL("./seo.ts", import.meta.url), "utf8")
  const templateSource = await readFile(new URL("../app/templates/[slug]/page.tsx", import.meta.url), "utf8")
  const blogSource = await readFile(new URL("../app/blog/[slug]/page.tsx", import.meta.url), "utf8")

  assert.match(seoSource, /export function toMetaTitle/)
  assert.match(seoSource, /export function toMetaDescription/)
  assert.match(templateSource, /toMetaTitle/)
  assert.match(templateSource, /toMetaDescription/)
  assert.match(blogSource, /toMetaTitle/)
  assert.match(blogSource, /toMetaDescription/)
})

test("metadata limiters preserve words and stay within crawl limits", () => {
  const longValue = "A very long automation title describing every possible workflow across an entire growing business"

  assert.ok(toMetaTitle(longValue).length <= 60)
  assert.ok(toMetaDescription(longValue.repeat(3)).length <= 155)
  assert.ok(toMetaTitle(longValue).endsWith("…"))
})
