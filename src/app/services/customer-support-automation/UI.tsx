"use client"

import {
  Bot,
  Calendar,
  CheckCircle,
  ClipboardList,
  DollarSign,
  Globe,
  Lightbulb,
  MessageCircle,
  PhoneCall,
  Search,
  Settings,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
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

const capabilities = [
  "Chatbot triage",
  "Ticket routing",
  "Self-service",
  "Voice AI",
  "Knowledge base",
  "Escalation paths",
]

const chatbotBlocks = [
  {
    icon: Bot,
    title: "AI chatbots and self-service",
    description:
      "Answer FAQs, check order or account status, and hand off to an agent with full context preserved.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: MessageCircle,
    title: "Natural language understanding",
    description: "Intent detection instead of forcing customers down a rigid menu.",
    span: "sm" as const,
  },
  {
    icon: UserCheck,
    title: "Seamless agent handoff",
    description: "Complex issues transfer with history and summary intact — no repeated context.",
    span: "md" as const,
  },
  {
    icon: Target,
    title: "Triage and escalation",
    description: "Route by issue type and send urgent requests straight to the right queue.",
    span: "md" as const,
  },
]

const channelRows = [
  {
    eyebrow: "Phone",
    icon: PhoneCall,
    title: "Voice AI and Automated Call Answering",
    description:
      "Voice AI understands spoken requests, answers common questions, and routes callers without making them repeat themselves.",
    bullets: ["24/7 phone support", "Natural conversation", "Intent-based routing", "No repeat context"],
  },
  {
    eyebrow: "Routing",
    icon: Calendar,
    title: "Support Triage, Scheduling, and Ticket Routing",
    description:
      "Automate the back-and-forth that slows teams down: intake, callback booking, and SLA-aware queue assignment.",
    bullets: ["Callback booking", "SLA-aware routing", "Queue assignment", "Follow-up reminders"],
  },
  {
    eyebrow: "Intake",
    icon: ClipboardList,
    title: "Smart Intake Forms and Support Data Capture",
    description:
      "Dynamic forms route requests to the right team and capture the right fields the first time — no manual re-entry.",
    bullets: ["Dynamic forms", "Field validation", "CRM sync", "One clean record"],
  },
]

const knowledgeItems = [
  {
    icon: Search,
    title: "Grounded answers",
    description: "Natural-language answers pulled from your own docs, macros, and ticket history.",
  },
  {
    icon: Users,
    title: "Faster onboarding",
    description: "New hires get senior-level answers without memorizing every policy edge case.",
  },
  {
    icon: CheckCircle,
    title: "Consistent responses",
    description: "The same answer across chat, email, and voice when a policy changes.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge gaps surfaced",
    description: "Unanswered questions get logged so docs and macros keep improving.",
  },
]

const roiBlocks = [
  {
    icon: DollarSign,
    title: "Lower cost per contact",
    description: "Automate repetitive questions and status updates so every live-agent minute goes further.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: Globe,
    title: "24/7 availability",
    description: "Immediate answers around the clock, not just during business hours.",
    span: "sm" as const,
  },
  {
    icon: TrendingUp,
    title: "Better agent utilization",
    description: "Route repetitive work away from your best agents so they handle the cases that need judgment.",
    span: "md" as const,
  },
  {
    icon: Target,
    title: "Higher first-contact resolution",
    description: "Clear routing and better retrieval cut back-and-forth and repeat contacts.",
    span: "md" as const,
  },
]

const implementationSteps = [
  {
    icon: Workflow,
    title: "Workflow audit and intent mapping",
    description: "Review tickets, chat logs, and call reasons to find the highest-volume intents first.",
  },
  {
    icon: Bot,
    title: "Systems integration and routing",
    description: "Connect help desk, CRM, forms, and calendars so every handoff carries the right context.",
  },
  {
    icon: Settings,
    title: "Knowledge base and RAG setup",
    description: "Shape the content source, fallback rules, and answer style so responses stay grounded.",
  },
  {
    icon: Shield,
    title: "QA, governance, and handoff",
    description: "Define what the bot answers, when it escalates, and how failures get logged for review.",
  },
]

export default function CustomerSupportAutomationPage() {
  const serviceSeo = serviceDefinitions["customer-support-automation"]
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

      {/* Why it works */}
      <Section tone="alt" bordered>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="The short answer"
            title="Why Customer Support Automation Works"
            intro="Automate the repetitive work first — keep humans for the conversations that need judgment."
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

      {/* Chatbots & AI service */}
      <Section aurora>
        <SectionHeading
          eyebrow="AI chatbots"
          title="Customer Service Chatbots and AI Customer Service"
          intro="Bots that resolve routine questions and hand off cleanly instead of forcing a scripted menu."
        />
        <BentoGrid className="mt-14">
          {chatbotBlocks.map((block, index) => (
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

      {/* Voice AI + triage + intake */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Channels"
          title="Voice AI and Automated Call Answering"
          intro="Phone, routing, and intake wired into one workflow so every request lands in the right place."
        />
        <FeatureRows rows={channelRows} className="mt-16" />
      </Section>

      {/* Knowledge base / RAG */}
      <Section>
        <SectionHeading
          eyebrow="Knowledge"
          title="Knowledge Base Chat and RAG Support Assistants"
          intro="A search layer over your own policies, docs, and ticket history — answers come from approved content."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {knowledgeItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="flex gap-4 bg-[#0a0a0c] p-7 sm:p-8"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits & ROI */}
      <Section tone="alt" bordered>
        <SectionHeading
          eyebrow="Benefits & ROI"
          title="Benefits and ROI of Customer Support Automation"
          intro="The metrics support leaders care about — response time, cost per contact, and CSAT."
        />
        <BentoGrid className="mt-14">
          {roiBlocks.map((block, index) => (
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

      {/* Implementation */}
      <Section>
        <SectionHeading
          eyebrow="How we implement"
          title="How We Implement Customer Support Automation"
          intro="Audit, integrate, ground, then govern — grounded in real operations, not a chatbot demo."
        />
        <ProcessRail steps={implementationSteps} className="mt-16" />
      </Section>

      <LinkCardSection
        eyebrow="Related Resources"
        title="Related Services and Guides"
        description="Use these pages to shape your support stack, routing logic, CRM sync, and live-chat planning."
        links={serviceSeo.relatedResources}
      />

      <FaqCardSection
        title="Customer Support Automation FAQs"
        description="Clear answers about support workflows, chatbots, routing, knowledge systems, and human handoff."
        faqs={serviceSeo.faqs}
      />

      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
