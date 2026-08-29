import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"

export interface ProcessStep {
  title: string
  description: string
  icon?: LucideIcon
}

/**
 * A connected process — a lighter, more dynamic replacement for
 * a row of identical step cards. Horizontal rail on desktop, vertical on
 * mobile, with a gradient connector line threading the nodes.
 */
export function ProcessRail({
  steps,
  className,
}: {
  steps: ProcessStep[]
  className?: string
}) {
  return (
    <ol className={cn("relative grid gap-y-10 md:grid-cols-4 md:gap-x-6", className)}>
      {/* connector line */}
      <span
        aria-hidden="true"
        className="process-rail-line absolute left-[1.35rem] top-4 bottom-4 w-px md:left-10 md:right-10 md:top-[1.35rem] md:h-px md:w-auto md:bg-gradient-to-r md:from-violet-300/10 md:via-violet-300/40 md:to-violet-300/10"
      />
      {steps.map((step, index) => (
        <Reveal
          as="li"
          key={step.title}
          delay={index * 110}
          className="relative flex gap-5 pl-0 md:flex-col md:gap-4"
        >
          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-[#0c0c0e] text-violet-200 shadow-[0_0_30px_rgba(124,58,237,0.25)]">
            {step.icon ? <step.icon className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-violet-300" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
