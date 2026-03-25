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
              {serviceSeo.heroDescription}
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
            <h2 className="text-3xl md:text-4xl font-bold">Why CRM Automation Transforms Your Business</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Manual data entry, slow lead follow-ups, and siloed systems cost you time and money. Our automation
              eliminates inefficiencies and fuels higher conversions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-red-700 transition-colors duration-300">
                    Stop Losing Leads
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Manual processes mean missed opportunities and delayed responses. Automation ensures every lead gets
                    instant attention.
                    <span className="font-semibold text-red-600"> Respond 10x faster</span> to hot prospects.
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
                    Accelerate Sales Cycles
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automated nurturing and intelligent lead scoring help your team focus on ready-to-buy prospects.
                    <span className="font-semibold text-green-600"> Close deals 40% faster</span> with smart automation.
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
                    Maximize Revenue
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Data-driven insights and automated workflows eliminate guesswork and optimize every touchpoint.
                    <span className="font-semibold text-blue-600"> Increase revenue by 35%</span> with intelligent
                    automation.
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
              <h2 className="text-3xl md:text-4xl font-bold">Seamless Integration & Real-Time Data Sync</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Connect every tool in your tech stack for a unified customer view. No more data silos or manual
                updates—everything syncs automatically.
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
                    Universal Integration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Link any app to any CRM. New contacts, orders, and leads flow automatically into your system.
                    <span className="font-semibold text-blue-600"> Connect 500+ applications</span> without technical
                    complexity.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                    Automation without changing existing platforms.
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
                    Changes sync instantly across all systems. Sales, support tickets, and orders update in seconds.
                    <span className="font-semibold text-green-600"> Eliminate data delays</span> and keep teams aligned
                    24/7.
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
                    24/7 data sync ensures clean, consistent information across all departments.
                    <span className="font-semibold text-purple-600"> Improve accuracy by 95%</span> and build trust
                    across teams.
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
              <h2 className="text-3xl md:text-4xl font-bold">Automated Email & Lead Nurturing Workflows</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Turn every lead into a conversation and every conversation into a sale. Our intelligent nurturing keeps
                prospects engaged at every stage.
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
                    Trigger personalized emails based on form submissions, purchases, or website activity.
                    <span className="font-semibold text-orange-600"> Increase open rates by 180%</span> with relevant,
                    timely messaging.
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
                    Automated follow-ups via email, SMS, and chat—all logged in your CRM for complete visibility.
                    <span className="font-semibold text-blue-600"> Boost response rates by 250%</span> with
                    multi-channel engagement.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                      Automation that keeps leads warm and engaged at every step.
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
                    Automatic reminders after demos, downloads, or support requests ensure no opportunity slips through.
                    <span className="font-semibold text-green-600"> Convert 60% more leads</span> with timely,
                    persistent follow-up.
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
              <h2 className="text-3xl md:text-4xl font-bold">Smart Lead Scoring & Intelligent Qualification with CRM Automation </h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Stop wasting time on cold leads. Our AI-powered scoring identifies your hottest prospects so your sales
                team focuses on deals that close.
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
                    Assign points based on page visits, downloads, and engagement.
                    <span className="font-semibold text-purple-600"> Identify hot leads instantly</span> with automated
                    behavior tracking.
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
                    Your team sees the hottest leads first, increasing conversion rates.
                    <span className="font-semibold text-green-600"> Close 3x more deals</span> by focusing on
                    ready-to-buy prospects.
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
                    Combine demographic and engagement data for sophisticated scoring models.
                    <span className="font-semibold text-blue-600"> Qualify leads 5x faster</span> with intelligent
                    automation.
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
                    High-scoring leads automatically route to your best sales reps.
                    <span className="font-semibold text-orange-600"> Maximize win rates</span> with intelligent lead
                    distribution.
                  </p>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-xs font-semibold text-orange-800">
                      Automations for sales teams to optimize time and effort.
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
              <h2 className="text-3xl md:text-4xl font-bold">Dynamic Reporting Dashboards</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Make data-driven decisions with real-time insights. Our custom dashboards turn complex data into
                actionable intelligence.
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
                    Custom dashboards pull data from your CRM and external sources like Google Analytics and ad
                    networks.
                    <span className="font-semibold text-blue-600"> Get insights 24/7</span> without manual spreadsheet
                    updates.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800">
                      A CRM automation that empowers strategic planning.
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
                    Charts and graphs update automatically with live data. Monitor KPIs like lead response time and deal
                    velocity.
                    <span className="font-semibold text-green-600"> Spot trends instantly</span> with visual
                    intelligence.
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
                    Unified dashboards help managers spot trends and adjust strategy on the fly.
                    <span className="font-semibold text-purple-600"> Make decisions 10x faster</span> with actionable
                    insights, not raw data.
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
              <h2 className="text-3xl md:text-4xl font-bold">Smart Workflow Automation</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Eliminate repetitive tasks and ensure nothing falls through the cracks. Our intelligent workflows adapt
                to your business processes.
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
                    Task & Reminder Automation
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automatically assign follow-up tasks based on pipeline stage, behavior, or missed actions.
                    <span className="font-semibold text-teal-600"> Never miss a follow-up</span> with intelligent task
                    management.
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
                    Auto-advance deals to the next stage based on defined criteria like meetings booked or quotes
                    signed.
                    <span className="font-semibold text-indigo-600"> Accelerate deal flow</span> with intelligent stage
                    progression.
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
                    Enrich contact records with additional data and auto-tag leads for better segmentation.
                    <span className="font-semibold text-orange-600"> Improve targeting by 200%</span> with intelligent
                    data enrichment.
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
              <h2 className="text-3xl md:text-4xl font-bold">Proven Results & Measurable ROI of CRM Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our CRM automation delivers immediate impact and long-term growth. Here is what you can expect from your
                investment.
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
                    <span className="font-semibold text-green-600"> Save 15+ hours weekly</span> per sales rep for
                    strategic activities.
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
                    <span className="font-semibold text-blue-600"> Reduce sales cycle by 40%</span> with instant lead
                    routing and timely follow-ups.
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
                    <span className="font-semibold text-purple-600"> Increase revenue by 50%</span> with smarter lead
                    prioritization.
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
                    <span className="font-semibold text-orange-600"> Reduce operational costs by 30%</span> while
                    improving accuracy.
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
                    Processes grow without increasing headcount. Handle 10x more leads with the same team.
                    <span className="font-semibold text-teal-600"> Scale infinitely</span> with future-proof automation
                    investment.
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
                    Real-time insights and unified dashboards enable strategic decision-making.
                    <span className="font-semibold text-indigo-600"> Improve decision speed by 300%</span> with
                    actionable intelligence.
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
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Awwtomation for CRM Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We do not just implement tools—we transform your entire customer lifecycle with intelligent automation
                that delivers measurable results.
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
                    <span className="font-semibold text-blue-600"> 500+ successful integrations</span> across all major
                    CRM platforms.
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
                    <span className="font-semibold text-green-600"> 100% customized</span> for your unique processes.
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
                    From implementation to long-term success, we are your automation partner.
                    <span className="font-semibold text-purple-600"> 24/7 expert support</span> and ongoing
                    optimization.
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
                    Enterprise-grade security with encryption, authentication, and GDPR compliance.
                    <span className="font-semibold text-orange-600"> Bank-level security</span> for your customer data.
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
                    Clients report faster lead response, higher conversion rates, and better decision-making.
                    <span className="font-semibold text-teal-600"> Average 400% ROI</span> within 6 months.
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
                    <span className="font-semibold text-indigo-600"> Always up-to-date</span> with latest innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Build a Better CRM Automation Stack"
          description="These pages reinforce the CRM, lead handling, and lifecycle automation topics that support this commercial page."
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
                  Get answers to common questions about our CRM automation services.
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
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s build Your CRM Automation Workflow Today</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Don&apos;t let manual tasks hold your business back. Let&apos;s build a smarter, automated CRM that scales with you
              and delivers measurable results.
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
                See how custom CRM automation can boost your sales performance, reduce operational load, and increase
                customer satisfaction.
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
