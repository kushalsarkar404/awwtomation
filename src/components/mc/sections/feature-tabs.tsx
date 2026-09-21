"use client"

import { useEffect, useRef, useState } from "react"

import { McButton } from "@/components/mc/button"
import { PhoneDevice, sceneSteps, STEP_MS, type Channel } from "@/components/mc/chat"
import { useInView } from "@/components/mc/use-in-view"
import { useScrollProgress } from "@/components/mc/use-scroll-progress"
import type { MarketingPage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

type Feature = MarketingPage["features"][number]

/**
 * Cycles a feature's slides, each long enough for its scene to finish playing
 * and be read. Nothing moves until the phone is actually on screen.
 */
function useSlides(feature: Feature, playing: boolean) {
  const [slide, setSlide] = useState(0)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    setSlide(0)
  }, [feature])

  const current = feature.slides[slide] ?? feature.slides[0]
  const duration = Math.max(6500, sceneSteps(current.chat) * STEP_MS + 2600)

  useEffect(() => {
    if (!playing) {
      setElapsed(0)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = now - start
      setElapsed(Math.min(1, t / duration))
      if (t >= duration) {
        setSlide((value) => (value + 1) % feature.slides.length)
        return
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [slide, feature, duration, playing])

  return { slide, current, elapsed }
}

/*
 * ManyChat at 1800 x 1130: phone 428 x 677, caption bar 74px under it.
 * On a 440px phone: phone 228 wide, caption bar 38px, both centred.
 */
function Phone({ feature, channel, compact }: { feature: Feature; channel: Channel; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const playing = useInView(ref)
  const { slide, current, elapsed } = useSlides(feature, playing)
  return (
    <div ref={ref} className="w-full">
      <PhoneDevice script={current.chat} channel={channel} replayKey={`${feature.title}-${slide}`} interval={STEP_MS} />
      <div
        className={cn(
          "relative flex items-center justify-between bg-magenta text-white",
          compact ? "mt-2 h-[38px] px-3.5" : "mt-2.5 h-[58px] px-5 lg:h-[4.1vw] lg:px-[1.45vw]",
        )}
      >
        <span className={cn("font-bold", compact ? "text-[0.8125rem]" : "text-[1.0625rem] lg:text-[clamp(1rem,1.2vw,1.375rem)]")}>{current.caption}</span>
        <span className={cn("font-bold", compact ? "text-[0.8125rem]" : "text-[1.0625rem] lg:text-[clamp(1rem,1.2vw,1.375rem)]")}>
          {slide + 1}/{feature.slides.length}
        </span>
        <span aria-hidden className={cn("absolute bottom-0 left-0 bg-white", compact ? "h-[3px]" : "h-[3px] lg:h-[4px]")} style={{ width: `${elapsed * 100}%` }} />
      </div>
    </div>
  )
}

function Dashes({ count, active, light }: { count: number; active: number; light: boolean }) {
  return (
    <div className="flex justify-center gap-2" aria-hidden>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={cn("h-[3px] transition-all duration-500 lg:h-[3.5px]", index === active ? "w-10 lg:w-[48px]" : "w-3 lg:w-[16px]")}
          style={{ background: light ? "#fff" : "#0f0f0f", opacity: index === active ? 1 : 0.15 }}
        />
      ))}
    </div>
  )
}

/**
 * Pinned features. Scrolling moves between them; inside each, the phone plays
 * its scenes on a timer with a progress bar under it. Phones get the same
 * pinned layout, stacked: title, phone, caption, button.
 */
export function FeatureTabs({ page }: { page: MarketingPage }) {
  const desktopRef = useRef<HTMLElement>(null)
  const mobileRef = useRef<HTMLElement>(null)
  const desktopProgress = useScrollProgress(desktopRef)
  const mobileProgress = useScrollProgress(mobileRef)
  const { features, theme } = page
  const light = theme.onAccentLight
  const activeDesktop = Math.min(features.length - 1, Math.floor(desktopProgress * features.length))
  const activeMobile = Math.min(features.length - 1, Math.floor(mobileProgress * features.length))

  return (
    <>
      {/* Desktop */}
      <section
        ref={desktopRef}
        className={cn("relative hidden lg:block", light ? "text-white" : "text-ink")}
        style={{ height: `${features.length * 100}vh`, backgroundColor: theme.accent }}
      >
        <div className="sticky top-0 grid h-screen grid-cols-2 overflow-hidden">
          <div className="relative">
            <div className="absolute left-1/2 top-[10.8vh] -translate-x-1/2">
              <Dashes count={features.length} active={activeDesktop} light={light} />
            </div>
            <div className="absolute inset-x-0 top-[54.3%] flex -translate-y-1/2 justify-center px-8 text-center">
              <div key={activeDesktop} className="max-w-[34vw] animate-[fadeUp_.7s_cubic-bezier(.22,1,.36,1)]">
                <h3 className="mc-h3">{features[activeDesktop].title}</h3>
                <p className="mc-sub mx-auto mt-4 max-w-[31vw]">{features[activeDesktop].body}</p>
              </div>
            </div>
            <div className="absolute bottom-[2vh] left-[2.05vw] right-[2.14vw]">
              <McButton href={SIGNUP_URL} variant={light ? "white" : "black"} size="lg" full>
                Get started
              </McButton>
            </div>
          </div>
          <div className={cn("mc-grid flex items-center justify-center pt-[8.6vh]", light && "mc-grid-light")}>
            <div className="w-[min(21vw,40vh)]">
              <Phone feature={features[activeDesktop]} channel={theme.channel} />
            </div>
          </div>
        </div>
      </section>

      {/* Phones and tablets */}
      <section
        ref={mobileRef}
        className={cn("relative lg:hidden", light ? "text-white" : "text-ink")}
        style={{ height: `${features.length * 85 + 15}svh`, backgroundColor: theme.accent }}
      >
        <div className={cn("mc-grid sticky top-0 flex h-svh flex-col overflow-hidden", light && "mc-grid-light")}>
          <div className="px-5 pt-[76px] text-center">
            <Dashes count={features.length} active={activeMobile} light={light} />
            <div key={activeMobile} className="mx-auto mt-5 max-w-[26rem] animate-[fadeUp_.6s_cubic-bezier(.22,1,.36,1)]">
              <h3 className="mc-h3">{features[activeMobile].title}</h3>
              <p className="mc-sub mt-3">{features[activeMobile].body}</p>
            </div>
          </div>
          <div className="relative min-h-0 flex-1 [container-type:size]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{ width: "min(230px, calc((100cqh - 58px) * 0.515))" }}>
                <Phone feature={features[activeMobile]} channel={theme.channel} compact />
              </div>
            </div>
          </div>
          <div className="px-[18px] pb-[18px]">
            <McButton href={SIGNUP_URL} variant={light ? "white" : "black"} size="lg" full>
              Get started
            </McButton>
          </div>
        </div>
      </section>
    </>
  )
}
