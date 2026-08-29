"use client"

import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Eye,
  FileText,
  Link2,
  PenTool,
  Search,
  ShieldCheck,
  Upload,
} from "lucide-react"
import { useState } from "react"

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

const contentPipeline = [
  {
    eyebrow: "Research and planning",
    icon: Search,
    title: "Turn search demand and customer questions into a useful editorial plan",
    description:
      "We connect keyword research, topic clustering, content gaps, product context, and audience questions so the system starts from a defensible brief rather than a generic prompt.",
    bullets: ["Keyword and topic clusters", "Search intent", "Content briefs", "Editorial priorities"],
  },
  {
    eyebrow: "Drafting and review",
    icon: PenTool,
    title: "Use AI-assisted drafting without giving up editorial control",
    description:
      "Drafts follow your approved voice, structure, claims policy, and source requirements. Editors review facts, experience, positioning, and final language before anything is published.",
    bullets: ["Brand voice guidance", "Fact review", "Expert input", "Human approval"],
  },
  {
    eyebrow: "Publishing and improvement",
    icon: Upload,
    title: "Connect the CMS, internal links, refreshes, and reporting",
    description:
      "Approved content can move into your CMS with metadata and internal links, then feed a performance loop for updates, consolidation, and new topic opportunities.",
    bullets: ["CMS handoff", "Metadata", "Internal linking", "Content refreshes"],
  },
]

const deliverables = [
  {
    icon: BookOpen,
    title: "Editorial workflow design",
    description: "A documented path from topic intake to research, draft, review, approval, and publication.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: FileText,
    title: "Structured content briefs",
    description: "Intent, audience, questions, entities, evidence needs, outline, and conversion goal in one repeatable format.",
    span: "sm" as const,
  },
  {
    icon: ShieldCheck,
    title: "Quality and governance rules",
    description: "Source requirements, prohibited claims, approval ownership, and clear escalation for sensitive topics.",
    span: "md" as const,
  },
  {
    icon: Link2,
    title: "SEO and internal-link support",
    description: "Metadata, headings, related pages, link suggestions, and coverage checks built into the production flow.",
    span: "md" as const,
  },
]

const implementationSteps = [
  {
    icon: Search,
    title: "Audit content and operations",
    description: "Review existing content, audience needs, publishing systems, bottlenecks, and quality requirements.",
  },
  {
    icon: FileText,
    title: "Design the content model",
    description: "Define brief fields, sources, voice rules, review gates, metadata, and the CMS handoff.",
  },
  {
    icon: Eye,
    title: "Pilot with human review",
    description: "Run a small topic cluster through the complete workflow and test quality, effort, and ownership.",
  },
  {
    icon: BarChart3,
    title: "Measure and refine",
    description: "Track production time, corrections, publishing cadence, coverage, engagement, and organic performance.",
  },
]

const productionChecks = [
  "Every factual claim has an approved source or expert owner",
  "AI-assisted drafts are reviewed for accuracy, originality, and brand voice",
  "Pages have a clear search intent, audience, and conversion role",
  "Internal links connect the article to relevant services and supporting guides",
  "Published content enters a refresh and performance-review cycle",
  "Sensitive or high-stakes topics use stricter review and approval rules",
]

export default function BlogAutomationPage() {
  const service = serviceDefinitions["blog-automation"]
  const [calModalOpen, setCalModalOpen] = useState(false)

  return (
    <div className="content-page flex min-h-[100dvh] flex-col">
      <SiteHeader onPrimaryCta={() => setCalModalOpen(true)} />
      <main>
        <ServicePageHero title={service.heroTitle} description={service.heroDescription} />

        <Section tone="alt" bordered>
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Blog automation explained"
              title="What is blog automation?"
              intro="Blog automation is a governed workflow that coordinates research, briefing, AI-assisted drafting, human review, CMS publishing, internal linking, and performance reporting. It reduces repetitive production work without removing editorial accountability."
            />
            <div className="border-y border-white/10">
              {[
                ["Good automation", "Research, formatting, metadata, routing, CMS handoff, internal-link suggestions, and reporting"],
                ["Human responsibility", "First-hand insight, claims, sources, brand judgment, expert review, and final approval"],
                ["Primary outcome", "Consistent, useful content production with a clear quality and measurement system"],
              ].map(([term, value]) => (
                <div key={term} className="grid gap-2 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[.7fr_1.3fr]">
                  <dt className="text-sm text-zinc-500">{term}</dt>
                  <dd className="text-sm leading-6 text-zinc-200">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section aurora>
          <SectionHeading
            eyebrow="The content pipeline"
            title="A connected system from search demand to published page"
            intro="The workflow uses structured inputs and explicit review gates so every stage produces something the next stage can trust."
          />
          <FeatureRows rows={contentPipeline} className="mt-16" />
        </Section>

        <Section tone="alt" bordered>
          <SectionHeading
            eyebrow="What we build"
            title="Blog automation deliverables"
            intro="The system is adapted to your CMS, research tools, editorial standards, subject-matter experts, and reporting stack."
          />
          <BentoGrid className="mt-14">
            {deliverables.map((item, index) => (
              <BentoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                span={item.span}
                featured={item.featured}
                index={index}
              />
            ))}
          </BentoGrid>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Implementation"
            title="How we implement blog automation"
            intro="Start with the editorial rules and one measurable pilot, then scale only after the quality and ownership model works."
          />
          <ProcessRail steps={implementationSteps} className="mt-16" />
        </Section>

        <Section tone="alt" bordered>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Quality controls"
              title="SEO scale without low-value content"
              intro="Publishing more only helps when the system protects usefulness, evidence, originality, and clear ownership. These checks stay visible in the production workflow."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {productionChecks.map((check) => (
                <li key={check} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-zinc-300">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-300" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Workflow example"
              title="From an approved topic to a measurable content asset"
              intro="A typical workflow combines a keyword cluster, customer questions, product context, trusted sources, an editorial brief, expert review, CMS publishing, and a reporting loop."
            />
            <Reveal className="rounded-[2rem] border border-white/10 bg-[#0b0b0d] p-8 sm:p-10">
              <p className="text-lg leading-8 text-zinc-200">
                A topic enters the editorial queue with its target audience and search intent. The workflow gathers approved research, creates a structured brief, prepares an AI-assisted draft, routes it to the right reviewer, and moves the approved version into the CMS with metadata and internal links. Performance data later creates refresh tasks when facts, rankings, or customer questions change.
              </p>
            </Reveal>
          </div>
        </Section>

        <LinkCardSection
          title="Connect blog automation to a stronger SEO workflow"
          description="Related services and guides for research, publishing, internal linking, and measurable organic growth."
          links={service.relatedResources}
        />

        <FaqCardSection
          title="Blog automation FAQs"
          description="Quality, human review, CMS integration, and the role of automation in organic growth."
          faqs={service.faqs}
        />
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
