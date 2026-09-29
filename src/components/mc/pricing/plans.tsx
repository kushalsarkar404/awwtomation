"use client"

import { useCallback, useEffect, useState } from "react"

import { McButton, RollingLabel } from "@/components/mc/button"
import { BoxCheck } from "@/components/mc/icons"
import { NepalFlag, NepalPricingForm } from "@/components/mc/pricing/nepal"
import { SIGNUP_URL } from "@/lib/brand"
import { readCountryCookie } from "@/lib/geo"
import { formatNpr, formatUsd, limitText, MIN_ANNUAL_SAVING, NEPAL_PRICES_NPR, PLANS, type Plan } from "@/lib/pricing"
import { cn } from "@/lib/utils"

type Mode = "monthly" | "yearly" | "nepal"

/**
 * Opens on Nepal pricing for `?region=np`, `#nepal` or a visitor whose
 * country cookie says Nepal; `?region=intl` forces US dollars.
 */
function initialMode(): { mode: Mode; detected: boolean } | null {
  const region = new URLSearchParams(window.location.search).get("region")?.toLowerCase()
  if (region === "intl") return null
  if (region === "np" || window.location.hash === "#nepal") return { mode: "nepal", detected: false }
  if (readCountryCookie(document.cookie) === "NP") return { mode: "nepal", detected: true }
  return null
}

