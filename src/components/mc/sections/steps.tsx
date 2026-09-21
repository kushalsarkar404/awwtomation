"use client"

import { useEffect, useRef, useState } from "react"

import { McButton } from "@/components/mc/button"
import { InstagramGlyph, MessengerGlyph } from "@/components/mc/icons"
import { SectionIntro } from "@/components/mc/sections/intro"
import { useInView } from "@/components/mc/use-in-view"
import { LogoMark } from "@/components/site/logo"
import type { MarketingPage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

/*
 * Art tiles are 451 x 308 at 1800px. Each one acts out its step once the card
 * scrolls into view: the sign-up button gets clicked, the two channels snap
 * onto the logo, and a real conversation runs on the dark phone UI of step
 * three. They loop with a long pause so the section never feels twitchy.
 */

const STEP_MS = 900
const HOLD_MS = 3600

function useSequence(total: number, playing: boolean, delay = 0) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!playing) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(total)
      return
    }
    let count = 0
    let timer: ReturnType<typeof setTimeout>
    const advance = () => {
      const restart = count >= total
      count = restart ? 0 : count + 1
      setStep(count)
      timer = setTimeout(advance, count >= total ? HOLD_MS : restart ? 420 : STEP_MS)
    }
    timer = setTimeout(advance, 400 + delay)
    return () => clearTimeout(timer)
  }, [total, playing, delay])

  return step
}

const tile = "aspect-[451/308] overflow-hidden"
const ease = "cubic-bezier(0.22,1,0.36,1)"

/* ------------------------------------------------------------ Step 1 */

/** A yellow grid with the sign-up button, and a pointer that comes and taps it. */
function SignupArt({ step }: { step: number }) {
  const arrived = step >= 1
  const clicked = step >= 2
  const done = step >= 3
  return (
    <div
      className={cn(
        tile,
        "relative flex items-center justify-center bg-yellow",
        "[background-image:linear-gradient(to_right,rgba(15,15,15,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,15,15,.1)_1px,transparent_1px)] [background-position:-1px_-1px] [background-size:19.5%_28.6%]",
      )}
    >
      <span
        className="mc-label relative flex h-[17%] items-center rounded-full bg-magenta px-[7.5%] text-white transition-transform duration-200"
        style={{ transform: clicked && !done ? "scale(0.93)" : "scale(1)" }}
      >
        Get started free
        {clicked ? (
          <span aria-hidden className="scene-tap absolute left-1/2 top-1/2 size-[46%] rounded-full bg-white/50" style={{ aspectRatio: "1" }} />
        ) : null}
      </span>

      {/* The pointer starts off in the corner and slides onto the button. */}
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute w-[6.5%] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
        aria-hidden
        style={{
          left: arrived ? "52%" : "84%",
          top: arrived ? "56%" : "74%",
          transform: clicked ? "scale(0.82)" : "scale(1)",
          transition: `left 800ms ${ease}, top 800ms ${ease}, transform 200ms ease-out`,
        }}
      >
        <path d="M2 12l18-8-5 8 5 8z" fill="#0f0f0f" />
      </svg>

      <span
        className="absolute left-[7%] top-[11%] flex items-center gap-[4%] whitespace-nowrap rounded-full bg-ink px-[4.5%] py-[2%] font-mono text-[clamp(0.5rem,0.72vw,0.8125rem)] uppercase tracking-[0.06em] text-yellow transition-all duration-500"
        style={{ opacity: done ? 1 : 0, transform: done ? "translateY(0)" : "translateY(-8px)" }}
      >
        <svg viewBox="0 0 20 20" className="w-[0.8em]" aria-hidden>
          <path d="M3 10.5l4.5 5L17 3" fill="none" stroke="currentColor" strokeWidth="2.4" />
        </svg>
        Account ready
      </span>
    </div>
  )
}

/* ------------------------------------------------------------ Step 2 */

