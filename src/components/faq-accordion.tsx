import { Plus } from "lucide-react"

import type { FaqItem } from "@/lib/seo"

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-medium text-white marker:content-none">
            <span>{item.question}</span>
            <Plus className="h-5 w-5 shrink-0 text-violet-300 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="max-w-3xl pb-6 pr-10 leading-7 text-zinc-400">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