export function PricingPlans() {
  const [mode, setMode] = useState<Mode>("yearly")
  const [detected, setDetected] = useState(false)
  const [formPlan, setFormPlan] = useState<Plan | null>(null)
  const closeForm = useCallback(() => setFormPlan(null), [])
  const nepal = mode === "nepal"

  useEffect(() => {
    const initial = initialMode()
    if (!initial) return
    setMode(initial.mode)
    setDetected(initial.detected)
  }, [])

  function choose(next: Mode) {
    setMode(next)
    const url = new URL(window.location.href)
    if (next === "nepal") url.searchParams.set("region", "np")
    else if (detected) url.searchParams.set("region", "intl")
    else url.searchParams.delete("region")
    url.hash = ""
    window.history.replaceState(null, "", url)
  }

  return (
    <div>
      <div
        className={cn(
          "mx-auto mb-8 flex max-w-[1200px] flex-col items-start gap-4 rounded-[24px] px-6 py-5 sm:flex-row sm:items-center sm:justify-between xl:mb-[2.2vw] xl:w-[77.8vw] xl:max-w-none xl:rounded-[1.7vw] xl:px-[1.95vw]",
          nepal ? "border-2 border-nepal bg-white text-ink" : "bg-nepal text-white",
        )}
      >
        <div className="flex items-center gap-4">
          <span className={cn("grid size-12 shrink-0 place-items-center rounded-full text-[1.5rem]", nepal ? "bg-fog" : "bg-white")}>
            <NepalFlag />
          </span>
          <div>
            <p className="font-display text-[1.375rem] font-black leading-tight tracking-[-0.02em] xl:text-[clamp(1.375rem,1.6vw,1.875rem)]">
              {nepal ? "Nepal pricing" : "Special pricing for Nepal"}
            </p>
            <p className={cn("mt-1 text-[0.9375rem] leading-snug xl:text-[clamp(0.9375rem,1vw,1.1875rem)]", nepal ? "text-mute" : "text-white/85")}>
              {nepal
                ? `${detected ? "You're in Nepal, so these are " : "These are "}yearly prices in Nepali rupees, with every feature and no DM limit.`
                : `Businesses in Nepal pay yearly in Nepali rupees. Starter from ${formatNpr(NEPAL_PRICES_NPR.starter)} a year.`}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => choose(nepal ? "yearly" : "nepal")}
          className={cn(
            "group mc-label inline-flex h-12 shrink-0 items-center justify-center rounded-full px-7 transition-colors lg:h-[52px] lg:px-8",
            nepal ? "border border-ink text-ink hover:bg-ink hover:text-white" : "bg-white text-ink hover:bg-fog",
          )}
        >
          <span className="sr-only">{nepal ? "See USD pricing" : "See Nepal pricing"}</span>
          <RollingLabel>{nepal ? "See USD pricing" : "See Nepal pricing"}</RollingLabel>
        </button>
      </div>

      <div className="flex justify-center">
        <div role="radiogroup" aria-label="Pricing options" className="relative flex flex-wrap justify-center rounded-[28px] bg-fog p-1 sm:rounded-full">
          {(
            [
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: `Yearly · save ${MIN_ANNUAL_SAVING}%` },
              { value: "nepal", label: "Pricing for Nepal" },
            ] as const
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={mode === option.value}
              onClick={() => choose(option.value)}
              className={cn(
                "mc-label flex items-center gap-2 rounded-full px-5 py-3 transition-colors sm:px-6",
                mode === option.value ? (option.value === "nepal" ? "bg-nepal text-white" : "bg-ink text-white") : option.value === "nepal" ? "text-nepal" : "text-ink",
              )}
            >
              {option.value === "nepal" ? <NepalFlag /> : null}
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] gap-3 sm:grid-cols-2 lg:mt-[3.3vw] xl:w-[77.8vw] xl:max-w-none lg:grid-cols-3 xl:gap-[0.9vw]">
        {PLANS.map((plan) => {
          const featured = plan.featured
          const monthlyUsd = mode === "yearly" ? plan.priceAnnualUsd / 12 : plan.priceUsd
          return (
            <div key={plan.id} className={cn("flex flex-col rounded-[24px] p-7 xl:rounded-[1.7vw] xl:p-[1.95vw]", featured ? "bg-yellow" : "bg-fog")}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-[2rem] font-black tracking-[-0.03em] xl:text-[clamp(2rem,2.3vw,2.75rem)]">{plan.label}</h2>
                {featured ? <span className="mc-label-sm rounded-full bg-ink px-3 py-1 text-white">Recommended</span> : null}
              </div>
              <p className="mt-1 text-[1rem] leading-snug xl:text-[clamp(1rem,1.06vw,1.25rem)]">{plan.description}</p>
              <p className="mt-8 flex flex-wrap items-baseline gap-x-2">
                <span className="whitespace-nowrap font-display text-[2.5rem] font-black leading-none tracking-[-0.04em] xl:text-[clamp(2.25rem,2.6vw,3.25rem)]">
                  {nepal ? formatNpr(NEPAL_PRICES_NPR[plan.id]) : formatUsd(monthlyUsd)}
                </span>
                <span className="mc-label-sm text-mute">{nepal ? "/year" : "/mo"}</span>
              </p>
              <p className="mc-label-sm mt-2 min-h-[1.25em] text-mute">
                {nepal
                  ? "Billed yearly in Nepali rupees"
                  : mode === "yearly"
                    ? `${formatUsd(plan.priceAnnualUsd)} billed yearly`
                    : `${formatUsd(plan.priceUsd)} billed monthly`}
              </p>
              {nepal ? (
                <button
                  type="button"
                  onClick={() => setFormPlan(plan)}
                  className={cn(
                    "group mc-label mt-7 inline-flex h-[46px] w-full items-center justify-center rounded-full px-7 transition-colors duration-300 lg:h-[52px] lg:px-8",
                    featured ? "bg-ink text-white hover:bg-black" : "bg-nepal text-white hover:brightness-95",
                  )}
                >
                  <span className="sr-only">Get started</span>
                  <RollingLabel>Get started</RollingLabel>
                </button>
              ) : (
                <McButton href={SIGNUP_URL} variant={featured ? "black" : "outline"} size="lg" full className="mt-7">
                  Get started
                </McButton>
              )}
              <ul className="mt-8 space-y-3 text-[0.9375rem] xl:text-[clamp(0.9375rem,1vw,1.1875rem)]">
                {[...plan.limits.map(limitText), ...plan.features].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <BoxCheck tone="green" className="mt-0.5 size-4 shrink-0 xl:size-[1.1vw]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <p className="mc-label-sm mt-6 text-center text-mute">
        {nepal
          ? "Prices in Nepali rupees, yearly only · no DM limit on any plan · send the form and our Kathmandu team sets up your plan"
          : "Prices in US dollars · no DM limit on any plan · build before you pay, nothing is sent until you choose a plan"}
      </p>

      <NepalPricingForm plan={formPlan} onClose={closeForm} />
    </div>
  )
}
