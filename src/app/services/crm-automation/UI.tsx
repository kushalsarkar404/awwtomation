"use client"

import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CheckCircle,
  Cog,
  Database,
  Eye,
  Globe,
  Mail,
  PieChart,
  RefreshCw,
  Search,
  Shield,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { CalModal } from "@/components/cal-modal"
import { FaqCardSection } from "@/components/seo/faq-card-section"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { ServicePageHero } from "@/components/service-page-hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { FeatureRows } from "@/components/ui/feature-rows"
import { ProcessRail } from "@/components/ui/process-rail"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { serviceDefinitions } from "@/lib/seo"

const principleChips = [
  "Lead capture",
  "Routing & ownership",
  "Follow-up SLAs",
  "Scoring",
  "Reporting",
]

const connectBlocks = [
  {
    icon: Globe,
    title: "Stack-wide integration",
    description:
      "HubSpot, Salesforce, Pipedrive, forms, chat, and spreadsheets connected via API, webhook, or native sync.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Real-time sync",
    description: "Every event updates owner, stage, and status the moment it happens.",
    span: "sm" as const,
  },
  {
    icon: CheckCircle,
    title: "Clean data",
    description: "Validation, deduping, and field normalization keep records report-ready.",
    span: "md" as const,
  },
  {
    icon: Database,
    title: "One source of truth",
    description: "No rip-and-replace and no duplicate entry between sales and marketing.",
    span: "md" as const,
  },
]

const lifecycleTriggers = [
  {
    icon: Mail,
    title: "Behavior-based campaigns",
    description: "Fire sequences from form fills, demo requests, quotes, renewals, or inactivity windows.",
  },
  {
    icon: Smartphone,
    title: "Multi-channel outreach",
    description: "Email, SMS, and chat touches all logged back to the record for auditability.",
  },
  {
    icon: Calendar,
    title: "Smart follow-up",
    description: "Reminders after demos, downloads, and support requests keep handoffs moving.",
  },
]

const scoringRows = [
  {
    eyebrow: "Scoring",
    title: "Scoring your team can actually explain",
    description:
      "We build the model around behaviors your reps trust, so priority is defensible instead of arbitrary.",
    bullets: ["Page & content signals", "Demographic fit", "Reply & demo intent", "Custom rules"],
    icon: Target,
  },
  {
    eyebrow: "Routing",
    title: "Qualified leads routed without ambiguity",
    description:
      "High-scoring leads reach the right rep, territory, or queue with ownership and SLA checks attached.",
    bullets: ["Owner assignment", "Territory routing", "SLA timers", "Queue rules"],
    icon: Zap,
  },
]

const reportingBlocks = [
  {
    icon: BarChart3,
    title: "Live analytics",
    description:
      "Dashboards pull from your CRM and external sources so weekly reviews replace spreadsheet exports.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: PieChart,
    title: "Operational KPIs",
    description: "Track response time, deal velocity, and stage drop-off as they move.",
    span: "sm" as const,
  },
  {
    icon: Eye,
    title: "Decision-ready views",
    description: "Managers spot trends and adjust strategy without waiting on manual reports.",
    span: "md" as const,
  },
  {
    icon: TrendingUp,
    title: "Revenue influence",
    description: "See the pipeline and revenue that automation actually moved.",
    span: "md" as const,
  },
]

const implementationSteps = [
  {
    icon: Search,
    title: "Workflow audit",
    description: "Map capture sources, current handoffs, and the process your team already runs.",
  },
  {
    icon: Workflow,
    title: "Triggers & owners",
    description: "Document every trigger, branch, exception, and owner before anything is wired.",
  },
  {
    icon: Shield,
    title: "QA & gates",
    description: "Test against live scenarios with validation and permission rules in place.",
  },
  {
    icon: TrendingUp,
    title: "Launch & tune",
    description: "Ship, measure against baseline, and tune the workflow post-launch.",
  },
]

const outcomeChips = [
  "Faster lead response",
  "Cleaner handoffs",
  "Higher conversion",
  "Fewer duplicate records",
  "Scalable without headcount",
  "Data-driven decisions",
]

