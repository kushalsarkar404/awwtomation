/** Cookie holding the visitor's two-letter country code, set by `src/proxy.ts`. */
export const COUNTRY_COOKIE = "aw_country"

/** The visitor's country from the cookie, or null (local dev, or no geo header). */
export function readCountryCookie(cookie: string): string | null {
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${COUNTRY_COOKIE}=([A-Za-z]{2})`))
  return match ? match[1].toUpperCase() : null
}
