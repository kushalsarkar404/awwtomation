"use client"

import { type ReactNode, useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * A surface that follows the pointer with a soft violet spotlight.
 * Uses `.spotlight-card` (see globals.css) for the glow layer and updates
 * CSS custom properties on move. Radius/padding come from `className`.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "spotlight-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] transition-colors duration-300 hover:border-white/20",
        className,
      )}
    >
      {children}
    </div>
  )
}
