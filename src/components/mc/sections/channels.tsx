import Link from "next/link"

import { InstagramGlyph, MessengerGlyph } from "@/components/mc/icons"
import type { MarketingPage } from "@/content/mc-types"
import { cn } from "@/lib/utils"

/** Desktop "Everywhere your audience is": a screen-high grid section with white channel cards (335 x 232 at 1800px). Phones get these cards under the photo curtain in BigWord. */
export function Channels({ page }: { page: MarketingPage }) {
  const { channels, theme } = page
  return (
    <section
      className={cn(
        "mc-grid hidden min-h-screen flex-col items-center justify-center px-5 py-28 text-center lg:flex",
        theme.onAccentLight ? "mc-grid-light text-white" : "text-ink",
      )}
      style={{ backgroundColor: theme.accent }}
    >
      <h2 className="mc-h2 mx-auto max-w-[63vw]">{channels.title}</h2>
      {channels.body ? <p className="mc-sub mx-auto mt-6 max-w-[40rem]">{channels.body}</p> : null}
      <div className="mt-12 flex flex-wrap justify-center gap-4 lg:mt-[3.05vw] lg:gap-[1.1vw]">
        {channels.cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex h-[200px] w-[280px] flex-col bg-white p-6 text-left text-ink lg:h-[max(12.9vw,200px)] lg:w-[max(18.6vw,280px)] lg:p-[max(1.5vw,20px)]"
          >
            <span className="flex items-center gap-3">
              {card.channel === "instagram" ? (
                <InstagramGlyph className="size-8 lg:size-[max(1.8vw,28px)]" />
              ) : (
                <MessengerGlyph className="size-8 lg:size-[max(1.8vw,28px)]" />
              )}
              <span className="text-[1.875rem] font-bold leading-none tracking-[-0.02em] lg:text-[clamp(1.75rem,2.06vw,2.5rem)]">
                {card.title}
              </span>
            </span>
            <span className="mt-3 text-[1rem] leading-[1.35] lg:mt-[0.9vw] lg:text-[clamp(1rem,1vw,1.25rem)]">{card.body}</span>
            <span className="mc-label mt-auto inline-flex items-center gap-3">
              <span className="underline decoration-1 underline-offset-[6px]">Learn more</span>
              <svg aria-hidden viewBox="0 0 20 12" className="h-3 w-5 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
