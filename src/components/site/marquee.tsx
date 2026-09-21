import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Infinite horizontal marquee. The children are rendered twice and the track
 * slides by half its width, so the loop is seamless at any content length.
 */
export function Marquee({
  children,
  className,
  fast = false,
  reverse = false,
}: {
  children: ReactNode
  className?: string
  fast?: boolean
  reverse?: boolean
}) {
  return (
    <div className={cn("marquee relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "marquee-track flex w-max shrink-0",
          fast ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
