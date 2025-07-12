"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CollapsibleSectionProps {
  id: string
  title: string
  level: number
  children: React.ReactNode
}

export function CollapsibleSection({ id, title, level, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true)

  const renderHeading = () => {
    const headingProps = {
      id,
      className: cn(
        "flex items-center gap-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors scroll-mt-24",
        {
          "text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white": level === 2,
          "text-2xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-100": level === 3,
          "text-xl font-semibold mb-2 mt-4 text-gray-800 dark:text-gray-100": level === 4,
        },
      ),
      onClick: () => setIsOpen(!isOpen),
      children: (
        <>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
          {title}
        </>
      ),
    }

    switch (level) {
      case 1:
        return <h1 {...headingProps} />
      case 2:
        return <h2 {...headingProps} />
      case 3:
        return <h3 {...headingProps} />
      case 4:
        return <h4 {...headingProps} />
      case 5:
        return <h5 {...headingProps} />
      case 6:
        return <h6 {...headingProps} />
      default:
        return <h2 {...headingProps} />
    }
  }

  return (
    <div className="my-6">
      {renderHeading()}
      {isOpen && <div className="mt-4 pl-7 border-l-2 border-gray-200 dark:border-gray-700">{children}</div>}
    </div>
  )
}
