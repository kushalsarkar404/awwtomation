"use client"
import Link from "next/link"
import { CalModal } from "@/components/cal-modal"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getServiceBreadcrumbs, serviceDefinitions } from "@/lib/seo"
import {
  BarChart3,
  ChevronRight,
  Cog,
  Eye,
  FileText,
  Globe,
  Search,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

const relatedResources = [
  {
    title: "Best SEO Tools to Supercharge Audience Growth",
    href: "/blog/best-seo-tools-to-supercharge-audience-growth",
    description: "Use this to choose the reporting, crawl, and rank-tracking stack that feeds the automation layer.",
    label: "Related blog",
  },
  {
    title: "Why Link Building Can't Be Fully Automated",
    href: "/blog/why-link-building-cant-be-fully-automated",
    description: "Clarifies where automation should stop and human outreach should take over.",
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
    description: "Use SEO traffic to trigger nurture, onboarding, and lifecycle campaigns.",
    label: "Related service",
  },
]

const faqItems = [
  {
    question: "Can SEO be automated?",
    answer:
      "Yes, selectively. Reporting, keyword tracking, crawl monitoring, content briefs, metadata drafting, internal link suggestions, and recurring stakeholder updates are strong candidates for automation. Strategy, editing, and final approvals should stay human-led.",
  },
  {
    question: "What are automated SEO reports?",
    answer:
      "They are recurring dashboards or summaries that combine GA4, Google Search Console, keyword movement, crawl data, and page-level trends so teams can see what changed without manual exports.",
  },
  {
    question: "How do you automate SEO without losing quality?",
    answer:
      "We keep the judgment-heavy steps manual. Automation handles the repetitive work, while your team reviews targeting, voice, facts, and publishing decisions before anything goes live.",
  },
  {
    question: "How is SEO part of marketing automation?",
    answer:
      "SEO becomes part of the broader funnel when ranking data, content updates, lead capture, CRM routing, and email follow-up are connected. That makes search performance easier to act on across channels.",
  },
  {
    question: "How do you create automated SEO reports for clients?",
    answer:
      "We build client-ready views with branded dashboards, scheduled delivery, and clear KPIs so agencies can report consistently without rebuilding the same report every week.",
  },
  {
    question: "What is the best automated SEO reports tool?",
    answer:
      "The right tool is the one that fits your stack. We usually evaluate data coverage, connector reliability, white-label options, alerting, and whether the output is actionable for the team that owns the work.",
  },
]

const automationBlocks = [
  {
    icon: BarChart3,
    title: "Automated SEO reports",
    description:
      "Pull GA4, Google Search Console, keyword movement, crawl data, and page-level trends into scheduled dashboards, email digests, or Slack updates. We can also structure white-label views for agency clients.",
  },
  {
    icon: Search,
    title: "Keyword rank tracking",
    description:
      "Track target keyword sets by location and device, compare winners and losers, and surface the pages that need attention first. This is where the seo automation cluster starts paying back quickly.",
  },
  {
    icon: Cog,
    title: "Technical SEO alerts",
    description:
      "Watch for crawl errors, indexation drops, canonical issues, broken internal links, redirects, schema failures, and missing metadata before they erode traffic or create false reporting noise.",
  },
  {
    icon: FileText,
    title: "Content briefs and on-page QA",
    description:
      "Turn keyword clusters into briefs, headings, metadata, internal link suggestions, and refresh instructions that editors can execute quickly without losing consistency.",
  },
]

const workflowBlocks = [
  {
    icon: Search,
    title: "Discovery and keyword mapping",
    description:
      "Audit the current page set, map commercial and informational keywords, and decide which signals deserve automation versus manual review.",
  },
  {
    icon: Cog,
    title: "Data connectors and rules",
    description:
      "Connect GA4, Search Console, rank trackers, spreadsheets, CMS data, and alerts into one repeatable workflow that teams can trust.",
  },
  {
    icon: Eye,
    title: "QA and approval gates",
    description:
      "Keep content, schema, and publishing changes in draft or staging until the right people approve them. That preserves control while removing repetitive work.",
  },
  {
    icon: TrendingUp,
    title: "Rollout and iteration",
    description:
      "Launch with a narrow pilot, measure the operational lift, and expand automation only after the signals are stable.",
  },
]

const outcomeBlocks = [
  {
    icon: BarChart3,
    title: "Faster reporting",
    description:
      "Reduce the time spent building the same SEO dashboard every week and replace it with a consistent, reusable reporting flow.",
  },
  {
    icon: Eye,
    title: "Earlier issue detection",
    description:
      "Catch crawl regressions, ranking drops, and content gaps before they become expensive to fix or hard to explain.",
  },
  {
    icon: Target,
    title: "Better prioritization",
    description:
      "Focus the team on pages, keywords, and fixes with the highest business impact instead of chasing every signal manually.",
  },
  {
    icon: TrendingUp,
    title: "More consistent execution",
    description:
      "Standardize recurring SEO tasks so performance updates, content refreshes, and technical checks happen on time.",
  },
]

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
    <ParallaxProvider>
      <div className="flex min-h-[100dvh] flex-col">
        <SiteHeader
          menuRef={menuRef}
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuOpenChange={setMobileMenuOpen}
          onPrimaryCta={() => {
            setSelectedCalLink("awwtomation/awwtomation-consultation")
            setCalModalOpen(true)
          }}
        />

        <section className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 px-4 py-20 md:px-12 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden w-full justify-center sm:flex">
            <div className="absolute inset-0 z-0">
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 opacity-20 shadow-lg transition-opacity hover:opacity-40 md:h-16 md:w-16">
                  <Search className="h-6 w-6 text-white md:h-8 md:w-8" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 opacity-25 shadow-lg transition-opacity hover:opacity-45 md:h-14 md:w-14">
                  <BarChart3 className="h-5 w-5 text-white md:h-7 md:w-7" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 opacity-20 shadow-lg transition-opacity hover:opacity-40 md:h-[60px] md:w-[60px]">
                  <TrendingUp className="h-5 w-5 text-white md:h-7 md:w-7" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-purple-600 opacity-25 shadow-lg transition-opacity hover:opacity-45 md:h-[68px] md:w-[68px]">
                  <Target className="h-6 w-6 text-white md:h-8 md:w-8" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 opacity-20 shadow-lg transition-opacity hover:opacity-40 md:h-14 md:w-14">
                  <Globe className="h-5 w-5 text-white md:h-7 md:w-7" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 opacity-25 shadow-lg transition-opacity hover:opacity-45 md:h-16 md:w-16">
                  <FileText className="h-6 w-6 text-white md:h-8 md:w-8" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500 opacity-20 shadow-lg transition-opacity hover:opacity-40 md:h-13 md:w-13">
                  <Zap className="h-4 w-4 text-white md:h-6 md:w-6" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500 opacity-15 shadow-lg transition-opacity hover:opacity-35 md:h-12 md:w-12">
                  <Eye className="h-4 w-4 text-white md:h-6 md:w-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

          <div className="relative z-20 mx-auto max-w-4xl space-y-6 text-center">
            <PageBreadcrumbs items={getServiceBreadcrumbs(serviceSeo)} className="mb-4 flex justify-center" />
            <Badge variant="secondary" className="border-slate-200 bg-white/90 text-slate-700 shadow-sm">
              SEO Automation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 drop-shadow-sm md:text-5xl dark:text-white">
              SEO Automation Service for Reporting, Content, and Technical Workflows
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              We design SEO automation systems that turn GA4, Google Search Console, keyword tracking, crawl data, and
              content operations into one repeatable workflow. The goal is faster reporting, earlier issue detection,
              and cleaner execution without removing human review.
            </p>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              If this work needs to connect to the rest of your funnel, we also link it to{" "}
              <Link href="/services/blog-automation" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300">
                blog automation
              </Link>
              ,{" "}
              <Link href="/services/crm-automation" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300">
                CRM automation
              </Link>
              , and{" "}
              <Link href="/services/email-marketing-automation" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300">
                email marketing automation
              </Link>
              .
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                onClick={() => {
                  setSelectedCalLink("awwtomation/awwtomation-consultation")
                  setCalModalOpen(true)
                }}
              >
                Start Optimizing <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          <style jsx>{`
            @keyframes float1 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
              25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
              50% { transform: translateY(-10px) translateX(-15px) rotate(-3deg); }
              75% { transform: translateY(-25px) translateX(5px) rotate(2deg); }
            }

            @keyframes float2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
              33% { transform: translateY(-15px) translateX(-20px) rotate(-4deg); }
              66% { transform: translateY(-30px) translateX(10px) rotate(6deg); }
            }

            @keyframes float3 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
              20% { transform: translateY(-18px) translateX(8px) rotate(3deg); }
              40% { transform: translateY(-5px) translateX(-12px) rotate(-2deg); }
              60% { transform: translateY(-22px) translateX(-5px) rotate(4deg); }
              80% { transform: translateY(-8px) translateX(15px) rotate(-1deg); }
            }

            @keyframes float4 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
              30% { transform: translateY(-25px) translateX(-8px) rotate(-5deg); }
              70% { transform: translateY(-12px) translateX(18px) rotate(3deg); }
            }

            .floating-logo-1 { animation: float1 12s ease-in-out infinite; }
            .floating-logo-2 { animation: float2 15s ease-in-out infinite; }
            .floating-logo-3 { animation: float3 18s ease-in-out infinite; }
            .floating-logo-4 { animation: float4 14s ease-in-out infinite; }
            .floating-logo-5 { animation: float1 16s ease-in-out infinite reverse; }
            .floating-logo-6 { animation: float2 13s ease-in-out infinite reverse; }
            .floating-logo-7 { animation: float3 17s ease-in-out infinite reverse; }
            .floating-logo-8 { animation: float4 11s ease-in-out infinite reverse; }

            .floating-logo {
              filter: blur(0.5px);
            }

            .floating-logo:hover {
              filter: blur(0px);
            }
          `}</style>
        </section>

        <section className="bg-muted/50 px-4 py-20 md:px-12">
          <div className="mx-auto max-w-5xl space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl">Can SEO Be Automated?</h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Yes, selectively. The strongest systems automate reporting, keyword tracking, crawl checks, content
                briefs, metadata drafting, internal linking suggestions, and recurring updates. Strategy, editorial
                judgment, and final approvals stay human-led.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Automated SEO reports and stakeholder updates</h3>
                <p className="text-muted-foreground">
                  We build scheduled dashboards and summaries that combine GA4, Search Console, ranking data, and
                  crawl signals so teams can answer what changed, why it changed, and what to do next. That makes
                  automated SEO reports useful for in-house teams and agencies alike.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">A safer way to scale SEO operations</h3>
                <p className="text-muted-foreground">
                  The point is not to replace SEO work. It is to remove repetitive tasks that slow down execution,
                  reduce reporting drift, and create a more dependable way to prioritize pages, fixes, and content
                  updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">What We Automate in a Real SEO Stack</h2>
              <p className="text-lg text-muted-foreground">
                We tailor the build around the mapped keyword set, your reporting requirements, and the systems your
                team already uses.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {automationBlocks.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-200">
                      <Icon className="h-6 w-6 text-emerald-700" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-emerald-700">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-20 md:px-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">How We Implement SEO Automation</h2>
              <p className="text-lg text-muted-foreground">
                The implementation is deliberate: map the work, connect the data, add quality gates, then expand only
                after the pilot proves it is stable.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {workflowBlocks.map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="mb-2 text-2xl font-bold text-primary">{index + 1}</div>
                    <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-blue-700">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-12">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">Why Teams Use SEO Automation</h2>
            <p className="text-lg text-muted-foreground">
              Our approach is designed for measurable operational lift first, then ranking lift. That keeps the program
              practical, auditable, and easier to defend internally.
            </p>
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
              {outcomeBlocks.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 text-left">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 transition-colors duration-300 group-hover:bg-green-200">
                      <Icon className="h-6 w-6 text-green-700" />
                    </div>
                    <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-green-700">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-3xl pt-4 text-sm text-muted-foreground">
              Search demand also extends into adjacent topics like{" "}
              <Link href="/blog/best-seo-tools-to-supercharge-audience-growth" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300">
                SEO tools
              </Link>
              ,{" "}
              <Link href="/blog/why-link-building-cant-be-fully-automated" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-300">
                link building boundaries
              </Link>
              , and the handoff between content, CRM, and email follow-up.
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Related Pages That Support a Stronger SEO Automation Program"
          description="These pages reinforce the tooling, content operations, and cross-channel workflows that make SEO automation work in practice."
          links={relatedResources}
        />

        <section className="relative w-full overflow-hidden bg-muted/20 py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl" />
            <div className="absolute bottom-1/3 -right-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Answers to the questions teams ask when they are evaluating SEO automation service work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {faqItems.map((faq) => (
                <Card key={faq.question} className="text-left">
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-12">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">Start With a Measurable SEO Automation Pilot</h2>
            <p className="text-lg text-muted-foreground">
              We usually begin with automated reporting and rank tracking, then expand into content operations and
              technical alerts once the reporting foundation is stable.
            </p>
            <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200">
                    <Search className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-primary">1</div>
                  <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-blue-700">
                    Audit and roadmap
                  </h3>
                  <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    Review the current stack, map the SEO automation cluster, and define the first pilot.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 transition-colors duration-300 group-hover:bg-green-200">
                    <Zap className="h-6 w-6 text-green-700" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-primary">2</div>
                  <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-green-700">
                    Build the pilot
                  </h3>
                  <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    Launch reporting, alerts, and keyword tracking first so you can prove value quickly.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-colors duration-300 group-hover:bg-purple-200">
                    <TrendingUp className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-primary">3</div>
                  <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-purple-700">
                    Expand the workflow
                  </h3>
                  <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    Add content briefs, internal linking, refresh logic, and CMS handoffs after the pilot settles.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 transition-colors duration-300 group-hover:bg-orange-200">
                    <Globe className="h-6 w-6 text-orange-700" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-primary">4</div>
                  <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-orange-700">
                    Train and maintain
                  </h3>
                  <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    Document the workflow, hand it over cleanly, and keep it updated as search behavior changes.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <p className="mb-6 text-muted-foreground">
                If you are building a broader program, we can connect SEO automation to blog production, CRM routing,
                and email follow-up so the reporting layer informs the whole funnel.
              </p>
              <Button
                size="lg"
                className="text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                onClick={() => {
                  setSelectedCalLink("awwtomation/awwtomation-consultation")
                  setCalModalOpen(true)
                }}
              >
                Get Started Today <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <SiteFooter />
        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      </div>
    </ParallaxProvider>
  )
}
