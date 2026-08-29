import assert from "node:assert/strict"
import test from "node:test"

const modulePath = "./daily-popup"
const popupModulePromise = import(modulePath).catch(() => ({})) as Promise<{
  createDailyPopupRecord?: (shownAt: number) => string
  shouldShowDailyPopup?: (storedValue: string | null, now: number) => boolean
}>

test("shows when the visitor has no popup history", async () => {
  const popupModule = await popupModulePromise
  const result = popupModule.shouldShowDailyPopup?.(null, Date.UTC(2026, 6, 4)) ?? "missing"

  assert.equal(result, true)
})

test("stays hidden until 24 hours have elapsed", async () => {
  const popupModule = await popupModulePromise
  const shownAt = Date.UTC(2026, 6, 4)
  const storedValue = JSON.stringify({ version: 1, shownAt })

  assert.equal(popupModule.shouldShowDailyPopup?.(storedValue, shownAt + 23 * 60 * 60 * 1000), false)
  assert.equal(popupModule.shouldShowDailyPopup?.(storedValue, shownAt + 24 * 60 * 60 * 1000), true)
})

test("recovers from invalid local storage data", async () => {
  const popupModule = await popupModulePromise
  assert.equal(popupModule.shouldShowDailyPopup?.("not-json", Date.UTC(2026, 6, 4)), true)
})

test("creates a versioned local storage record", async () => {
  const popupModule = await popupModulePromise
  const shownAt = Date.UTC(2026, 6, 4)

  assert.equal(popupModule.createDailyPopupRecord?.(shownAt), JSON.stringify({ version: 1, shownAt }))
})
