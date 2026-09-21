import { SpotIcon } from "@/components/mc/icons"
import type { FaqItem } from "@/lib/seo"
import { cn } from "@/lib/utils"

/**
 * FAQ accordion. Native <details> keeps every answer in the HTML for search.
 * At 1800px ManyChat's list is 925px wide with 24px questions on 76px rows.
 */
export function Faq({
  faqs,
  title = "Frequently asked questions",
  spot,
  dark = true,
}: {
  faqs: FaqItem[]
  title?: string
  spot?: string
  dark?: boolean
}) {
  if (!faqs.length) return null
  return (
    <section className={cn("px-5 pb-28 pt-28 lg:pb-[11vw] lg:pt-[12vw]", dark ? "bg-ink text-white" : "bg-white text-ink")}>
      <div className="mx-auto max-w-[30rem] text-center lg:max-w-[63vw]">
        {dark && spot ? (
          <span style={{ color: spot }} className="inline-block">
            <SpotIcon name="smile" className="mx-auto size-14 lg:size-[3.9rem]" />
          </span>
        ) : null}
        <h2 className="mc-h2 mt-4 lg:mt-5">{title}</h2>
      </div>
      <div className="mx-auto mt-14 max-w-[57.8rem] lg:mt-[5.4vw] lg:max-w-[max(51.4vw,40rem)]">
        {faqs.map((faq) => (
          <details key={faq.question} className={cn("group border-b", dark ? "border-white/25" : "border-line")}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 lg:py-[1.25vw] [&::-webkit-details-marker]:hidden">
              <span className="mc-sub">{faq.question}</span>
              <svg viewBox="0 0 18 10" className="h-2.5 w-[18px] shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden>
                <path d="M1 1l8 8 8-8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </summary>
            <p className={cn("pb-6 pr-10 text-[1.0625rem] leading-relaxed lg:text-[clamp(1rem,1.06vw,1.25rem)]", dark ? "text-white/70" : "text-mute")}>
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
