import assert from "node:assert/strict"
import { existsSync } from "node:fs"
import path from "node:path"
import { test } from "node:test"

import { bespokePages } from "@/content/bespoke"
import { marketingPages } from "@/content/marketing"
import { useCasePages } from "@/content/use-case-pages"
import { getArticles } from "@/lib/articles"
import { allSitePaths, businessLinks, headerMenus, resourceLinks, useCaseLinks } from "@/lib/nav"

const SUFFIX = " · Awwtomation".length

test("menus match the requested architecture", () => {
  assert.deepEqual(
    headerMenus.map((menu) => menu.label),
    ["Product", "Solutions", "Pricing", "Resources"],
  )
  assert.deepEqual(businessLinks.map((l) => l.label), ["for Creators", "for eCommerce", "for Agencies", "for Brands"])
  assert.deepEqual(useCaseLinks.map((l) => l.label), ["Collect Emails", "Request to Follow", "Respond to Comments", "Follow to DM"])
  assert.deepEqual(resourceLinks.map((l) => l.label), ["How To Guides", "About"])
})

test("every nav and sitemap path has a page file", () => {
  for (const sitePath of allSitePaths) {
    const file = path.join(process.cwd(), "src/app", sitePath === "/" ? "" : sitePath, "page.tsx")
    assert.ok(existsSync(file), `missing page for ${sitePath}`)
  }
})

test("every business and use-case link has content", () => {
  const contentPaths = new Set([...marketingPages, ...useCasePages].map((page) => page.path))
  for (const link of [...businessLinks, ...useCaseLinks]) assert.ok(contentPaths.has(link.href), link.href)
})

test("titles and descriptions fit search results and are unique", () => {
  const seos = [
    ...marketingPages.map((p) => ({ path: p.path, ...p.seo })),
    ...useCasePages.map((p) => ({ path: p.path, ...p.seo })),
    ...Object.values(bespokePages).map((p) => ({ path: p.path, title: p.title, description: p.description })),
    ...getArticles("guides").map((g) => ({ path: `/how-to/${g.slug}`, title: g.title, description: g.description })),
  ]
  for (const seo of seos) {
    const length = seo.title.length + (seo.path === "/" ? 0 : SUFFIX)
    assert.ok(length <= 70, `${seo.path} title is ${length} characters`)
    assert.ok(seo.description.length <= 165, `${seo.path} description is ${seo.description.length} characters`)
  }
  assert.equal(new Set(seos.map((s) => s.title)).size, seos.length, "duplicate title")
  assert.equal(new Set(seos.map((s) => s.description)).size, seos.length, "duplicate description")
})

test("pages keep the ManyChat section shape", () => {
  for (const page of marketingPages) {
    assert.ok(page.features.length >= 1 && page.features.length <= 4, page.path)
    assert.equal(page.steps.items.length, 3, page.path)
    assert.ok(page.seeIt.items.length >= 4, page.path)
    assert.ok(page.faqs.length >= 4, page.path)
    if (page.path !== "/") assert.ok(page.automatically, `${page.path} needs the Automatically showcase`)
  }
  for (const page of useCasePages) {
    assert.equal(page.rows.length, 2, page.path)
    // ManyChat's finale runs three cards: right, left, right.
    assert.equal(page.finale.cards.length, 3, page.path)
  }
})
