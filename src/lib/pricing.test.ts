import assert from "node:assert/strict"
import { test } from "node:test"

import { annualSavingsPercent, COMPARISON, formatUsd, limitText, MIN_ANNUAL_SAVING, PLANS } from "@/lib/pricing"

test("USD prices match the product app's plan matrix", () => {
  assert.deepEqual(
    PLANS.map((plan) => [plan.id, plan.priceUsd, plan.priceAnnualUsd]),
    [["starter", 15, 144], ["pro", 49, 470], ["agency", 149, 1430]],
  )
})

test("there is no free plan", () => {
  for (const plan of PLANS) assert.ok(plan.priceUsd > 0, plan.id)
})

test("prices format as US dollars", () => {
  assert.equal(formatUsd(15), "$15")
  assert.equal(formatUsd(1430), "$1,430")
  assert.equal(formatUsd(144 / 12), "$12")
})

test("limits read naturally in the singular and plural", () => {
  assert.equal(limitText(PLANS[0].limits[0]), "3 connected accounts")
  assert.equal(limitText(PLANS[0].limits[2]), "2,000 DMs a month")
  assert.equal(limitText({ label: "", value: "1", one: "team member", many: "team members" }), "1 team member")
})

test("the yearly toggle never promises more than every plan saves", () => {
  for (const plan of PLANS) assert.ok(annualSavingsPercent(plan) >= MIN_ANNUAL_SAVING)
})

test("every comparison row has a value per plan", () => {
  for (const group of COMPARISON) for (const row of group.rows) assert.equal(row.values.length, PLANS.length, row.label)
})
