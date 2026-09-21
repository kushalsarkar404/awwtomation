"use client"

import { useEffect, useState } from "react"

import { McButton } from "@/components/mc/button"
import { SIGNUP_URL } from "@/lib/brand"
import { formatNpr, PLANS, toNpr } from "@/lib/pricing"
import { cn } from "@/lib/utils"

/* Each answer maps to the smallest plan that covers it (0 Free … 3 Agency). */
const questions = [
  { q: "How many Instagram accounts and Facebook Pages?", options: [["1", 0], ["2–3", 1], ["4–10", 2], ["11 or more", 3]] },
  { q: "How many DMs a month?", options: [["Up to 100", 0], ["Up to 2,000", 1], ["Up to 15,000", 2], ["More than that", 3]] },
  { q: "How many people on your team?", options: [["Just me", 0], ["2–3", 1], ["4–10", 2], ["11 or more", 3]] },
] as const

/** The floating yellow "Pick your plan in 30 seconds" button and its three-question picker. */
export function PlanQuiz() {
  const [open, setOpen] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const step = answers.length
  const done = step === questions.length
  const plan = PLANS[Math.max(0, ...answers)]

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setAnswers([])
          setOpen(true)
        }}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-4 rounded-2xl bg-yellow px-4 py-3 text-left font-display text-[1rem] font-black tracking-tight text-ink shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] sm:bottom-5 sm:right-5 sm:gap-10 sm:px-5 sm:py-4 sm:text-[1.25rem]"
      >
        Pick your plan in 30 seconds
        <span aria-hidden>↑</span>
      </button>

      {open ? (
        <div role="dialog" aria-modal="true" aria-label="Plan picker" className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div className="w-full max-w-[520px] rounded-[28px] bg-white p-7">
            <div className="flex items-center justify-between">
              <p className="mc-label text-mute">{done ? "Your plan" : `Question ${step + 1} of ${questions.length}`}</p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-2xl leading-none">
                ×
              </button>
            </div>
            {done ? (
              <div className="mt-6">
                <p className="font-display text-[3rem] font-black leading-none tracking-[-0.04em]">{plan.label}</p>
                <p className="mt-3 text-[1.0625rem]">{plan.description}</p>
                <p className="mt-6 font-display text-[2rem] font-black tracking-tight">
                  {plan.priceUsd === 0 ? "Free" : `${formatNpr(toNpr(plan.priceUsd))}/mo`}
                </p>
                <div className="mt-7 flex gap-3">
                  <McButton href={SIGNUP_URL} variant="black" full>
                    {plan.priceUsd === 0 ? "Start for free" : "Get started"}
                  </McButton>
                  <button type="button" onClick={() => setAnswers([])} className="mc-label shrink-0 px-4 underline underline-offset-4">
                    Retake
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <p className="font-display text-[1.75rem] font-black leading-tight tracking-tight">{questions[step].q}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {questions[step].options.map(([label, tier]) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setAnswers((value) => [...value, tier])}
                      className={cn("rounded-2xl border border-line px-4 py-4 text-left text-[1.0625rem] hover:border-ink hover:bg-fog")}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