/** A lavender checkerboard; the logo lands, then both channels clip onto it. */
function ConnectArt({ step }: { step: number }) {
  return (
    <div className={cn(tile, "relative grid grid-cols-[24.3%_25.7%_25.7%_24.3%] grid-rows-[31%_38%_31%]")}>
      {Array.from({ length: 12 }).map((_, index) => {
        const checker = (Math.floor(index / 4) + index) % 2 === 0
        return (
          <span
            key={index}
            className={cn("transition-colors duration-500", checker ? "bg-lavender" : "bg-[#f1f2ef]")}
            style={{ backgroundColor: step >= 1 && checker ? "#c9a8d8" : undefined, transitionDelay: `${index * 40}ms` }}
          />
        )
      })}

      {/* The two channels slide in from the sides and settle against the mark. */}
      <span
        className="absolute left-[10%] top-[18%] flex aspect-square w-[15%] items-center justify-center rounded-full bg-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.35)]"
        style={{
          opacity: step >= 3 ? 1 : 0,
          transform: step >= 3 ? "translate(0,0)" : "translate(-40%,30%)",
          transition: `opacity 500ms ${ease}, transform 600ms ${ease}`,
        }}
      >
        <InstagramGlyph className="w-[58%]" />
      </span>
      <span
        className="absolute bottom-[18%] right-[10%] flex aspect-square w-[15%] items-center justify-center rounded-full bg-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.35)]"
        style={{
          opacity: step >= 3 ? 1 : 0,
          transform: step >= 3 ? "translate(0,0)" : "translate(40%,-30%)",
          transition: `opacity 500ms ${ease} 120ms, transform 600ms ${ease} 120ms`,
        }}
      >
        <MessengerGlyph className="w-[58%]" />
      </span>

      <span
        className="absolute left-1/2 top-1/2 flex aspect-square w-[29%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_26px_-10px_rgba(0,0,0,0.35)]"
        style={{
          opacity: step >= 2 ? 1 : 0,
          scale: step >= 2 ? "1" : "0.6",
          transition: `opacity 400ms ${ease}, scale 700ms ${ease}`,
        }}
      >
        <LogoMark className="h-[42%] text-ink" />
        <span
          className="absolute -bottom-[6%] -right-[4%] flex aspect-square w-[34%] items-center justify-center rounded-full bg-green text-white transition-all duration-500"
          style={{ opacity: step >= 4 ? 1 : 0, scale: step >= 4 ? "1" : "0.4" }}
        >
          <svg viewBox="0 0 20 20" className="w-[52%]" aria-hidden>
            <path d="M3 10.5l4.5 5L17 3" fill="none" stroke="currentColor" strokeWidth="2.6" />
          </svg>
        </span>
      </span>
    </div>
  )
}

/* ------------------------------------------------------------ Step 3 */

const REPLY = "Rs 2,400 with free delivery. Shall I pack one?"

