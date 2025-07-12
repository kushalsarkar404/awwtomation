"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
}

// Extract visible text from markdown heading (strip links, bold, italics, etc.)
function extractVisibleText(markdown: string): string {
  // Remove markdown links: [text](url) => text
  let text = markdown.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
  // Remove bold/italic: **text** or *text* or __text__ or _text_ => text
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1")
  text = text.replace(/\*([^*]+)\*/g, "$1")
  text = text.replace(/__([^_]+)__/g, "$1")
  text = text.replace(/_([^_]+)_/g, "$1")
  // Remove inline code: `text` => text
  text = text.replace(/`([^`]+)`/g, "$1")
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, "")
  // Remove leading/trailing whitespace
  return text.trim()
}

// Slugify to match generateHeadingId in blog renderer
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except word chars, spaces, and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
    .trim()
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [readingProgress, setReadingProgress] = useState(0)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const suppressObserverRef = useRef(false)

  useEffect(() => {
    // Only include level 2 headings (##) in the TOC
    const headingRegex = /^(#{2})\s+(.+)$/gm
    const extractedHeadings: Heading[] = []
    let match
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const rawText = match[2].trim()
      const text = extractVisibleText(rawText)
      const id = slugify(text)
      extractedHeadings.push({ id, text, level })
    }
    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressObserverRef.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      },
    )
    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })
    return () => observer.disconnect()
  }, [headings])

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }
    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  const scrollToHeading = (id: string) => {
    setActiveId(id)
    suppressObserverRef.current = true
    setTimeout(() => {
      suppressObserverRef.current = false
    }, 500)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Use 225 WPM for practical reading time, always at least 1 min
  const calculateReadingTime = () => {
    const wordsPerMinute = 225
    const wordCount = content.split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedIndex(Math.min(index + 1, headings.length - 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedIndex(Math.max(index - 1, 0))
        break
      case "Enter":
      case " ":
        e.preventDefault()
        scrollToHeading(headings[index].id)
        break
      case "Home":
        e.preventDefault()
        setFocusedIndex(0)
        break
      case "End":
        e.preventDefault()
        setFocusedIndex(headings.length - 1)
        break
    }
  }

  if (headings.length === 0) return null

  return (
    <nav
      className={cn(
        "hidden xl:block",
        className,
        "sticky top-12 w-80 max-w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-0",
        "max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col"
      )}
      aria-label="Table of contents"
      tabIndex={-1}
    >
      {/* Sticky header: section count, min read, heading */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-950 rounded-t-2xl p-6 pb-3 border-b border-gray-100 dark:border-gray-900">
        <div className="flex items-center justify-between mb-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <span>{headings.length} sections</span>
          <span>{calculateReadingTime()} min read</span>
        </div>
        <h2 className="font-bold text-base text-gray-900 dark:text-white tracking-tight">Table of Contents</h2>
      </div>
      {/* TOC List */}
      <ul className="space-y-1 px-6 py-3 mb-4" role="list">
        {headings.map(({ id, text }, index) => (
          <li key={id} role="listitem">
            <button
              onClick={() => scrollToHeading(id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "block w-full text-left text-sm transition-colors rounded-lg px-2 py-1.5 focus:outline-none pl-2",
                activeId === id
                  ? "font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 dark:border-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300",
                focusedIndex === index && "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-950"
              )}
              aria-current={activeId === id ? "location" : undefined}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
      {/* Bottom: Reading Progress Bar */}
      <div className="mt-auto pt-2 px-6 pb-6">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Reading Progress</div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
            aria-label={`${Math.round(readingProgress)}% read`}
          />
        </div>
      </div>
    </nav>
  )
}
