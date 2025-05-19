"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface CalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  calLink: string
}

type CalNamespaceFn = (action: string, options: Record<string, unknown>) => void

declare global {
  interface Window {
    Cal?: {
      loaded?: boolean
      ns?: Record<string, CalNamespaceFn>
      q?: unknown[]
      (command: string, namespace?: string | unknown, options?: Record<string, unknown>): void
    }
  }
}

export function CalModal({ open, onOpenChange, calLink }: CalModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (typeof window !== "undefined" && !window.Cal?.loaded) {
      const d = document
      const script = d.createElement("script")
      script.src = "https://app.cal.com/embed/embed.js"
      script.async = true
      d.head.appendChild(script)

      window.Cal = function (
        command: string,
        namespace?: string | unknown,
        options?: Record<string, unknown>
      ) {
        const cal = window.Cal as any
        cal.q = cal.q || []
        if (command === "init" && typeof namespace === "string") {
          cal.ns = cal.ns || {}
          const api = function (action: string, opts: Record<string, unknown>) {
            cal.q.push([action, opts])
          }
          cal.ns[namespace] = api
          cal.q.push(["initNamespace", namespace])
        } else {
          cal.q.push([command, namespace, options])
        }
      }
      window.Cal.loaded = true
    }
  }, [])

  useEffect(() => {
    if (open && isMounted && window.Cal?.ns?.["initial-consultation"]) {
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
        } catch (err) {
          console.error("Cal inline embed failed", err)
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
