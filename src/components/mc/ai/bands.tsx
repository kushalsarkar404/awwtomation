"use client"

import Link from "next/link"
import { useRef } from "react"
import { ArrowRight, Check, ChevronDown, KeyRound, LockKeyhole } from "lucide-react"

import { AiCheck, AiHeading, AiLead, AiOutline, AiSection } from "@/components/mc/ai/shell"
import { McButton } from "@/components/mc/button"
import { ChatScene, PhoneDevice, STEP_MS } from "@/components/mc/chat"
import { InstagramGlyph, MessengerGlyph } from "@/components/mc/icons"
import { useInView } from "@/components/mc/use-in-view"
import { useScrollProgress } from "@/components/mc/use-scroll-progress"
import { LogoMark } from "@/components/site/logo"
import type { MarketingPage } from "@/content/mc-types"
import { SIGNUP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------- Always-on band */

/**
 * Three things the agent does, each with the conversation that proves it.
 * The screens are cropped, not whole phones, so the row reads as one band.
 */
export function AiTriptych({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, 0.12)

  return (
    <AiSection className="pb-24 pt-24 lg:pb-[8vw] lg:pt-[9vw]">
      <AiHeading>{page.intro.title}</AiHeading>
      <AiLead>{page.intro.body}</AiLead>

      <div ref={ref} className="mx-auto mt-16 grid max-w-[78rem] gap-12 lg:mt-[5vw] lg:grid-cols-3 lg:gap-[2vw]">
        {page.features.map((feature, index) => (
          <div
            key={feature.title}
            className="transition-[opacity,transform] duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(42px)",
              transitionDelay: `${index * 140}ms`,
            }}
          >
            <AiOutline radius="20px" className="mx-auto w-full max-w-[26rem] lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-[19px] bg-white [container-type:inline-size]">
                <ChatScene script={feature.slides[0].chat} frame="phone" interval={STEP_MS} scale={1.18} />
              </div>
            </AiOutline>
            <h3 className="mt-7 text-[1.375rem] font-bold leading-[1.15] tracking-[-0.01em] lg:mt-[1.6vw] lg:text-[clamp(1.25rem,1.5vw,1.75rem)]">
              {feature.title}
            </h3>
            <p className="mt-3 text-[1rem] leading-[1.45] text-white/60 lg:mt-[0.8vw] lg:text-[clamp(0.9375rem,1.05vw,1.1875rem)]">{feature.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center lg:mt-[4vw]">
        <McButton href={SIGNUP_URL} variant="white" size="lg">
          Get started
        </McButton>
      </div>
    </AiSection>
  )
}

/* ---------------------------------------------------------- Feature slides */

/** The four ways the agent sits in a flow, one slide at a time. */
export function AiFeatureSlides({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLElement>(null)
  const progress = useScrollProgress(ref)
  const items = page.seeIt.items
  const active = Math.min(items.length - 1, Math.floor(progress * items.length))
  const item = items[active]

  return (
    <section ref={ref} className="relative text-white" style={{ height: `${items.length * 100}svh`, background: "linear-gradient(125deg,#4d34cc 0%,#7b2fd1 52%,#9a32cf 100%)" }}>
      <div className="mc-grid mc-grid-light sticky top-0 h-svh overflow-hidden">
        <div className="grid h-full lg:grid-cols-2">
          <div className="relative flex min-h-0 flex-col px-5 pb-5 pt-[110px] lg:px-[4.2vw] lg:pb-[2vh] lg:pt-[13vh]">
            <div className="flex justify-center gap-2" aria-hidden>
              {items.map((entry, index) => (
                <span key={entry.title} className={cn("h-[3px] transition-all duration-500", index === active ? "w-12 bg-white" : "w-4 bg-white/20")} />
              ))}
            </div>
            <div key={active} className="mt-5 animate-[fadeUp_.65s_cubic-bezier(.22,1,.36,1)] text-center lg:my-auto lg:px-[2vw]">
              <h2 className="mx-auto max-w-[10ch] font-display text-[2.35rem] font-black leading-[0.9] tracking-[-0.045em] [text-wrap:balance] lg:text-[clamp(2.5rem,5.4vw,5.5rem)]">{item.title}</h2>
              <p className="mx-auto mt-3 max-w-[34rem] text-[0.95rem] leading-[1.35] text-white/85 lg:mt-5 lg:text-[clamp(1rem,1.3vw,1.45rem)]">{item.description}</p>
              <ul className="mx-auto mt-7 hidden max-w-[34rem] flex-col gap-3 text-left xl:flex">
                {(item.checks ?? []).slice(0, 2).map((check) => <AiCheck key={check}>{check}</AiCheck>)}
              </ul>
            </div>
            <McButton href={SIGNUP_URL} variant="white" size="lg" full className="mt-auto lg:mt-0">Get started</McButton>
          </div>
          <div className="relative hidden items-center justify-center pt-[7vh] lg:flex">
            <div key={active} className="w-[min(21vw,40vh)] animate-[fadeUp_.65s_cubic-bezier(.22,1,.36,1)]">
              <PhoneDevice script={item.chat} replayKey={`ai-scroll-${active}`} />
              <div className="relative mt-2.5 flex min-h-[58px] items-center justify-between gap-4 bg-magenta px-5 text-white">
                <span className="text-[clamp(.95rem,1.12vw,1.25rem)] font-bold">{item.title}</span>
                <span className="font-bold">{active + 1}/{items.length}</span>
                <span className="absolute bottom-0 left-0 h-1 bg-white transition-[width] duration-500" style={{ width: `${((progress * items.length) % 1) * 100}%` }} />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-[86px] top-[255px] flex items-center justify-center lg:hidden">
            <div key={active} className="w-[min(220px,48vw)] animate-[fadeUp_.65s_cubic-bezier(.22,1,.36,1)]">
              <PhoneDevice script={item.chat} replayKey={`ai-scroll-mobile-${active}`} />
              <div className="mt-2 flex min-h-10 items-center justify-between bg-magenta px-3 text-[0.75rem] font-bold"><span>{item.title}</span><span>{active + 1}/{items.length}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Key band */

/** The real provider form, translated from the app rather than abstract cards. */
export function AiKeyBand({ page }: { page: MarketingPage }) {
  const data = page.spotlight
  if (!data) return null
  return (
    <AiSection className="pb-24 pt-24 lg:pb-[8vw] lg:pt-[9vw]">
      <AiHeading>{data.title}</AiHeading>
      <AiLead>{data.body}</AiLead>

      <div className="mx-auto mt-14 max-w-[76rem] overflow-hidden rounded-[26px] border border-white/15 bg-[#111113] text-white shadow-[0_40px_120px_-50px_rgba(124,52,204,.8)] lg:mt-[4.4vw]">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 lg:px-7">
          <span className="flex size-9 items-center justify-center rounded-[10px] bg-white text-ink"><KeyRound className="size-4" /></span>
          <div><p className="text-sm font-bold">Provider connection</p><p className="text-xs text-white/45">Your model, your billing, your workspace</p></div>
          <span className="ml-auto flex items-center gap-2 rounded-full border border-[#42d6aa]/30 bg-[#42d6aa]/10 px-3 py-1.5 text-xs font-semibold text-[#75e4bf]"><LockKeyhole className="size-3.5" />Encrypted</span>
        </div>
        <div className="grid lg:grid-cols-[.78fr_1.22fr]">
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40">Choose your provider</p>
            <div className="mt-5 space-y-2">
              {["OpenAI compatible", "Anthropic", "Google Gemini"].map((provider, index) => (
                <div key={provider} className={cn("flex items-center gap-3 rounded-xl border px-4 py-3", index === 0 ? "border-white bg-white text-ink" : "border-white/10 bg-white/[.035] text-white/65")}>
                  <span className={cn("flex size-8 items-center justify-center rounded-full text-sm font-black", index === 0 ? "bg-ink text-white" : "bg-white/10 text-white")}>{provider[0]}</span>
                  <span className="text-sm font-semibold">{provider}</span>
                  {index === 0 ? <Check className="ml-auto size-4" /> : null}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/45">Also works with Groq, OpenRouter, DeepSeek, Together, Mistral, or your own compatible endpoint.</p>
          </div>
          <div className="p-5 lg:p-7">
            <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.1em] text-white/40">New connection</p><p className="mt-1 text-lg font-bold">Everest OpenAI</p></div><span className="flex items-center gap-2 text-xs font-semibold text-[#75e4bf]"><span className="size-2 rounded-full bg-[#42d6aa]" />Test passed</span></div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4"><p className="text-[11px] font-semibold uppercase tracking-[.08em] text-white/40">Model</p><p className="mt-2 flex items-center text-sm font-semibold">gpt-4.1-mini <ChevronDown className="ml-auto size-4 text-white/45" /></p></div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4"><p className="text-[11px] font-semibold uppercase tracking-[.08em] text-white/40">API key</p><p className="mt-2 font-mono text-sm tracking-[.12em] text-white/80">••••••••••••84KD</p></div>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4"><p className="text-[11px] font-semibold uppercase tracking-[.08em] text-white/40">Endpoint</p><p className="mt-2 text-sm text-white/70">https://api.openai.com/v1</p></div>
            <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-[1fr_auto]"><p className="text-xs leading-relaxed text-white/50">Keys are encrypted before storage. Awwtomation uses this connection only to run the agents you enable.</p><span className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-ink">Connect provider <ArrowRight className="size-3.5" /></span></div>
          </div>
        </div>
      </div>
    </AiSection>
  )
}

/* ------------------------------------------------------------- Channels */

export function AiChannels({ page }: { page: MarketingPage }) {
  return (
    <AiSection className="pb-24 pt-24 lg:pb-[8vw] lg:pt-[9vw]">
      <AiHeading>{page.channels.title}</AiHeading>
      {page.channels.body ? <AiLead>{page.channels.body}</AiLead> : null}

      <div className="mx-auto mt-14 grid max-w-[60rem] gap-4 sm:grid-cols-2 lg:mt-[4vw] lg:gap-[1.1vw]">
        {page.channels.cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex flex-col rounded-[20px] border border-white/10 bg-white/[0.05] p-7 transition-colors hover:bg-white/[0.09] lg:rounded-[1.4vw] lg:p-[1.9vw]"
          >
            <span className="flex items-center gap-3">
              {card.channel === "instagram" ? <InstagramGlyph className="size-8 lg:size-[2vw] lg:min-h-[28px] lg:min-w-[28px]" /> : <MessengerGlyph className="size-8 lg:size-[2vw] lg:min-h-[28px] lg:min-w-[28px]" />}
              <span className="text-[1.625rem] font-bold leading-none tracking-[-0.02em] lg:text-[clamp(1.5rem,1.9vw,2.25rem)]">{card.title}</span>
            </span>
            <span className="mt-3 text-[1rem] leading-[1.4] text-white/60 lg:mt-[0.9vw] lg:text-[clamp(0.9375rem,1.05vw,1.1875rem)]">{card.body}</span>
            <span className="mc-label mt-auto inline-flex items-center gap-3 pt-8 lg:pt-[2vw]">
              Learn more
              <svg aria-hidden viewBox="0 0 20 12" className="h-3 w-5 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </AiSection>
  )
}

/* --------------------------------------------------------- Before, after */

/** Two cards: the dark one is today, the white one is with the agent on. */
export function AiBeforeAfter({ page }: { page: MarketingPage }) {
  const { before, after } = page.beforeAfter
  return (
    <AiSection className="pb-24 pt-24 lg:pb-[8vw] lg:pt-[9vw]">
      <AiHeading className="max-w-none text-[clamp(2rem,5.1vw,5.35rem)]">
        <span className="block whitespace-nowrap">Smarter flows,</span>
        <span className="block whitespace-nowrap">better conversations</span>
      </AiHeading>
      <AiLead>{page.beforeAfter.body}</AiLead>

      <div className="mx-auto mt-14 grid max-w-[76rem] gap-4 lg:mt-[4.4vw] lg:grid-cols-2 lg:gap-[1.1vw]">
        {[
          { variant: "before" as const, data: before },
          { variant: "after" as const, data: after },
        ].map(({ variant, data }) => {
          const light = variant === "after"
          return (
            <div
              key={variant}
              className={cn(
                "flex flex-col rounded-[28px] px-7 pb-8 pt-10 lg:rounded-[2vw] lg:px-[2.4vw] lg:pb-[2.4vw] lg:pt-[3vw]",
                light ? "bg-white text-ink" : "border border-white/10 bg-white/[0.04] text-white",
              )}
            >
              <p className={cn("text-center text-[0.9375rem] font-bold", light ? "text-ink" : "text-white/70")}>
                {light ? "With" : "Without"} Awwtomation AI:
              </p>
              <p className="mc-h3 mx-auto mt-4 max-w-[16rem] text-center [text-wrap:balance] lg:mt-[1.1vw] lg:max-w-[20vw]">{data.title}</p>
              <ul className="mt-10 lg:mt-[2.6vw]">
                {data.items.map((item, index) => (
                  <li
                    key={item}
                    className={cn(
                      "flex min-h-[56px] items-center justify-between gap-6 lg:min-h-[3.4vw]",
                      index < data.items.length - 1 && "border-b",
                      light ? "border-ink/10" : "border-white/10",
                    )}
                  >
                    <span className="font-mono text-[0.8125rem] uppercase leading-snug tracking-[0.02em] lg:text-[clamp(0.8125rem,0.9vw,1rem)]">{item}</span>
                    {light ? (
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-ink text-white lg:size-[1.3vw] lg:min-h-[20px] lg:min-w-[20px]">
                        <svg viewBox="0 0 20 20" className="w-[62%]" aria-hidden>
                          <path d="M3 10.5l4.5 5L17 3" fill="none" stroke="currentColor" strokeWidth="2.6" />
                        </svg>
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <McButton href={SIGNUP_URL} variant={light ? "black" : "white"} size="lg" full className="mt-10 lg:mt-[2.6vw]">
                Get started
              </McButton>
            </div>
          )
        })}
      </div>
    </AiSection>
  )
}

/* ---------------------------------------------------------------- Steps */

export function AiSteps({ page }: { page: MarketingPage }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, 0.18)
  const steps = [
    { title: "Start your workspace", body: "Connect your account, pick a provider, and keep your settings in one place.", art: "signup" },
    { title: "Go live in minutes", body: "Give your agent a goal, then watch a useful reply take shape before you publish.", art: "reply" },
    { title: "Stay in control", body: "Edit the prompt, pause the agent, or bring a teammate into any conversation.", art: "control" },
  ]
  return (
    <AiSection className="pb-28 pt-24 lg:pb-[9vw] lg:pt-[9vw]">
      <AiHeading>{page.steps.title}</AiHeading>
      <AiLead>{page.steps.body}</AiLead>

      <div ref={ref} className="mx-auto mt-16 grid max-w-[82rem] gap-10 lg:mt-[5vw] lg:grid-cols-3 lg:gap-[2.1vw]">
        {steps.map((step, index) => (
          <article key={step.title} className="transition-[opacity,transform] duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transitionDelay: `${index * 160}ms` }}>
            <AiOutline radius="20px" className="overflow-hidden">
              <div className="mc-grid relative flex aspect-[1.42/1] items-center justify-center overflow-hidden bg-[#111113] p-7">
                {step.art === "signup" ? <span className="relative inline-flex items-center gap-3 rounded-full border border-white/50 bg-white px-7 py-4 font-mono text-sm font-semibold uppercase tracking-[.08em] text-ink shadow-[0_0_0_2px_rgba(251,13,247,.25)]">Get started <ArrowRight className="size-5 animate-[bounceX_1.8s_ease-in-out_infinite]" /></span> : null}
                {step.art === "reply" ? <div className="relative w-full max-w-[250px]"><div className="ml-auto w-[78%] rounded-[18px] rounded-br-md bg-[#7b34ce] px-4 py-3 text-sm font-medium leading-snug text-white">Can I use a coupon today?</div><div className="mt-3 flex items-end gap-2"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-lavender"><LogoMark className="h-3 text-ink" /></span><div className="w-[86%] rounded-[18px] rounded-bl-md bg-white/15 px-4 py-3 text-sm leading-snug text-white/90">Yes. Here&apos;s 10% off your first order.</div></div><span className="mt-4 block h-[2px] w-full origin-left bg-[linear-gradient(90deg,#fb0df7,#7b34ce,#00a67d)] animate-[pulse_2s_ease-in-out_infinite]" /></div> : null}
                {step.art === "control" ? <div className="relative flex size-28 items-center justify-center rounded-full bg-white text-ink shadow-[0_0_0_14px_rgba(255,255,255,.07)]"><LogoMark className="h-10" /></div> : null}
              </div>
            </AiOutline>
            <h3 className="mt-6 text-[1.35rem] font-bold tracking-[-.025em] lg:mt-[1.6vw] lg:text-[clamp(1.25rem,1.65vw,1.85rem)]">{step.title}</h3>
            <p className="mt-2 max-w-[26rem] text-[1rem] leading-[1.45] text-white/60 lg:mt-[.7vw] lg:text-[clamp(.9375rem,1.06vw,1.18rem)]">{step.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-4 lg:mt-[4vw]">
        <McButton href={SIGNUP_URL} variant="white" size="lg" className="lg:w-[max(12.86vw,220px)]">
          Get started
        </McButton>
        <McButton href="/pricing" variant="outline-light" size="lg" className="w-[180px] lg:w-[max(12.86vw,220px)]">
          See plans
        </McButton>
      </div>
    </AiSection>
  )
}
