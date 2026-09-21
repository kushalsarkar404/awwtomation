import { Marquee } from "@/components/site/marquee"

/**
 * Where ManyChat runs creator testimonials. These are placeholders until real
 * customer quotes (with permission) are added. Never invent them.
 */
const placeholders = [
  { tone: "bg-sky", name: "Customer name", reach: "· followers" },
  { tone: "bg-yellow", name: "Customer name", reach: "· followers" },
  { tone: "bg-lavender", name: "Customer name", reach: "· followers" },
  { tone: "bg-sage", name: "Customer name", reach: "· followers" },
]

export function ProofStrip({ label }: { label: string }) {
  return (
    <section className="border-b border-fog bg-white">
      <div className="flex h-[112px] items-stretch lg:h-[max(7.3vw,112px)]">
        <p className="hidden w-[236px] shrink-0 items-center border-r border-fog px-7 text-[1.25rem] font-bold leading-[1.1] md:flex lg:w-[max(16.9vw,240px)] lg:px-[2.05vw] lg:text-[clamp(1.125rem,1.33vw,1.625rem)]">
          {label}
        </p>
        <Marquee className="items-center">
          {placeholders.map((item, index) => (
            <div key={index} className="flex items-center gap-3.5 pl-[3vw]">
              <div className={`h-[52px] w-[70px] shrink-0 rounded-lg lg:h-[3.33vw] lg:w-[4.44vw] ${item.tone}`} aria-hidden />
              <div className="font-mono text-[0.75rem] uppercase leading-[1.55] tracking-[0.02em] lg:text-[clamp(0.75rem,0.86vw,0.9375rem)]">
                <p>
                  <span className="bg-fog px-2 py-0.5">{item.name}</span>
                  <span className="ml-2 text-mute">{item.reach}</span>
                </p>
                <p className="text-ink">“Add a real customer quote here.”</p>
                <p className="text-mute">Testimonial placeholder</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
