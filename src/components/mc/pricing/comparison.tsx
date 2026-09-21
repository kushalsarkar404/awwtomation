"use client"

import { Fragment, useState } from "react"

import { BoxCheck, BoxCross } from "@/components/mc/icons"
import { COMPARISON, PLANS } from "@/lib/pricing"
import { cn } from "@/lib/utils"

function Value({ value, large }: { value: string | boolean; large?: boolean }) {
  if (typeof value === "string") {
    return <span className={cn("text-mute", large ? "text-[1.0625rem] xl:text-[clamp(1.0625rem,1.2vw,1.375rem)]" : "text-[0.9375rem]")}>{value}</span>
  }
  return value ? (
    <>
      <BoxCheck tone="green" className={cn(large ? "mx-auto size-6" : "size-5")} />
      <span className="sr-only">Included</span>
    </>
  ) : (
    <>
      <BoxCross className={cn(large ? "mx-auto size-6" : "size-5")} />
      <span className="sr-only">Not included</span>
    </>
  )
}

/** Desktop: every plan side by side. Phones: pick a plan, see its column. */
export function ComparisonTable() {
  const [full, setFull] = useState(false)
  const [plan, setPlan] = useState(1)
  const groups = full ? COMPARISON : COMPARISON.slice(0, 1)

  return (
    <section className="bg-white px-5 pb-28 sm:px-10 lg:pb-[9vw]">
      {/* Phones and tablets */}
      <div className="md:hidden">
        <div role="radiogroup" aria-label="Plan" className="sticky top-[68px] z-10 grid grid-cols-4 gap-1 rounded-full bg-fog p-1">
          {PLANS.map((option, index) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={plan === index}
              onClick={() => setPlan(index)}
              className={cn("mc-label h-10 rounded-full transition-colors", plan === index ? "bg-ink text-white" : "text-ink")}
            >
              {option.label}
            </button>
          ))}
        </div>
        {groups.map((group) => (
          <div key={group.group} className="mt-8">
            <h3 className="text-[1.375rem] font-bold tracking-[-0.01em]">{group.group}</h3>
            <dl className="mt-3">
              {group.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-6 border-t border-line py-3.5">
                  <dt className="text-[0.9375rem] leading-snug">{row.label}</dt>
                  <dd className="shrink-0 text-right">
                    <Value value={row.values[plan]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1100px] overflow-x-auto md:block xl:w-[77.8vw] xl:max-w-none">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <caption className="sr-only">What each plan includes</caption>
          <thead className="sticky top-0">
            <tr>
              <th scope="col" className="w-[34%] pb-6">
                <span className="sr-only">Feature</span>
              </th>
              {PLANS.map((option) => (
                <th key={option.id} scope="col" className="px-3 pb-6 text-center font-display text-[1.5rem] font-black tracking-tight xl:text-[clamp(1.5rem,1.8vw,2.25rem)]">
                  {option.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment key={group.group}>
                <tr>
                  <th colSpan={PLANS.length + 1} scope="colgroup" className="pb-4 pt-6 text-[1.5rem] font-bold tracking-tight xl:text-[clamp(1.5rem,1.6vw,2rem)]">
                    {group.group}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="border-t border-line py-4 pr-6 text-[1.0625rem] font-normal xl:py-[1.1vw] xl:text-[clamp(1.0625rem,1.2vw,1.375rem)]">
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={index} className="border-t border-line px-3 py-4 text-center xl:py-[1.1vw]">
                        <Value value={value} large />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setFull((value) => !value)}
          aria-expanded={full}
          className="mc-label inline-flex h-12 items-center gap-3 rounded-full border border-ink px-7 hover:bg-ink hover:text-white lg:h-14 lg:px-8"
        >
          {full ? "Hide full comparison" : "Full comparison table"}
          <span aria-hidden className={cn("text-xl leading-none transition-transform", full && "rotate-45")}>
            +
          </span>
        </button>
      </div>
    </section>
  )
}
