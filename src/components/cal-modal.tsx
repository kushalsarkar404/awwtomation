"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface CalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  calLink: string
}

// Define a global type for window.Cal
declare global {
  interface Window {
    Cal?: any
  }
}

export function CalModal({ open, onOpenChange, calLink }: CalModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (typeof window !== "undefined") {
      // @ts-expect-error We expect Cal to be injected dynamically
      (function (C: any, A: string, L: string) {
        const p = (a: any, ar: any) => {
          a.q.push(ar)
        }

        const d = C.document
        C.Cal =
          C.Cal ||
          function (...args: any[]) {
            const cal = C.Cal
            if (!cal.loaded) {
              cal.ns = {}
              cal.q = cal.q || []
              const script = d.createElement("script")
              script.src = A
              d.head.appendChild(script)
              cal.loaded = true
            }

            if (args[0] === L) {
              const api = function (...innerArgs: any[]) {
                p(api, innerArgs)
              }
              const namespace = args[1]
              api.q = api.q || []
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api
                p(cal.ns[namespace], args)
                p(cal, ["initNamespace", namespace])
              } else {
                p(cal, args)
              }
              return
            }

            p(cal, args)
          }
      })(window, "https://app.cal.com/embed/embed.js", "init")

      window.Cal("init", "initial-consultation", { origin: "https://cal.com" })
    }
  }, [])

  useEffect(() => {
    if (open && isMounted && typeof window !== "undefined" && window.Cal?.ns) {
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
