const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000

interface DailyPopupRecord {
  version: 1
  shownAt: number
}

export function shouldShowDailyPopup(storedValue: string | null, now = Date.now()) {
  if (!storedValue) {
    return true
  }

  try {
    const record = JSON.parse(storedValue) as Partial<DailyPopupRecord>

    if (record.version !== 1 || typeof record.shownAt !== "number" || !Number.isFinite(record.shownAt)) {
      return true
    }

    return now - record.shownAt >= ONE_DAY_IN_MS
  } catch {
    return true
  }
}

export function createDailyPopupRecord(shownAt = Date.now()) {
  return JSON.stringify({ version: 1, shownAt })
}
