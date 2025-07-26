"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Cog, Mail, NotebookPen, SquareChartGantt, Menu, X, Headphones } from "lucide-react"
import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import TemplateCard from "@/components/template-card"
import {
  automationTemplates,
  allTemplateTags,
  allTemplateCategories,
  type TemplateDifficulty,
} from "@/data/automation-templates"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export default function TemplatesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<TemplateDifficulty | "All">("All")
  const [selectedCategory, setSelectedCategory] = useState<string | "All">("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"popular" | "newest" | "highest-rated">("popular")
  const menuRef = useRef(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // Initialize filters from URL query params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tagParam = params.get("tag")
    if (tagParam) {
      setSelectedTags([decodeURIComponent(tagParam)])
    }
    const difficultyParam = params.get("difficulty") as TemplateDifficulty | "All"
    if (difficultyParam && ["Beginner", "Intermediate", "Advanced", "All"].includes(difficultyParam)) {
      setSelectedDifficulty(difficultyParam)
    }
    const categoryParam = params.get("category")
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam))
    }
    const searchParam = params.get("search")
    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam))
    }
    const sortByParam = params.get("sort") as "popular" | "newest" | "highest-rated"
    if (sortByParam && ["popular", "newest", "highest-rated"].includes(sortByParam)) {
      setSortBy(sortByParam)
    }
  }, [])

  const filteredAndSortedTemplates = useMemo(() => {
    const filtered = automationTemplates.filter((template) => {
      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => template.tags.includes(tag))
      const matchesDifficulty = selectedDifficulty === "All" || template.difficulty === selectedDifficulty
      const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesTags && matchesDifficulty && matchesCategory && matchesSearch
    })

    // Sort templates
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.downloads - a.downloads)
        break
      case "newest":
        // Assuming templates are ordered by creation date in data, or add a 'createdAt' field
        // For now, a simple reverse order of appearance in the array
        filtered.reverse()
        break
      case "highest-rated":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [selectedTags, selectedDifficulty, selectedCategory, searchQuery, sortBy])

  const handleTagClick = (tag: string) => {
    // Added type annotation
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="flex min-h-[100dvh] flex-col px-4 md:px-12 transition-all duration-300">
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
                  {/* Blog Agent */}
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
                  <Link
                    href="/services/social-media-automation"
                    className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md"
                  >
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
                  {/* Customer Support Automation */}
                  <Link
                    href="/services/customer-support-automation"
                    className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                      <Headphones className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Customer Support Automation</div>
                      <p className="text-sm text-gray-500">AI chatbots, smart routing & 24/7 support</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/templates" className="text-sm font-medium hover:text-primary">
              Free Automation Templates
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="lg"
              className="hover:bg-blue-700"
              onClick={() => {
                setSelectedCalLink("awwtomation/awwtomation-consultation")
                setCalModalOpen(true)
              }}
            >
              Automate Now
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div ref={menuRef} className="md:hidden block" style={{ zIndex: 60 }}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen((prev) => !prev)
              }}
              className="p-2 rounded-md border border-gray-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
              <div
                ref={menuRef}
                className="fixed left-0 right-0 top-16 z-50 bg-white border-t shadow px-4 py-6 space-y-4 md:hidden"
              >
                <Link href="/services/blog-automation" className="block font-medium text-gray-700">
                  Blog Agent
                </Link>
                <Link href="/services/social-media-automation" className="block font-medium text-gray-700">
                  Social Media Automation
                </Link>
                <Link href="/services/seo-automation" className="block font-medium text-gray-700">
                  SEO Automation
                </Link>
                <Link href="/services/crm-automation" className="block font-medium text-gray-700">
                  CRM Automation
                </Link>
                <Link href="/services/email-marketing-automation" className="block font-medium text-gray-700">
                  Email Marketing Automation
                </Link>
                <Link href="/services/customer-support-automation" className="block font-medium text-gray-700">
                  Customer Support Automation
                </Link>
                <Link href="/blog" className="block font-medium text-gray-700">
                  Blog
                </Link>
                <Link href="/#pricing" className="block text-gray-700">
                  Pricing
                </Link>
                <Link href="/#contact" className="block text-gray-700">
                  Contact
                </Link>
                <Link href="/about" className="block text-gray-700">
                  About
                </Link>
                <Button
                  size="lg"
                  className="w-full hover:bg-blue-700"
                  onClick={() => {
                    setSelectedCalLink("awwtomation/awwtomation-consultation")
                    setCalModalOpen(true)
                  }}
                >
                  Automate Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-24 pb-4 md:pt-28 md:pb-4 lg:pt-32 lg:pb-6 xl:pt-40 xl:pb-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-10"></div>
            <div className="w-full h-full bg-background"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-20 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                Free Automation Templates
              </h1>
              <p className="max-w-xl text-muted-foreground md:text-xl mx-auto">
                Discover a library of pre-built automation workflows to streamline your business operations, save
                time, and boost efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Templates Grid */}
        <section className="w-full pt-4 pb-12 md:pt-6 md:pb-24 lg:pt-8 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Select
                value={selectedDifficulty}
                onValueChange={(value: TemplateDifficulty | "All") => setSelectedDifficulty(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Difficulties</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={(value: string | "All") => setSelectedCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  {allTemplateCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={sortBy}
                onValueChange={(value: "popular" | "newest" | "highest-rated") => setSortBy(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest-rated">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {allTemplateTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold transition-colors",
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-muted-foreground hover:bg-muted/80",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTemplates.length > 0 ? (
                filteredAndSortedTemplates.map((template) => <TemplateCard key={template.slug} template={template} />)
              ) : (
                <p className="col-span-full text-center text-muted-foreground">
                  No templates found matching your criteria.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
