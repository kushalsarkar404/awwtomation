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
  Workflow,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { CalModal } from "@/components/cal-modal"
import { FaqAccordion } from "@/components/faq-accordion"
import { HyperspeedBackground } from "@/components/hyperspeed-background"
import { MessageModal } from "@/components/message-modal"
import { ScrollStack, ScrollStackItem } from "@/components/scroll-stack"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { StatStrip } from "@/components/ui/stat-strip"
import { homePageSeo, serviceDefinitions } from "@/lib/seo"

const impactStats = [
  { prefix: "$", value: 3000, suffix: "/mo", label: "Saved by automating booking & orders" },
  { value: 15, suffix: "h", label: "Reclaimed every week per team" },
  { value: 35, suffix: "%", label: "Fewer no-shows after workflow fixes" },
  { value: 1, suffix: " view", label: "Unified dashboard across platforms" },
]

const integrationLogos = [
  { name: "HubSpot", file: "hubspot.png" },
  { name: "Pipedrive", file: "pipedrive.png" },
  { name: "Klaviyo", file: "klaviyo.png" },
  { name: "Shopify", file: "shopify.png" },
  { name: "Slack", file: "slack.png" },
  { name: "Notion", file: "notion.png" },
  { name: "Google Ads", file: "google-ads.png" },
  { name: "Cloudflare", file: "cloudflare.png" },
  { name: "Stripe", file: "stripe.png" },
  { name: "Zendesk", file: "zendesk.png" },
  { name: "Brevo", file: "brevo.png" },
  { name: "ClickUp", file: "clickup.png" },
]

const services = [
  {
    definition: serviceDefinitions["crm-automation"],
    icon: Database,
    outcome: "Turn every lead into a clear, measurable follow-up path.",
  },
  {
    definition: serviceDefinitions["email-marketing-automation"],
    icon: Mail,
    outcome: "Move prospects from first touch to revenue with lifecycle automation.",
  },
  {
    definition: serviceDefinitions["seo-automation"],
    icon: Search,
    outcome: "Replace spreadsheet-heavy reporting with reliable search intelligence.",
  },
  {
    definition: serviceDefinitions["social-media-automation"],
    icon: Share2,
    outcome: "Build a repeatable publishing and reporting system across channels.",
  },
  {
    definition: serviceDefinitions["blog-automation"],
    icon: FileText,
    outcome: "Scale useful, search-led content without creating editorial chaos.",
  },
  {
    definition: serviceDefinitions["customer-support-automation"],
    icon: Headphones,
    outcome: "Resolve routine questions faster while keeping humans in control.",
  },
]

const testimonials = [
  {
    quote:
      "Awwtomation saved us $3,000 per month and more than 15 hours each week by automating our hotel booking and order system.",
    author: "Yam Bhd. Khatri",
    role: "Owner, Kathmandu Kitchen Japan",
  },
  {
    quote:
      "The custom dashboard pulls data from multiple platforms. We finally have one reliable view of the metrics that matter.",
    author: "Prajwal Adhikari",
    role: "Founder, RoomieNow",
  },
  {
    quote:
      "Their appointment workflow eliminated double bookings and reduced no-shows by 35%. The operational impact was immediate.",
    author: "Jessica Williams",
    role: "Founder, ConsultCo",
  },
]

const automationAreas = [
  {
    icon: BarChart3,
    title: "Revenue operations",
    description: "Route leads, keep CRM records current, trigger follow-up, and make pipeline reporting reliable.",
  },
  {
    icon: Search,
    title: "Marketing operations",
    description: "Connect research, content, email, social publishing, attribution, and performance reporting.",
  },
  {
    icon: Headphones,
    title: "Customer operations",
    description: "Triage requests, surface approved answers, coordinate bookings, and escalate work to the right person.",
  },
]

const deliveryPrinciples = [
  "Use the tools your team already trusts",
  "Keep approval gates where judgment matters",
  "Document ownership, exceptions, and recovery paths",
  "Measure time saved, response speed, and revenue impact",
]

const workSteps = [
  {
    icon: Search,
    title: "Find the constraint",
    description: "We map the process, tools, handoffs, and outcome before choosing technology.",
  },
  {
    icon: Workflow,
    title: "Build the workflow",
    description: "We connect the right systems, add approval gates, and test the failure paths.",
  },
  {
    icon: BarChart3,
    title: "Measure and improve",
    description: "We track adoption and impact, then refine as your operation changes.",
  },
]

