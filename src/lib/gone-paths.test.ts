import assert from "node:assert/strict"
import { test } from "node:test"

import { GONE_PATHS, isGonePath } from "@/lib/gone-paths"
import { allSitePaths } from "@/lib/nav"

test("every retired agency URL is gone, including .md and trailing-slash forms", () => {
  assert.equal(GONE_PATHS.size, 33)
  for (const path of GONE_PATHS) {
    assert.ok(isGonePath(path), path)
    assert.ok(isGonePath(`${path}.md`), `${path}.md`)
    assert.ok(isGonePath(`${path}/`), `${path}/`)
  }
})

test("no live page is ever served as gone", () => {
  for (const path of allSitePaths) assert.equal(isGonePath(path), false, path)
  assert.equal(isGonePath("/blog"), false)
  assert.equal(isGonePath("/blog/some-new-post"), false)
})
