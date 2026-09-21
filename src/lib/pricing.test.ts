import assert from "node:assert/strict"
import { test } from "node:test"

import { annualSavingsPercent, formatNpr, limitText, MIN_ANNUAL_SAVING, PLANS, toNpr } from "@/lib/pricing"

test("rupee prices round to the nearest 100", () => {
  assert.equal(toNpr(15), 2100)
  assert.equal(toNpr(49), 6900)
  assert.equal(toNpr(149), 20900)
  assert.equal(formatNpr(20900), "Rs 20,900")
})

test("USD prices match the product app's plan matrix", () => {
  assert.deepEqual(
    PLANS.map((plan) => [plan.id, plan.priceUsd, plan.priceAnnualUsd]),
    [["free", 0, 0], ["starter", 15, 144], ["pro", 49, 470], ["agency", 149, 1430]],
  )
})

test("limits read naturally in the singular and plural", () => {
  const free = PLANS[0].limits
  assert.equal(limitText(free[0]), "1 connected account")
  assert.equal(limitText(free[2]), "100 DMs a month")
  assert.equal(limitText(PLANS[1].limits[3]), "3 team members")
})

test("the yearly toggle never promises more than every paid plan saves", () => {
  for (const plan of PLANS.filter((p) => p.priceUsd > 0)) assert.ok(annualSavingsPercent(plan) >= MIN_ANNUAL_SAVING)
})
