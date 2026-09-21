import Link from "next/link"

import { PhotoSlot } from "@/components/mc/placeholder"
import { TiltedStack } from "@/components/mc/tilted-stack"
import { Logo } from "@/components/site/logo"
import { brand } from "@/lib/brand"
import { legalLinks } from "@/lib/nav"

/**
 * The use-case page footer: a framed photo (1725 x 1160 at 1800px) with chat
 * bubbles and the full-width wordmark.
 */
export function LandingFooter({ accent = "#fb0df7", bubbles }: { accent?: string; bubbles: string[] }) {
  return (
    <footer className="bg-white px-3 pb-8 pt-10 lg:px-[2.1vw] lg:pb-[2.7vw] lg:pt-[4.3vw]">
      <TiltedStack
        accent={accent}
        spread={-1.2}
        radius="clamp(28px, 2.5vw, 48px)"
        border="clamp(5px, 0.42vw, 8px)"
        className="mx-auto aspect-[4/5] w-full sm:aspect-[1725/1160]"
      >
        <PhotoSlot tone="cool" label="Customer on the street, phone in hand" className="absolute inset-0" hideLabel />
        <div className="absolute right-[8%] top-[20%] flex flex-col items-start gap-2 sm:right-[21.4%] sm:top-[45.6%] lg:gap-[0.55vw]">
          {bubbles.map((bubble) => (
            <span
              key={bubble}
              className="rounded-full bg-lavender px-4 py-2 text-[1rem] font-bold tracking-[-0.01em] text-ink lg:px-[1.35vw] lg:py-[0.6vw] lg:text-[clamp(1rem,1.33vw,1.625rem)]"
            >
              {bubble}
            </span>
          ))}
        </div>
        <Logo className="absolute bottom-[27%] left-[3.1%] h-auto w-[93.8%] text-white [--logo-accent:rgba(255,255,255,0.55)] sm:bottom-[11%]" />
        <div className="absolute inset-x-[3.1%] bottom-[3.5%] flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="mc-label-sm lg:text-[0.875rem]">
            © {new Date().getFullYear()} {brand.company}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-[2.7vw]">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="mc-label-sm border-b border-white/60 pb-1 lg:text-[0.875rem]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </TiltedStack>
    </footer>
  )
}