export default function HomePageClient() {
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")

  const openCalendar = (calLink = "awwtomation/awwtomation-consultation") => {
    setSelectedCalLink(calLink)
    setCalModalOpen(true)
  }

  return (
    <div className="min-h-screen overflow-clip bg-[#050505] text-white">
      <SiteHeader onPrimaryCta={() => openCalendar()} />

      <main>
        <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <HyperspeedBackground />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h1
              className="animate-rise font-display max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]"
              style={{ "--rise-delay": "80ms" } as React.CSSProperties}
            >
              {homePageSeo.heroTitle}
            </h1>
            <p
              className="animate-rise mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl"
              style={{ "--rise-delay": "180ms" } as React.CSSProperties}
            >
              {homePageSeo.heroDescription}
            </p>
            <div
              className="animate-rise mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
              style={{ "--rise-delay": "280ms" } as React.CSSProperties}
            >
              <Button
                size="lg"
                className="h-13 rounded-full bg-white px-7 text-sm font-semibold text-black transition-transform hover:scale-[1.03] hover:bg-violet-100"
                onClick={() => openCalendar()}
              >
                Book a 30-minute call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/20 bg-black/20 px-7 text-sm text-white backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMessageModalOpen(true)}
              >
                Describe the bottleneck
              </Button>
            </div>
            <p
              className="animate-rise mt-5 text-sm text-zinc-500"
              style={{ "--rise-delay": "360ms" } as React.CSSProperties}
            >
              Free working session. Leave with a recommended first workflow.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Where automation helps"
                title="Work that should not need another spreadsheet"
                intro="We automate repetitive, rules-based work across revenue, marketing, and customer operations. People stay in control of decisions that need context."
              />
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition hover:text-white"
              >
                See all automation services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-3">
              {automationAreas.map((area, index) => (
                <Reveal key={area.title} delay={index * 90} className="bg-[#0b0b0d] p-7">
                  <area.icon className="h-5 w-5 text-violet-300" />
                  <h3 className="mt-10 text-xl font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{area.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="integrations-title" className="border-y border-white/10 bg-black py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="integrations-title" className="text-center text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
              Trusted by businesses using
            </h2>
            <div className="logo-marquee mt-8" role="list" aria-label="Technology integrations">
              <div className="logo-marquee-track">
                {[...integrationLogos, ...integrationLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    role="listitem"
                    className="flex h-14 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white px-5"
                  >
                    <Image
                      src={`/connections-full copy/${logo.file}`}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
          <SectionHeading
            eyebrow="Systems we build"
            title="Six workflows we automate"
            intro="Start with one painful process. Connect the data, rules, approvals, and reporting needed to run it reliably."
          />

          <ScrollStack className="mx-auto mt-20 max-w-6xl">
            {services.map(({ definition, icon: Icon, outcome }, index) => (
              <ScrollStackItem key={definition.key} index={index}>
                <div className="grid min-h-[25rem] gap-10 rounded-[2rem] border border-white/10 bg-[#111113] p-8 shadow-[0_30px_100px_rgba(0,0,0,.65)] sm:p-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:p-16">
                  <div>
                    <Icon className="mb-8 h-6 w-6 text-violet-300" />
                    <h3 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                      {definition.shortName}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-2xl leading-9 text-zinc-200">{outcome}</p>
                    <p className="mt-6 max-w-2xl leading-7 text-zinc-400">{definition.description}</p>
                    <Link
                      href={definition.href}
                      className="mt-8 inline-flex w-fit items-center gap-2 border-b border-violet-300/60 pb-1 text-sm font-semibold text-violet-200 transition hover:border-violet-200 hover:text-white"
                    >
                      Explore {definition.shortName.toLowerCase()}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </section>

        <section className="border-y border-white/10 bg-[#0a0a0b] px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="How we work"
              title="From process audit to launch"
              intro="The same team maps the work, builds the workflow, tests the edge cases, and measures the result."
            />
            <div className="mt-16 grid border-y border-white/10 md:grid-cols-3">
              {workSteps.map(({ icon: Icon, title, description }, index) => (
                <Reveal
                  key={title}
                  delay={index * 120}
                  className="border-b border-white/10 px-6 py-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <Icon className="h-5 w-5 text-violet-300" />
                  <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-start lg:gap-20">
            <SectionHeading
              align="left"
              eyebrow="Responsible delivery"
              title="Designed for the exceptions, not just the demo"
              intro="Production workflows need clean data, access control, human review, monitoring, and a recovery path when something fails."
            />
            <ul className="border-y border-white/10">
              {deliveryPrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-4 border-b border-white/10 py-5 text-zinc-300 last:border-b-0">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" aria-hidden="true" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0a0b] px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Impact"
              title="Results from client systems"
              intro="Reported outcomes after replacing specific manual workflows."
            />
            <StatStrip stats={impactStats} className="mt-14" />
            <div className="mt-16 grid gap-6 text-left lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  as="figure"
                  key={testimonial.author}
                  delay={index * 110}
                  className="flex min-h-72 flex-col justify-between border-l border-white/15 pl-7"
                >
                  <blockquote className="text-xl leading-8 text-zinc-200">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-10">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="mt-1 text-sm text-zinc-500">{testimonial.role}</div>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <Bot className="h-8 w-8 text-violet-300" />
              <h2 className="font-display mt-8 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Questions before you automate?
              </h2>
              <p className="mt-5 max-w-md leading-7 text-zinc-400">
                Clear answers about scope, tools, risk, and where human review still belongs.
              </p>
            </Reveal>
            <FaqAccordion items={homePageSeo.faqs} />
          </div>
        </section>

        <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-8">
          <Reveal
            variant="scale"
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-violet-300/20 bg-[radial-gradient(circle_at_top,#32205f_0%,#151019_38%,#080808_78%)] px-6 py-14 text-center sm:px-12 lg:py-16"
          >
            <div className="grid-texture absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Show us the manual process costing you time
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                We will map the steps, systems, failure points, and expected return—then recommend what to automate first.
              </p>
              <Button
                size="lg"
                className="mt-10 h-13 rounded-full bg-white px-8 font-semibold text-black transition-transform hover:scale-[1.03] hover:bg-violet-100"
                onClick={() => openCalendar()}
              >
                Book a 30-minute call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
