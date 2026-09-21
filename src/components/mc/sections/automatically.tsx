"use client"

import Image from "next/image"
import { useRef } from "react"

import { ChatScene } from "@/components/mc/chat"
import { DoubleCheck } from "@/components/mc/icons"
import { PhotoSlot } from "@/components/mc/placeholder"
import { segment, useScrollProgress } from "@/components/mc/use-scroll-progress"
import type { MarketingPage } from "@/content/mc-types"
import { cn } from "@/lib/utils"

/**
 * The photo under a product hero shrinks from full-bleed into a rounded card,
 * then walks through "Automatically: …" one item at a time as you scroll, with
 * the matching conversation appearing on the photo.
 *
 * At 1800 x 1130 ManyChat's card sits 135px from the top, 117px from the
 * bottom and 200px from each side; on phones it keeps a 16px margin.
 */
export function Automatically({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  const data = page.automatically
  if (!data) return null

  const morph = segment(progress, 0, 0.2)
  const walk = segment(progress, 0.2, 0.98)
  const active = Math.min(data.items.length - 1, Math.floor(walk * data.items.length))
  const chat = data.items[active].chat

  return (
    <section
      ref={ref}
      className={cn(
        "mc-grid relative [--ab:18px] [--ar:20px] [--at:76px] [--ax:16px] lg:[--ab:10.35vh] lg:[--ar:1.65vw] lg:[--at:11.95vh] lg:[--ax:11.1%]",
        page.theme.onAccentLight && "mc-grid-light",
      )}
      style={{ height: "300vh", backgroundColor: page.theme.accent }}
    >
      <div className="sticky top-0 h-svh overflow-hidden lg:h-screen">
        <div
          className="absolute overflow-hidden"
          style={{
            top: `calc(${morph} * var(--at))`,
            bottom: `calc(${morph} * var(--ab))`,
            left: `calc(${morph} * var(--ax))`,
            right: `calc(${morph} * var(--ax))`,
            borderRadius: `calc(${morph} * var(--ar))`,
            boxShadow: morph > 0.5 ? "0 30px 80px -20px rgba(0,0,0,0.45)" : "none",
          }}
        >
          {data.image ? (
            <Image src={data.image.src} alt={data.image.alt} fill sizes="100vw" className="object-cover object-[62%_center] lg:object-center" />
          ) : (
            <PhotoSlot tone="warm" label={data.photo} className="absolute inset-0" />
          )}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/20 lg:bg-gradient-to-r lg:from-black/55 lg:via-black/10 lg:to-transparent" />

          <div className="absolute left-[5%] top-[4%] text-white lg:left-[3.2%] lg:top-[5.6%]" style={{ opacity: morph }}>
            <p className="text-[0.9375rem] font-bold lg:text-[clamp(1.125rem,1.3vw,1.5rem)]">Automatically</p>
            <ul className="mt-2 lg:mt-[1.3vw]">
              {data.items.map((item, index) => (
                <li
                  key={item.label}
                  className={cn(
                    "flex h-[34px] items-center gap-2.5 transition-colors duration-500 lg:h-[2.92vw] lg:gap-[1.25vw]",
                    index === active ? "text-white" : "text-white/55",
                  )}
                >
                  <DoubleCheck className="size-6 shrink-0 lg:size-[2.2vw]" />
                  <span className="text-[1.5rem] font-bold leading-none tracking-[-0.02em] lg:text-[clamp(1.75rem,2.56vw,3rem)]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "absolute bottom-[5%] left-1/2 w-[min(300px,80%)] -translate-x-1/2 lg:bottom-[8.3%] lg:left-auto lg:right-[12.4%] lg:translate-x-0",
              chat.kind === "comments" ? "lg:w-[max(19vw,280px)]" : "lg:w-[max(16.6vw,260px)]",
            )}
            style={{ opacity: morph }}
          >
            <ChatScene script={chat} channel={page.theme.channel} replayKey={active} frame="overlay" scale={1.3} interval={600} />
          </div>
        </div>
      </div>
    </section>
  )
}
