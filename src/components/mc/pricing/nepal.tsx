"use client"

import { useEffect } from "react"

import { formatNpr, NEPAL_FORM_ID, NEPAL_FORM_URL, NEPAL_PRICES_NPR, nepalPlanOption, type Plan } from "@/lib/pricing"
import { cn } from "@/lib/utils"

/** Nepal's flag, simplified to its two pennants so it stays crisp at icon size. */
export function NepalFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 24" aria-hidden className={cn("h-[1.2em] w-auto shrink-0", className)}>
      <path d="M1.5 1.5 17.5 11.5H7.5L17.5 22.5H1.5Z" fill="#dc143c" stroke="#003893" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="5.5" cy="8.5" r="1.6" fill="#fff" />
      <circle cx="5.5" cy="17.5" r="2" fill="#fff" />
    </svg>
  )
}

const FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js"

/** The GoHighLevel "Nepal Pricing" form in a dialog, with the chosen plan preselected. */
export function NepalPricingForm({ plan, onClose }: { plan: Plan | null; onClose: () => void }) {
  useEffect(() => {
    if (!plan) return
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    if (!document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`)) {
      const script = document.createElement("script")
      script.src = FORM_EMBED_SCRIPT
      script.async = true
      document.body.appendChild(script)
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
    }
  }, [plan, onClose])

  if (!plan) return null
  const src = `${NEPAL_FORM_URL}?nepal_plan=${encodeURIComponent(nepalPlanOption(plan))}`

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="nepal-form-title"
      onClick={(event) => event.target === event.currentTarget && onClose()}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
    >
      <div className="max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-t-[28px] bg-white p-6 sm:rounded-[28px] sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="mc-label-sm flex items-center gap-2 text-nepal">
            <NepalFlag />
            Nepal pricing
          </p>
          <button type="button" onClick={onClose} aria-label="Close" className="text-2xl leading-none">
            ×
          </button>
        </div>
        <h2 id="nepal-form-title" className="mt-4 font-display text-[1.75rem] font-black leading-tight tracking-[-0.03em] sm:text-[2rem]">
          {plan.label}, {formatNpr(NEPAL_PRICES_NPR[plan.id])} a year
        </h2>
        <p className="mt-2 text-[1rem] leading-snug text-mute">Leave your details and our team in Kathmandu will get in touch to set up your plan.</p>
        <iframe
          key={plan.id}
          src={src}
          id={`inline-${NEPAL_FORM_ID}`}
          title="Nepal pricing form"
          className="mt-4 block h-[680px] w-full border-0"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Nepal Pricing"
          data-height="680"
          data-layout-iframe-id={`inline-${NEPAL_FORM_ID}`}
          data-form-id={NEPAL_FORM_ID}
        />
      </div>
    </div>
  )
}
