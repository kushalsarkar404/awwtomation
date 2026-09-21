import type { CSSProperties, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Three stacked cards with thick coloured borders: the picture frame ManyChat's
 * use-case pages use for every photo. The front card turns by `tilt`; the two
 * cards behind it turn a further `spread` and `spread / 2` degrees.
 */
export function TiltedStack({
  accent = "#fb0df7",
  tilt = 0,
  spread = -2.6,
  fan = 1,
  radius = 36,
  border = 7,
  className,
  children,
}: {
  accent?: string
  /** Rotation of the front card in degrees. */
  tilt?: number
  /** Extra rotation of the back card in degrees (the middle card gets half). */
  spread?: number
  /** 0 collapses the back cards behind the front one, 1 fans them out. */
  fan?: number
  radius?: number | string
  border?: number | string
  className?: string
  children: ReactNode
}) {
  const layer = (rotate: number): CSSProperties => ({
    borderColor: accent,
    borderWidth: border,
    borderRadius: radius,
    transform: `rotate(${tilt + rotate * fan}deg)`,
  })
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute inset-0 bg-ink" style={layer(spread)} />
      <div aria-hidden className="absolute inset-0 bg-ink" style={layer(spread / 2)} />
      <div className="relative h-full overflow-hidden bg-ink" style={layer(0)}>
        {children}
      </div>
    </div>
  )
}
