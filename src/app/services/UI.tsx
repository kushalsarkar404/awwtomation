"use client"

import { CalModal } from "@/components/cal-modal"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card"
import { serviceCards,servicesHubSeo } from "@/lib/seo"
import {
BarChart3,
Bot,
Calendar,
ChevronRight,
Code,
Eye,
FileText,
Globe,
Headphones,
Lightbulb,
Mail,
MessageSquare,
NotebookPen,
PieChart,
Search,
Settings,
SquareGanttChartIcon as SquareChartGantt,
Target,
TrendingUp,
Users,
Workflow,
Zap
} from "lucide-react"
import Link from "next/link"
import { useEffect,useRef,useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export default function AutomationServicesPage() {
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

        {/* Hero Section with Floating Automation Icons */}
        <section className="w-full min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            {/* Floating Automation Icons */}
            <div className="absolute inset-0 z-0">
              {/* CRM */}
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              {/* Social Media */}
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <SquareChartGantt className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              {/* Email Marketing */}
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Mail className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              {/* Customer Support */}
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Headphones className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              {/* SEO */}
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-green-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Search className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              {/* Blog Automation */}
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <NotebookPen className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              {/* Workflow */}
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Workflow className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              {/* Analytics */}
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <BarChart3 className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

          {/* Hero Content */}
          <div className="z-20 text-center max-w-4xl mx-auto space-y-6 relative">
            <PageBreadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
              ]}
              className="mb-4 flex justify-center"
            />
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              {servicesHubSeo.heroTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              {servicesHubSeo.heroDescription} We focus on the workflows that create pipeline pressure, revenue drag,
              and repetitive admin across marketing, sales, and support.
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
          .floating-logo {
            filter: blur(0.5px);
          }
          .floating-logo:hover {
            filter: blur(0px);
          }
        `}</style>
        </section>

        <LinkCardSection
          eyebrow="Service Paths"
          title="Choose the Automation Service That Matches Your Core Bottleneck"
          description="Each service page targets a distinct commercial cluster from the Semrush workbook, so start with the workflow that currently creates the most manual drag or lost revenue. The pages below are linked to related guides and adjacent services so authority flows across the site."
          links={serviceCards}
        />

        {/* CRM Automation Section */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">CRM Automation</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">Sales teams</Badge>
                <Badge variant="secondary">Customer service departments</Badge>
                <Badge variant="secondary">Growing businesses</Badge>
              </div>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Our CRM automation tools are built around lead capture, routing, scoring, follow-up, and pipeline
                visibility so sales teams respond faster and keep deals moving.
              </p>
            </div>
            <div className="mx-auto max-w-4xl rounded-2xl border bg-background p-5 text-sm text-muted-foreground">
              CRM is the connective layer for the rest of the site. Pair it with{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/email-marketing-automation">
                email marketing automation
              </Link>{" "}
              for lifecycle follow-up and{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/social-media-automation">
                social media automation
              </Link>{" "}
              for lead capture from social channels.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                    Automated Lead Capture
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Instantly capture and organize leads from multiple sources into your CRM
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Workflow className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Lead Nurturing Workflows
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically engage prospects with personalized sequences based on behavior
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Pipeline Management
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Streamline deal progression with automated stage transitions and notifications
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Customer Data Synchronization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Ensure consistent, up-to-date information across all touchpoints
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Automated Follow-ups
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Never miss opportunities with intelligent reminder systems and scheduled outreach
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Sales Reporting and Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generate real-time insights on performance metrics and conversion rates
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button className="bg-blue-600 text-white" asChild>
                <Link href="/services/crm-automation">
                  Explore CRM Automation <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Media Automation Section */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Social Media Automation</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">Marketing teams</Badge>
                <Badge variant="secondary">Content creators</Badge>
                <Badge variant="secondary">Multi-platform businesses</Badge>
              </div>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Maximize your social media presence with automated planning, publishing, inbox handling, and
                reporting while keeping engagement human where it matters.
              </p>
            </div>
            <div className="mx-auto max-w-4xl rounded-2xl border bg-background p-5 text-sm text-muted-foreground">
              Social automation works best when it feeds the rest of the funnel. Connect this page to{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/crm-automation">
                CRM automation
              </Link>{" "}
              for follow-up and{" "}
              <Link
                className="font-medium text-primary underline-offset-4 hover:underline"
                href="/services/social-media-automation"
              >
                the social media automation service page
              </Link>{" "}
              for the full workflow.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <Bot className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    Automated Content Generation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Create engaging posts automatically based on your brand voice and audience preferences
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Social Media Planning and Scheduling
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Plan and deploy posts across multiple platforms with optimal timing
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <PieChart className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Analytics Dashboard
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Track engagement metrics, follower growth, and content performance in one centralized location
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Audience Engagement
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically respond to comments and messages with personalized replies
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Search className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Hashtag Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generate relevant, trending hashtags to increase post visibility and reach
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Cross-platform Posting
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Simultaneously publish content to Facebook, Instagram, Twitter, and LinkedIn
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button className="bg-blue-600 text-white" asChild>
                <Link href="/services/social-media-automation">
                  Explore Social Media Automation <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Automation Section */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Blog Automation</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">Content marketers</Badge>
                <Badge variant="secondary">SEO professionals</Badge>
                <Badge variant="secondary">Thought leadership businesses</Badge>
              </div>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Streamline your content creation process with our Blog Agent that creates automated SEO-optimized and
                humanized blogs to engage your audience effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    SEO-Optimized Blog Creation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generate high-quality, search-engine-friendly content automatically
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
                    Humanized Content
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Create authentic, engaging blog posts that resonate with your audience
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Content Ideation and Planning
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generate topic suggestions based on trending keywords and industry insights
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Automated Publishing Workflows
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Schedule posts and manage editorial calendars seamlessly
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Content Distribution
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically share new posts across social media and email channels
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
                    Performance Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Monitor traffic, engagement metrics, and SEO rankings for content optimization
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button className="bg-blue-600 text-white" asChild>
                <Link href="/services/blog-automation">
                  Learn More About Blog Automation <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Customer Support Automation Section */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Customer Support Automation</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">Customer service teams</Badge>
                <Badge variant="secondary">E-commerce businesses</Badge>
                <Badge variant="secondary">SaaS companies</Badge>
              </div>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Deliver exceptional customer experiences with intelligent automation that resolves issues faster while
                reducing support costs and keeping context intact across every handoff.
              </p>
            </div>
            <div className="mx-auto max-w-4xl rounded-2xl border bg-background p-5 text-sm text-muted-foreground">
              Support automation becomes more useful when it shares context with{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/crm-automation">
                CRM automation
              </Link>{" "}
              and{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/email-marketing-automation">
                email marketing automation
              </Link>
              .
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Settings className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Ticket Routing and Prioritization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically assign requests to the right agents
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Chatbot Integration
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Deploy AI-powered chatbots for instant responses to common inquiries
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Knowledge Base Management
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically update support documentation
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Escalation Workflows
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Transfer complex issues to specialized agents with complete context
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Response Templates
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generate personalized responses using customer data
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
                    Support Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Track resolution times and customer satisfaction scores
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button className="bg-blue-600 text-white" asChild>
                <Link href="/services/customer-support-automation">
                  Explore Customer Support Automation <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Email Marketing Automation Section */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Email Marketing Automation</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">E-commerce businesses</Badge>
                <Badge variant="secondary">B2B companies</Badge>
                <Badge variant="secondary">Marketing agencies</Badge>
              </div>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Create sophisticated email campaigns with triggers, segmentation, nurture flows, and reporting that
                increase engagement and drive conversions through personalized customer journeys.
              </p>
            </div>
            <div className="mx-auto max-w-4xl rounded-2xl border bg-background p-5 text-sm text-muted-foreground">
              Email automation should also support CRM handoff. Pair this page with{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/crm-automation">
                CRM automation
              </Link>{" "}
              and the{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/blog/best-email-marketing-platforms">
                best email marketing platforms guide
              </Link>
              .
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Automated Campaigns
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Design intelligent email sequences that guide prospects through your sales funnel
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Advanced Segmentation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically categorize subscribers based on behavior, preferences, and demographics
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
                    Personalization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Dynamically customize email content based on subscriber data and engagement history
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Behavioral Triggers
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Send targeted emails based on customer actions and engagement patterns
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    A/B Testing
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Optimize subject lines, content, and send times through automated testing protocols
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                    Email Automation Platforms
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Access comprehensive features for maximum campaign effectiveness and ROI
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button className="bg-blue-600 text-white" asChild>
                <Link href="/services/email-marketing-automation">
                  Explore Email Marketing Automation <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SEO Automation Section */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">SEO Automation</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary">Digital marketing agencies</Badge>
                <Badge variant="secondary">Content teams</Badge>
                <Badge variant="secondary">Organic growth businesses</Badge>
              </div>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Boost search visibility with automated reporting, keyword tracking, technical audits, and content
                workflows that keep SEO execution moving forward.
              </p>
            </div>
            <div className="mx-auto max-w-4xl rounded-2xl border bg-background p-5 text-sm text-muted-foreground">
              SEO automation works best when it supports a broader content system. Connect this page to{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/blog-automation">
                blog automation
              </Link>{" "}
              for publishing and{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/services/email-marketing-automation">
                email marketing automation
              </Link>{" "}
              for lifecycle distribution.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Automated Comprehensive SEO Reporting
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generate detailed reports on rankings, traffic, and performance metrics
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Keyword Research and Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically discover high-value keywords and monitor ranking positions
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Technical SEO Audits
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Scan websites for issues affecting search performance with actionable recommendations
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <FileText className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Content Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Analyze and improve existing content for better search engine visibility
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Competitor Analysis
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Monitor competitor strategies and identify gaps in your SEO approach
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <Eye className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                    Performance Monitoring
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Track SEO progress with automated alerts and insights for continuous improvement
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button className="bg-blue-600 text-white" asChild>
                <Link href="/services/seo-automation">
                  Explore SEO Automation <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border bg-background p-8 shadow-sm">
              <Badge variant="secondary">Our process</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">How we scope and implement automation</h2>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">1. Audit the current workflow</h3>
                    <p className="text-sm text-muted-foreground">
                      We map the manual steps, tools, and handoffs so the automation scope matches the actual problem.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">2. Design the workflow and proof points</h3>
                    <p className="text-sm text-muted-foreground">
                      We define triggers, routing logic, QA steps, reporting, and the metrics that prove value.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">3. Build, test, and connect</h3>
                    <p className="text-sm text-muted-foreground">
                      We implement the workflow and connect the systems that need to exchange data reliably.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">4. Measure and expand</h3>
                    <p className="text-sm text-muted-foreground">
                      We review the results, tighten the handoffs, and extend the automation into adjacent workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border bg-slate-950 p-8 text-white shadow-sm">
              <Badge className="bg-white/10 text-white hover:bg-white/20">Proof and trust</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">EEAT signals that support buyer confidence</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <h3 className="font-semibold">Case study structure</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Each service page can be paired with outcomes, before/after process notes, and implementation
                    detail.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <h3 className="font-semibold">Client examples</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Copy is written to sound like an experienced operator, not a generic product page.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <h3 className="font-semibold">Support content</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Blog articles reinforce the service pages instead of competing with them for intent.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <h3 className="font-semibold">Schema readiness</h3>
                  <p className="mt-2 text-sm text-white/70">
                    The hub already emits service, breadcrumb, FAQ, and item-list data that search engines can parse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & ROI Section */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Benefits & ROI of Business Automation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Time Savings
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Free up your team from repetitive tasks, allowing them to focus on strategic initiatives and
                    creative work.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Real-time insights and automated reporting enable faster, more informed business decisions.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Scalability
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Scale your operations without proportionally increasing headcount or operational complexity.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Consistency & Quality
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automated processes ensure consistent quality and reduce human error across all operations.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Better Resource Allocation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Teams can focus on high-level strategy and creative problem-solving rather than manual tasks.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    Improved ROI
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Better resource allocation and automated processes lead to improved ROI from all business
                    investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <div className="absolute top-1/3 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to common questions about our automation services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {servicesHubSeo.faqs.map((faq, i) => (
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

        {/* Get Started Section */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform Your Business with Automation?</h2>
            <p className="text-muted-foreground text-lg">
              Start your automation journey today with a complimentary consultation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Discovery & Assessment
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We&apos;ll analyze your current processes and identify the best automation opportunities.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Lightbulb className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">2</div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Custom Strategy
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Develop a tailored automation roadmap aligned with your business goals and priorities.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Implementation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Deploy automation solutions with thorough testing and team training for smooth adoption.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">4</div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Optimization & Growth
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Continuous monitoring, optimization, and scaling as your business evolves.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-muted-foreground mb-6">
                Let&apos;s automate your success—making your business more efficient, scalable, and profitable.
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

        {/* Footer */}
        <SiteFooter />

        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      </div>
    </ParallaxProvider>
  )
}
