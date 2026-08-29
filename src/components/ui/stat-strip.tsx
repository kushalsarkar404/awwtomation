"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export interface Stat {
  /** Numeric target used for the count-up (e.g. 35, 3000). */
  value: number
  /** Text before the number, e.g. "$". */
  prefix?: string
  /** Text after the number, e.g. "%", "+", "h". */
  suffix?: string
  label: string
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    let startTime: number | null = null
    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [active, target, duration])

  return value
}

function StatValue({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active)
  return (
    <span className="font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
      {stat.prefix}
      {value.toLocaleString()}
      {stat.suffix}
    </span>
  )
}

export function StatStrip({
  stats,
  className,
}: {
  stats: Stat[]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2 bg-[#0a0a0c] px-6 py-8 sm:px-8 sm:py-10">
          <StatValue stat={stat} active={active} />
          <span className="text-sm leading-6 text-zinc-400">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
