"use client"

import { CalModal } from "@/components/cal-modal"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card"
import { getServiceBreadcrumbs,serviceDefinitions } from "@/lib/seo"
import Link from "next/link"
import {
  BarChart3,
  ChevronRight,
  Clock,
  Cog,
  Eye,
  Globe,
  Heart,
  Mail,
  Send,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react"
import { useEffect,useRef,useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

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

const faqItems = [
  {
    question: "What is email marketing automation?",
    answer:
      "Email marketing automation is the setup of event-based workflows, segmentation rules, and timed sequences that send the right message after a user action or lifecycle change. We use it for welcome series, lead nurture, abandoned cart recovery, post-purchase education, and win-back campaigns.",
  },
  {
    question: "How does email marketing automation work?",
    answer:
      "It works by connecting customer events such as form fills, purchases, site visits, and list joins to pre-built email flows. We map those triggers, write the message logic, connect the email platform to your CRM or store, and QA the handoff before launch.",
  },
  {
    question: "How to automate email marketing?",
    answer:
      "Start with a lifecycle map, define the trigger events, segment the audience, and build the sequence around one clear outcome. The practical implementation usually includes welcome, nurture, conversion, and re-engagement flows plus reporting so you can see what each workflow produces.",
  },
  {
    question: "What is the difference between email marketing and marketing automation?",
    answer:
      "Email marketing is the channel. Marketing automation is the system behind it, including triggers, routing, scoring, personalization, and cross-channel logic. In practice, email marketing automation is what turns campaigns into a repeatable operating process.",
  },
  {
    question: "How can email marketing automation improve lead conversion?",
    answer:
      "It improves conversion by shortening response time, matching the message to the buyer stage, and following up consistently without manual delays. Better segmentation and clearer lifecycle timing usually lead to more qualified replies, more opens and clicks, and less leakage between stages.",
  },
  {
    question: "How does B2B email marketing automation work?",
    answer:
      "For B2B teams, we connect lead source, role, company data, and activity signals to sequences that nurture prospects until they are ready for sales. That usually includes handoff logic, scoring, CRM updates, and reporting that ties email activity to pipeline movement.",
  },
]

export default function EmailMarketingAutomationPage() {
  const serviceSeo = serviceDefinitions["email-marketing-automation"]
  const menuRef = useRef(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        <section className="w-full min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            <div className="absolute inset-0 z-0">
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <BarChart3 className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-green-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <ShoppingCart className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <Send className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

          <div className="z-20 text-center max-w-4xl mx-auto space-y-6 relative">
            <PageBreadcrumbs items={getServiceBreadcrumbs(serviceSeo)} className="mb-4 flex justify-center" />
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              Email Marketing Automation Service
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              Email Marketing Automation Service for Lifecycle Campaigns and Revenue Workflows
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We implement email marketing automation that connects welcome series, lead nurturing, abandoned cart
              recovery, post-purchase follow-ups, and win-back campaigns into one measurable system. If you need an{" "}
              <Link href="/services/crm-automation" className="font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 dark:text-white">
                email automation agency
              </Link>{" "}
              that can work inside your current stack, we build the workflows, data logic, and reporting together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setSelectedCalLink("awwtomation/awwtomation-consultation")
                  setCalModalOpen(true)
                }}
              >
                Start Automating <ChevronRight className="ml-1 h-4 w-4" />
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
            .floating-logo { filter: blur(0.5px); }
            .floating-logo:hover { filter: blur(0px); }
          `}</style>
        </section>

        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Email Marketing Automation Matters</h2>
              <p className="text-muted-foreground md:text-xl">
                Most teams lose revenue because follow-up is delayed, lists are too broad, and lifecycle emails are
                never connected back to the CRM or store. We build email marketing automation that fixes those gaps
                with event-based workflows, segmentation, testing, and reporting. For platform decisions, we often pair
                this work with our{" "}
                <Link href="/blog/best-email-marketing-platforms" className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-4">
                  best email marketing platforms
                </Link>{" "}
                guide and our{" "}
                <Link href="/blog/drive-sales-with-email-marketing-automation" className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-4">
                  email marketing automation
                </Link>{" "}
                strategy content.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Lifecycle coverage that matches how buyers actually move</h3>
                <p className="text-muted-foreground">
                  We map the journey from first opt-in to repeat purchase so every message has a purpose: welcome,
                  nurture, convert, recover, or retain. That keeps your team from sending generic campaigns when a
                  specific trigger or lifecycle stage would perform better.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Implementation that fits your existing stack</h3>
                <p className="text-muted-foreground">
                  We work with the tools you already use, connect CRM fields and event data, and build logic that your
                  team can maintain. If the project needs deeper routing, scoring, or handoff rules, we coordinate it
                  with{" "}
                  <Link href="/services/crm-automation" className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-4">
                    CRM automation
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Core Email Marketing Automation Workflows We Build
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                The best automated email marketing systems are specific. We do not just “send more emails”; we design
                workflows around the action that matters, the data you already have, and the next step a contact should
                take.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      Welcome and onboarding sequences
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We build onboarding flows that introduce your offer, set expectations, and move contacts toward a
                      next action based on signup source, product interest, or customer type.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      Lead nurturing and drip campaigns
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We structure drip campaigns around intent signals, content consumption, and lead stage so the
                      sequence stays relevant instead of becoming generic broadcast mail.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                      Segmentation and audience routing
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We segment by behavior, source, lifecycle stage, and product affinity so your audience sees the
                      right offer, cadence, and message path.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <ShoppingCart className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Abandoned cart recovery
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We create recovery sequences with timing, offers, reminders, and product context so the workflow
                      can bring shoppers back without manual intervention.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                      Post-purchase follow-ups
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We automate thank-you notes, usage tips, review prompts, and cross-sell paths so the post-sale
                      journey supports retention instead of stopping at the order confirmation.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      Browse abandonment and re-engagement
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We trigger follow-ups when a visitor views key products or goes inactive, using contextual
                      recommendations instead of one-size-fits-all blast campaigns.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                      <BarChart3 className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                      Reporting, testing, and optimization
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We wire in open, click, conversion, and revenue reporting, then use A/B testing to refine subject
                      lines, timing, offers, and sequence logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                How We Implement Email Marketing Automation
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                Good automation is not just a set of emails. It is a repeatable implementation process that includes
                data mapping, copy, triggers, QA, and measurement so the system keeps working after launch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <Cog className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      Audit your stack and lifecycle map
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We review your forms, CRM fields, email platform, store events, and current campaigns so the new
                      automation plan is built around what already exists.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                      Build triggers, segments, and copy
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We define the event logic, write the messages, and tailor each workflow to the behavior and intent
                      behind the send, not just the email schedule.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      QA deliverability and tracking
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Before launch, we test links, event firing, suppression rules, and reporting so the workflow is
                      stable and the data is trustworthy.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Optimize with real performance data
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Once live, we review engagement, conversion, and downstream pipeline effects to improve the next
                      iteration instead of guessing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Benefits You Can Expect</h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                The value of automation is not abstract. It should reduce manual effort, improve consistency, and make
                it easier to tie email activity back to revenue outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      Less manual follow-up work
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Automated flows handle routine messaging, freeing your team to focus on strategy, creative, and
                      sales conversations that need a human response.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                      More consistent conversion paths
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Contacts receive the right sequence at the right time, which usually improves lead conversion and
                      reduces drop-off between lifecycle stages.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      Clearer attribution and reporting
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We connect email activity to the metrics that matter so your team can see which workflow, message,
                      or segment is influencing the result.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Why Awwtomation</h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                We bring process detail, implementation experience, and a practical view of how email automation fits
                into real revenue operations. The goal is not just to launch flows, but to make them reliable and
                maintainable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      Built for CRM-connected teams
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We design around the handoff between marketing, sales, and operations so the email platform,
                      CRM, and store data all support the same lifecycle logic.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <Heart className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Support that keeps improving the system
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      We do not treat launch day as the finish line. We monitor results, tune the workflow, and refine
                      the messaging so the system keeps earning its place in your stack.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Use These Pages to Strengthen Your Email Automation Stack"
          description="These internal links support the platform, CRM, and lifecycle topics that matter most for this service page."
          links={relatedResources}
        />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Answers to the questions buyers actually ask when they are evaluating email marketing automation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {faqItems.map((faq, i) => (
                <Card key={i} className="text-left">
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

        <section className="py-20 px-4 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Put Email Marketing Automation to Work?</h2>
            <p className="text-muted-foreground text-lg">
              If you need a practical email marketing automation setup with lifecycle logic, CRM alignment, and
              measurable reporting, we can map it, build it, and help you optimize it after launch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Discover and audit
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We review your current platform, lifecycle gaps, and data flow so the plan starts with facts, not
                    assumptions.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">2</div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Build the first workflows
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We prioritize the highest-value sequences first, usually welcome, nurture, recovery, or re-engagement.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Measure and refine
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We monitor engagement, conversion, and pipeline indicators to improve the next round of messaging.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">4</div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Expand across the stack
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    When email needs to coordinate with sales or content systems, we extend the workflow into CRM and
                    blog automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground mb-6">
                Start with a consultation if you want a concrete implementation plan, not vague advice. We will map the
                lifecycle, identify the workflows worth automating, and show how email fits with your CRM and content
                systems.
              </p>
              <Button
                size="lg"
                className="hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