/** The template, switched on: a dark chat UI answering a real buyer. */
function LiveArt({ step }: { step: number }) {
  const [typed, setTyped] = useState(0)
  const typing = step === 2
  const answered = step >= 3

  useEffect(() => {
    if (!answered) {
      setTyped(0)
      return
    }
    const timer = setInterval(() => {
      setTyped((value) => {
        const next = value + 2
        if (next >= REPLY.length) clearInterval(timer)
        return Math.min(REPLY.length, next)
      })
    }, 26)
    return () => clearInterval(timer)
  }, [answered])

  const text = "text-[clamp(0.75rem,0.95vw,1.0625rem)] leading-[1.3]"
  return (
    <div className={cn(tile, "relative flex flex-col justify-center gap-[3.5%] bg-[#111114] px-[10%]")}>
      {/* The grid of the dark app behind the conversation. */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:12%_17.5%]"
      />
      <span
        aria-hidden
        className="absolute right-[7%] top-[9%] flex items-center gap-[0.4em] rounded-full bg-white/10 px-[0.75em] py-[0.3em] font-mono text-[clamp(0.5rem,0.66vw,0.75rem)] uppercase tracking-[0.08em] text-white/70 transition-opacity duration-500"
        style={{ opacity: step >= 1 ? 1 : 0 }}
      >
        <span className="size-[0.45em] rounded-full bg-green" />
        Live
      </span>

      <div
        className="relative flex items-center gap-[3%] transition-all duration-500"
        style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "translateY(0)" : "translateY(10px)" }}
      >
        <span className="aspect-square w-[7.5%] shrink-0 rounded-full bg-[linear-gradient(135deg,#e8c4a8,#8b6a55)]" aria-hidden />
        <span className={cn("rounded-full bg-[#2a2a30] px-[5%] py-[2.5%] text-white", text)}>PP 🙏</span>
      </div>

      <div
        className={cn("relative ml-auto w-[73%] rounded-[clamp(14px,1.3vw,24px)] bg-purple px-[5%] py-[4.5%] text-white transition-all duration-500", text)}
        style={{ opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? "translateY(0)" : "translateY(10px)" }}
      >
        {typing ? (
          <span className="flex items-center gap-[0.35em] py-[0.15em]" aria-hidden>
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="scene-dot size-[0.42em] rounded-full bg-white/80" style={{ animationDelay: `${dot * 0.16}s` }} />
            ))}
          </span>
        ) : (
          <>
            {REPLY.slice(0, typed)}
            <span className="opacity-0">{REPLY.slice(typed)}</span>
          </>
        )}
      </div>

      <p
        className="relative ml-auto font-mono text-[clamp(0.5rem,0.62vw,0.6875rem)] uppercase tracking-[0.08em] text-white/45 transition-opacity duration-500"
        style={{ opacity: step >= 4 ? 1 : 0 }}
      >
        Delivered · 2s
      </p>
    </div>
  )
}

/* ------------------------------------------------------------ Section */

const totals = { signup: 3, connect: 4, live: 4 }

function StepCard({ item, index }: { item: MarketingPage["steps"]["items"][number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const playing = useInView(ref, 0.08)
  const step = useSequence(totals[item.art], playing, index * 350)

  return (
    <div ref={ref}>
      {item.art === "signup" ? <SignupArt step={step} /> : null}
      {item.art === "connect" ? <ConnectArt step={step} /> : null}
      {item.art === "live" ? <LiveArt step={step} /> : null}
      <h3 className="mt-5 text-[1.25rem] font-bold tracking-[-0.01em] lg:mt-[1.45vw] lg:text-[clamp(1.125rem,1.33vw,1.625rem)]">{item.title}</h3>
      <p className="mc-sub mt-2 lg:mt-[0.55vw]">{item.body}</p>
    </div>
  )
}

export function Steps({ page, compactTop = false }: { page: MarketingPage; compactTop?: boolean }) {
  const { steps, theme } = page
  return (
    <section
      className={cn(
        "bg-white px-5 pb-28 lg:px-[11.14vw] lg:pb-[7.2vw]",
        compactTop ? "pt-0" : "pt-32 lg:pt-[11.8vw]",
      )}
    >
      <SectionIntro icon={steps.icon} color={theme.spot} title={steps.title} body={steps.body} />
      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-4 lg:mt-[6.3vw] lg:gap-[1.25vw]">
        {steps.items.map((item, index) => (
          <StepCard key={item.title} item={item} index={index} />
        ))}
      </div>
      <div className="mt-14 flex flex-wrap justify-center gap-4 lg:mt-[3.9vw] lg:gap-[1.03vw]">
        <McButton href={SIGNUP_URL} variant="black" size="lg" className="lg:w-[max(12.86vw,240px)]">
          Get started free
        </McButton>
        <McButton href="/pricing" variant="outline" size="lg" className="w-[180px] lg:w-[max(12.86vw,240px)]">
          See plans
        </McButton>
      </div>
    </section>
  )
}
