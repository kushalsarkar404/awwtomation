import { Bot, Heart, MousePointerClick, Star, Tag, TrendingUp, Users, Zap } from "lucide-react"
import type { ReactNode } from "react"

import { McButton } from "@/components/mc/button"
import { PhotoSlot } from "@/components/mc/placeholder"
import { TiltedStack } from "@/components/mc/tilted-stack"
import { Marquee } from "@/components/site/marquee"
import { Reveal } from "@/components/site/reveal"
import type { BulletIcon, UseCasePage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

/* Desktop sizes below are ManyChat's at an 1800px-wide viewport, expressed in vw. */

const iconClass = "size-6 lg:size-[1.45vw]"
const bulletIcons: Record<BulletIcon, ReactNode> = {
  users: <Users className={iconClass} strokeWidth={1.5} />,
  bolt: <Zap className={iconClass} strokeWidth={1.5} />,
  star: <Star className={iconClass} strokeWidth={1.5} />,
  bot: <Bot className={iconClass} strokeWidth={1.5} />,
  click: <MousePointerClick className={iconClass} strokeWidth={1.5} />,
  trend: <TrendingUp className={iconClass} strokeWidth={1.5} />,
  heart: <Heart className={iconClass} strokeWidth={1.5} />,
  tag: <Tag className={iconClass} strokeWidth={1.5} />,
}

const small = "text-[0.9375rem] lg:text-[clamp(0.9375rem,0.97vw,1.125rem)]"

function Avatar({ tone = "bg-[linear-gradient(135deg,#e8c4a8,#8b6a55)]", className }: { tone?: string; className?: string }) {
  return <span aria-hidden className={cn("inline-block size-10 shrink-0 rounded-full lg:size-[2.5vw]", tone, className)} />
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 size-4 shrink-0 text-ink/70 lg:size-[1.05vw]" aria-hidden>
      <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

/** "Sound familiar?" comment thread, then the DM that Awwtomation sends. 461px cards at 1800px. */
export function SeenThis({ page }: { page: UseCasePage }) {
  return (
    <section className="bg-white px-5 pb-10 pt-10 text-center lg:pt-[1.8vw]">
      <h2 className="mc-h2">Sound familiar?</h2>
      <Reveal>
        <div className="mx-auto mt-3 max-w-[461px] space-y-5 rounded-[32px] bg-sage px-6 pb-8 pt-7 text-left lg:w-[25.6vw] lg:max-w-none lg:space-y-[1.3vw] lg:rounded-[2vw] lg:px-[1.95vw] lg:pb-[2vw] lg:pt-[1.8vw]">
          {page.seen.thread.map((comment, index) => (
            <div key={index} className={cn("flex gap-3 lg:gap-[0.7vw]", comment.reply && "pl-12 lg:pl-[2.95vw]")}>
              <Avatar tone={comment.reply || index === 0 ? "bg-[linear-gradient(135deg,#b69be0,#5b3f8f)]" : undefined} />
              <div className={cn("min-w-0 flex-1", small)}>
                <p>
                  <span className="font-semibold">{comment.name}</span>
                  {comment.time ? <span className="ml-2 text-mute">{comment.time}</span> : null}
                </p>
                <p className="leading-snug">{comment.text}</p>
                {index > 0 ? <p className="mt-1 text-[0.875rem] font-semibold text-mute lg:text-[clamp(0.875rem,0.88vw,1rem)]">Reply</p> : null}
              </div>
              {index > 0 ? <HeartIcon /> : null}
            </div>
          ))}
        </div>
      </Reveal>

      <h2 className="mc-h2 mt-20 lg:mt-[5vw]">That&rsquo;s Awwtomation.</h2>
      <Reveal>
        <div className="mx-auto mt-3 max-w-[461px] space-y-6 rounded-[32px] bg-sage px-6 py-8 lg:w-[25.6vw] lg:max-w-none lg:space-y-[1.5vw] lg:rounded-[2vw] lg:px-[2.1vw] lg:py-[1.9vw]">
          {page.seen.dm.map((message, index) =>
            message.from === "bot" ? (
              <p
                key={index}
                className={cn(
                  "ml-auto w-fit max-w-[75%] rounded-[20px] bg-white px-5 py-4 text-left leading-snug lg:px-[1.1vw] lg:py-[0.95vw]",
                  small,
                )}
              >
                {message.text}
              </p>
            ) : (
              <div key={index} className="flex items-end gap-2.5">
                <Avatar className="size-8 lg:size-[1.8vw]" />
                <p className={cn("w-fit rounded-[20px] bg-purple px-5 py-4 text-white lg:px-[1.1vw] lg:py-[0.95vw]", small)}>{message.text}</p>
              </div>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}

export function BecauseItWorks({ page }: { page: UseCasePage }) {
  return (
    <section className="bg-white px-5 pb-24 pt-20 text-center lg:pb-[10.4vw] lg:pt-[6.1vw]">
      <h2 className="mc-h2">{page.because.title}</h2>
      <p className="mc-sub mx-auto mt-6 max-w-[38rem] lg:mt-[2.3vw] lg:max-w-[37.8vw]">{page.because.body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:mt-[2vw] lg:gap-[3.4vw]">
        <McButton href={SIGNUP_URL} variant="magenta" size="lg">
          Start for free
        </McButton>
        <ul className="flex max-w-[16rem] flex-wrap gap-x-5 gap-y-1.5 text-left text-[0.875rem] text-mute lg:max-w-[17vw] lg:text-[clamp(0.875rem,0.9vw,1rem)]">
          {page.because.checks.map((check) => (
            <li key={check}>✓ {check}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Alternating photo stacks (668px square at 1800px) and bullet lists. */
export function FeatureRows({ page }: { page: UseCasePage }) {
  return (
    <section className="space-y-24 overflow-x-clip bg-white px-5 pb-16 sm:px-10 lg:space-y-[10.8vw] lg:px-0 lg:pb-[9vw]">
      {page.rows.map((row, index) => {
        const flip = index % 2 === 1
        return (
          <div key={row.title} className="mx-auto grid items-center gap-12 md:grid-cols-2 md:gap-0 lg:w-[78.7vw]">
            <Reveal className={cn(flip && "md:order-2 md:pl-[0.3vw]")}>
              <TiltedStack
                accent={page.accent}
                spread={flip ? -8 : 8}
                radius="clamp(28px, 2.5vw, 48px)"
                border="clamp(5px, 0.42vw, 8px)"
                className="aspect-square w-full max-w-[520px] md:max-w-none lg:w-[37.1vw]"
              >
                <PhotoSlot tone={flip ? "cool" : "warm"} label={row.photo} className="absolute inset-0" />
              </TiltedStack>
            </Reveal>
            <div className={cn(flip ? "md:order-1 lg:pl-[4.2vw]" : "md:pl-10 lg:pl-[4.5vw]")}>
              <h3 className="mc-h3">{row.title}</h3>
              <ul className="mt-8 space-y-5 lg:mt-[2.3vw] lg:max-w-[26vw] lg:space-y-[1.2vw]">
                {row.bullets.map((bullet) => (
                  <li key={bullet.bold} className="mc-sub flex items-start gap-4 lg:gap-[0.9vw]">
                    <span className="mt-0.5 shrink-0 lg:mt-[0.1vw]">{bulletIcons[bullet.icon]}</span>
                    <span>
                      <strong className="font-bold">{bullet.bold}</strong> {bullet.rest}
                    </span>
                  </li>
                ))}
              </ul>
              <McButton href={SIGNUP_URL} variant="black" size="lg" className="mt-9 lg:mt-[2.6vw]">
                Try for free
              </McButton>
            </div>
          </div>
        )
      })}
    </section>
  )
}

/** Where ManyChat shows creator testimonials. Placeholders until real quotes exist. Never invent them. */
export function TestimonialRail({ title }: { title: string }) {
  const cards = Array.from({ length: 6 })
  return (
    <section className="overflow-hidden bg-white pb-24 lg:pb-[11vw]">
      <h2 className="mc-h2 mx-auto max-w-[28rem] px-5 text-center lg:max-w-[40vw]">{title}</h2>
      <Marquee className="mt-12 lg:mt-[3.3vw]">
        {cards.map((_, index) =>
          index % 3 === 2 ? (
            <PhotoSlot
              key={index}
              tone="warm"
              label="Customer photo"
              className="mr-3.5 h-[200px] w-[256px] shrink-0 rounded-2xl lg:mr-[0.8vw] lg:h-[12.55vw] lg:w-[15.9vw]"
            />
          ) : (
            <div
              key={index}
              className="mr-3.5 flex h-[200px] w-[350px] shrink-0 flex-col rounded-2xl bg-fog p-5 lg:mr-[0.8vw] lg:h-[12.55vw] lg:w-[21.9vw] lg:p-[1.35vw]"
            >
              <div className="flex items-center gap-3">
                <span className="size-10 rounded-full bg-lavender lg:size-[2.4vw]" aria-hidden />
                <p className="mc-label-sm leading-snug">
                  Customer name
                  <br />
                  <span className="text-mute">· followers</span>
                </p>
              </div>
              <p className={cn("mt-auto leading-snug", small)}>“Add a real customer quote here.”</p>
            </div>
          ),
        )}
      </Marquee>
    </section>
  )
}
