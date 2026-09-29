import assert from "node:assert/strict"
import { test } from "node:test"

import { readCountryCookie } from "@/lib/geo"

test("reads the country cookie wherever it sits", () => {
  assert.equal(readCountryCookie("aw_country=NP"), "NP")
  assert.equal(readCountryCookie("_ga=1; aw_country=np; theme=x"), "NP")
  assert.equal(readCountryCookie("xaw_country=NP"), null)
  assert.equal(readCountryCookie(""), null)
})
