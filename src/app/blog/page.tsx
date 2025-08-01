import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Business Automation Insights & Tips | Awwtomation",
  description: "Discover the latest insights on business automation, CRM optimization, email marketing strategies, SEO automation, and social media management. Expert tips to streamline your business processes.",
  keywords: [
    "business automation blog",
    "CRM automation tips",
    "email marketing strategies",
    "SEO automation guide",
    "social media automation",
    "business process optimization",
    "automation insights",
    "digital transformation"
  ],
  openGraph: {
    title: "Blog - Business Automation Guides & Tips | Awwtomation",
    description: "Discover the latest insights on business automation, CRM optimization, email marketing strategies, SEO automation, and social media management.",
    url: "https://www.awwtomation.com/blog",
    siteName: "Awwtomation",
    type: "website",
    images: [
      {
        url: "https://www.awwtomation.com/images/blog-automation.png",
        width: 1200,
        height: 630,
        alt: "Awwtomation Blog - Business Automation Insights"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Business Automation Insights & Tips | Awwtomation",
    description: "Discover the latest insights on business automation, CRM optimization, email marketing strategies, and more.",
    images: ["https://www.awwtomation.com/images/blog-automation.png"]
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.awwtomation.com/blog"
  }
};

const POSTS_PER_PAGE = 8;

export default async function BlogPage({ searchParams }: { searchParams?: Promise<{ page?: string, sort?: string }> }) {
  const allPosts = getSortedPostsData();
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const sortOrder = (params?.sort === "asc" ? "asc" : "desc");

  // Sort posts by date
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (sortOrder === "desc") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(start, end);

  return (
    <div className="flex min-h-[100dvh] flex-col px-4 md:px-12">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/full-logo.svg"
                alt="Awwtomation Logo"
                fill={false}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 relative items-center">
            <div className="relative group/menu">
              <div className="flex items-center gap-1 text-sm font-medium cursor-pointer relative z-50">
              <Link href="/services" className="group flex gap-4">
                    Services
                    </Link>
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover/menu:flex bg-white border shadow-2xl rounded-xl w-[640px] p-6 z-40">
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/services/blog-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-medium text-gray-800">
                        Blog Agent
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-md">NEW</span>
                      </div>
                      <p className="text-sm text-gray-500">Multi-purpose blog generator with SEO-ready content</p>
                    </div>
                  </Link>

                  <Link href="/services/social-media-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                      <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Social Media Automation</div>
                      <p className="text-sm text-gray-500">Schedule, optimize, and automate social campaigns</p>
                    </div>
                  </Link>

                  <Link href="/services/seo-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">SEO Automation</div>
                      <p className="text-sm text-gray-500">AI meta generation, audits, and keyword clustering</p>
                    </div>
                  </Link>

                  <Link href="/services/email-marketing-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Email Marketing Automation</div>
                      <p className="text-sm text-gray-500">Automated campaigns, segmentation & personalization</p>
                    </div>
                  </Link>

                  <Link href="/services/crm-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                      <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">CRM Automation</div>
                      <p className="text-sm text-gray-500">Lead flows, auto-reminders & 3rd-party integration</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
            <Link href="/templates" className="text-sm font-medium hover:text-primary">
                Free Automation Templates
              </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button size="lg" className="hover:bg-blue-700">
              Automate Now
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="md:hidden block">
            <button className="p-2 rounded-md border border-gray-300">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Back to homepage */}
          <div className="mb-8">
            <Link href="/" className="text-sm text-muted-foreground hover:underline">
              ← Back to homepage
            </Link>
          </div>
          {/* Logo + Title */}
          <div className="items-center gap-4 mb-10">
                      {/* Sort Dropdown */}
          <form method="GET" className="flex justify-start mb-4">
            <label className="mr-2 text-sm text-muted-foreground" htmlFor="sortOrder">
              Sort by:
            </label>
            <select
              id="sortOrder"
              name="sort"
              defaultValue={sortOrder}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="desc">Newest to Oldest</option>
              <option value="asc">Oldest to Newest</option>
            </select>
            <input type="hidden" name="page" value="1" />
            <button type="submit" className="ml-2 px-2 bg-blue-600 text-white py-1 border rounded text-sm">Apply</button>
          </form>
          
          </div>

          {/* Blog Cards */}
          <div className="grid gap-8 sm:grid-cols-2">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-muted p-4 transition-shadow hover:shadow-lg bg-background"
              >
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
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                  key={i}
                  href={`/blog?page=${i + 1}&sort=${sortOrder}`}
                  className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

     {/* Footer */}
     <footer className="w-full border-t py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <Image
                      src="/full-logo.svg"
                      alt="Awwtomation Logo"
                      fill={false}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-auto w-auto"
                      priority
                    />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">Automate. Accelerate. Assert.</p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/awwtomation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/awwtomation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://youtube.com/@Awwtomation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="https://x.com/awwtomation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="sr-only">X</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services/blog-automation" className="text-muted-foreground hover:text-foreground">
                      Blog Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/social-media-automation"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Social Media Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/crm-automation" className="text-muted-foreground hover:text-foreground">
                      CRM Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo-automation" className="text-muted-foreground hover:text-foreground">
                      SEO Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/email-marketing-automation"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Email Marketing Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/customer-support-automation"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Customer Support Automation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="mailto:contact@awwtomation.com" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">© 2025 Awwtomation. All rights reserved.</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <Link href="/legal/terms-and-conditions" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="/legal/privacy-policy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
}