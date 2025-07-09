"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, NotebookPen, Menu, X, Code, Mail, Cog, SquareChartGantt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalModal } from "@/components/cal-modal"

// Define the Post type
interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  coverImage?: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const menuRef = useRef(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [bannerVisible, setBannerVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fetch blog posts from API
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // Handle click outside for mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && (menuRef.current as HTMLElement).contains(event.target as Node) === false) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center">Loading blog posts...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    )
  }

  return (
    <div>
        <>
         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {/* ... your existing header code ... */}
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

            {/* ... rest of your header code ... */}
            <nav className="hidden md:flex gap-8 relative items-center">
              <div className="relative group/menu">
                <div className="flex items-center gap-1 text-sm font-medium cursor-pointer relative z-50">
                  <span className="relative">
                    Services
                    <span className="absolute -top-2 -right-6 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">NEW</span>
                  </span>
                </div>

                <div className="absolute left-0 top-full pt-2 hidden group-hover/menu:flex bg-white border shadow-2xl rounded-xl w-[640px] p-6 z-40">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Your existing service links */}
                    <Link href="/services/blog-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                        <NotebookPen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 font-medium text-gray-800">
                          Blog Agent
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-md">NEW</span>
                        </div>
                        <p className="text-sm text-gray-500">Multi-purpose blog generator with SEO-ready content</p>
                      </div>
                    </Link>
                     {/* Social Media Automation */}
            <Link href="/services/social-media-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                <SquareChartGantt className="h-5 w-5 text-pink-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Social Media Automation</div>
                <p className="text-sm text-gray-500">Schedule, optimize, and automate social campaigns</p>
              </div>
            </Link>

            {/* SEO Automation */}
            <Link href="/services/seo-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Code className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">SEO Automation</div>
                <p className="text-sm text-gray-500">AI meta generation, audits, and keyword clustering</p>
              </div>
            </Link>
                        {/* Email Marketing Automation */}
                        <Link
                      href="/services/email-marketing-automation"
                      className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Email Marketing Automation</div>
                        <p className="text-sm text-gray-500">Automated campaigns, segmentation & personalization</p>
                      </div>
                    </Link>

            {/* CRM Automation */}
            <Link href="/services/crm-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                <Cog className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">CRM Automation</div>
                <p className="text-sm text-gray-500">Lead flows, auto-reminders & 3rd-party integration</p>
              </div>
            </Link>
                    {/* ... rest of your service links ... */}
                  </div>
                </div>
              </div>

              <Link href="/#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
              <Link href="/#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
            </nav>
            
            <div className="hidden md:flex items-center gap-4">
              <Button size="lg" className="hover:bg-blue-700" onClick={() => {
                setSelectedCalLink("awwtomation/awwtomation-consultation");
                setCalModalOpen(true);
              }}>
                Automate Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div ref={menuRef} className="md:hidden block" style={{ zIndex: 60 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMobileMenuOpen(prev => !prev)
                }}
                className="p-2 rounded-md border border-gray-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Mobile Menu Panel */}
              {mobileMenuOpen && (
                <div ref={menuRef} className="fixed left-0 right-0 top-16 z-50 bg-white border-t shadow px-4 py-6 space-y-4 md:hidden">
                  <Link href="/services/blog-automation" className="block font-medium text-gray-700">Blog Agent</Link>
                  <Link href="/services/social-media-automation" className="block font-medium text-gray-700">Social Media Automation</Link>
                  <Link href="/services/seo-automation" className="block font-medium text-gray-700">SEO Automation</Link>
                  <Link href="/services/crm-automation" className="block font-medium text-gray-700">CRM Automation</Link>
                  <Link href="/#pricing" className="block text-gray-700">Pricing</Link>
                  <Link href="/#contact" className="block text-gray-700">Contact</Link>
                  <Button size="lg" className="w-full hover:bg-blue-700" onClick={() => {
                    setSelectedCalLink("awwtomation/awwtomation-consultation")
                    setCalModalOpen(true)
                  }}>
                    Automate Now
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </header>
    <div className="max-w-5xl mx-auto px-4 py-12">
       
      {/* Back to homepage */}
      <div className="mb-8">
        

        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back to homepage
        </Link>
      </div>

      {/* Logo + Title */}
      <div className="items-center gap-4 mb-10">
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
     {/* Footer */}
     <div className="flex flex-col px-4 md:px-12">
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
                    <Link href="/services/crm-automation" className="text-muted-foreground hover:text-foreground">
                      CRM Automation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                      Blog
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
        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />

        </div>
        </>
    </div>
  )
}