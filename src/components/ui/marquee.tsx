import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Infinite horizontal marquee. Children are duplicated once so the track
 * loops seamlessly. Pauses on hover, respects reduced motion (globals.css).
 */
export function Marquee({
  children,
  className,
  duration = 40,
  gap = "1rem",
  reverse = false,
}: {
  children: ReactNode
  className?: string
  duration?: number
  gap?: string
  reverse?: boolean
}) {
  return (
    <div
      className={cn("marquee", className)}
      data-reverse={reverse}
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-gap": gap,
        } as React.CSSProperties
      }
    >
      <div className="marquee-track">
        {children}
        <span className="flex shrink-0" style={{ gap }} aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  )
}
