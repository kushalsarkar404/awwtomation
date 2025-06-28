"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParallaxProvider } from "react-scroll-parallax"
import { CalModal } from "@/components/cal-modal"
import {
  Mail,
  Users,
  ChevronRight,
  TrendingUp,
  Target,
  Globe,
  X,
  Menu,
  Cog,
  NotebookPen,
  SquareGanttChartIcon as SquareChartGantt,
  Code,
  Zap,
  Eye,
  Heart,
  ShoppingCart,
  BarChart3,
  Clock,
  Send,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailMarketingAutomationPage() {
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
      <div className="flex min-h-[100dvh] flex-col px-4 md:px-12">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container mx-auto  flex h-16 items-center justify-between">

    <div className="flex items-center gap-2">
      <Link href="/">
      <Image
        src="/full-logo.svg"
        alt="Awwtomation Logo"
        fill={false}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-auto"
        priority
      />
      </Link>
    </div>

    <nav className="hidden md:flex gap-8 relative items-center">
      <div className="relative group/menu">
        <div className="flex items-center gap-1 text-sm font-medium cursor-pointer relative z-50">
          <span className="relative">
            Services
            <span className="absolute -top-2 -right-6 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">NEW</span>
          </span>
        </div>

        <div className="absolute left-0 top-full pt-2 hidden group-hover/menu:flex bg-white border shadow-2xl rounded-xl w-[640px] p-6 z-40">
          <div className="grid grid-cols-2 gap-6">
            {/* Blog Agent */}
            <Link href="/services/blog-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <NotebookPen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  Blog Agent
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-md">NEW</span>
                </div>
                <p className="text-sm text-gray-500">Multi-purpose blog generator with SEO-ready content</p>
              </div>
            </Link>

            {/* Social Media Automation */}
            <Link href="/services/social-media-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                <SquareChartGantt className="h-5 w-5 text-pink-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Social Media Automation</div>
                <p className="text-sm text-gray-500">Schedule, optimize, and automate social campaigns</p>
              </div>
            </Link>

            {/* SEO Automation */}
            <Link href="/services/seo-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Code className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">SEO Automation</div>
                <p className="text-sm text-gray-500">AI meta generation, audits, and keyword clustering</p>
              </div>
            </Link>
                        {/* Email Marketing Automation */}
                        <Link
                      href="/services/email-marketing-automation"
                      className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Email Marketing Automation</div>
                        <p className="text-sm text-gray-500">Automated campaigns, segmentation & personalization</p>
                      </div>
                    </Link>

            {/* CRM Automation */}
            <Link href="/services/crm-automation" className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                <Cog className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">CRM Automation</div>
                <p className="text-sm text-gray-500">Lead flows, auto-reminders & 3rd-party integration</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
      <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
      <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
      <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>

    </nav>
    
    <div className="hidden md:flex items-center gap-4">
      <Button size="lg" className="hover:bg-blue-700" onClick={() => {
        setSelectedCalLink("awwtomation/awwtomation-consultation");
        setCalModalOpen(true);
      }}>
        Automate Now
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
      
    </div>
    <div ref={menuRef} className="md:hidden block" style={{ zIndex: 60 }}>
    <button
  onClick={(e) => {
    e.stopPropagation()
    setMobileMenuOpen(prev => !prev)
  }}
  className="p-2 rounded-md border border-gray-300"
>
  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
</button>


      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="fixed left-0 right-0 top-16 z-50 bg-white border-t shadow px-4 py-6 space-y-4 md:hidden">
          <Link href="/services/blog-automation" className="block font-medium text-gray-700">Blog Agent</Link>
          <Link href="/services/social-media-automation" className="block font-medium text-gray-700">Social Media Automation</Link>
          <Link href="/services/seo-automation" className="block font-medium text-gray-700">SEO Automation</Link>
          <Link href="/services/crm-automation" className="block font-medium text-gray-700">CRM Automation</Link>
          <Link href="/services/email-marketing-automation" className="block font-medium text-gray-700">Email Marketing Automation</Link>
          <Link href="#pricing" className="block text-gray-700">Pricing</Link>
          <Link href="#contact" className="block text-gray-700">Contact</Link>
          <Link href="/about" className="block text-gray-700">About</Link>
          <Button size="lg" className="w-full hover:bg-blue-700" onClick={() => {
            setSelectedCalLink("awwtomation/awwtomation-consultation")
            setCalModalOpen(true)
          }}>
            Automate Now
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}
        </div>
  </div>


  
</header>

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
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              Email Marketing Automation
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              Automate Your Email Marketing for Unprecedented Growth
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Effortlessly nurture leads, boost conversions, and build lasting customer loyalty with advanced email
              marketing automation. Deliver personalized, timely, and highly relevant messages to your audience,
              ensuring the right message reaches the right person at the perfect moment.
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
                  Whether you're onboarding new subscribers, recovering abandoned carts, or re-engaging dormant
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
                      Re-engage visitors who viewed specific products but didn't convert, with personalized
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
                    We don't offer one-size-fits-all solutions. Our team designs bespoke email automation workflows that
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
              {[
                {
                  question: "What types of businesses can benefit from email marketing automation?",
                  answer:
                    "Any business that communicates with its customers or leads via email can benefit. This includes e-commerce stores, SaaS companies, service providers, B2B organizations, and more. If you send welcome emails, promotional offers, newsletters, or follow-ups, automation can significantly enhance your efforts.",
                },
                {
                  question: "How quickly can I see results from email automation?",
                  answer:
                    "While comprehensive results build over time, many clients observe immediate improvements in efficiency and engagement within weeks. Automated welcome sequences and abandoned cart reminders often show quick returns by capturing immediate opportunities. We focus on implementing high-impact automated email campaigns first to demonstrate value rapidly.",
                },
                {
                  question: "Will Awwtomation integrate with my existing email marketing platform?",
                  answer:
                    "Our solutions are designed to be flexible and integrate with most popular email marketing platforms and CRMs that support APIs or webhooks. Whether you use Mailchimp, HubSpot, Klaviyo, or a custom setup, we can build the necessary connectors to automate your processes.",
                },
                {
                  question: "How does email automation help with personalization?",
                  answer:
                    "Email automation allows for advanced segmentation of your audience based on their behavior, demographics, and preferences. This enables us to create dynamic content and trigger specific messages that are highly relevant to each individual, making them feel seen and valued.",
                },
                {
                  question: "Is email marketing automation secure?",
                  answer:
                    "Yes, security and data privacy are paramount. We adhere to best practices for data handling, including secure credential storage, encrypted API connections, and compliance with relevant data protection regulations like GDPR. Your customer data is always protected within our secure email automation processes.",
                },
              ].map((faq, i) => (
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
              Don't let manual tasks limit your potential. Let Awwtomation build a smarter, more effective email
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
                    We'll review your current email strategy and propose a tailored automation roadmap for maximum
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
                Contact us today for a complimentary consultation. We'll review your current email strategy and propose
                a tailored roadmap to unlock efficiency, boost engagement, and drive significant revenue growth. Let's
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
        <footer className="w-full border-t py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <Image
                      src="/full-logo.svg"
                      alt="Awwtomation Logo"
                      fill={false}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-auto w-auto"
                      priority
                    />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">Automate. Accelerate. Assert.</p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/awwtomation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/awwtomation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://youtube.com/@Awwtomation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="https://x.com/awwtomation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="sr-only">X</span>
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services/blog-automation" className="text-muted-foreground hover:text-foreground">
                      Blog Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/social-media-automation"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Social Media Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo-automation" className="text-muted-foreground hover:text-foreground">
                      SEO Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/email-marketing-automation"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Email Marketing Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/crm-automation" className="text-muted-foreground hover:text-foreground">
                      CRM Automation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="mailto:contact@awwtomation.com" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">© 2025 Awwtomation. All rights reserved.</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <Link href="/legal/terms-and-conditions" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="/legal/privacy-policy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      </div>
    </ParallaxProvider>
  )
}
