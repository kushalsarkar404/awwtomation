"use client"

import { useEffect, useState } from "react"
import { X } from 'lucide-react'

interface CalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  calLink: string
}

// Define types for Cal.com integration
interface CalNamespace {
  (action: string, ...args: unknown[]): void
  q: unknown[]
}

interface CalObject {
  (method: string, ...args: unknown[]): void
  loaded?: boolean
  ns: Record<string, CalNamespace>
  q: unknown[]
}

interface CalWindow extends Window {
  Cal?: CalObject
}

export function CalModal({ open, onOpenChange, calLink }: CalModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Initialize Cal on mount
    if (typeof window !== "undefined") {
      // Initialize Cal.com embed
      (function (C: Window, A: string, L: string) {
        const p = function (a: { q: unknown[] }, ar: unknown[]): void {
          a.q.push(ar)
        }
        const d = C.document
      
        // Create Cal object on window
        const calWindow = C as CalWindow
        calWindow.Cal =
          calWindow.Cal ||
          function (this: unknown, ...args: unknown[]) {
            const cal = calWindow.Cal as CalObject
            const ar = args
            if (!cal?.loaded) {
              cal.ns = cal.ns || {}
              cal.q = cal.q || []
              const script = d.head.appendChild(d.createElement("script"))
              script.src = A
              cal.loaded = true
            }
            if (ar[0] === L) {
              const api = function (this: unknown, ...callArgs: unknown[]) {
                p(api as unknown as { q: unknown[] }, callArgs)
              } as CalNamespace
              api.q = []
              const namespace = ar[1] as string
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api
                p(cal.ns[namespace] as unknown as { q: unknown[] }, ar)
                p(cal as unknown as { q: unknown[] }, ["initNamespace", namespace])
              } else p(cal as unknown as { q: unknown[] }, ar)
              return
            }
            p(cal as unknown as { q: unknown[] }, ar)
          } as CalObject
      })(window, "https://app.cal.com/embed/embed.js", "init")

      // Initialize Cal with the specific namespace
      const calWindow = window as CalWindow
      calWindow.Cal?.("init", "initial-consultation", { origin: "https://cal.com" })
    }
  }, [])

  useEffect(() => {
    if (open && isMounted && typeof window !== "undefined") {
      const calWindow = window as CalWindow
      
      if (calWindow.Cal?.ns) {
        setTimeout(() => {
          try {
            // Dynamically load the correct calLink
            calWindow.Cal?.ns["initial-consultation"]("inline", {
              elementOrSelector: "#my-cal-inline",
              config: { layout: "month_view" },
              calLink: calLink,
            })

            calWindow.Cal?.ns["initial-consultation"]("ui", {
              hideEventTypeDetails: false,
              layout: "month_view",
            })
          } catch (error) {
            console.error("Error initializing Cal:", error)
          }
        }, 100)
      }
    }
  }, [open, isMounted, calLink])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="relative bg-background border rounded-lg shadow-lg w-full max-w-4xl h-[90vh] sm:h-auto flex flex-col">
        <div className="flex items-center justify-between p-3 sm:p-4 border-b flex-shrink-0">
          <h2 className="text-lg sm:text-xl font-semibold text-center flex-1 pr-2 sm:pr-8">
            Book a meeting with our automation experts and transform your business processes!
          </h2>
          <button 
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 hover:bg-muted transition-colors touch-manipulation"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <div 
            id="my-cal-inline" 
            className="w-full h-full" 
            style={{ minHeight: "500px", maxHeight: "calc(90vh - 80px)" }}
          ></div>
        </div>
      </div>
    </div>
  )
}