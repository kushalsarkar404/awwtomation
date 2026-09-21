"use client"

import { useState } from "react"

import { McButton } from "@/components/mc/button"
import { BoxCheck } from "@/components/mc/icons"
import { SIGNUP_URL } from "@/lib/brand"
import { formatNpr, limitText, MIN_ANNUAL_SAVING, PLANS, toNpr } from "@/lib/pricing"
import { cn } from "@/lib/utils"

export function PricingPlans() {
  const [yearly, setYearly] = useState(true)

  return (
    <div>
      <div className="flex justify-center">
        <div role="radiogroup" aria-label="Billing period" className="relative flex rounded-full bg-fog p-1">
          {[
            { value: false, label: "Monthly" },
            { value: true, label: `Yearly · save ${MIN_ANNUAL_SAVING}%` },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              role="radio"
              aria-checked={yearly === option.value}
              onClick={() => setYearly(option.value)}
              className={cn("mc-label rounded-full px-6 py-3 transition-colors", yearly === option.value ? "bg-ink text-white" : "text-ink")}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] gap-3 sm:grid-cols-2 lg:mt-[3.3vw] xl:w-[77.8vw] xl:max-w-none xl:grid-cols-4 xl:gap-[0.9vw]">
        {PLANS.map((plan) => {
          const featured = plan.featured
          const monthlyUsd = yearly ? plan.priceAnnualUsd / 12 : plan.priceUsd
          return (
            <div key={plan.id} className={cn("flex flex-col rounded-[24px] p-7 xl:rounded-[1.7vw] xl:p-[1.95vw]", featured ? "bg-yellow" : "bg-fog")}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-[2rem] font-black tracking-[-0.03em] xl:text-[clamp(2rem,2.3vw,2.75rem)]">{plan.label}</h2>
                {featured ? <span className="mc-label-sm rounded-full bg-ink px-3 py-1 text-white">Recommended</span> : null}
              </div>
              <p className="mt-1 text-[1rem] leading-snug xl:text-[clamp(1rem,1.06vw,1.25rem)]">{plan.description}</p>
              <p className="mt-8 flex flex-wrap items-baseline gap-x-2">
                <span className="whitespace-nowrap font-display text-[2.75rem] font-black leading-none tracking-[-0.04em] xl:text-[clamp(2.25rem,2.6vw,3.25rem)]">
                  {plan.priceUsd === 0 ? "Free" : formatNpr(toNpr(monthlyUsd))}
                </span>
                {plan.priceUsd > 0 ? <span className="mc-label-sm text-mute">/mo</span> : null}
              </p>
              <p className="mc-label-sm mt-2 min-h-[1.25em] text-mute">
                {plan.priceUsd === 0 ? "Forever" : yearly ? `$${plan.priceAnnualUsd} billed yearly` : `$${plan.priceUsd} billed monthly`}
              </p>
              <McButton href={SIGNUP_URL} variant={featured ? "black" : "outline"} size="lg" full className="mt-7">
                {plan.priceUsd === 0 ? "Start for free" : "Get started"}
              </McButton>
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
    </div>
  )
}
