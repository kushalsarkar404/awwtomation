import { FaqAccordion } from "@/components/faq-accordion"
import type { FaqItem } from "@/lib/seo"

interface FaqCardSectionProps {
  title: string
  description: string
  faqs: FaqItem[]
  className?: string
}

export function FaqCardSection({ title, description, faqs, className = "" }: FaqCardSectionProps) {
  if (!faqs.length) {
    return null
  }

  return (
    <section className={`w-full border-y border-white/10 bg-[#09090a] px-4 py-24 md:px-12 lg:py-32 ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-md leading-7 text-muted-foreground md:text-lg">{description}</p>
        </div>
        <FaqAccordion items={faqs} />
      </div>
    </section>
  )
}
