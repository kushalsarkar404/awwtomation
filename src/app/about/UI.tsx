"use client"

import {
  ChevronRight,
  Code,
  Cog,
  ExternalLink,
  Globe2,
  Linkedin,
  Mail,
  NotebookPen,
  SquareGanttChartIcon as SquareChartGantt,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import { FaqCardSection } from "@/components/seo/faq-card-section"
import { ServicePageHero } from "@/components/service-page-hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { aboutPageSeo } from "@/lib/seo"

const specialties = [
  {
    icon: NotebookPen,
    title: "Blog Automation",
    description: "Move research, drafting, review, and publishing through one accountable workflow.",
    span: "lg" as const,
    featured: true,
  },
  {
    icon: SquareChartGantt,
    title: "Social Media Automation",
    description: "Plan, approve, publish, and report across channels without manual handoffs.",
    span: "sm" as const,
  },
  {
    icon: Code,
    title: "SEO Automation",
    description: "Automate rank tracking, technical checks, and recurring search reports.",
    span: "md" as const,
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Trigger lifecycle email from customer behavior and keep performance visible.",
    span: "md" as const,
  },
  {
    icon: Cog,
    title: "CRM Automation",
    description: "Route leads, trigger follow-up, and keep pipeline records current.",
    span: "md" as const,
  },
  {
    icon: Zap,
    title: "Custom Business Process Automation",
    description: "Connect the systems behind repetitive operations, reporting, and coordination.",
    span: "md" as const,
  },
]

const founders = [
  {
    name: "Prakhyat Shrestha",
    image: "/prakhyat.png",
    role: "Co-founder · Automation engineering",
    education: "B.Tech CSE, VIT, IN",
    location: "Kathmandu, Nepal",
    linkedin: "https://www.linkedin.com/in/prakhyat-shrestha/",
    bio: (
      <>
        Prakhyat leads process mapping, integration architecture, and technical delivery. See more of his{" "}
        <Link
          href="https://www.prakhyat-shrestha.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300 underline-offset-4 transition-colors hover:text-violet-200 hover:underline"
        >
          engineering work
        </Link>
        .
      </>
    ),
  },
  {
    name: "Kushal Sarkar",
    image: "/kushal.png",
    role: "Co-founder · Data and operations",
    education: "MS Data Science, GSU, USA",
    location: "Atlanta, USA",
    linkedin: "https://www.linkedin.com/in/ksarkar011/",
    bio: (
      <>
        Kushal leads discovery, data design, and client delivery, translating operational problems into clear system requirements.
      </>
    ),
  },
]

const operatingPrinciples = [
  {
    icon: Workflow,
    title: "Start with the process",
    description: "We map owners, systems, data, exceptions, and the intended outcome before selecting tools or models.",
  },
  {
    icon: ShieldCheck,
    title: "Design for responsible control",
    description: "Approvals, permissions, monitoring, and recovery paths are part of the workflow—not an afterthought.",
  },
  {
    icon: Globe2,
    title: "Build for real teams",
    description: "Documentation, handoff, and maintainability matter because automation only works when people can trust it.",
  },
]

export default function AboutPage() {
  const menuRef = useRef(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && (menuRef.current as HTMLElement).contains(event.target as Node) === false) {
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
      {/* Header */}
      <SiteHeader
        menuRef={menuRef}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpenChange={setMobileMenuOpen}
        onPrimaryCta={() => {
          setSelectedCalLink("awwtomation/awwtomation-consultation")
          setCalModalOpen(true)
        }}
      />

      <ServicePageHero title={aboutPageSeo.heroTitle} description={aboutPageSeo.heroDescription} />

      {/* What We Specialize In */}
      <Section tone="alt" bordered aurora>
        <SectionHeading
          eyebrow="Services"
          title="The systems we know how to build"
          intro="Focused automation for the teams handling leads, campaigns, content, reporting, and customer requests."
        />
        <BentoGrid className="mt-14">
          {specialties.map((item, index) => (
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
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Our approach"
            title="Process first. Tools second."
            intro="We combine process analysis, integration engineering, and applied AI. Every project starts with the work, the owner, and the result that needs to change."
          />
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-3">
            {operatingPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 90} className="bg-[#0b0b0d] p-7">
                <principle.icon className="h-5 w-5 text-violet-300" />
                <h3 className="mt-9 text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-start lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Company facts"
            title="Based in Kathmandu and Atlanta, working remotely"
            intro="Awwtomation is led from Kathmandu and Atlanta. We work remotely with growing businesses that need connected systems across marketing, sales, support, content, and operations."
          />
          <dl className="border-y border-white/10">
            {[
              ["Leadership locations", "Kathmandu, Nepal and Atlanta, USA"],
              ["Service area", "Remote and worldwide"],
              ["Core expertise", "AI automation, workflow design, integrations, and reporting"],
              ["Engagement model", "Discovery, implementation, QA, launch, and optimization"],
            ].map(([term, value]) => (
              <div key={term} className="grid gap-2 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[.8fr_1.2fr]">
                <dt className="text-sm text-zinc-500">{term}</dt>
                <dd className="text-sm font-medium leading-6 text-zinc-200">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <FaqCardSection
        title="About Awwtomation"
        description="Answers about our expertise, locations, and approach to building production automation systems."
        faqs={aboutPageSeo.faqs}
      />

      {/* Team Section */}
      <Section tone="alt" bordered id="team">
        <SectionHeading
          align="center"
          eyebrow="The team"
          title="Meet the founders"
          intro="Engineering, data, and client delivery stay close to every engagement."
        />
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 100} variant="up" className="flex">
              <SpotlightCard className="flex w-full flex-col items-center p-8 text-center">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full border border-white/10 object-cover"
                />
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/80">{founder.role}</p>
                  <p className="text-sm text-zinc-400">{founder.education}</p>
                  <p className="text-sm text-zinc-400">{founder.location}</p>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-400">{founder.bio}</p>
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section aurora>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Get started"
            title="Bring us the process that keeps breaking"
            intro="We will map the bottleneck, the systems involved, and the smallest useful automation to build first."
          />
          <Reveal variant="up" className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setSelectedCalLink("awwtomation/awwtomation-consultation")
                setCalModalOpen(true)
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-violet-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
            >
              Book a strategy call <ChevronRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMessageModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
            >
              Get in Touch
            </button>
          </Reveal>
        </div>
      </Section>

      {/* Footer */}
      <SiteFooter />

      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
