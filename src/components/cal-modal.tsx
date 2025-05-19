"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface CalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  calLink: string
}

declare global {
  interface Window {
    Cal: any
  }
}

export function CalModal({ open, onOpenChange, calLink }: CalModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Only add Cal script if it hasn't been added
    if (typeof window !== "undefined" && !window.Cal) {
      const script = document.createElement("script")
      script.src = "https://app.cal.com/embed/embed.js"
      script.async = true
      script.onload = () => {
        if (!window.Cal?.ns?.["initial-consultation"]) {
          window.Cal("init", "initial-consultation", { origin: "https://cal.com" })
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (
      open &&
      isMounted &&
      typeof window !== "undefined" &&
      window.Cal?.ns?.["initial-consultation"]
    ) {
      setTimeout(() => {
        try {
          window.Cal.ns["initial-consultation"]("inline", {
            elementOrSelector: "#my-cal-inline",
            config: { layout: "month_view" },
            calLink,
          })
          window.Cal.ns["initial-consultation"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
          })
        } catch (error) {
          console.error("Cal embed failed", error)
        }
      }, 300) // Give DOM more time in production
    }
  }, [open, isMounted, calLink])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-background border rounded-lg shadow-lg w-full max-w-4xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-center flex-1 pr-8">
            Book a meeting with our automation experts and transform your business processes!
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-1 hover:bg-muted"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="flex-1">
          <div id="my-cal-inline" className="w-full" style={{ minHeight: "600px" }} />
        </div>
      </div>
    </div>
  )
}
