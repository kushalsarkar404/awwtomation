import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"
import { SpotlightCard } from "@/components/ui/spotlight-card"

/**
 * A masonry-feeling bento grid. Children declare their own span via
 * BentoCard's `span` prop so the layout reads as varied, not a uniform
 * card wall. Defaults to a 6-column desktop grid.
 */
export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6", className)}>
      {children}
    </div>
  )
}

const spanMap: Record<string, string> = {
  sm: "lg:col-span-2",
  md: "lg:col-span-3",
  lg: "lg:col-span-4",
  wide: "lg:col-span-6",
  half: "lg:col-span-3",
}

interface BentoCardProps {
  icon?: LucideIcon
  eyebrow?: string
  title: string
  description?: string
  span?: keyof typeof spanMap
  featured?: boolean
  index?: number
  children?: ReactNode
  className?: string
}

export function BentoCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  span = "sm",
  featured = false,
  index = 0,
  children,
  className,
}: BentoCardProps) {
  return (
    <Reveal
      delay={index * 70}
      variant="scale"
      className={cn(spanMap[span], "flex")}
    >
      <SpotlightCard
        className={cn(
          "flex w-full flex-col p-6 sm:p-7",
          featured &&
            "bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_60%),#0c0c0e]",
          className,
        )}
      >
        {Icon ? (
          <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-200 transition-colors duration-300 group-hover:border-violet-300/40 group-hover:text-violet-100">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        {eyebrow ? (
          <span className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-300/80">
            {eyebrow}
          </span>
        ) : null}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
        ) : null}
        {children ? <div className="mt-auto pt-5">{children}</div> : null}
      </SpotlightCard>
    </Reveal>
  )
}
