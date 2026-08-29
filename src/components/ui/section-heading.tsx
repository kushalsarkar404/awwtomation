import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  /** Keep this to one or two short sentences — sections should not be text-heavy. */
  intro?: ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal
          as="p"
          className={cn(
            "flex items-center gap-3 self-start text-xs font-medium uppercase tracking-[0.22em] text-violet-200",
            align === "center" && "self-center",
          )}
        >
          <span className="h-px w-8 bg-violet-300/70" aria-hidden="true" />
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal
        as="h2"
        delay={60}
        className={cn(
          "font-display text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </Reveal>
      {intro ? (
        <Reveal
          as="p"
          delay={120}
          className={cn(
            "text-pretty text-lg leading-8 text-zinc-400",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </Reveal>
      ) : null}
    </div>
  )
}
