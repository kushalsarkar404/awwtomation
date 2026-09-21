import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/*
 * The AI page runs on its own dark palette: near-black, a faint grid, and
 * the same heavy display face as the rest of the site. These are the pieces
 * every band on that page is built from.
 */

export const AI_INK = "#0b0b0c"

/** The faint grid that sits behind every band. */
export function AiGrid({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        "[background-image:linear-gradient(to_right,rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.055)_1px,transparent_1px)]",
        "[background-size:12.5vw_12.5vw]",
        className,
      )}
    />
  )
}

export function AiSection({ children, className, grid = true }: { children: ReactNode; className?: string; grid?: boolean }) {
  return (
    <section className={cn("relative overflow-hidden px-5 text-white lg:px-[6.2vw]", className)} style={{ backgroundColor: AI_INK }}>
      {grid ? <AiGrid /> : null}
      <div className="relative">{children}</div>
    </section>
  )
}

/** The same bold display heading used across the product pages. */
export function AiHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "mx-auto max-w-[15ch] text-center font-display font-black leading-[0.93] tracking-[-0.035em] [text-wrap:balance]",
        "text-[clamp(2.4rem,6vw,5.75rem)]",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function AiLead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mx-auto mt-6 max-w-[42rem] text-center text-[1.0625rem] leading-[1.45] text-white/60 lg:mt-[1.6vw] lg:text-[clamp(1rem,1.18vw,1.375rem)]", className)}>
      {children}
    </p>
  )
}

/** A checkbox and a line of mono uppercase text, as on the feature slides. */
export function AiCheck({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-4 lg:gap-[1vw]">
      <span className="mt-[0.15em] flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-white text-ink lg:size-[1.35vw] lg:min-h-[20px] lg:min-w-[20px]">
        <svg viewBox="0 0 20 20" className="w-[62%]" aria-hidden>
          <path d="M3 10.5l4.5 5L17 3" fill="none" stroke="currentColor" strokeWidth="2.6" />
        </svg>
      </span>
      <span className="font-mono text-[0.8125rem] uppercase leading-[1.45] tracking-[0.02em] text-white/85 lg:text-[clamp(0.8125rem,0.92vw,1.0625rem)]">
        {children}
      </span>
    </li>
  )
}

/**
 * The rainbow the page outlines things with. One gradient, defined once, so the
 * hero bubble and the borders all read as the same material.
 */
export const AI_RAINBOW = "linear-gradient(115deg,#ff4c00,#fb0df7,#7b34ce,#3c42c4,#007257,#fff200)"

/** A one-pixel gradient border around a dark panel. */
export function AiOutline({ children, className, radius = "24px" }: { children: ReactNode; className?: string; radius?: string }) {
  return (
    <div className={cn("relative p-px", className)} style={{ background: AI_RAINBOW, borderRadius: radius }}>
      <div className="relative h-full w-full" style={{ backgroundColor: AI_INK, borderRadius: `calc(${radius} - 1px)` }}>
        {children}
      </div>
    </div>
  )
}
