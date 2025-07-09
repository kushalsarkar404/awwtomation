import { getSortedPostsData } from "@/lib/blog"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const posts = getSortedPostsData()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}