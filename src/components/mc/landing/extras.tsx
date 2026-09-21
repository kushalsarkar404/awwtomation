import { BoxCheck } from "@/components/mc/icons"
import { MANYCHAT_CHECKED, MANYCHAT_COMPARISON } from "@/content/bespoke"
import { formatNpr, limitText, PLANS, toNpr } from "@/lib/pricing"

export function ManychatComparison() {
  return (
    <section className="bg-white px-5 pb-24">
      <div className="relative mx-auto max-w-[1000px] overflow-x-auto rounded-[28px] bg-sage p-4 sm:p-8">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">Awwtomation compared with ManyChat</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[28%] pb-5"><span className="sr-only">Feature</span></th>
              <th scope="col" className="px-4 pb-5 font-display text-[1.75rem] font-black tracking-tight">Awwtomation</th>
              <th scope="col" className="px-4 pb-5 font-display text-[1.75rem] font-black tracking-tight">ManyChat</th>
            </tr>
          </thead>
          <tbody>
            {MANYCHAT_COMPARISON.map((row) => (
              <tr key={row.label} className="border-t border-line align-top">
                <th scope="row" className="mc-label-sm py-4 pr-4 font-normal text-mute">{row.label}</th>
                <td className="px-4 py-4 font-medium">{row.awwtomation}</td>
                <td className="px-4 py-4 text-mute">{row.manychat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mc-label-sm mt-4 text-mute">ManyChat details from its help centre, {MANYCHAT_CHECKED}.</p>
      </div>
    </section>
  )
}

export function NepalPricing() {
  return (
    <section className="bg-white px-5 pb-24">
      <div className="mx-auto grid max-w-[1000px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan) => (
          <div key={plan.id} className="rounded-[24px] bg-sage p-6">
            <p className="mc-label text-mute">{plan.label}</p>
            <p className="mt-4 font-display text-[2rem] font-black tracking-tight">{plan.priceUsd === 0 ? "Free" : formatNpr(toNpr(plan.priceUsd))}</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {plan.limits.slice(0, 3).map((limit) => (
                <li key={limit.label} className="flex items-center gap-2">
                  <BoxCheck tone="green" className="size-4" />
                  {limitText(limit)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
