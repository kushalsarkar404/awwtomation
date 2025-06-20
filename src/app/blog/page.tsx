import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import Image from "next/image"

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back to homepage */}
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back to homepage
        </Link>
      </div>

      {/* Logo + Title */}
      <div className="items-center gap-4 mb-10 ">
        <Image
          src="/full-logo.svg"
          alt="Awwtomation Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
          priority
        />
        <h1 className="text-xl font-bold tracking-tight text-muted-foreground py-4">Latest Blogs</h1>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-muted p-4 transition-shadow hover:shadow-lg bg-background"
          >
            {/* Optional: Cover image */}
            {post.coverImage && (
              <div className="mb-4 rounded-md overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="rounded-md object-cover w-full h-48 transition-transform group-hover:scale-105"
                />
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
