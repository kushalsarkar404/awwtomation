"use client"

import {
  BarChart3,
  Cog,
  Eye,
  FileText,
  Search,
  Target,
  TrendingUp,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { CalModal } from "@/components/cal-modal"
import { FaqCardSection } from "@/components/seo/faq-card-section"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { ServicePageHero } from "@/components/service-page-hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { ProcessRail } from "@/components/ui/process-rail"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { serviceDefinitions } from "@/lib/seo"

const relatedResources = [
  {
    title: "Best SEO Tools to Supercharge Audience Growth",
    href: "/blog/best-seo-tools-to-supercharge-audience-growth",
    description: "Choose the reporting, crawl, and rank-tracking stack that feeds the automation layer.",
    label: "Related blog",
  },
  {
    title: "Why Link Building Can't Be Fully Automated",
    href: "/blog/why-link-building-cant-be-fully-automated",
    description: "Where automation should stop and human outreach should take over.",
    label: "Related blog",
  },
  {
    title: "Blog Automation Service",
    href: "/services/blog-automation",
    description: "Connect SEO planning to a repeatable content production and refresh pipeline.",
    label: "Related service",
  },
  {
    title: "CRM Automation Service",
    href: "/services/crm-automation",
    description: "Route SEO leads, demo requests, and form fills into follow-up workflows.",
    label: "Related service",
  },
  {
    title: "Email Marketing Automation Service",
    href: "/services/email-marketing-automation",
    description: "Turn SEO traffic into nurture, onboarding, and lifecycle campaigns.",
    label: "Related service",
  },
]

const automationBlocks = [
  {
    icon: BarChart3,
    title: "Automated SEO reports",
    description:
      "GA4, Search Console, keyword movement, and crawl data pulled into scheduled dashboards, digests, and Slack updates — white-label ready.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: Search,
    title: "Keyword rank tracking",
    description: "Track keyword sets by location and device, and surface the pages that need attention first.",
    span: "sm" as const,
  },
  {
    icon: Cog,
    title: "Technical SEO alerts",
    description: "Catch crawl errors, indexation drops, broken links, and schema failures before they cost traffic.",
    span: "md" as const,
  },
  {
    icon: FileText,
    title: "Content briefs & on-page QA",
    description: "Turn keyword clusters into briefs, metadata, and internal-link suggestions editors can execute fast.",
    span: "md" as const,
  },
]

const workflowSteps = [
  {
    icon: Search,
    title: "Discovery & mapping",
    description: "Audit the page set, map commercial and informational keywords, and decide what to automate.",
  },
  {
    icon: Cog,
    title: "Connectors & rules",
    description: "Connect GA4, Search Console, rank trackers, and CMS data into one repeatable workflow.",
  },
  {
    icon: Eye,
    title: "QA & approval gates",
    description: "Keep content, schema, and publishing in draft until the right people approve.",
  },
  {
    icon: TrendingUp,
    title: "Rollout & iteration",
    description: "Launch a narrow pilot, measure the lift, and expand only once signals are stable.",
  },
]

const outcomes = [
  {
    icon: BarChart3,
    title: "Faster reporting",
    description: "Replace the weekly dashboard rebuild with a consistent, reusable reporting flow.",
  },
  {
    icon: Eye,
    title: "Earlier issue detection",
    description: "Catch crawl regressions and ranking drops before they get expensive to fix.",
  },
  {
    icon: Target,
    title: "Better prioritization",
    description: "Focus the team on the pages and fixes with the highest business impact.",
  },
  {
    icon: TrendingUp,
    title: "More consistent execution",
    description: "Standardize recurring checks, refreshes, and updates so they actually happen on time.",
  },
]

const capabilities = ["Reporting", "Rank tracking", "Technical alerts", "Content briefs", "Internal linking"]

export default function SEOAutomationPage() {
  const serviceSeo = serviceDefinitions["seo-automation"]
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <div className="content-page flex min-h-[100dvh] flex-col">
      <SiteHeader
        menuRef={menuRef}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpenChange={setMobileMenuOpen}
        onPrimaryCta={() => {
          setSelectedCalLink("awwtomation/awwtomation-consultation")
          setCalModalOpen(true)
        }}
      />

      <ServicePageHero title={serviceSeo.heroTitle} description={serviceSeo.heroDescription} />

      {/* Principle */}
      <Section tone="alt" bordered>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="The short answer"
            title="Can SEO be automated? Yes — selectively."
            intro="Automate the repetitive work. Keep strategy, editorial judgment, and final approvals human-led."
          />
          <Reveal as="ul" variant="right" className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-zinc-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                {cap}
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* What we automate */}
      <Section aurora>
        <SectionHeading
          eyebrow="What we automate"
          title="A real SEO stack, wired together"
          intro="Built around your mapped keyword set, reporting needs, and the tools your team already uses."
        />
        <BentoGrid className="mt-14">
          {automationBlocks.map((block, index) => (
            <BentoCard
              key={block.title}
              icon={block.icon}
              title={block.title}
              description={block.description}
              span={block.span}
              featured={block.featured}
              index={index}
            />
          ))}
        </BentoGrid>
      </Section>

      {/* How we implement */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="How we implement"
          title="Map, connect, gate, then scale"
          intro="Deliberate by design — prove it on a pilot before it touches anything critical."
        />
        <ProcessRail steps={workflowSteps} className="mt-16" />
      </Section>

      {/* Why teams use it */}
      <Section>
        <SectionHeading
          eyebrow="Why teams use it"
          title="Operational lift first, ranking lift next"
          intro="Practical, auditable, and easy to defend internally."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <Reveal
              key={outcome.title}
              delay={index * 80}
              className="flex gap-4 bg-[#0a0a0c] p-7 sm:p-8"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200">
                <outcome.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{outcome.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{outcome.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <LinkCardSection
        eyebrow="Related Resources"
        title="What supports a stronger SEO automation program"
        description="The tooling, content operations, and cross-channel workflows that make SEO automation work in practice."
        links={relatedResources}
      />

      <FaqCardSection
        title="SEO Automation FAQs"
        description="Automated reporting, rank tracking, technical alerts, and measurable implementation."
        faqs={serviceSeo.faqs}
      />

      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
