import Link from "next/link"
import type { LinkCardItem } from "@/lib/seo"

interface LinkCardSectionProps {
  eyebrow?: string
  title: string
  description?: string
  links: LinkCardItem[]
  className?: string
}

export function LinkCardSection({
  eyebrow,
  title,
  description,
  links,
  className = "",
}: LinkCardSectionProps) {
  if (!links.length) {
    return null
  }

  return (
    <section className={`border-y border-white/10 bg-[#09090a] px-4 py-24 md:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          {eyebrow ? (
            <p className="mx-auto flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-200">
              <span className="h-px w-8 bg-violet-300/70" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2>
          {description ? <p className="leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.title}`}
              href={link.href}
              className="group bg-[#0c0c0e] p-7 transition-colors hover:bg-[#141418]"
            >
              <div className="flex min-h-56 flex-col">
                <h3 className="text-xl font-semibold group-hover:text-violet-200">{link.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{link.description}</p>
                <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-violet-300">
                  Explore resource
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
