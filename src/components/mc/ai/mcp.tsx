"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronRight, Circle, MousePointer2, Sparkles } from "lucide-react"

import { AiHeading, AiLead, AiSection } from "@/components/mc/ai/shell"
import { useInView } from "@/components/mc/use-in-view"
import { LogoMark } from "@/components/site/logo"
import type { MarketingPage, McpDemo } from "@/content/mc-types"
import { cn } from "@/lib/utils"

const SCENE_MS = 7600

function ResultVisual({ demo, stage }: { demo: McpDemo; stage: number }) {
  if (demo.result.kind === "stats") {
    return <div className="grid gap-3 py-3 sm:grid-cols-2">{demo.result.rows.map((row, index) => <div key={row.label} className="rounded-xl border border-ink/10 bg-white p-4 transition-all duration-700" style={{ opacity: index <= stage ? 1 : .18, transform: index <= stage ? "translateY(0)" : "translateY(16px)" }}><p className="text-[11px] font-semibold uppercase tracking-[.08em] text-ink/35">{row.label}</p><p className="mt-2 text-2xl font-black tracking-[-.03em]">{row.value}</p><span className="mt-4 block h-1 rounded-full bg-[linear-gradient(90deg,#7b34ce,#fb0df7)]" style={{ width: index <= stage ? `${62 + index * 9}%` : 0 }} /></div>)}</div>
  }
  if (demo.result.kind === "draft") {
    return <div className="py-8"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-lavender font-black">A</span><div><p className="text-sm font-bold">{demo.result.to}</p><p className="text-xs text-ink/40">Qualified wholesale lead</p></div></div><div className="mt-5 rounded-[20px] rounded-tl-[6px] bg-white p-5 text-sm leading-relaxed shadow-sm transition-all duration-700" style={{ opacity: stage >= 2 ? 1 : .18, transform: stage >= 2 ? "translateY(0)" : "translateY(18px)" }}>{demo.result.text}</div><div className="mt-4 flex gap-2"><span className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-white">Send reply</span><span className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-bold">Edit</span></div></div>
  }
  const nodes = [["Trigger", "Comment contains PP"], ["Message", "Price and free delivery"], ["Ask", "Which size?"], ["Tag", "Buyer"], ["Pipeline", "New orders"]]
  return (
    <div className="mx-auto flex max-w-[27rem] flex-col items-center py-2">
      {nodes.map(([label, value], index) => (
        <div key={label} className="contents">
          <div className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-[0_12px_28px_-24px_rgba(0,0,0,.5)] transition-all duration-700" style={{ opacity: index <= stage ? 1 : 0.18, transform: index <= stage ? "translateY(0)" : "translateY(18px)" }}>
            <div className="flex items-center gap-3"><span className={cn("flex size-7 items-center justify-center rounded-full", index < stage ? "bg-[#08795b] text-white" : index === stage ? "bg-yellow text-ink" : "bg-ink/5 text-ink/30")}>{index < stage ? <Check className="size-3.5" /> : <Circle className="size-2 fill-current" />}</span><div><p className="text-[11px] font-semibold uppercase tracking-[.08em] text-ink/35">{label}</p><p className="text-sm font-semibold">{value}</p></div></div>
          </div>
          {index < nodes.length - 1 ? <span className={cn("h-5 w-px transition-colors duration-500", index < stage ? "bg-[#08795b]" : "bg-ink/15")} /> : null}
        </div>
      ))}
    </div>
  )
}

