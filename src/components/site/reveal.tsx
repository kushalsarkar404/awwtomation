"use client"

import { useEffect, useRef, type ReactNode } from "react"

/**
 * Fades content up as it enters the viewport. Styling lives in globals.css
 * behind `[data-reveal]`, which also handles prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "shown")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} data-reveal="" style={{ ["--reveal-delay" as string]: `${delay}ms` }} className={className}>
      {children}
    </div>
  )
}
