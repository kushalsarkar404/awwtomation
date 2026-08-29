import type { CSSProperties, ReactNode } from "react"

import { cn } from "@/lib/utils"

export function ScrollStack({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("scroll-stack", className)}>{children}</div>
}

export function ScrollStackItem({
  children,
  className,
  index,
}: {
  children: ReactNode
  className?: string
  index: number
}) {
  return (
    <article
      className={cn("scroll-stack-item", className)}
      style={{ "--stack-index": index } as CSSProperties}
    >
      {children}
    </article>
  )
}
