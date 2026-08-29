import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Standard page section shell: consistent vertical rhythm, max-width, and
 * optional atmospheric background. Keeps every page on the same spacing
 * system so sections stay airy rather than text-heavy walls.
 */
export function Section({
  children,
  className,
  innerClassName,
  tone = "base",
  aurora = false,
  bordered = false,
  id,
  "aria-labelledby": ariaLabelledby,
}: {
  children: ReactNode
  className?: string
  innerClassName?: string
  tone?: "base" | "alt" | "black"
  aurora?: boolean
  bordered?: boolean
  id?: string
  "aria-labelledby"?: string
}) {
  const toneClass =
    tone === "alt" ? "bg-[#09090a]" : tone === "black" ? "bg-black" : "bg-[#050505]"

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32",
        toneClass,
        bordered && "border-y border-white/10",
        className,
      )}
    >
      {aurora ? <div className="aurora-bg" aria-hidden="true" /> : null}
      <div className={cn("relative mx-auto max-w-6xl", innerClassName)}>{children}</div>
    </section>
  )
}
