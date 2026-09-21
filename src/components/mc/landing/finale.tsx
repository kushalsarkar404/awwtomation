"use client"

import { useRef } from "react"

import { McButton } from "@/components/mc/button"
import { PhotoSlot } from "@/components/mc/placeholder"
import { segment, useScrollProgress } from "@/components/mc/use-scroll-progress"
import type { UseCasePage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

/*
 * A pinned 142px headline on the page colour; white cards (649px wide at
 * 1800px, alternating right and left) scroll up over it while it fades back.
 */
export function Finale({ page }: { page: UseCasePage }) {
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  const fade = 1 - segment(progress, 0.06, 0.26) * 0.78

  return (
    <section ref={ref} className="relative text-white" style={{ backgroundColor: page.accent }}>
      <div className="sticky top-0 flex h-screen items-center justify-center px-5">
        <h2
          className="max-w-[26rem] text-center font-display lg:max-w-[62vw] text-[clamp(3rem,7.9vw,9.5rem)] font-black leading-[0.825] tracking-[-0.035em]"
          style={{ opacity: fade }}
        >
          {page.finale.title}
        </h2>
      </div>
      <div className="relative -mt-[35vh] px-5 pb-[30vh] sm:px-10 lg:mx-auto lg:w-[73.3vw] lg:px-0">
        {page.finale.cards.map((card, index) => (
          <div
            key={card.title}
            className={cn(
              "w-full max-w-[520px] rounded-[32px] bg-white p-7 text-ink md:w-[49.2%] md:max-w-none lg:rounded-[2.5vw] lg:p-[1.95vw]",
              index % 2 === 0 ? "ml-auto" : "mr-auto",
              index > 0 && "mt-10 md:-mt-[4vw]",
            )}
          >
            <PhotoSlot tone={index % 2 === 0 ? "warm" : "cool"} label={card.photo} className="aspect-[579/326] rounded-[18px] lg:rounded-[1vw]" />
            <h3 className="mt-6 text-[1.75rem] font-bold tracking-[-0.01em] lg:mt-[1.4vw] lg:text-[clamp(1.5rem,1.78vw,2.25rem)]">{card.title}</h3>
            <ul className="mt-5 space-y-3 lg:mt-[1.6vw] lg:space-y-[1.2vw]">
              {card.checks.map((check) => (
                <li key={check} className="mc-sub flex items-center gap-4">
                  <svg viewBox="0 0 20 20" className="size-5 shrink-0 lg:size-[1.25vw]" aria-hidden>
                    <path d="M3 10.5l4.5 5L17 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {check}
                </li>
              ))}
            </ul>
            <McButton href={SIGNUP_URL} variant="black" size="lg" className="mt-8 lg:mt-[2.1vw]">
              Start for free
            </McButton>
          </div>
        ))}
      </div>
    </section>
  )
}
