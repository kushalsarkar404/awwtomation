"use client"

import {
  BarChart3,
  Clock,
  Cog,
  Eye,
  Globe,
  Heart,
  Mail,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
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

const relatedResources = [
  {
    title: "Drive Sales with Email Marketing Automation",
    href: "/blog/drive-sales-with-email-marketing-automation",
    description: "Learn how lifecycle mapping, segmentation, and trigger design turn email into a revenue system.",
    label: "Related blog",
  },
  {
    title: "Best Email Marketing Platforms",
    href: "/blog/best-email-marketing-platforms",
    description: "Compare the tools teams use before building automated nurture, cart recovery, and onboarding flows.",
    label: "Related blog",
  },
  {
    title: "CRM Automation Service",
    href: "/services/crm-automation",
    description: "Connect email triggers to lead routing, lifecycle stages, and sales handoffs.",
    label: "Related service",
  },
  {
    title: "Blog Automation Service",
    href: "/services/blog-automation",
    description: "Pair content publishing with email nurture so new traffic stays in motion.",
    label: "Related service",
  },
]

const lifecycleStages = ["Welcome", "Nurture", "Convert", "Recover", "Retain"]

const workflowBlocks = [
  {
    icon: Mail,
    title: "Welcome & onboarding sequences",
    description: "Introduce the offer and move new contacts to a next action based on signup source and intent.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: Clock,
    title: "Lead nurture & drips",
    description: "Sequences shaped by intent signals and lead stage, not generic broadcast mail.",
    span: "sm" as const,
  },
  {
    icon: Users,
    title: "Segmentation & routing",
    description: "Split by behavior, source, and lifecycle stage so each contact sees the right path.",
    span: "md" as const,
  },
  {
    icon: ShoppingCart,
    title: "Abandoned cart recovery",
    description: "Timed reminders with product context that bring shoppers back automatically.",
    span: "md" as const,
  },
  {
    icon: Heart,
    title: "Post-purchase follow-ups",
    description: "Thank-yous, usage tips, and cross-sell paths that support retention.",
    span: "sm" as const,
  },
  {
    icon: Eye,
    title: "Browse & re-engagement",
    description: "Contextual follow-ups when a visitor views key products or goes quiet.",
    span: "sm" as const,
  },
  {
    icon: BarChart3,
    title: "Reporting & A/B testing",
    description: "Open, click, and revenue tracking wired in, then tuned through testing.",
    span: "sm" as const,
  },
]

const implementSteps = [
  {
    icon: Cog,
    title: "Audit stack & lifecycle map",
    description: "Review forms, CRM fields, email platform, and store events so the plan fits what exists.",
  },
  {
    icon: Target,
    title: "Build triggers, segments & copy",
    description: "Define the event logic and write messages tailored to the intent behind each send.",
  },
  {
    icon: Zap,
    title: "QA deliverability & tracking",
    description: "Test links, event firing, suppression, and reporting before anything goes live.",
  },
  {
    icon: TrendingUp,
    title: "Optimize on real data",
    description: "Review engagement, conversion, and pipeline effects to improve each iteration.",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Less manual follow-up",
    description: "Automated flows handle routine messaging so the team focuses on strategy and sales.",
  },
  {
    icon: TrendingUp,
    title: "More consistent conversion",
    description: "The right sequence at the right time reduces drop-off between lifecycle stages.",
  },
  {
    icon: BarChart3,
    title: "Clearer attribution",
    description: "Email activity ties back to the workflow, message, and segment driving results.",
  },
]

const whyRows = [
  {
    eyebrow: "Revenue-aligned",
    icon: Globe,
    title: "Built for CRM-connected teams",
    description:
      "We design around the handoff between marketing, sales, and operations so your email platform, CRM, and store data all run on the same lifecycle logic.",
    bullets: ["Marketing", "Sales", "Operations", "Shared lifecycle"],
  },
  {
    eyebrow: "Post-launch",
    icon: Heart,
    title: "Support that keeps improving the system",
    description:
      "Launch day is not the finish line. We monitor results, tune the workflows, and refine the messaging so the system keeps earning its place in your stack.",
    bullets: ["Monitor", "Tune workflows", "Refine copy", "Ongoing QA"],
  },
]

export default function EmailMarketingAutomationPage() {
  const serviceSeo = serviceDefinitions["email-marketing-automation"]
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

      {/* Why it matters */}
      <Section tone="alt" bordered>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Why it matters"
            title="Why email marketing automation matters"
            intro="Delayed follow-up and broad lists leak revenue — event-based flows fix the gaps."
          />
          <Reveal as="ul" variant="right" className="grid gap-3 sm:grid-cols-2">
            {lifecycleStages.map((stage) => (
              <li
                key={stage}
                className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-zinc-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                {stage}
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Workflows we build */}
      <Section aurora>
        <SectionHeading
          eyebrow="What we build"
          title="Core email marketing automation workflows"
          intro="Specific flows built around the action that matters and the data you already have."
        />
        <BentoGrid className="mt-14">
          {workflowBlocks.map((block, index) => (
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
          title="How we implement email marketing automation"
          intro="A repeatable process — data, copy, triggers, QA, and measurement — that keeps working after launch."
        />
        <ProcessRail steps={implementSteps} className="mt-16" />
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeading
          eyebrow="What you get"
          title="Benefits you can expect"
          intro="Less manual effort, more consistency, and email activity you can tie back to revenue."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index * 80}
              className="flex flex-col gap-4 bg-[#0a0a0c] p-7 sm:p-8"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200">
                <benefit.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Awwtomation */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Why Awwtomation"
          title="Reliable, maintainable, revenue-aware"
          intro="We do not just launch flows — we make them dependable inside real revenue operations."
        />
        <FeatureRows rows={whyRows} className="mt-16" />
      </Section>

      <LinkCardSection
        eyebrow="Related Resources"
        title="Strengthen your email automation stack"
        description="The platform, CRM, and lifecycle pages that matter most for this service."
        links={relatedResources}
      />

      <FaqCardSection
        title="Email Marketing Automation FAQs"
        description="Answers about lifecycle logic, CRM alignment, deliverability, implementation, and reporting."
        faqs={serviceSeo.faqs}
      />

      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
