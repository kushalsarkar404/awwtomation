import Link from "next/link"

import { cn } from "@/lib/utils"

export type McButtonVariant = "black" | "white" | "magenta" | "outline" | "outline-light" | "yellow"

const variants: Record<McButtonVariant, string> = {
  black: "bg-ink text-white hover:bg-black",
  white: "bg-white text-ink hover:bg-fog",
  magenta: "bg-magenta text-white hover:brightness-95",
  yellow: "bg-yellow text-ink hover:brightness-95",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white text-white hover:bg-white hover:text-ink",
}

/** Three stacked copies of the label; the stack rolls up a line on hover. */
export function RollingLabel({ children }: { children: string }) {
  return (
    <span className="roll" aria-hidden>
      <span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </span>
    </span>
  )
}

export function McButton({
  href,
  children,
  variant = "black",
  size = "md",
  full = false,
  className,
}: {
  href: string
  children: string
  variant?: McButtonVariant
  size?: "sm" | "md" | "lg"
  full?: boolean
  className?: string
}) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center rounded-full mc-label transition-colors duration-300",
    size === "sm" && "h-10 px-5 lg:h-[52px] lg:px-8",
    size === "md" && "h-12 px-7 lg:h-[52px] lg:px-8",
    size === "lg" && "h-[46px] px-7 lg:h-[52px] lg:px-8",
    full && "w-full",
    variants[variant],
    className,
  )
  const body = (
    <>
      <span className="sr-only">{children}</span>
      <RollingLabel>{children}</RollingLabel>
    </>
  )
  return href.startsWith("http") || href.startsWith("mailto:") ? (
    <a href={href} className={classes}>
      {body}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {body}
    </Link>
  )
}

/** Mono uppercase link with an arrow, e.g. "LEARN MORE →". */
export function McArrowLink({
  href,
  children,
  className,
  underline = false,
}: {
  href: string
  children: string
  className?: string
  underline?: boolean
}) {
  return (
    <Link href={href} className={cn("group mc-label inline-flex items-center gap-2", className)}>
      <span className={cn(underline && "underline underline-offset-4")}>{children}</span>
      <svg aria-hidden viewBox="0 0 20 12" className="h-3 w-5 transition-transform duration-300 group-hover:translate-x-1">
        <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </Link>
  )
}
