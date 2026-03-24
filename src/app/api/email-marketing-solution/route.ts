import { NextResponse } from "next/server"

import { appendEmailMarketingLead } from "@/lib/google-sheets"

export const runtime = "nodejs"

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

    await appendEmailMarketingLead({ email, pageSlug, postTitle })

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
