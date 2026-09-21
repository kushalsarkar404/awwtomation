"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"

import { useInView } from "@/components/mc/use-in-view"
import { cn } from "@/lib/utils"

/*
 * The conversation that plays over a hero photograph. ManyChat runs one on
 * its home page and it is the fastest way to show what the product does.
 *
 * It tells a seller's story end to end: a buyer comments "PP" (price please)
 * under a reel, the shop answers in the DM within seconds, the buyer asks
 * about cash on delivery, and the contact is saved. One loop, then a pause,
 * then it plays again.
 */

const BUBBLE = { instagram: "#7b34ce", messenger: "#0a7cff" } as const

export interface HeroChatStep {
  kind: "comment" | "them" | "us" | "saved"
  text: string
  name?: string
  avatar?: string
  likes?: string
}

const HOLD_MS = 3400
const STEP_MS = 1600

function useLoop(total: number, playing: boolean) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!playing) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(total)
      return
    }
    let count = 0
    let timer: ReturnType<typeof setTimeout>
    const advance = () => {
      // Clearing the board is a short beat, not a whole step, so the hero is
      // never left blank for long.
      const restart = count >= total
      count = restart ? 0 : count + 1
      setShown(count)
      timer = setTimeout(advance, count >= total ? HOLD_MS : restart ? 520 : STEP_MS)
    }
    timer = setTimeout(advance, 700)
    return () => clearTimeout(timer)
  }, [total, playing])

  return shown
}

/** Types `text` out once its bubble lands, keeping the full width reserved. */
function Typed({ text, active }: { text: string; active: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) {
      setCount(text.length)
      return
    }
    setCount(0)
    const step = Math.max(1, Math.round(text.length / 30))
    const timer = setInterval(() => {
      setCount((value) => {
        const next = Math.min(text.length, value + step)
        if (next >= text.length) clearInterval(timer)
        return next
      })
    }, 32)
    return () => clearInterval(timer)
  }, [text, active])
  return (
    <>
      {text.slice(0, count)}
      <span className="opacity-0">{text.slice(count)}</span>
    </>
  )
}

function Slide({ on, delay = 0, children, className }: { on: boolean; delay?: number; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]",
        on ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-95 opacity-0",
        className,
      )}
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

function Avatar({ src, className }: { src?: string; className?: string }) {
  return (
    <span className={cn("relative inline-block shrink-0 overflow-hidden rounded-full bg-[linear-gradient(135deg,#e8c4a8,#8b6a55)]", className)}>
      {src ? <Image src={src} alt="" fill sizes="48px" className="object-cover" /> : null}
    </span>
  )
}

export function HeroChat({ steps, channel = "instagram", className }: { steps: HeroChatStep[]; channel?: "instagram" | "messenger"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const playing = useInView(ref, 0.02)
  const shown = useLoop(steps.length, playing)
  const accent = BUBBLE[channel]

  return (
    <div ref={ref} aria-hidden className={cn("flex flex-col gap-2.5 text-[0.9375rem] leading-[1.32] lg:gap-[0.6vw] lg:text-[clamp(0.9375rem,1.02vw,1.1875rem)]", className)}>
      {steps.map((step, index) => {
        const on = index < shown
        if (step.kind === "comment") {
          return (
            <Slide key={index} on={on} className="self-start">
              <span className="flex items-center gap-2.5 rounded-full bg-white/95 py-1.5 pl-1.5 pr-4 text-ink shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur lg:gap-[0.6vw] lg:py-[0.35vw] lg:pl-[0.35vw] lg:pr-[1vw]">
                <Avatar src={step.avatar} className="size-8 lg:size-[2.1vw]" />
                <span>
                  <span className="font-semibold">{step.name}</span> {step.text}
                </span>
                <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-[#f23f5c] lg:size-[1.05vw]" fill="currentColor">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
                </svg>
              </span>
            </Slide>
          )
        }
        if (step.kind === "them") {
          return (
            <Slide key={index} on={on} className="flex max-w-[86%] items-end gap-2 self-start lg:gap-[0.5vw]">
              <Avatar src={step.avatar} className="size-7 lg:size-[1.8vw]" />
              <p className="rounded-[20px] bg-[#232323]/92 px-4 py-2.5 text-white shadow-[0_14px_34px_-14px_rgba(0,0,0,0.7)] backdrop-blur lg:rounded-[1.2vw] lg:px-[1.05vw] lg:py-[0.68vw]">
                {step.text}
              </p>
            </Slide>
          )
        }
        if (step.kind === "saved") {
          return (
            <Slide key={index} on={on} className="self-end">
              <span className="flex items-center gap-2 rounded-full bg-green px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-white shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] lg:px-[0.9vw] lg:py-[0.35vw] lg:text-[clamp(0.6875rem,0.72vw,0.875rem)]">
                <svg viewBox="0 0 20 20" className="size-3.5 lg:size-[0.85vw]" aria-hidden>
                  <path d="M3 10.5l4.5 5L17 3" fill="none" stroke="currentColor" strokeWidth="2.2" />
                </svg>
                {step.text}
              </span>
            </Slide>
          )
        }
        return (
          <Slide key={index} on={on} className="max-w-[88%] self-end">
            <p
              className="rounded-[20px] px-4 py-2.5 text-white shadow-[0_16px_38px_-14px_rgba(0,0,0,0.65)] lg:rounded-[1.2vw] lg:px-[1.05vw] lg:py-[0.68vw]"
              style={{ background: accent }}
            >
              <Typed text={step.text} active={on && index === shown - 1} />
            </p>
          </Slide>
        )
      })}
    </div>
  )
}
