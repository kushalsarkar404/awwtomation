"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Home, FileText, Sparkles } from "lucide-react"
import Link from "next/link"

interface RealEstateBannerProps {
  onClose?: () => void
  position?: "top" | "bottom"
}

export default function RealEstateBanner({ onClose, position = "top" }: RealEstateBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("realEstateBannerDismissed")
    if (stored) {
      try {
        const { dismissedAt, reappearAfter } = JSON.parse(stored)
        const now = Date.now()
        if (now - dismissedAt < reappearAfter) {
          setHasCheckedStorage(true)
          return // don't show yet
        }
      } catch {
        // fallback
      }
    }
  
    setTimeout(() => {
      setIsVisible(true)
      setHasCheckedStorage(true)
    }, 1000)
  }, [])
  
  if (!isVisible || !hasCheckedStorage) return null
  

  const handleDismiss = () => {
    setIsVisible(false)
    const now = new Date().getTime()
    const oneWeekInMs =7*24 * 60 * 60 * 1000
    localStorage.setItem("realEstateBannerDismissed", JSON.stringify({ dismissedAt: now, reappearAfter: oneWeekInMs }))
    onClose?.()
  }
  

  const handleLearnMore = () => {
    // Track engagement for analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Real Estate Banner",
        event_label: "Learn More",
      })
    }
  }


  return (
    <div
      className={`fixed ${
        position === "top" ? "top-0" : "bottom-0"
      } left-0 right-0 z-60 transform transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : position === "top"
            ? "-translate-y-full opacity-0"
            : "translate-y-full opacity-0"
      }`}
      role="banner"
      aria-label="New Real Estate Automation Features Announcement"
    >
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 border-b border-emerald-200 dark:border-emerald-800 shadow-sm z-1000000">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Content */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Home className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <Sparkles className="h-3 w-3 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <h2 className="text-sm font-semibold text-emerald-800 dark:text-emerald-200 flex items-center gap-1">
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full text-xs font-medium">
                      Coming Soon!!
                    </span>
                    Real Estate Automation
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 truncate sm:truncate-none">
                    <span className="hidden sm:inline">
                      Automated blog content and property listings for real estate professionals
                    </span>
                    <span className="sm:hidden">Auto blog and listing tools for realtors</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
    
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100 dark:text-emerald-400 dark:hover:text-emerald-200 dark:hover:bg-emerald-900"
                onClick={handleDismiss}
                aria-label="Dismiss real estate automation announcement"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
