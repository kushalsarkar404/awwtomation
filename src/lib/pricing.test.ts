import assert from "node:assert/strict"
import { test } from "node:test"

import { annualSavingsPercent, COMPARISON, formatNpr, formatUsd, limitText, MIN_ANNUAL_SAVING, NEPAL_PRICES_NPR, nepalPlanOption, PLANS } from "@/lib/pricing"

test("USD prices match the product app's plan matrix", () => {
  assert.deepEqual(
    PLANS.map((plan) => [plan.id, plan.priceUsd, plan.priceAnnualUsd]),
    [["starter", 20, 192], ["pro", 49, 470], ["agency", 149, 1430]],
  )
})

test("there is no free plan", () => {
  for (const plan of PLANS) assert.ok(plan.priceUsd > 0, plan.id)
})

test("prices format as US dollars", () => {
  assert.equal(formatUsd(20), "$20")
  assert.equal(formatUsd(1430), "$1,430")
  assert.equal(formatUsd(192 / 12), "$16")
})

test("limits read naturally in the singular and plural", () => {
  assert.equal(limitText(PLANS[0].limits[0]), "2 connected accounts")
  assert.equal(limitText(PLANS[0].limits[5]), "1 team member")
  assert.equal(limitText(PLANS[1].limits[3]), "10,000 contacts")
  assert.equal(limitText({ label: "", value: "1", one: "team member", many: "team members" }), "1 team member")
})

test("the yearly toggle never promises more than every plan saves", () => {
  for (const plan of PLANS) assert.ok(annualSavingsPercent(plan) >= MIN_ANNUAL_SAVING)
})

test("every comparison row has a value per plan", () => {
  for (const group of COMPARISON) for (const row of group.rows) assert.equal(row.values.length, PLANS.length, row.label)
})

test("Nepal prices are yearly rupee prices for every plan", () => {
  assert.deepEqual(NEPAL_PRICES_NPR, { starter: 19999, pro: 49999, agency: 149999 })
  assert.equal(formatNpr(149999), "Rs 149,999")
})

test("Nepal plan options match the GoHighLevel dropdown", () => {
  assert.deepEqual(PLANS.map(nepalPlanOption), ["Starter (Rs 19,999 a year)", "Pro (Rs 49,999 a year)", "Agency (Rs 149,999 a year)"])
})
