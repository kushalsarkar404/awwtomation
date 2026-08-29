"use client"

import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const serviceLinks = [
  { href: "/services/crm-automation", label: "CRM Automation" },
  { href: "/services/email-marketing-automation", label: "Email Marketing Automation" },
  { href: "/services/seo-automation", label: "SEO Automation" },
  { href: "/services/social-media-automation", label: "Social Media Automation" },
  { href: "/services/blog-automation", label: "Blog Automation" },
  { href: "/services/customer-support-automation", label: "Customer Support Automation" },
]

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/templates", label: "Automation Templates" },
]

const socialLinks = [
  { href: "https://www.instagram.com/awwtomation/", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/company/awwtomation/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://youtube.com/@Awwtomation", label: "YouTube", Icon: Youtube },
]

export function SiteFooter() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const serviceNames: Record<string, string> = {
    "crm-automation": "CRM Automation",
    "email-marketing-automation": "Email Marketing Automation",
    "seo-automation": "SEO Automation",
    "social-media-automation": "Social Media Automation",
    "blog-automation": "Blog Automation",
    "customer-support-automation": "Customer Support Automation",
  }
  const serviceSlug = pathname.split("/").filter(Boolean).at(-1)
  const serviceName = serviceSlug ? serviceNames[serviceSlug] : undefined

  const cta = pathname.startsWith("/services/") && serviceName
    ? {
        title: `Build a ${serviceName} system that actually performs`,
        description: "We will map the triggers, data, approvals, and failure paths before anything goes live.",
      }
    : pathname === "/services"
      ? {
          title: "Find the automation opportunity worth solving first",
          description: "We will map the bottleneck, quantify the impact, and recommend the smallest useful system to build.",
        }
      : pathname.startsWith("/blog")
        ? {
            title: "Need help implementing one of these workflows?",
            description: "Bring us the process and current tools. We will scope the first useful version with you.",
          }
        : pathname === "/about"
          ? {
              title: "Tell us which process needs fixing",
              description: "Start with one costly manual process and leave with a clear recommendation for what to automate first.",
            }
          : {
              title: "Replace repetitive work with a system built to scale",
              description: "Tell us where the process slows down and we will map the clearest path to automation.",
            }

  return (
    <footer className="bg-[#050505] px-4 pb-8 pt-10 text-white sm:px-6 lg:px-8">
      {!isHome ? (
        <section className="relative mx-auto mb-20 max-w-7xl overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[radial-gradient(circle_at_top,#35205f_0%,#151019_42%,#080808_82%)] px-6 py-14 text-center sm:px-10 lg:py-16">
          <div className="grid-texture absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display mx-auto max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-300">{cta.description}</p>
            <a
              href="https://cal.com/awwtomation/awwtomation-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-violet-100"
            >
              Book a free strategy call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      ) : null}
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Awwtomation home" className="inline-block">
              <Image src="/full-logo.svg" alt="Awwtomation" width={159} height={23} className="h-7 w-auto invert" />
            </Link>
            <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
              We design and implement automation for CRM, marketing, content, support, and internal operations.
            </p>
            <a
              href="mailto:contact@awwtomation.com"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
            >
              contact@awwtomation.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-zinc-500">Automation services</h2>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium text-zinc-500">Company</h2>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Awwtomation. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy-policy" className="transition hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/legal/terms-and-conditions" className="transition hover:text-zinc-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
