"use client"

import {
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  FileText,
  Headphones,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { CalModal } from "@/components/cal-modal"
import { FaqCardSection } from "@/components/seo/faq-card-section"
import { ServicePageHero } from "@/components/service-page-hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ProcessRail } from "@/components/ui/process-rail"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { serviceDefinitions, servicesHubSeo, type ServiceKey } from "@/lib/seo"

const serviceIcons = {
  "crm-automation": Database,
  "email-marketing-automation": Mail,
  "seo-automation": Search,
  "social-media-automation": Share2,
  "blog-automation": FileText,
  "customer-support-automation": Headphones,
} satisfies Record<ServiceKey, typeof Database>

const serviceOutcomes: Record<ServiceKey, string> = {
  "crm-automation": "Cleaner lead routing, dependable follow-up, and a pipeline your team can trust.",
  "email-marketing-automation": "Lifecycle journeys triggered by customer behavior instead of manual list work.",
  "seo-automation": "Repeatable technical checks, rank monitoring, content briefs, and decision-ready reporting.",
  "social-media-automation": "Consistent publishing, approvals, lead routing, and channel performance visibility.",
  "blog-automation": "A governed content workflow from research and drafting through review and publishing.",
  "customer-support-automation": "Faster triage and answers with clear escalation paths for complex conversations.",
}

const processSteps = [
  {
    icon: Search,
    title: "Discovery and process mapping",
    description: "We document the current workflow, systems, owners, delays, and success metric.",
  },
  {
    icon: Workflow,
    title: "Workflow and data design",
    description: "We define triggers, field mappings, approval gates, exceptions, and recovery paths.",
  },
  {
    icon: ShieldCheck,
    title: "Build, QA, and launch",
    description: "We test realistic scenarios, access controls, failure states, and human handoffs before release.",
  },
  {
    icon: BarChart3,
    title: "Measurement and iteration",
    description: "We monitor adoption and operational impact, then refine the system as the process changes.",
  },
]

const startingPoints = [
  {
    problem: "Leads wait too long for a response",
    recommendation: "CRM and email automation",
    href: "/services/crm-automation",
  },
  {
    problem: "Reporting consumes days every month",
    recommendation: "SEO and operations reporting automation",
    href: "/services/seo-automation",
  },
  {
    problem: "Content production is inconsistent",
    recommendation: "Blog and social media automation",
    href: "/services/blog-automation",
  },
  {
    problem: "Routine support requests overwhelm the team",
    recommendation: "Customer support automation",
    href: "/services/customer-support-automation",
  },
]

const measuredResults = [
  {
    result: "$3,000 monthly savings",
    context: "Booking and order workflows connected for a hospitality business.",
  },
  {
    result: "15 hours reclaimed each week",
    context: "Repetitive coordination and admin moved into a dependable workflow.",
  },
  {
    result: "35% fewer no-shows",
    context: "Appointment reminders and follow-up rules rebuilt around customer behavior.",
  },
]

const engagementElements = [
  {
    icon: Bot,
    title: "AI and rules together",
    description: "Use AI for interpretation and rules for controls, routing, and accountability.",
  },
  {
    icon: Database,
    title: "Connected business data",
    description: "Keep customer, campaign, content, and support context synchronized.",
  },
  {
    icon: ShieldCheck,
    title: "Human approval where needed",
    description: "Protect brand, financial, and customer decisions with clear review gates.",
  },
  {
    icon: BarChart3,
    title: "Measurable operations",
    description: "Track response time, hours saved, error reduction, conversion, and adoption.",
  },
]

export default function AutomationServicesPage() {
  const [calModalOpen, setCalModalOpen] = useState(false)

  return (
    <div className="content-page flex min-h-[100dvh] flex-col">
      <SiteHeader onPrimaryCta={() => setCalModalOpen(true)} />
      <main>
        <ServicePageHero title={servicesHubSeo.heroTitle} description={servicesHubSeo.heroDescription} />

        <Section>
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="What you get"
              title="One workflow, fully mapped and tested"
              intro="We document the process, define the rules, connect the systems, test failure paths, and agree on how the result will be measured."
            />
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {engagementElements.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-[#0b0b0d] p-7">
                  <Icon className="h-5 w-5 text-violet-300" />
                  <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="service-options" tone="alt" bordered aurora>
          <SectionHeading
            eyebrow="Service options"
            title="Choose the process you want to fix first"
            intro="Each service starts with a specific operational problem. The workflows can share data once the first one is stable."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {Object.values(serviceDefinitions).map((service, index) => {
              const Icon = serviceIcons[service.key]
              return (
                <Reveal key={service.key} delay={index * 70} className="group flex bg-[#0b0b0d] p-8 sm:p-10">
                  <div className="flex w-full flex-col">
                    <Icon className="h-6 w-6 text-violet-300" />
                    <h2 className="mt-10 text-3xl font-semibold tracking-[-0.035em] text-white">
                      {service.shortName}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-300">{serviceOutcomes[service.key]}</p>
                    <p className="mt-4 text-sm leading-6 text-zinc-500">{service.description}</p>
                    <Link
                      href={service.href}
                      className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition group-hover:text-white"
                    >
                      Explore {service.shortName.toLowerCase()} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Where to begin"
            title="Start with the problem, not the platform"
            intro="A good first automation has a clear owner, a measurable cost, and a scope small enough to test safely."
          />
          <div className="mx-auto mt-14 max-w-5xl border-y border-white/10">
            {startingPoints.map((item) => (
              <Link
                key={item.problem}
                href={item.href}
                className="group grid gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[1fr_1fr_auto] sm:items-center"
              >
                <h3 className="font-medium text-white">{item.problem}</h3>
                <p className="text-sm text-zinc-400">{item.recommendation}</p>
                <ArrowRight className="h-4 w-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-violet-300" />
              </Link>
            ))}
          </div>
        </Section>

        <Section tone="alt" bordered>
          <SectionHeading
            eyebrow="Implementation"
            title="How an automation reaches production"
            intro="Discovery, build, QA, launch, and measurement stay in one delivery plan."
          />
          <ProcessRail steps={processSteps} className="mt-16" />
        </Section>

        <Section>
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Client outcomes"
              title="Evidence from working automation systems"
              intro="We define a baseline before launch so results can be reviewed against operational metrics, not just activity."
            />
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-3">
              {measuredResults.map((item) => (
                <div key={item.result} className="bg-[#0b0b0d] p-7">
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.result}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{item.context}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <FaqCardSection
          title="Automation services FAQs"
          description="Direct answers about scope, rollout, and what a production-ready workflow includes."
          faqs={servicesHubSeo.faqs}
        />

        <Section>
          <Reveal
            variant="scale"
            className="relative overflow-hidden rounded-[2.5rem] border border-violet-300/20 bg-[radial-gradient(circle_at_top,#32205f_0%,#151019_42%,#080808_82%)] px-6 py-16 text-center sm:px-12"
          >
            <div className="grid-texture absolute inset-0 opacity-45" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                Bring us one process that needs fixing
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Show us the steps, tools, owner, and current failure points. We will help you scope the smallest useful version.
              </p>
              <Button
                size="lg"
                className="mt-10 h-13 rounded-full bg-white px-8 font-semibold text-black hover:bg-violet-100"
                onClick={() => setCalModalOpen(true)}
              >
                Book a free strategy call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Section>
      </main>
      <SiteFooter />
      <CalModal
        open={calModalOpen}
        onOpenChange={setCalModalOpen}
        calLink="awwtomation/awwtomation-consultation"
      />
    </div>
  )
}
