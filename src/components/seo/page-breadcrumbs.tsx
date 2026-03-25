import Link from "next/link"
import type { BreadcrumbItem } from "@/lib/seo"

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function PageBreadcrumbs({ items, className = "" }: PageBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-slate-900">{item.name}</span>
              ) : (
                <Link className="hover:text-slate-900 hover:underline" href={item.href}>
                  {item.name}
                </Link>
              )}
              {!isLast ? <span aria-hidden="true" className="text-slate-400">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
