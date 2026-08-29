import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"

export interface FeatureRow {
  eyebrow?: string
  title: string
  description: string
  /** Short capability chips — these double as the nodes in the visual. */
  bullets?: string[]
  icon?: LucideIcon
}

function WorkflowVisual({ row, icon: Icon }: { row: FeatureRow; icon?: LucideIcon }) {
  const nodes = (row.bullets ?? []).slice(0, 4)
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0d] p-6 sm:p-8">
      <div className="aurora-bg opacity-60" aria-hidden="true" />
      <div className="grid-texture absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-violet-200">
            {Icon ? <Icon className="h-5 w-5" /> : null}
          </span>
          <div className="h-2 w-24 rounded-full bg-white/10" />
          <div className="ml-auto flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-violet-300/60" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="relative space-y-3">
          {nodes.length > 0 && (
            <span
              aria-hidden="true"
              className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-violet-300/50 to-violet-300/5"
            />
          )}
          {nodes.map((node, index) => (
            <Reveal
              key={node}
              delay={index * 110}
              variant="left"
              className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 backdrop-blur-sm"
            >
              <span className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#0b0b0d] bg-violet-300 ring-1 ring-violet-300/40" />
              <span className="text-sm text-zinc-200">{node}</span>
              <Check className="ml-auto h-4 w-4 text-violet-300/70" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FeatureRows({
  rows,
  className,
}: {
  rows: FeatureRow[]
  className?: string
}) {
  return (
    <div className={cn("space-y-20 lg:space-y-28", className)}>
      {rows.map((row, index) => {
        const flip = index % 2 === 1
        return (
          <div
            key={row.title}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal
              variant={flip ? "right" : "left"}
              className={cn("flex flex-col gap-5", flip && "lg:order-2")}
            >
              {row.eyebrow ? (
                <p className="flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
                  <span className="h-px w-7 bg-violet-300/70" aria-hidden="true" />
                  {row.eyebrow}
                </p>
              ) : null}
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                {row.title}
              </h3>
              <p className="text-base leading-7 text-zinc-400">{row.description}</p>
              {row.bullets && row.bullets.length > 0 ? (
                <ul className="grid gap-2 pt-1 sm:grid-cols-2">
                  {row.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm leading-6 text-zinc-300"
                    >
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-violet-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
            <Reveal
              variant="scale"
              delay={120}
              className={cn(flip && "lg:order-1")}
            >
              <WorkflowVisual row={row} icon={row.icon} />
            </Reveal>
          </div>
        )
      })}
    </div>
  )
}
