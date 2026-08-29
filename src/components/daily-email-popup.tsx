"use client"

import { useEffect, useState } from "react"

import { BlogEmailMarketingSolutionForm } from "@/components/blog-email-marketing-solution-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { createDailyPopupRecord, shouldShowDailyPopup } from "@/lib/daily-popup"

const STORAGE_KEY = "awwtomation:email-marketing-popup"
const OPEN_DELAY_IN_MS = 15_000
const ELIGIBLE_PATHS = ["/blog", "/services/email-marketing-automation"]

export function DailyEmailPopup() {
  const [open, setOpen] = useState(false)
  const [pageContext, setPageContext] = useState({
    pageSlug: "/",
    postTitle: "Awwtomation",
  })

  useEffect(() => {
    const pathname = window.location.pathname
    const isEligiblePage = ELIGIBLE_PATHS.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    )

    if (!isEligiblePage) {
      return
    }

    let storedValue: string | null = null

    try {
      storedValue = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // The popup can still work when storage is blocked by browser settings.
    }

    if (!shouldShowDailyPopup(storedValue)) {
      return
    }

    const timer = window.setTimeout(() => {
      setPageContext({
        pageSlug: pathname,
        postTitle: document.title || "Awwtomation",
      })

      try {
        window.localStorage.setItem(STORAGE_KEY, createDailyPopupRecord())
      } catch {
        // Keep the form usable even when local storage is unavailable.
      }

      setOpen(true)
    }, OPEN_DELAY_IN_MS)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto p-0 sm:max-w-md">
        <DialogHeader className="sr-only">
          <DialogTitle>Email Marketing Solution</DialogTitle>
          <DialogDescription>
            Submit your email address to learn more about Awwtomation&apos;s managed email marketing service.
          </DialogDescription>
        </DialogHeader>
        <BlogEmailMarketingSolutionForm
          className="rounded-lg border-0 shadow-none"
          pageSlug={pageContext.pageSlug}
          postTitle={pageContext.postTitle}
        />
      </DialogContent>
    </Dialog>
  )
}
