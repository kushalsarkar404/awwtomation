"use client"

import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type RevealVariant = "up" | "scale" | "left" | "right"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Milliseconds before the reveal fires once in view. */
  delay?: number
  variant?: RevealVariant
  /** Render element (defaults to div). */
  as?: ElementType
  /** Fire only the first time it enters the viewport. */
  once?: boolean
}

/**
 * Lightweight scroll reveal built on IntersectionObserver. The visual
 * transition lives in globals.css via the [data-reveal] attribute so it
 * degrades gracefully and respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as,
  once = true,
}: RevealProps) {
  const Comp = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <Comp
      ref={ref}
      data-reveal={inView ? "in" : "out"}
      data-reveal-variant={variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Comp>
  )
}

/**
 * Convenience wrapper that staggers direct children by a fixed step.
 * Each child is wrapped in its own Reveal so lists animate in sequence.
 */
export function RevealStagger({
  children,
  className,
  step = 90,
  start = 0,
  variant = "up",
}: {
  children: ReactNode[]
  className?: string
  step?: number
  start?: number
  variant?: RevealVariant
}) {
  return (
    <div className={cn(className)}>
      {children.map((child, index) => (
        <Reveal key={index} delay={start + index * step} variant={variant}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
