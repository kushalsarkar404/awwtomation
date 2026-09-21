"use client"

import { useRef } from "react"

import { McButton } from "@/components/mc/button"
import { PhoneDevice } from "@/components/mc/chat"
import { AI_INK, AiGrid } from "@/components/mc/ai/shell"
import { useScrollProgress } from "@/components/mc/use-scroll-progress"
import { chats } from "@/content/chats"
import type { MarketingPage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"

/** Three speech bubbles drawn in the page's rainbow, widening out behind the phone. */
function BubbleRings() {
  const bubble =
    "M400 62C199 62 58 200 58 384c0 138 82 251 205 299l-14 99 95-73c18 2 37 3 56 3 201 0 342-138 342-328C742 200 601 62 400 62Z"
  return (
    <svg
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid meet"
      className="ai-bubble-rings pointer-events-none absolute left-1/2 top-1/2 h-[116%] w-auto -translate-x-1/2 -translate-y-1/2"
      aria-hidden
    >
      <defs>
        <linearGradient id="ai-rainbow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ff4c00" />
          <stop offset="0.25" stopColor="#fb0df7" />
          <stop offset="0.5" stopColor="#7b34ce" />
          <stop offset="0.72" stopColor="#3c42c4" />
          <stop offset="0.88" stopColor="#007257" />
          <stop offset="1" stopColor="#fff200" />
        </linearGradient>
      </defs>
      {[1, 0.84, 0.68].map((scale, index) => (
        <path
          key={scale}
          d={bubble}
          fill="none"
          stroke="url(#ai-rainbow)"
          strokeWidth={1.4 / scale}
          opacity={0.9 - index * 0.16}
          className="ai-bubble-ring"
          style={{ animationDelay: `${index * -1.4}s` }}
          transform={`translate(${400 * (1 - scale)} ${400 * (1 - scale)}) scale(${scale})`}
        />
      ))}
    </svg>
  )
}

/** The instruction card floating beside the phone: the workspace's own words. */
function GoalCard() {
  return (
    <div className="w-[min(320px,78vw)] rounded-[18px] bg-[#1c1c20]/95 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur lg:w-[22vw] lg:max-w-[300px] lg:rounded-[1.3vw] lg:p-[1.1vw]">
      <p className="text-center text-[0.9375rem] font-semibold lg:text-[clamp(0.875rem,1vw,1.125rem)]">What should the agent do?</p>
      <p className="mt-3 rounded-[10px] bg-white px-4 py-2.5 text-[0.875rem] leading-snug text-ink lg:mt-[0.8vw] lg:rounded-[0.7vw] lg:px-[1vw] lg:py-[0.6vw] lg:text-[clamp(0.8125rem,0.95vw,1.0625rem)]">
        Quote the price, then ask which size they want
      </p>
    </div>
  )
}

/** The opening screen: headline, one button, and the agent answering a real buyer. */
export function AiHero({ page }: { page: MarketingPage }) {
  const { hero } = page
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  // The scene starts composed, then moves the instruction into position as the
  // conversation becomes the focus. Keeping it tied to scroll also makes the
  // animation understandable when someone arrives midway through the page.
  const stage = Math.min(1, Math.max(0, (progress - 0.06) / 0.8))
  return (
    <section ref={ref} data-nav="light" className="relative overflow-clip text-white lg:h-[205svh]" style={{ backgroundColor: AI_INK }}>
      <AiGrid />

      <div className="relative px-5 pb-24 pt-32 lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:px-[6.2vw] lg:pb-[5vw] lg:pt-[9.25vw]">
        <div className="relative z-20 shrink-0 text-center">
          <h1 className="mx-auto max-w-none font-display text-[7.2vw] font-black leading-[0.92] tracking-[-0.04em] [text-wrap:balance] sm:text-[2.45rem] lg:text-[clamp(2.45rem,5.2vw,5.35rem)]">
            <span className="block whitespace-nowrap">Scale every conversation</span>
            <span className="block whitespace-nowrap">without losing your voice</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[38rem] text-[1.0625rem] leading-[1.45] text-white/65 lg:mt-[1.5vw] lg:text-[clamp(1rem,1.18vw,1.32rem)]">
            {hero.body}
          </p>
          <div className="relative z-30 mt-9 flex justify-center lg:mt-[2.2vw]">
            <McButton href={SIGNUP_URL} variant="white" size="lg">
              {hero.cta}
            </McButton>
          </div>
        </div>

        {/* A staged conversation: prompt first, then a live reply appears in its place. */}
        <div className="relative z-10 mx-auto mt-20 flex min-h-[620px] w-full max-w-[70rem] flex-col items-center justify-end lg:mt-[5.5vw] lg:min-h-0 lg:flex-1 lg:flex-row lg:items-end lg:justify-center">
          <div
            className="relative w-fit transition-[opacity,transform] duration-200"
            style={{
              opacity: 0.82 + stage * 0.18,
              transform: `translateY(${26 + (1 - stage) * 10}px) scale(${0.99 + stage * 0.01})`,
            }}
          >
            <BubbleRings />
            <PhoneDevice script={chats.aiPrice} replayKey="ai-hero" className="relative w-[236px] max-w-[62vw] lg:w-[14vw] lg:max-w-[220px]" />
          </div>
          <div
            className="absolute left-1/2 top-[48%] hidden transition-[opacity,transform] duration-200 lg:block"
            style={{
              opacity: 0.75 + stage * 0.25,
              transform: `translate(calc(-100% - 9vw), calc(-50% + ${(1 - stage) * 24}px))`,
            }}
          >
            <GoalCard />
          </div>
          <div className="mt-10 flex justify-center lg:hidden">
            <GoalCard />
          </div>
        </div>
      </div>
    </section>
  )
}
