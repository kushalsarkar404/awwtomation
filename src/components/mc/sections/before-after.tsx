"use client"

import { useRef } from "react"

import { McButton } from "@/components/mc/button"
import { BoxCheck } from "@/components/mc/icons"
import { segment, useScrollProgress } from "@/components/mc/use-scroll-progress"
import type { MarketingPage } from "@/content/mc-types"
import { brand, SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

/*
 * ManyChat's cards are 690 x 713 with a 22px gap at an 1800 x 1130 viewport;
 * on desktop everything here scales with the viewport width.
 */
function Card({
  variant,
  title,
  items,
  scribble = 0,
}: {
  variant: "before" | "after"
  title: string
  items: string[]
  scribble?: number
}) {
  const after = variant === "after"
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-[28px] px-6 pb-6 pt-12 lg:rounded-[2vw] lg:px-[1.95vw] lg:pb-[1.95vw] lg:pt-[3.5vw]",
        after ? "bg-green text-white" : "bg-fog text-ink",
      )}
    >
      <div className="text-center">
        <p className="text-[1rem] font-bold lg:text-[clamp(0.9375rem,1vw,1.125rem)]">
          {after ? "After" : "Before"} {brand.name}:
        </p>
        <p className="mc-h3 mx-auto mt-4 max-w-[20rem] [text-wrap:balance] lg:mt-[1.1vw] lg:max-w-[25.5vw]">{title}</p>
      </div>
      {after ? (
        <svg
          aria-hidden
          viewBox="0 0 420 250"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-[13%] top-[5%] h-[40%] w-[77%]"
          style={{ opacity: scribble > 0 ? 1 : 0 }}
          fill="none"
        >
          <path
            d="M262 12c-52-10-190 2-226 58-32 50 44 118 172 128 132 10 206-46 180-104-20-46-128-64-232-50C82 52 22 86 48 134"
            stroke="#fff200"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset={1 - scribble}
          />
        </svg>
      ) : null}
      <ul className="mt-auto pt-10">
        {items.map((item, index) => (
          <li
            key={item}
            className={cn(
              "flex min-h-[52px] items-center justify-between gap-6 lg:min-h-[3.2vw]",
              index < items.length - 1 && "border-b",
              after ? "border-white/20" : "border-ink/10",
            )}
          >
            <span className="font-mono text-[0.8125rem] uppercase leading-snug tracking-[0.02em] lg:text-[clamp(0.8125rem,0.88vw,1rem)]">
              {item}
            </span>
            <BoxCheck tone={after ? "light" : "dark"} className="size-5 shrink-0 lg:size-[1.22vw]" />
          </li>
        ))}
      </ul>
      <McButton href={SIGNUP_URL} variant={after ? "white" : "black"} size="lg" full className="mt-8 lg:mt-[2.85vw]">
        Get started
      </McButton>
    </div>
  )
}

/** Before and after cards; scrolling slides "before" behind "after" and draws a loop round it. */
export function BeforeAfter({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  const slide = segment(progress, 0.08, 0.55)
  const draw = segment(progress, 0.5, 0.9)
  const { before, after } = page.beforeAfter

  return (
    <>
      {/* Pulled up under the intro so the cards start ~117px below its text, as on ManyChat. */}
      <section
        ref={ref}
        className="relative hidden lg:block"
        style={{ height: "230vh", marginTop: "calc(6.5vw - 89px - (100vh - 89px - min(39.6vw, 63vh)) / 2)" }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden pt-[89px]">
          <div className="relative h-[min(39.6vw,63vh)] w-[77.9vw]">
            <div
              className="absolute left-0 top-0 h-full w-[38.33vw] origin-center"
              style={{
                transform: `translateX(${slide * 19.8}vw) scale(${1 - slide * 0.063})`,
                opacity: 1 - segment(progress, 0.55, 0.62),
              }}
            >
              <Card variant="before" title={before.title} items={before.items} />
            </div>
            <div className="absolute right-0 top-0 z-10 h-full w-[38.33vw]" style={{ transform: `translateX(${-slide * 19.8}vw)` }}>
              <Card variant="after" title={after.title} items={after.items} scribble={draw} />
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-4 bg-white px-5 pb-24 lg:hidden">
        <Card variant="before" title={before.title} items={before.items} />
        <Card variant="after" title={after.title} items={after.items} scribble={1} />
      </section>
    </>
  )
}
