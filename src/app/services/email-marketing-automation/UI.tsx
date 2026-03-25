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


        {/* Hero Section with Floating Email Marketing Icons */}
        <section className="w-full min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            {/* Floating Email Marketing Icons */}
            <div className="absolute inset-0 z-0">
              {/* Email */}
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Analytics */}
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <BarChart3 className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Users/Segmentation */}
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Target/Personalization */}
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-green-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Shopping Cart */}
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <ShoppingCart className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Heart/Engagement */}
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Clock/Automation */}
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* Send */}
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <Send className="w-4 h-4 md:w-6 md:h-6 text-white" />
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
              Email Marketing Automation
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

        {/* Why Email Marketing Automation */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Email Marketing Automation is Essential for Your Business
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Manual data entry, delayed follow-ups, and generic messaging lead to missed opportunities and disengaged
              customers. Our email marketing automation services eliminate these inefficiencies, integrating seamlessly
              with your existing systems to provide a holistic view of your customer interactions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Real-Time Updates & Personalization</h3>
                <p className="text-muted-foreground">
                  Enable real-time updates and hyper-personalized communication with data-driven strategies that fuel
                  sustainable growth. Every interaction is tracked and leveraged for better customer experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Complete Customer Journey Automation</h3>
                <p className="text-muted-foreground">
                  Whether you&apos;re onboarding new subscribers, recovering abandoned carts, or re-engaging dormant
                  customers, our email automation workflows keep your team productive and your customer data accurate,
                  leading to higher engagement and better ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Email Marketing Automation Capabilities */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Intelligent Lead Nurturing */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Intelligent Lead Nurturing & Welcome Sequences
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                Guide your prospects through the sales funnel with automated, behavior-driven email sequences that
                convert leads into loyal customers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      Automated Welcome Series
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Instantly greet new subscribers with engaging emails that introduce your brand, highlight key
                      offerings, and set expectations for future communications.
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
                      Drip Campaigns
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Set up pre-scheduled campaigns to deliver valuable content over time, educating leads and moving
                      them closer to conversion without manual intervention.
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
                      Onboarding Flows
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Streamline customer onboarding with automated emails providing essential information, tutorials,
                      and support resources for a smooth start.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Behavior-Triggered Campaigns */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Behavior-Triggered Campaigns</h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                Leverage customer actions (or inactions) to send perfectly timed, relevant messages that drive
                engagement and sales automatically.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <ShoppingCart className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Abandoned Cart Recovery
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Automatically send reminders and enticing offers to customers who leave items in their cart,
                      significantly boosting sales recovery rates.
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
                      Browse Abandonment
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Re-engage visitors who viewed specific products but didn&apos;t convert, with personalized
                      recommendations and incentives.
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
                      Post-Purchase Follow-ups
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Enhance satisfaction and encourage repeat business with automated thank-you notes, usage tips, and
                      cross-sell opportunities.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      Re-engagement Campaigns
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Identify and target inactive subscribers with tailored messages designed to rekindle interest and
                      bring them back.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Segmentation & Personalization */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Advanced Segmentation & Personalization</h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                Deliver truly personalized emails that resonate with your audience by segmenting them based on their
                unique characteristics and behaviors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                      Dynamic Content
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Automatically tailor email content, product recommendations, and offers based on individual
                      preferences, purchase history, and engagement levels.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                      Audience Segmentation
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Divide your email list into highly specific groups using demographics, interests, past
                      interactions, and lifecycle stage for maximum relevance.
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
                      A/B Testing Automation
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Continuously optimize campaigns by automatically testing different subject lines, CTAs, and
                      content variations to identify top performers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Automated Reporting & Analytics */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Automated Reporting & Analytics</h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                Gain deep insights into your email marketing performance with real-time dashboards and comprehensive
                reports that drive data-driven decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      Custom Dashboards
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Track key metrics like open rates, click-through rates, conversion rates, and revenue generated
                      from your automated campaigns in real-time.
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
                      Performance Monitoring
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Identify trends, pinpoint areas for improvement, and make data-driven decisions to continuously
                      optimize your email marketing strategy.
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
                      Attribution Tracking
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Understand the full impact of your email automation on your overall marketing and sales funnels
                      with comprehensive attribution analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seamless Integrations */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Seamless Integrations & CRM Email Marketing
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto">
                Connect your email automation with your entire tech stack for a unified customer view and streamlined
                operations across all touchpoints.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <Cog className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      CRM Integration
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Sync customer data between your email platform and CRM (HubSpot, Salesforce) to ensure consistent
                      messaging and empower sales teams with rich insights.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                      <ShoppingCart className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                      E-commerce Platform Sync
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Automate order confirmations, shipping updates, and product recommendations directly from your
                      e-commerce store for seamless customer experiences.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                      <Globe className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                      Marketing Automation Ecosystem
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Integrate with other marketing tools, analytics platforms, and customer service systems to create
                      a comprehensive marketing automation solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & ROI */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Benefits & ROI of Email Marketing Automation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Increased Efficiency & Time Savings
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automate repetitive tasks like sending follow-ups, segmenting lists, and scheduling campaigns,
                    freeing up your team to focus on strategy and creativity.
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
                    Higher Conversions & Revenue
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Deliver timely, personalized messages that guide customers through their journey, leading to
                    increased engagement, sales, and customer lifetime value.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Enhanced Customer Engagement
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Build stronger relationships by consistently providing relevant and valuable content, fostering
                    loyalty and trust with your audience.
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
                    Scalable Growth
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Allow your email marketing efforts to grow with your business without proportionally increasing
                    manual workload or resources.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <BarChart3 className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Access comprehensive analytics to understand what works, optimize your campaigns, and make informed
                    strategic choices for better ROI.
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
                    Reduced Errors & Costs
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Minimize human error and operational costs associated with manual email management while improving
                    overall campaign effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Awwtomation */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold">Why Choose Awwtomation for Your Email Marketing Automation?</h2>
            <p className="text-muted-foreground text-lg">
              At Awwtomation, we specialize in building powerful, end-to-end email marketing automation solutions that
              are tailored to your unique business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Cog className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Customized Workflows
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We don&apos;t offer one-size-fits-all solutions. Our team designs bespoke email automation workflows that
                    align perfectly with your customer journey and business objectives.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Expertise & Experience
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    With deep knowledge in both email marketing best practices and robust automation frameworks, we
                    deliver solutions that are both effective and efficient.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Seamless Integration
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Leveraging our expertise in workflow automation, we ensure your email marketing platform integrates
                    flawlessly with your existing CRM, e-commerce, and other critical business systems.
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
                    Dedicated Support & Proven Results
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    From initial setup and strategy development to ongoing optimization and support, Awwtomation is your
                    partner in achieving long-term success with proven track record of transforming marketing efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Use These Resources to Strengthen Your Email Automation Stack"
          description="These supporting pages reinforce the lifecycle, tooling, and CRM topics that matter most for this service page."
          links={serviceSeo.relatedResources}
        />

        {/* FAQ Section */}
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
                  Get answers to common questions about our email marketing automation services.
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

        {/* Next Steps */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform Your Email Marketing?</h2>
            <p className="text-muted-foreground text-lg">
              Don&apos;t let manual tasks limit your potential. Let Awwtomation build a smarter, more effective email
              marketing automation system that scales with your business.
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
                    Strategy Review
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We&apos;ll review your current email strategy and propose a tailored automation roadmap for maximum
                    impact.
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
                    Pilot Implementation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Start with focused automation (welcome sequences + abandoned cart recovery) to demonstrate immediate
                    value and ROI.
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
                    Full Automation Suite
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Expand to comprehensive automation including segmentation, personalization, and advanced behavioral
                    triggers.
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
                    Ongoing Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Continuous monitoring, A/B testing, and optimization as your business grows and evolves.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground mb-6">
                Contact us today for a complimentary consultation. We&apos;ll review your current email strategy and propose
                a tailored roadmap to unlock efficiency, boost engagement, and drive significant revenue growth. Let&apos;s
                make your email marketing truly Awwtomated!
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
