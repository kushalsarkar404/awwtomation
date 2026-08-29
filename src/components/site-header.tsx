"use client"

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

interface SiteHeaderProps {
  contactHref?: string
  menuRef?: React.RefObject<HTMLDivElement | null>
  mobileMenuOpen?: boolean
  onMobileMenuOpenChange?: (open: boolean) => void
  onPrimaryCta?: () => void
  primaryCtaHref?: string
}

const serviceNavItems = [
  { label: "CRM Automation", href: "/services/crm-automation" },
  { label: "Email Marketing Automation", href: "/services/email-marketing-automation" },
  { label: "SEO Automation", href: "/services/seo-automation" },
  { label: "Social Media Automation", href: "/services/social-media-automation" },
  { label: "Blog Automation", href: "/services/blog-automation" },
  { label: "Customer Support Automation", href: "/services/customer-support-automation" },
]

export function SiteHeader({
  contactHref = "/#contact",
  menuRef,
  mobileMenuOpen,
  onMobileMenuOpenChange,
  onPrimaryCta,
  primaryCtaHref,
}: SiteHeaderProps) {
  const internalRef = useRef<HTMLDivElement>(null)
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const activeMenuRef = menuRef ?? internalRef
  const isControlled = typeof mobileMenuOpen === "boolean" && typeof onMobileMenuOpenChange === "function"
  const isMenuOpen = isControlled ? mobileMenuOpen : uncontrolledOpen
  const setMenuOpen = isControlled ? onMobileMenuOpenChange : setUncontrolledOpen

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [isMenuOpen, setMenuOpen])

  const primaryAction = () => {
    if (onPrimaryCta) {
      onPrimaryCta()
      return
    }

    window.open(primaryCtaHref ?? "https://cal.com/awwtomation/awwtomation-consultation", "_blank", "noopener,noreferrer")
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="pointer-events-auto mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-black/10 bg-white/95 px-4 shadow-[0_16px_50px_rgba(0,0,0,.22)] backdrop-blur-xl sm:px-5">
        <Link href="/" aria-label="Awwtomation home" className="shrink-0">
          <Image
            src="/full-logo.svg"
            alt="Awwtomation"
            width={159}
            height={23}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          <div className="group relative">
            <Link href="/services" className="flex items-center gap-1.5 py-5 text-sm text-zinc-700 transition hover:text-black">
              Automation Services
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-zinc-200 p-px shadow-2xl">
                {serviceNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-4 bg-white px-5 py-4 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-black"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/blog" className="text-sm text-zinc-700 transition hover:text-black">
            Blog
          </Link>
          <Link href="/about" className="text-sm text-zinc-700 transition hover:text-black">
            About
          </Link>
          <Link href={contactHref} className="text-sm text-zinc-700 transition hover:text-black">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={primaryAction}
            className="h-10 rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Book a call
            <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>

        <div ref={activeMenuRef} className="lg:hidden">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="pointer-events-auto mx-auto mt-2 max-w-6xl overflow-y-auto rounded-2xl border border-black/10 bg-white/98 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            <Link href="/services" className="py-3 text-lg font-medium text-black" onClick={() => setMenuOpen(false)}>
              Automation Services
            </Link>
            <div className="grid gap-1 border-b border-black/10 pb-4 sm:grid-cols-2">
              {serviceNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-sm text-zinc-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {[
              ["/blog", "Blog"],
              ["/about", "About"],
              [contactHref, "Contact"],
            ].map(([href, label]) => (
              <Link
                key={label}
                href={href}
                className="border-b border-black/10 py-3 text-base text-zinc-700"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMenuOpen(false)
                primaryAction()
              }}
              className="mt-4 h-12 rounded-full bg-black font-semibold text-white hover:bg-zinc-800"
            >
              Book a strategy call
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
