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
ArrowRight,
BarChart3,
Calendar,
CheckCircle,
ChevronRight,
Clock,
Cog,
Database,
DollarSign,
Eye,
FileText,
Globe,
Mail,
PieChart,
RefreshCw,
Settings,
Shield,
Smartphone,
Target,
TrendingUp,
Users,
Workflow,
Zap
} from "lucide-react"
import { useEffect,useRef,useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export default function CRMAutomationPage() {
  const serviceSeo = serviceDefinitions["crm-automation"]
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

        {/* Hero Section */}
        <section className="w-full min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            {/* Floating CRM Icons */}
            <div className="absolute inset-0 z-0">
              {/* Database */}
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Database className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Users/Contacts */}
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Email Marketing */}
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Mail className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Analytics */}
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Workflow */}
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Workflow className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Target/Lead Scoring */}
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Automation/Zap */}
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* Settings/Configuration */}
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <Settings className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

          {/* Hero Content */}
          <div className="z-20 text-center max-w-3xl mx-auto space-y-6 relative">
            <PageBreadcrumbs items={getServiceBreadcrumbs(serviceSeo)} className="mb-4 flex justify-center" />
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              CRM Automation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              {serviceSeo.heroTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We build CRM automation service systems that route leads faster, trigger follow-up sequences, sync data
              across your stack, and give sales teams a cleaner pipeline to work from.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
              If you are comparing CRM automation vs. marketing automation, we map the handoff between pipeline
              routing, lifecycle email, and support so each trigger has a clear owner. Related work often includes{" "}
              <Link href="/services/email-marketing-automation" className="font-semibold underline underline-offset-4">
                email marketing automation
              </Link>
              ,{" "}
              <Link href="/services/customer-support-automation" className="font-semibold underline underline-offset-4">
                customer support automation
              </Link>
              , and{" "}
              <Link href="/services/seo-automation" className="font-semibold underline underline-offset-4">
                SEO automation
              </Link>
              .
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
              We usually start with a workflow audit, then define triggers, owners, exception paths, and reporting
              checkpoints before we connect anything to production.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className=" hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
        {/* Why CRM Automation Matters */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why CRM Automation Matters for Lead Routing and Follow-Up</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Manual data entry, slow lead follow-ups, and siloed systems create stale records and inconsistent
              handoffs. We design CRM workflow automation around your existing stack so routing, scoring, reminders,
              and reporting run on rules your team can actually maintain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-red-700 transition-colors duration-300">
                    Route Every Lead Immediately
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    We map capture sources, dedupe records, and assign ownership the moment a form, chat, or referral
                    lands in the CRM.
                    <span className="font-semibold text-red-600"> Respond faster</span> and reduce lost handoffs.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Standardize Follow-Up
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    We build stage-based triggers, task SLAs, and sequence logic so every rep follows the same process
                    from first response to proposal.
                    <span className="font-semibold text-green-600"> Keep deals moving</span> with a repeatable system.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    See What Moves Revenue
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    We connect pipeline data, campaign signals, and handoff events into one reporting layer so you can
                    measure response time, conversion rate, and stage velocity against the current baseline.
                    <span className="font-semibold text-blue-600"> Make the next move based on evidence.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Integration & Bi-Directional Sync */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How We Connect CRM Automation Across Your Stack</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                We map fields, events, and handoff rules across your CRM, email platform, support desk, and analytics
                tools. That means no rip-and-replace, no duplicate entry, and no blind spots between sales and
                marketing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Stack-Wide Integration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    We connect HubSpot, Salesforce, Pipedrive, forms, chat, spreadsheets, and internal tools through API,
                    webhook, or native sync paths.
                    <span className="font-semibold text-blue-600"> Keep one source of truth</span> across the stack.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                      Automation without changing your existing platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <RefreshCw className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Real-Time Updates
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Each event updates owner, stage, and status immediately so teams work from current records instead
                    of exported snapshots.
                    <span className="font-semibold text-green-600"> Remove lag from the handoff.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Data Consistency
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    We set validation rules, deduping, and field normalization to keep the CRM clean enough for
                    reporting and automation.
                    <span className="font-semibold text-purple-600"> Improve confidence in the data.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automated Email & Lead Nurturing */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">CRM and Lifecycle Email Workflows</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                This is where CRM automation hands off to nurture. We trigger behavior-based sequences after form
                fills, demo requests, quote sends, renewals, or inactivity windows, then route prospects into the
                right path with{" "}
                <Link href="/services/email-marketing-automation" className="font-semibold underline underline-offset-4">
                  email marketing automation
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <Mail className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    Behavior-Based Campaigns
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Trigger personalized emails from form submissions, purchases, or website activity so the follow-up
                    matches the buyer&apos;s intent.
                    <span className="font-semibold text-orange-600"> Send the right message at the right moment.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Multi-Channel Outreach
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Use email, SMS, and chat when the buying cycle needs more than one reminder. We log every touch back
                    to the record for auditability.
                    <span className="font-semibold text-blue-600"> Keep follow-up visible.</span>
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                      Automation that keeps leads warm without losing context.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Smart Follow-Up Sequences
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automatic reminders after demos, downloads, or support requests keep the handoff moving and reduce
                    the chance of a cold lead.
                    <span className="font-semibold text-green-600"> Build follow-up that survives busy weeks.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Lead Scoring & Qualification */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">CRM Workflow Automation for Scoring and Qualification</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                We define scoring around the behaviors your team trusts: role, company size, page visits, replies,
                demo requests, and buying signals. That makes the model explainable instead of arbitrary.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Behavioral Scoring
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Assign points based on page visits, downloads, replies, and other engagement signals.
                    <span className="font-semibold text-purple-600"> Make scoring easy to explain.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Sales Prioritization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Your team sees the hottest leads first, so reps spend more time on ready-to-buy prospects.
                    <span className="font-semibold text-green-600"> Prioritize the accounts most likely to convert.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Custom Qualification
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Combine demographic and engagement data for qualification rules that match how your team actually
                    sells.
                    <span className="font-semibold text-blue-600"> Qualify leads with less manual review.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Automated Routing
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    High-scoring leads route to the right rep, territory, or queue with ownership and SLA checks.
                    <span className="font-semibold text-orange-600"> Remove routing ambiguity.</span>
                  </p>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-xs font-semibold text-orange-800">
                      Built to keep the sales process clear, auditable, and fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Reporting Dashboards */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">CRM Reporting That Shows What Actually Changed</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                We tie dashboards to operational metrics that matter: response time, pipeline conversion, stage aging,
                and revenue influenced by automation. This is the evidence layer that helps you validate the
                implementation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Real-Time Analytics
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Custom dashboards pull data from your CRM and external sources like analytics and ad platforms.
                    <span className="font-semibold text-blue-600"> Replace spreadsheet exports with live views.</span>
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                      Reporting designed for weekly reviews and channel-level decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <PieChart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Visual Insights
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Charts and graphs update automatically with live data. Monitor KPIs like lead response time, deal
                    velocity, and stage drop-off.
                    <span className="font-semibold text-green-600"> Spot the bottleneck quickly.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Strategic Decision Making
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Unified dashboards help managers spot trends and adjust strategy without pulling exports or waiting
                    on manual reports.
                    <span className="font-semibold text-purple-600"> Decide from current data.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Workflow Automation */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Implementation-Led Workflow Automation</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                We document every trigger, branch, exception, and owner before launch, then test the workflow against
                live scenarios so it is usable by sales ops, marketing ops, and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    Task, SLA, and Reminder Automation
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automatically assign follow-up tasks based on pipeline stage, behavior, or missed actions.
                    <span className="font-semibold text-teal-600"> Keep the process moving</span> with clear ownership.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                    <ArrowRight className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                    Pipeline Automation
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Auto-advance deals only when the required fields, meetings, or approvals are present.
                    <span className="font-semibold text-indigo-600"> Avoid accidental stage jumps.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <FileText className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    Smart Enrichment
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Enrich contact records with additional data, then normalize the fields your team actually uses.
                    <span className="font-semibold text-orange-600"> Improve segmentation quality.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & ROI */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Measured Outcomes and ROI of CRM Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We benchmark baseline performance, implement the automation, and review the delta after launch so
                progress is visible in operational numbers and revenue reporting.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Increased Productivity
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Intelligent automation handles routine tasks like data entry and follow-ups automatically.
                    <span className="font-semibold text-green-600"> Reclaim hours every week</span> for higher-value
                    work.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Faster Sales Cycles
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automated nurturing and lead scoring accelerate your sales pipeline.
                    <span className="font-semibold text-blue-600"> Reach inbound leads while they are still warm.</span>
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Higher Revenue
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Focus on high-quality leads identified through automated scoring and behavioral tracking.
                    <span className="font-semibold text-purple-600"> Prioritize the accounts most likely to convert.</span>
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <CheckCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    Reduced Errors & Costs
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Eliminate duplicate entries and manual mistakes with automated data syncing.
                    <span className="font-semibold text-orange-600"> Reduce rework and reporting noise.</span>
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <Globe className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    Scalable Growth
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Processes grow without increasing headcount. Handle more leads with the same team and a clearer
                    operating model.
                    <span className="font-semibold text-teal-600"> Grow without adding manual load.</span>
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Real-time insights and unified dashboards make strategic decision-making easier to defend.
                    <span className="font-semibold text-indigo-600"> Base decisions on measurable movement.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Teams Choose Awwtomation for CRM Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We are implementation-led: discovery, workflow mapping, QA, launch, and post-launch tuning are built
                into the project so you get a system your team can maintain.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    CRM Automation Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Specialized in building powerful, end-to-end CRM automation solutions.
                    <span className="font-semibold text-blue-600"> 500+ successful integrations</span> across major CRM
                    platforms.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Cog className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Tailored Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Custom CRM automation and workflow automation tailored to your exact business needs.
                    <span className="font-semibold text-green-600"> Built around your process, not ours.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Dedicated Support
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    From implementation to long-term success, we stay involved as your automation partner.
                    <span className="font-semibold text-purple-600"> Post-launch optimization included.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Security & Compliance
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Enterprise-grade security with encryption, authentication, and compliance-aware implementation.
                    <span className="font-semibold text-orange-600"> Plan permissions before launch.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Proven Track Record
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Clients report faster lead response, cleaner handoffs, and better decision-making after launch.
                    <span className="font-semibold text-teal-600"> Results are measured against baseline metrics.</span>
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <Workflow className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    Future-Proof Technology
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Built on scalable platforms that evolve with your business needs and technology changes.
                    <span className="font-semibold text-indigo-600"> Easier to extend as the stack changes.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Build a Better CRM Automation Stack"
          description="These pages reinforce CRM, lifecycle email, support, and SEO automation topics that support this commercial page."
          links={serviceSeo.relatedResources}
        />

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <div className="absolute top-1/3 -left-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to the common CRM automation questions teams ask before implementation, including what
                  CRM automation is, how it differs from marketing automation, and how it works in your current stack.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {serviceSeo.faqs.map((faq, i) => (
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

        {/* Call to Action */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s build your CRM automation workflow</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We&apos;ll map your lead routing, follow-up, and reporting gaps, then recommend the smallest automation set
              that will move the numbers.
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                className="hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setSelectedCalLink("awwtomation/awwtomation-consultation")
                  setCalModalOpen(true)
                }}
              >
                Schedule Free Consultation <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                See how custom CRM automation can improve response time, reduce operational load, and create a cleaner
                handoff between sales, marketing, and support.
              </p>
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
