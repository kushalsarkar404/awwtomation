import { NextResponse } from "next/server"

export const runtime = "nodejs"

const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/b52b23davcox19mpf2guwsujobu3kvey"

interface EmailMarketingLeadRequest {
  email?: string
  pageSlug?: string
  postTitle?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EmailMarketingLeadRequest
    const email = body.email?.trim().toLowerCase()
    const pageSlug = body.pageSlug?.trim()
    const postTitle = body.postTitle?.trim()

    if (!email || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 })
    }

    if (!pageSlug || !postTitle) {
      return NextResponse.json({ success: false, error: "Missing page context for this submission." }, { status: 400 })
    }

    const webhookResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pageSlug, postTitle }),
      cache: "no-store",
    })

    if (!webhookResponse.ok) {
      throw new Error(`Make webhook rejected the submission with status ${webhookResponse.status}.`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to submit email marketing solution form:", error)

    return NextResponse.json(
      {
        success: false,
        error: "We could not submit your request right now. Please try again.",
      },
      { status: 500 },
    )
  }
}
