"use client"

import { ChevronRight,Code,Cog,Headphones,Mail,Menu,NotebookPen,SquareChartGantt,X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect,useRef,useState } from "react"

import { Button } from "@/components/ui/button"

interface SiteHeaderProps {
  contactHref?: string
  menuRef?: React.RefObject<HTMLDivElement | null>
  mobileMenuOpen?: boolean
  onMobileMenuOpenChange?: (open: boolean) => void
  onPrimaryCta?: () => void
  pricingHref?: string
  primaryCtaHref?: string
}

interface ServiceNavItem {
  description: string
  href: string
  Icon: React.ComponentType<{ className?: string }>
  iconBgClassName: string
  iconClassName: string
  label: string
  badge?: string
}

const serviceNavItems: ServiceNavItem[] = [
  {
    label: "Blog Agent",
    description: "Multi-purpose blog generator with SEO-ready content",
    href: "/services/blog-automation",
    Icon: NotebookPen,
    iconBgClassName: "bg-blue-100",
    iconClassName: "text-blue-600",
    badge: "NEW",
  },
  {
    label: "Social Media Automation",
    description: "Schedule, optimize, and automate social campaigns",
    href: "/services/social-media-automation",
    Icon: SquareChartGantt,
    iconBgClassName: "bg-pink-100",
    iconClassName: "text-pink-600",
  },
  {
    label: "SEO Automation",
    description: "AI meta generation, audits, and keyword clustering",
    href: "/services/seo-automation",
    Icon: Code,
    iconBgClassName: "bg-green-100",
    iconClassName: "text-green-600",
  },
  {
    label: "Email Marketing Automation",
    description: "Automated campaigns, segmentation & personalization",
    href: "/services/email-marketing-automation",
    Icon: Mail,
    iconBgClassName: "bg-purple-100",
    iconClassName: "text-purple-600",
  },
  {
    label: "CRM Automation",
    description: "Lead flows, auto-reminders & 3rd-party integration",
    href: "/services/crm-automation",
    Icon: Cog,
    iconBgClassName: "bg-yellow-100",
    iconClassName: "text-yellow-600",
  },
  {
    label: "Customer Support Automation",
    description: "AI chatbots, smart routing & 24/7 support",
    href: "/services/customer-support-automation",
    Icon: Headphones,
    iconBgClassName: "bg-teal-100",
    iconClassName: "text-teal-600",
  },
]

const topLevelLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

export function SiteHeader({
  pricingHref = "/#pricing",
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
    if (!isMenuOpen) {
      return
    }

    function handleClickOutside(event: MouseEvent) {
      if (activeMenuRef.current?.contains(event.target as Node)) {
        return
      }

      setMenuOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeMenuRef, isMenuOpen, setMenuOpen])

  const renderPrimaryCta = (className: string) => {
    if (onPrimaryCta) {
      return (
        <Button size="lg" className={className} onClick={onPrimaryCta}>
          Automate Now
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      )
    }

    const href = primaryCtaHref ?? "https://cal.com/awwtomation/awwtomation-consultation"
    const isExternal = href.startsWith("http")

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className={className}>
            Automate Now
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
      )
    }

    return (
      <Link href={href}>
        <Button size="lg" className={className}>
          Automate Now
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="Awwtomation home">
            <Image
              src="/full-logo.svg"
              alt="Awwtomation Logo"
              width={164}
              height={40}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>
        </div>

        <nav className="relative hidden items-center gap-8 md:flex">
          <div className="relative group/menu">
            <div className="relative z-50 flex items-center gap-1 text-sm font-medium cursor-pointer">
              <Link href="/services" className="group flex gap-4">
                Services
              </Link>
            </div>
            <div className="absolute left-0 top-full z-40 hidden pt-2 group-hover/menu:flex">
              <div className="w-[min(640px,calc(100vw-2rem))] rounded-xl border bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {serviceNavItems.map(({ label, description, href, Icon, iconBgClassName, iconClassName, badge }) => (
                    <Link key={href} href={href} className="group flex gap-4 rounded-md p-3 hover:bg-gray-50">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBgClassName}`}>
                        <Icon className={`h-5 w-5 ${iconClassName}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 font-medium text-gray-800">
                          {label}
                          {badge ? (
                            <span className="rounded-md bg-red-100 px-2 py-0.5 text-xs text-red-600">{badge}</span>
                          ) : null}
                        </div>
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href={pricingHref} className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href={contactHref} className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          {topLevelLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">{renderPrimaryCta("hover:bg-blue-700")}</div>

        <div ref={activeMenuRef} className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="rounded-md border border-gray-300 p-2"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {isMenuOpen ? (
            <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-white px-4 py-6 shadow">
              <div className="mx-auto max-w-lg space-y-4">
                {serviceNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block font-medium text-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t pt-4">
                  <Link href="/services" className="block py-1 text-gray-700" onClick={() => setMenuOpen(false)}>
                    Services
                  </Link>
                  <Link href="/blog" className="block py-1 text-gray-700" onClick={() => setMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link href={pricingHref} className="block py-1 text-gray-700" onClick={() => setMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link href={contactHref} className="block py-1 text-gray-700" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                  <Link href="/about" className="block py-1 text-gray-700" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </div>
                <div className="pt-2">
                  {renderPrimaryCta("w-full hover:bg-blue-700")}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
