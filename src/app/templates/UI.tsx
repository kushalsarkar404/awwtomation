"use client"

import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { FaqCardSection } from "@/components/seo/faq-card-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import TemplateCard from "@/components/template-card"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select"
import {
allTemplateCategories,
allTemplateTags,
automationTemplates,
type TemplateDifficulty,
} from "@/data/automation-templates"
import { serviceCards,templateLibrarySeo } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { useEffect,useMemo,useRef,useState } from "react"
import { CheckCircle2, Plug, ShieldCheck, Workflow } from "lucide-react"

const templateGuidance = [
  {
    icon: Workflow,
    title: "Understand the workflow",
    description: "Review the trigger, actions, data flow, output, and the business process the template is designed to support.",
  },
  {
    icon: Plug,
    title: "Connect your systems",
    description: "Add your own credentials and map the fields, accounts, schedules, and destinations used by your team.",
  },
  {
    icon: ShieldCheck,
    title: "Test before production",
    description: "Validate permissions, error handling, rate limits, approvals, duplicate prevention, and recovery behavior.",
  },
]

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
    <div className="flex min-h-[100dvh] flex-col transition-all duration-300">
      {/* Header */}
      <SiteHeader
        menuRef={menuRef}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpenChange={setMobileMenuOpen}
        onPrimaryCta={() => {
          setSelectedCalLink("awwtomation/awwtomation-consultation")
          setCalModalOpen(true)
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden pt-28 pb-6 md:pt-32 md:pb-8 lg:pt-40 lg:pb-10">
          <div className="aurora-bg" aria-hidden="true" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-200">
                <span className="h-px w-8 bg-violet-300/70" aria-hidden="true" />
                Template library
              </p>
              <h1 className="font-display text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                {templateLibrarySeo.heroTitle}
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-8 text-zinc-400">
                {templateLibrarySeo.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Templates Grid */}
        <section className="w-full pt-4 pb-12 md:pt-6 md:pb-24 lg:pt-8 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="mb-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,180px))]">
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <Select
                value={selectedDifficulty}
                onValueChange={(value: TemplateDifficulty | "All") => setSelectedDifficulty(value)}
              >
                <SelectTrigger className="w-full">
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
                <SelectTrigger className="w-full">
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
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest-rated">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-y border-white/10 py-4">
              {allTemplateTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={cn(
                    "border-b py-1 text-sm font-medium transition-colors",
                    selectedTags.includes(tag)
                      ? "border-violet-300 text-white"
                      : "border-transparent text-muted-foreground hover:text-white",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredAndSortedTemplates.length > 0 ? (
                filteredAndSortedTemplates.map((template) => <TemplateCard key={template.slug} template={template} />)
              ) : (
                <p className="col-span-full text-center text-muted-foreground">
                  No templates found matching your criteria.
                </p>
              )}
            </div>

            <section className="mt-24 border-y border-white/10 py-20">
              <SectionHeading
                eyebrow="Using the library"
                title="From reusable template to dependable workflow"
                intro="Each download is a practical starting point. Production use still requires your credentials, business rules, quality checks, and ownership model."
              />
              <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
                {templateGuidance.map((item, index) => (
                  <Reveal key={item.title} delay={index * 90} className="bg-[#0b0b0d] p-8">
                    <item.icon className="h-5 w-5 text-violet-300" />
                    <h2 className="mt-9 text-xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                  </Reveal>
                ))}
              </div>
            </section>

            <section className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <SectionHeading
                align="left"
                eyebrow="Before you install"
                title="What to evaluate in an automation template"
                intro="A good template is transparent about what it connects, what it changes, and where a person needs to review the result."
              />
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Required apps, accounts, and permissions",
                  "Input fields and data destinations",
                  "Trigger frequency and platform rate limits",
                  "Duplicate prevention and retry behavior",
                  "Human approval and escalation steps",
                  "Expected output and success measurement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-zinc-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-16">
              <LinkCardSection
                eyebrow="Implementation"
                title="Need a Custom Automation Build?"
                description="Use the template library to validate a workflow, then move into the service page that matches the process you want fully implemented."
                links={serviceCards.slice(0, 3)}
                className="rounded-3xl"
              />
            </div>

            <FaqCardSection
              title="Automation template FAQs"
              description="What the templates include, how to evaluate them, and what to check before production use."
              faqs={templateLibrarySeo.faqs}
              className="mt-20 rounded-3xl"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