const reasons = [
  {
    icon: Target,
    title: "CRM automation focus",
    description: "End-to-end builds across the major CRM platforms, not bolt-on tweaks.",
  },
  {
    icon: Cog,
    title: "Tailored solutions",
    description: "Workflows built around your process, not a rigid template.",
  },
  {
    icon: Users,
    title: "Dedicated support",
    description: "We stay involved from implementation through post-launch tuning.",
  },
  {
    icon: Shield,
    title: "Security & compliance",
    description: "Encryption, authentication, and permissions planned before launch.",
  },
  {
    icon: TrendingUp,
    title: "Measured against baseline",
    description: "Faster response and cleaner handoffs verified against your own numbers.",
  },
  {
    icon: Workflow,
    title: "Future-proof builds",
    description: "Scalable platforms that stay easy to extend as your stack changes.",
  },
]

export default function CRMAutomationPage() {
  const serviceSeo = serviceDefinitions["crm-automation"]
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

      {/* Why CRM automation matters */}
      <Section tone="alt" bordered>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Why it matters"
            title="Faster routing, standard follow-up, cleaner pipeline"
            intro="We wire routing, scoring, reminders, and reporting to rules your team can actually maintain."
          />
          <Reveal as="ul" variant="right" className="grid gap-3 sm:grid-cols-2">
            {principleChips.map((chip) => (
              <li
                key={chip}
                className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-zinc-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                {chip}
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* How we connect across your stack */}
      <Section aurora>
        <SectionHeading
          eyebrow="Connect the stack"
          title="CRM automation wired across your tools"
          intro="We map fields, events, and handoff rules so nothing gets entered twice or lost between teams."
        />
        <BentoGrid className="mt-14">
          {connectBlocks.map((block, index) => (
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

      {/* CRM and lifecycle email workflows */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Lifecycle handoff"
          title="Where CRM automation hands off to nurture"
          intro={
            <>
              CRM events trigger the right path in{" "}
              <Link
                href="/services/email-marketing-automation"
                className="font-medium text-violet-200 underline decoration-white/20 underline-offset-4"
              >
                email marketing automation
              </Link>
              .
            </>
          }
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {lifecycleTriggers.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="bg-[#0a0a0c] p-7 sm:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-400">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CRM workflow automation for scoring and qualification */}
      <Section>
        <SectionHeading
          eyebrow="Scoring & qualification"
          title="CRM workflow automation for scoring and qualification"
          intro="Score on behaviors your team trusts, then route the ready-to-buy leads first."
        />
        <FeatureRows rows={scoringRows} className="mt-16" />
      </Section>

      {/* CRM reporting */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Reporting"
          title="CRM reporting that shows what changed"
          intro="Dashboards tied to response time, conversion, stage aging, and revenue influenced."
        />
        <BentoGrid className="mt-14">
          {reportingBlocks.map((block, index) => (
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

      {/* Implementation-led workflow automation */}
      <Section>
        <SectionHeading
          eyebrow="Implementation"
          title="Implementation-led workflow automation"
          intro="Document every trigger and owner, test against live scenarios, then launch."
        />
        <ProcessRail steps={implementationSteps} className="mt-16" />
      </Section>

      {/* Measured outcomes and ROI */}
      <Section tone="alt" bordered>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Outcomes & ROI"
            title="Measured outcomes and ROI of CRM automation"
            intro="We benchmark the baseline, launch, and review the delta in operational and revenue numbers."
          />
          <Reveal as="ul" variant="right" className="grid gap-3 sm:grid-cols-2">
            {outcomeChips.map((chip) => (
              <li
                key={chip}
                className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-zinc-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                {chip}
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Why teams choose Awwtomation */}
      <Section>
        <SectionHeading
          eyebrow="Why Awwtomation"
          title="Why teams choose Awwtomation for CRM automation"
          intro="Implementation-led from discovery through post-launch tuning — a system your team can maintain."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              delay={index * 70}
              className="flex gap-4 bg-[#0a0a0c] p-7 sm:p-8"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200">
                <reason.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <LinkCardSection
        eyebrow="Related Resources"
        title="Build a Better CRM Automation Stack"
        description="These pages reinforce CRM, lifecycle email, support, and SEO automation topics that support this commercial page."
        links={serviceSeo.relatedResources}
      />

      <FaqCardSection
        title="CRM Automation FAQs"
        description="Answers to the questions teams ask before connecting their CRM, lead routing, follow-up, and reporting."
        faqs={serviceSeo.faqs}
      />

      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
