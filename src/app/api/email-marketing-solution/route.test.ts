import assert from "node:assert/strict"
import { afterEach, test } from "node:test"

import { POST } from "./route"

const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/b52b23davcox19mpf2guwsujobu3kvey"
const originalFetch = globalThis.fetch
const originalGoogleServiceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
const originalConsoleError = console.error

afterEach(() => {
  globalThis.fetch = originalFetch
  console.error = originalConsoleError

  if (originalGoogleServiceAccountJson === undefined) {
    delete process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  } else {
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON = originalGoogleServiceAccountJson
  }
})

test("forwards a normalized email lead to the Make webhook", async () => {
  const fetchCalls: Array<{ url: string; init?: RequestInit }> = []

  process.env.GOOGLE_SERVICE_ACCOUNT_JSON = JSON.stringify({
    client_email: "test@example.com",
    private_key: "not-used-by-webhook",
    token_uri: "https://oauth.example.com/token",
  })

  globalThis.fetch = async (input, init) => {
    fetchCalls.push({ url: String(input), init })
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }

  const response = await POST(
    new Request("http://localhost/api/email-marketing-solution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "  PERSON@EXAMPLE.COM ",
        pageSlug: "/services/email-marketing-automation",
        postTitle: "Email Marketing Automation",
      }),
    }),
  )

  assert.equal(response.status, 200)
  assert.equal(fetchCalls.length, 1)
  assert.equal(fetchCalls[0].url, MAKE_WEBHOOK_URL)
  assert.equal(fetchCalls[0].init?.method, "POST")
  assert.deepEqual(JSON.parse(String(fetchCalls[0].init?.body)), {
    email: "person@example.com",
    pageSlug: "/services/email-marketing-automation",
    postTitle: "Email Marketing Automation",
  })
})

test("returns an error when the Make webhook rejects the lead", async () => {
  console.error = () => {}
  globalThis.fetch = async () => new Response("rejected", { status: 500 })

  const response = await POST(
    new Request("http://localhost/api/email-marketing-solution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "person@example.com",
        pageSlug: "/",
        postTitle: "Awwtomation",
      }),
    }),
  )

  assert.equal(response.status, 500)
  assert.deepEqual(await response.json(), {
    success: false,
    error: "We could not submit your request right now. Please try again.",
  })
})
