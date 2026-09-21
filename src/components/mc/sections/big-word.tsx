"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { InstagramGlyph, MessengerGlyph } from "@/components/mc/icons"
import { PhotoSlot } from "@/components/mc/placeholder"
import { segment, useScrollProgress } from "@/components/mc/use-scroll-progress"
import type { MarketingPage } from "@/content/mc-types"
import { cn } from "@/lib/utils"

function Photo({ page, className }: { page: MarketingPage; className?: string }) {
  const { bigWord } = page
  return bigWord.image ? (
    <Image src={bigWord.image.src} alt={bigWord.image.alt} fill sizes="100vw" className={cn("object-cover", className)} />
  ) : (
    <PhotoSlot tone="cool" label={bigWord.photo} className="absolute inset-0" />
  )
}

/**
 * Desktop: a giant word in the page colour slides across a photo as you
 * scroll, then zooms in until the colour fills the screen and hands over to
 * the channels section (about 900px type at 1800 x 1130).
 */
function WordZoom({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLElement>(null)
  const wordRef = useRef<HTMLParagraphElement>(null)
  const progress = useScrollProgress(ref)
  const [widths, setWidths] = useState({ word: 2000, view: 1400 })
  const accent = page.theme.accent

  useEffect(() => {
    const measure = () => setWidths({ word: wordRef.current?.scrollWidth ?? 2000, view: window.innerWidth })
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const slide = segment(progress, 0, 0.64)
  const grow = segment(progress, 0.64, 0.95)
  const startX = widths.view * 0.48
  const endX = -(widths.word - widths.view * 0.55)
  const x = startX + (endX - startX) * slide
  const scale = (1 + slide * 0.35) * (1 + grow * grow * 13)

  return (
    <section ref={ref} className="relative hidden lg:block" style={{ height: "320vh" }} aria-label={page.bigWord.word}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Photo page={page} />
        <p
          ref={wordRef}
          aria-hidden
          className="absolute left-0 whitespace-nowrap font-display font-black leading-[0.8] tracking-[-0.04em]"
          style={{
            bottom: "calc(18vh - min(80vh, 50vw) * 0.066)",
            fontSize: "min(80vh, 50vw)",
            color: accent,
            transform: `translateX(${x}px) scale(${scale})`,
            transformOrigin: `${widths.view * 0.5 - x}px 60%`,
            willChange: "transform",
          }}
        >
          {page.bigWord.word}
        </p>
        <div aria-hidden className="absolute inset-0" style={{ backgroundColor: accent, opacity: segment(progress, 0.82, 0.97) }} />
      </div>
    </section>
  )
}

function ChannelCard({ card }: { card: MarketingPage["channels"]["cards"][number] }) {
  return (
    <Link href={card.href} className="group flex min-h-[143px] flex-col bg-white px-6 pb-5 pt-5 text-left text-ink">
      <span className="flex items-center gap-2.5">
        {card.channel === "instagram" ? <InstagramGlyph className="size-7" /> : <MessengerGlyph className="size-7" />}
        <span className="text-[1.625rem] font-bold leading-none tracking-[-0.02em]">{card.title}</span>
      </span>
      <span className="mt-2.5 text-[1rem] leading-[1.3]">{card.body}</span>
      <span className="mc-label mt-auto inline-flex items-center gap-3 pt-4">
        <span className="underline decoration-1 underline-offset-[6px]">Learn more</span>
        <svg aria-hidden viewBox="0 0 20 12" className="h-3 w-5">
          <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </Link>
  )
}

/**
 * Phones (ManyChat at 440 x 956): the photo fills the screen with the channels
 * heading in the page colour, then rises like a curtain until it rests just
 * under the heading, uncovering the channel cards.
 */
function Curtain({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLDivElement>(null)
  const cards = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(ref)
  const [frame, setFrame] = useState({ view: 956, rest: 490 })
  const { channels, theme } = page

  useEffect(() => {
    const measure = () => {
      const view = window.innerHeight
      const cardsHeight = cards.current?.offsetHeight ?? 320
      setFrame({ view, rest: Math.round(Math.max(view * 0.38, Math.min(view * 0.51, view - cardsHeight - 64))) })
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const photoHeight = frame.view - (frame.view - frame.rest) * progress

  return (
    <div ref={ref} className="relative lg:hidden" style={{ height: frame.view * 2 - frame.rest }}>
      <div
        className={cn("mc-grid sticky top-0 overflow-hidden", theme.onAccentLight ? "mc-grid-light text-white" : "text-ink")}
        style={{ height: frame.view, backgroundColor: theme.accent }}
      >
        <div ref={cards} className="absolute inset-x-[18px]" style={{ top: frame.rest + 40 }}>
          {channels.body ? <p className="mb-4 text-center text-[1rem]">{channels.body}</p> : null}
          <div className="flex flex-col gap-4">
            {channels.cards.map((card) => (
              <ChannelCard key={card.href} card={card} />
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: photoHeight }}>
          <div className="absolute inset-x-0 top-0" style={{ height: frame.view }}>
            <Photo page={page} className="object-[center_30%]" />
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 flex items-end justify-center px-[38px] pb-[5px]" style={{ height: frame.rest }}>
          <h2 className="mc-h2 text-center" style={{ color: theme.accent }}>
            {channels.title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export function BigWord({ page }: { page: MarketingPage }) {
  return (
    <>
      <WordZoom page={page} />
      <Curtain page={page} />
    </>
  )
}
