"use client"

import { useRef } from "react"

import { McButton } from "@/components/mc/button"
import { InstagramGlyph } from "@/components/mc/icons"
import { PhotoSlot } from "@/components/mc/placeholder"
import { TiltedStack } from "@/components/mc/tilted-stack"
import { segment, useScrollProgress } from "@/components/mc/use-scroll-progress"
import type { UseCasePage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"

/*
 * ManyChat at 1800 x 1130: centred copy (96px title, 24px lead), then a tilted
 * photo stack 100px below the button that pins, straightens to 1424 x 786 and
 * shows the two automation steps on top of the photo.
 */
export function LandingHero({ page }: { page: UseCasePage }) {
  const ref = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(ref)
  const straighten = segment(progress, 0, 0.4)
  const reveal = segment(progress, 0.3, 0.55)
  const reveal2 = segment(progress, 0.45, 0.7)

  return (
    <>
      <section data-nav="dark" className="relative z-10 bg-white px-5 pt-28 text-center lg:pt-[8.1vw]">
        <h1 className="mc-h1 mx-auto max-w-[40rem] lg:max-w-[66vw]">{page.hero.title}</h1>
        <p className="mc-sub mx-auto mt-6 max-w-[30rem] lg:mt-[2vw] lg:max-w-[27vw]">{page.hero.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-[2.1vw]">
          <McButton href={SIGNUP_URL} variant="magenta" size="lg">
            Start for free
          </McButton>
          <span className="flex items-center gap-2 text-left">
            <span className="flex -space-x-2.5" aria-hidden>
              {["bg-sky", "bg-yellow", "bg-lavender"].map((tone) => (
                <span key={tone} className={`size-10 rounded-full ring-2 ring-white lg:size-[2.5vw] ${tone}`} />
              ))}
            </span>
            <InstagramGlyph className="size-7" />
            <span className="ml-3 max-w-[9rem] text-[1rem] leading-tight lg:text-[clamp(1rem,1.1vw,1.25rem)]">{page.hero.social}</span>
          </span>
        </div>
      </section>

      {/* Transparent and click-through, so it can start under the hero copy without covering the button. */}
      <div ref={ref} className="pointer-events-none relative -mt-8 lg:-mt-[5.9vw]" style={{ height: "175vh" }}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-3 lg:pt-[72px]">
          <TiltedStack
            accent={page.accent}
            tilt={-1.5 * (1 - straighten)}
            spread={-1 - 4.7 * (1 - straighten)}
            radius="clamp(24px, 2.2vw, 44px)"
            border="clamp(5px, 0.42vw, 8px)"
            className="pointer-events-auto aspect-[4/5] w-full sm:aspect-[1424/786] sm:w-[79vw]"
          >
            <PhotoSlot tone="cool" label={page.showcase.photo} className="absolute inset-0" />
            <div
              className="absolute left-[5.5%] top-[6%] w-[min(362px,78%)] text-white sm:top-[16%] sm:w-[25.4%]"
              style={{ opacity: reveal, transform: `translateY(${(1 - reveal) * 20}px)` }}
            >
              <p className="flex items-center gap-2.5 text-[1rem] font-semibold lg:text-[clamp(0.9375rem,1vw,1.1875rem)]">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[0.9375rem] text-ink">1</span>
                {page.showcase.step1.label}
              </p>
              <div className="mt-3 rounded-2xl bg-white p-3.5 text-ink">
                <p className="flex items-center justify-between px-1 text-[0.9375rem]">
                  {page.showcase.step1.selected}
                  <span className="flex size-4 items-center justify-center rounded-full border-2 border-ink">
                    <span className="size-2 rounded-full bg-ink" />
                  </span>
                </p>
                <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden>
                  {["bg-[#e9b7c9]", "bg-[#c9c3b8]", "bg-[#b9cbd9]", "bg-[#d9d1c3]"].map((tone) => (
                    <span key={tone} className={`aspect-[3/4] rounded-lg ${tone}`} />
                  ))}
                </div>
              </div>
              <p className="mt-2 flex h-12 items-center justify-between rounded-2xl bg-white/25 px-4 text-[0.9375rem] backdrop-blur">
                {page.showcase.step1.other}
                <span className="size-4 rounded-full border-2 border-white" />
              </p>
            </div>
            <div
              className="absolute bottom-[6%] right-[5.5%] w-[min(362px,78%)] text-white sm:bottom-auto sm:left-[69%] sm:right-auto sm:top-[64.7%] sm:w-[25.4%]"
              style={{ opacity: reveal2, transform: `translateY(${(1 - reveal2) * 20}px)` }}
            >
              <p className="flex items-center gap-2.5 text-[1rem] font-semibold lg:text-[clamp(0.9375rem,1vw,1.1875rem)]">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[0.9375rem] text-ink">2</span>
                {page.showcase.step2.label}
              </p>
              <p className="mt-3 rounded-2xl bg-white px-5 py-4 text-[0.9375rem] leading-snug text-ink lg:text-[clamp(0.9375rem,0.95vw,1.0625rem)]">
                {page.showcase.step2.message}
              </p>
            </div>
          </TiltedStack>
        </div>
      </div>
    </>
  )
}
