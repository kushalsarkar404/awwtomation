"use client"

import { useEffect, useState } from "react"
import { X } from 'lucide-react'

interface CalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  calLink: string
}

export function CalModal({ open, onOpenChange, calLink }: CalModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Initialize Cal on mount
    if (typeof window !== "undefined") {
      // @ts-ignore
(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar)
    }
    const d = C.document
  
        C.Cal =
          C.Cal ||
          function () {
            let cal = C.Cal
            let ar = arguments
            if (!cal.loaded) {
              cal.ns = {}
              cal.q = cal.q || []
              d.head.appendChild(d.createElement("script")).src = A
              cal.loaded = true
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments)
              }
              const namespace = ar[1]
              api.q = api.q || []
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api
                p(cal.ns[namespace], ar)
                p(cal, ["initNamespace", namespace])
              } else p(cal, ar)
              return
            }
            p(cal, ar)
          }
      })(window, "https://app.cal.com/embed/embed.js", "init")

      ;(window as any).Cal("init", "initial-consultation", { origin: "https://cal.com" })
    }
  }, [])

  useEffect(() => {
    if (open && isMounted && typeof window !== "undefined" && (window as any).Cal?.ns) {
      setTimeout(() => {
        try {
          // Dynamically load the correct calLink
          ;(window as any).Cal.ns["initial-consultation"]("inline", {
            elementOrSelector: "#my-cal-inline",
            config: { layout: "month_view" },
            calLink: calLink,
          })

          ;(window as any).Cal.ns["initial-consultation"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
          })
        } catch (error) {
          console.error("Error initializing Cal:", error)
        }
      }, 100)
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
          <div id="my-cal-inline" className="w-full" style={{ minHeight: "600px" }}></div>
        </div>
      </div>
    </div>
  )
}