export function AiMcp({ page }: { page: MarketingPage }) {
  const data = page.mcp
  const ref = useRef<HTMLDivElement>(null)
  const playing = useInView(ref, 0.12)
  const [active, setActive] = useState(0)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    if (!playing || !data) return
    setStage(0)
    const progress = window.setInterval(() => setStage((value) => Math.min(value + 1, 5)), 900)
    const scene = window.setTimeout(() => setActive((value) => (value + 1) % data.demos.length), SCENE_MS)
    return () => { window.clearInterval(progress); window.clearTimeout(scene) }
  }, [active, playing, data])

  if (!data) return null
  const demo = data.demos[active]

  return (
    <AiSection className="pb-28 pt-24 lg:pb-[9vw] lg:pt-[9vw]">
      <AiHeading className="max-w-none text-[clamp(2rem,5.1vw,5.35rem)]">
        <span className="block whitespace-nowrap">Your workspace,</span>
        <span className="block whitespace-nowrap">inside your AI assistant</span>
      </AiHeading>
      <AiLead>Connect through MCP, ask in plain language, and review the result in Awwtomation before anything goes live.</AiLead>

      <div ref={ref} className="mx-auto mt-14 max-w-[82rem] overflow-hidden rounded-[28px] border border-white/15 bg-[#f5f5f2] text-ink shadow-[0_45px_140px_-60px_rgba(123,52,206,.8)] lg:mt-[4.6vw]">
        <div className="flex items-center gap-3 border-b border-ink/10 bg-white px-5 py-4"><LogoMark className="h-4 text-ink" /><span className="text-sm font-bold">MCP session</span><span className="ml-auto flex items-center gap-2 text-xs font-semibold text-[#08795b]"><span className="size-2 rounded-full bg-[#00a67d]" />Connected to Awwtomation</span></div>
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-ink/10 bg-white p-5 lg:border-b-0 lg:border-r lg:p-8">
            <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="MCP examples">
              {data.demos.map((entry, index) => <button key={entry.label} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)} className={cn("shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-colors", index === active ? "bg-ink text-white" : "bg-ink/[0.05] text-ink/50 hover:text-ink")}>{entry.label}</button>)}
            </div>
            <div className="mt-8 space-y-5">
              <div className="ml-auto max-w-[88%] rounded-[20px] rounded-br-[6px] bg-ink px-5 py-4 text-[0.95rem] leading-relaxed text-white">{demo.prompt}</div>
              <div className="flex items-start gap-3"><span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-lavender"><Sparkles className="size-4" /></span><div className="min-w-0 flex-1"><p className="text-xs font-bold text-ink/40">Assistant via MCP</p><p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">{stage < 4 ? "I’m working in your workspace now…" : demo.answer}</p></div></div>
            </div>
            <div className="mt-8 rounded-2xl bg-[#f2f2ef] p-4">
              <div className="flex items-center gap-3"><span className={cn("flex size-8 items-center justify-center rounded-full transition-colors", stage >= 1 ? "bg-[#08795b] text-white" : "bg-ink/10 text-ink/30")}><Check className="size-4" /></span><div><p className="text-sm font-bold">Workspace found</p><p className="text-xs text-ink/45">everest.threads · Instagram</p></div></div>
              <div className="ml-4 h-5 w-px bg-ink/10" />
              <div className="flex items-center gap-3"><span className={cn("flex size-8 items-center justify-center rounded-full transition-colors", stage >= 3 ? "bg-[#08795b] text-white" : "bg-ink/10 text-ink/30")}><Check className="size-4" /></span><div><p className="text-sm font-bold">Draft created</p><p className="text-xs text-ink/45">Nothing publishes without review</p></div></div>
            </div>
          </div>
          <div className="relative bg-[#ececef] p-5 lg:p-8">
            <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.1em] text-ink/35">Awwtomation result</p><p className="mt-1 text-lg font-bold">{demo.result.title}</p></div><span className="rounded-full bg-[#fff4bd] px-3 py-1.5 text-xs font-bold">Needs review</span></div>
            <div className="mt-6"><ResultVisual demo={demo} stage={stage} /></div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4"><div><p className="text-sm font-bold">Ready when you are</p><p className="text-xs text-ink/45">Open the draft, check the copy, then switch it on.</p></div><span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-white">Review in Awwtomation <ChevronRight className="size-3.5" /></span></div>
            <MousePointer2 className="absolute bottom-12 right-9 hidden size-6 rotate-[-12deg] text-ink lg:block" />
          </div>
        </div>
      </div>
    </AiSection>
  )
}
