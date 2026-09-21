"use client"

import { useEffect, useRef, useState } from "react"

import { McButton } from "@/components/mc/button"
import { PhoneDevice, sceneSteps, STEP_MS } from "@/components/mc/chat"
import { useInView } from "@/components/mc/use-in-view"
import type { MarketingPage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

function CheckItOut({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-mono uppercase tracking-[0.05em] text-mute", className)}>
      Check it out
      <svg aria-hidden viewBox="0 0 20 12" className="h-2.5 w-4">
        <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </span>
  )
}

/*
 * Desktop, ManyChat at 1800px: a 1399 x 748 panel inset 200px, a 355px white
 * menu on the left, the phone centred and the description top right.
 * Phones, ManyChat at 440px: the menu becomes a row of swipeable cards with a
 * scroll bar, then the panel with the description above the phone.
 */
export function SeeItInAction({ page }: { page: MarketingPage }) {
  const { seeIt, theme } = page
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const rail = useRef<HTMLDivElement>(null)
  const section = useRef<HTMLElement>(null)
  const inView = useInView(section, 0.05)
  const [scroll, setScroll] = useState({ left: 0, width: 1 })

  // Each card stays up long enough for its conversation to play out and be
  // read, and the queue only moves while the section is on screen.
  const item = seeIt.items[active]
  const cycle = Math.max(8500, sceneSteps(item.chat) * STEP_MS + 3200)

  useEffect(() => {
    if (paused || !inView) return
    const timer = setTimeout(() => setActive((value) => (value + 1) % seeIt.items.length), cycle)
    return () => clearTimeout(timer)
  }, [active, paused, inView, cycle, seeIt.items.length])

  // Keep the active card in view on phones.
  useEffect(() => {
    const node = rail.current
    const card = node?.children[active] as HTMLElement | undefined
    if (!node || !card || node.scrollWidth <= node.clientWidth) return
    node.scrollTo({ left: card.offsetLeft - 17, behavior: "smooth" })
  }, [active])

  const onRailScroll = () => {
    const node = rail.current
    if (!node) return
    setScroll({ left: node.scrollLeft / node.scrollWidth, width: node.clientWidth / node.scrollWidth })
  }

  const panelText = theme.panelLight ? "text-white" : "text-ink"

  return (
    <section ref={section} className="bg-white lg:px-[11.14vw]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Phones and tablets */}
      <div className="lg:hidden">
        <h3 className="px-5 text-center text-[1.5rem] font-bold tracking-[-0.02em]">{seeIt.panelTitle}</h3>
        <div ref={rail} onScroll={onRailScroll} className="no-scrollbar mt-6 flex snap-x gap-1 overflow-x-auto px-[17px] pb-3">
          {seeIt.items.map((entry, index) => (
            <button
              key={entry.title}
              type="button"
              onClick={() => {
                setActive(index)
                setPaused(true)
              }}
              className={cn(
                "flex h-[117px] w-[155px] shrink-0 snap-start flex-col justify-between rounded-[10px] border p-[17px] text-left",
                index === active ? "border-[#f2f2f2] bg-[#f2f2f2]" : "border-[#ececec] bg-white",
              )}
            >
              <span className="text-[0.875rem] leading-[1.2]">{entry.title}</span>
              <CheckItOut className="text-[0.6875rem]" />
            </button>
          ))}
        </div>
        <div className="relative h-[3px] bg-[#ececec]" aria-hidden>
          <span className="absolute inset-y-0 bg-[#5c5c5c]" style={{ left: `${scroll.left * 100}%`, width: `${Math.max(scroll.width, 0.2) * 100}%` }} />
        </div>
        <div
          className={cn("mc-grid mx-[17px] mt-[13px] rounded-[18px] px-6 pb-8 pt-6", theme.panelLight && "mc-grid-light", panelText)}
          style={{ backgroundColor: theme.panel }}
        >
          <p className="max-w-[18rem] border-l pl-3 text-[0.875rem] leading-[1.25]" style={{ borderColor: "currentColor" }}>
            {item.description}
          </p>
          <PhoneDevice script={item.chat} channel={theme.channel} replayKey={`m-${active}`} className="mx-auto mt-16 w-[240px] max-w-[62vw]" />
        </div>
        <div className="px-[17px] pt-6">
          <McButton href={SIGNUP_URL} variant="black" size="lg" full>
            Get started
          </McButton>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={cn(
          "mc-grid relative hidden h-[41.5vw] min-h-[640px] grid-cols-[19.72vw_1fr_14.3vw] p-[1.22vw] pr-0 lg:grid",
          "[background-position:-1px_calc(50%+5.55vw)]! [background-size:11.1vw_11.1vw]!",
          theme.panelLight ? "mc-grid-light text-white" : "text-ink",
        )}
        style={{ backgroundColor: theme.panel }}
      >
        <div className="flex flex-col rounded-[1vw] bg-white px-[0.75vw] pb-[1.95vw] pt-[2.3vw] text-ink">
          <h3 className="px-[1.33vw] pb-[1.75vw] text-[clamp(1.5rem,2vw,2.375rem)] font-bold leading-none tracking-[-0.025em]">{seeIt.panelTitle}</h3>
          <ul className="space-y-[0.25vw]">
            {seeIt.items.map((entry, index) => (
              <li key={entry.title}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "w-full rounded-[0.5vw] px-[1.28vw] py-[0.8vw] text-left transition-colors",
                    index === active ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]/60",
                  )}
                >
                  <span className="block text-[clamp(0.9375rem,1vw,1.1875rem)] leading-snug">{entry.title}</span>
                  <CheckItOut className="mt-[0.35vw] text-[clamp(0.75rem,0.83vw,0.9375rem)]" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-[1.2vw] pt-8">
            <McButton href={SIGNUP_URL} variant="black" size="lg" className="w-[max(15.8vw,176px)]">
              Get started
            </McButton>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <PhoneDevice script={item.chat} channel={theme.channel} replayKey={active} className="w-[min(17vw,42vh)]" />
        </div>

        <p
          className="mr-[1.35vw] mt-[0.73vw] self-start border-l pl-[0.8vw] text-[clamp(0.9375rem,1.06vw,1.1875rem)] leading-[1.27]"
          style={{ borderColor: "currentColor" }}
        >
          {item.description}
        </p>
      </div>
    </section>
  )
}
