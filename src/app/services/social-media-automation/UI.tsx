"use client"

import {
  BarChart3,
  Calendar,
  Cog,
  Eye,
  Globe,
  Instagram,
  Linkedin,
  MessageSquare,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"
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

const channels = ["Facebook", "Instagram", "LinkedIn", "Twitter (X)", "TikTok", "YouTube", "Pinterest"]

const handlesBlocks = [
  {
    icon: Calendar,
    title: "Smart scheduling",
    description: "Queue posts by channel, campaign, and time zone — with room for real-time edits.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: Globe,
    title: "Multi-platform management",
    description: "One workflow across every network, with human review kept where it matters.",
    span: "sm" as const,
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    description: "Posts, clicks, comments, and handoffs in one reporting layer that shows pipeline.",
    span: "md" as const,
  },
  {
    icon: MessageSquare,
    title: "Inbox & comment triage",
    description: "Route DMs and comments so responses stay fast without manual monitoring.",
    span: "md" as const,
  },
]

const channelRows = [
  {
    eyebrow: "Community & B2B",
    title: "Facebook & LinkedIn",
    description: "Built for community, lead capture, and B2B demand — with approvals before anything goes live.",
    bullets: ["Page & group scheduling", "Comment & inbox triage", "Lead form handoff to CRM", "Editorial approvals"],
    icon: Linkedin,
  },
  {
    eyebrow: "Visual & video",
    title: "Instagram, TikTok, YouTube & Pinterest",
    description: "Format-aware setups for feeds, Reels, Shorts, and boards across your visual channels.",
    bullets: ["Feed, Reels & Shorts scheduling", "Caption & hashtag support", "Metadata & board planning", "Approval before publish"],
    icon: Instagram,
  },
  {
    eyebrow: "Real-time",
    title: "Twitter (X)",
    description: "Fast-moving publishing and monitoring for teams that react to trends in the moment.",
    bullets: ["Thread scheduling", "Trend-aware posting", "Keyword monitoring", "Engagement triage"],
    icon: Twitter,
  },
]

const stackBlocks = [
  {
    icon: Target,
    title: "CRM integration",
    description: "Sync leads from forms, DMs, and landing pages into HubSpot, Salesforce, or Zoho.",
  },
  {
    icon: MessageSquare,
    title: "Team collaboration",
    description: "Keep approvals and handoffs inside Slack, Discord, Trello, or Notion.",
  },
  {
    icon: Zap,
    title: "Content management",
    description: "Pull assets from Sheets, Airtable, or Notion, then queue, review, and publish.",
  },
]

const connectedTools = [
  "HubSpot",
  "Salesforce",
  "Zoho",
  "Mailchimp",
  "ConvertKit",
  "Google Sheets",
  "Airtable",
  "Notion",
  "Slack",
  "Discord",
  "Trello",
  "Klaviyo",
]

const implementSteps = [
  {
    icon: Eye,
    title: "Discovery",
    description: "Map posting, moderation, and reporting to find manual work, delays, and missed follow-up.",
  },
  {
    icon: Cog,
    title: "Build",
    description: "Configure workflows, rules, and triggers in your tools, with approvals and fallbacks.",
  },
  {
    icon: Calendar,
    title: "Launch",
    description: "Run a controlled rollout so the first live cycle is stable and visible.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "Tune timing, templates, and routing from performance and team feedback.",
  },
]

const audienceBlocks = [
  {
    icon: Target,
    title: "Marketing agencies",
    description: "Manage client approvals, publishing, and reporting from one system.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: Users,
    title: "Local businesses",
    description: "Stay consistent without hiring a full-time social manager.",
    span: "sm" as const,
  },
  {
    icon: TrendingUp,
    title: "eCommerce brands",
    description: "Run product launches, promotions, and UGC campaigns on repeat.",
    span: "md" as const,
  },
  {
    icon: Eye,
    title: "Content creators",
    description: "Turn one idea into a multi-channel workflow without losing your voice.",
    span: "md" as const,
  },
]

const reasons = [
  {
    icon: Cog,
    title: "Custom automation workflows",
    description: "Tailored to your channels, approval rules, and reporting needs.",
  },
  {
    icon: Zap,
    title: "Works with your current stack",
    description: "Built with n8n and the tools you already use, not a forced platform swap.",
  },
  {
    icon: Target,
    title: "Transparent scope and QA",
    description: "Defined triggers, exceptions, and fallback paths that stay easy to maintain.",
  },
  {
    icon: Users,
    title: "Support and training",
    description: "Your team gets implementation guidance and handoff docs.",
  },
  {
    icon: TrendingUp,
    title: "Scalable for any business",
    description: "Start with one workflow and expand into CRM, email, SEO, or blog automation.",
  },
  {
    icon: Globe,
    title: "Practical production systems",
    description: "Built for day-to-day operations, not demo-only automation.",
  },
]

export default function SocialMediaAutomationPage() {
  const serviceSeo = serviceDefinitions["social-media-automation"]
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const relatedResources = [
    ...serviceSeo.relatedResources,
    {
      title: "Blog Automation Service",
      href: "/services/blog-automation",
      description: "Connect social publishing to a repeatable content pipeline for repurposing and distribution.",
      label: "Related service",
    },
    {
      title: "SEO Automation Service",
      href: "/services/seo-automation",
      description: "Tie social reporting and content refreshes to a broader search visibility workflow.",
      label: "Related service",
    },
  ]

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

      {/* Intro / principle */}
      <Section tone="alt" bordered>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="The approach"
            title="Remove the drag, not the strategy"
            intro="Automate publishing, routing, and reporting so creative and community management move faster."
          />
          <Reveal as="ul" variant="right" className="grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <li
                key={channel}
                className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-zinc-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                {channel}
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* What it handles */}
      <Section aurora>
        <SectionHeading
          eyebrow="What it handles"
          title="What Social Media Automation Should Actually Handle"
          intro="Repetitive publishing, routing, and reporting work — mapped to your channels and approval rules."
        />
        <BentoGrid className="mt-14">
          {handlesBlocks.map((block, index) => (
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

      {/* Channel-specific rules */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Per-channel"
          title="Channel-Specific Rules, Not One-Size-Fits-All"
          intro="Every network gets its own timing, format checks, approvals, and routing."
        />
        <FeatureRows rows={channelRows} className="mt-16" />
      </Section>

      {/* Connects to the stack */}
      <Section>
        <SectionHeading
          eyebrow="Connected"
          title="How Social Publishing Connects to the Rest of the Stack"
          intro="A high-intent interaction should trigger the next step automatically."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {stackBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 80} className="bg-[#0a0a0c] p-7 sm:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200">
                <block.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{block.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-400">{block.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/80">Connected workflows</p>
          <p className="mt-3 text-base leading-7 text-zinc-400">
            When social publishing needs lead follow-up or repurposed content, connect it to{" "}
            <Link href="/services/crm-automation" className="font-medium text-violet-200 underline-offset-4 hover:underline">
              CRM automation
            </Link>
            ,{" "}
            <Link href="/services/email-marketing-automation" className="font-medium text-violet-200 underline-offset-4 hover:underline">
              email marketing automation
            </Link>
            ,{" "}
            <Link href="/services/blog-automation" className="font-medium text-violet-200 underline-offset-4 hover:underline">
              blog automation
            </Link>
            , and{" "}
            <Link href="/services/seo-automation" className="font-medium text-violet-200 underline-offset-4 hover:underline">
              SEO automation
            </Link>
            .
          </p>
        </Reveal>

        <Reveal as="ul" variant="up" delay={100} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {connectedTools.map((tool) => (
            <li
              key={tool}
              className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm leading-6 text-zinc-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
              {tool}
            </li>
          ))}
        </Reveal>
      </Section>

      {/* How we implement */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="How we implement"
          title="How We Implement It"
          intro="We build around the posting process, approvals, and channel mix your team already uses."
        />
        <ProcessRail steps={implementSteps} className="mt-16" />
      </Section>

      {/* Who it's for */}
      <Section>
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for Teams That Need Consistent Output"
          intro="Keep publishing consistent, approvals clear, and follow-up visible — without more overhead."
        />
        <BentoGrid className="mt-14">
          {audienceBlocks.map((block, index) => (
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

      {/* Why teams choose us */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Why Awwtomation"
          title="Why Teams Choose Awwtomation for Social Media Automation"
          intro="We document the workflow, build it, test the edge cases, and hand off a system you can trust."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80} className="flex gap-4 bg-[#0a0a0c] p-7 sm:p-8">
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
        title="Support Your Social Workflow With Connected Systems"
        description="How social publishing connects to CRM, email, SEO, and content automation."
        links={relatedResources}
      />

      <FaqCardSection
        title="Social Media Automation FAQs"
        description="Publishing risks, engagement, CRM and email integration, and who benefits most."
        faqs={serviceSeo.faqs}
      />

      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
