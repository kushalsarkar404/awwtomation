import type { BreadcrumbItem } from "@/lib/seo"

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function PageBreadcrumbs({ items, className = "" }: PageBreadcrumbsProps) {
  void items
  void className
  return null
}
