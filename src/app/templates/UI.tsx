"use client"

import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import TemplateCard from "@/components/template-card"
import { Input } from "@/components/ui/input"
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
        <section className="w-full pt-24 pb-4 md:pt-28 md:pb-4 lg:pt-32 lg:pb-6 xl:pt-40 xl:pb-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-10"></div>
            <div className="w-full h-full bg-background"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-20 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                {templateLibrarySeo.heroTitle}
              </h1>
              <p className="max-w-xl text-muted-foreground md:text-xl mx-auto">
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredAndSortedTemplates.length > 0 ? (
                filteredAndSortedTemplates.map((template) => <TemplateCard key={template.slug} template={template} />)
              ) : (
                <p className="col-span-full text-center text-muted-foreground">
                  No templates found matching your criteria.
                </p>
              )}
            </div>

            <div className="mt-16">
              <LinkCardSection
                eyebrow="Implementation"
                title="Need a Custom Automation Build?"
                description="Use the template library to validate a workflow, then move into the service page that matches the process you want fully implemented."
                links={serviceCards.slice(0, 3)}
                className="rounded-3xl"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
