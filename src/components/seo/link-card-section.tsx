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
    <section className={`py-20 px-4 md:px-12 bg-muted/30 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {eyebrow ? (
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-muted-foreground">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {description ? <p className="text-muted-foreground md:text-lg">{description}</p> : null}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.title}`}
              href={link.href}
              className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                {link.label ? (
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {link.label}
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold group-hover:text-primary">{link.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{link.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
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
