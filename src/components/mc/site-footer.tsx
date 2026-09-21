import Link from "next/link"

import { PhotoSlot } from "@/components/mc/placeholder"
import { Logo } from "@/components/site/logo"
import { brand } from "@/lib/brand"
import { footerColumns } from "@/lib/nav"

/** Black footer: logo and link columns on the left, a video slot on the right. */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/25 bg-ink text-white">
      <div className="grid gap-14 px-5 pb-16 pt-12 lg:grid-cols-2 lg:gap-0 lg:px-[2.95vw] lg:pb-[3.6vw] lg:pt-[2.95vw]">
        <div>
          <Link href="/" aria-label={`${brand.name} home`} className="inline-block">
            <Logo className="h-9 text-white [--logo-accent:#c1c1d7] lg:h-[max(2.45vw,34px)]" />
          </Link>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:mt-[5.3vw] lg:grid-cols-[repeat(3,14.5vw)] lg:gap-x-0 lg:gap-y-[4.2vw]">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="mc-label text-white/55">{column.heading}</p>
                <ul className="mt-5 lg:mt-[1.6vw]">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block text-[1rem] leading-[1.9] text-white hover:underline hover:underline-offset-4 lg:text-[clamp(0.9375rem,1vw,1.1875rem)] lg:leading-[1.72]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PhotoSlot video tone="dark" label="Brand film, Awwtomation in 60 seconds" className="aspect-[846/476] w-full" />
          <p className="mc-label mt-4 text-right text-white/60 lg:mt-[1.05vw]">
            © {new Date().getFullYear()}, {brand.company}
          </p>
        </div>
      </div>
    </footer>
  )
}
