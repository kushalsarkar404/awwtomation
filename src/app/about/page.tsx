"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import {
  Mail,
  Users,
  ChevronRight,
  TrendingUp,
  Target,
  X,
  Menu,
  Cog,
  NotebookPen,
  SquareGanttChartIcon as SquareChartGantt,
  Code,
  Zap,
  ExternalLink,
  Linkedin,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
                    <span className="absolute -top-2 -right-6 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
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
                    <Link
                      href="/services/social-media-automation"
                      className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md"
                    >
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

              <Link href="/#pricing" className="text-sm font-medium hover:text-primary">
                Pricing
              </Link>
              <Link href="/#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium text-primary">
                About
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button
                size="lg"
                className="hover:bg-blue-700"
                onClick={() => {
                  setSelectedCalLink("awwtomation/awwtomation-consultation")
                  setCalModalOpen(true)
                }}
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div ref={menuRef} className="md:hidden block" style={{ zIndex: 60 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMobileMenuOpen((prev) => !prev)
                }}
                className="p-2 rounded-md border border-gray-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Mobile Menu Panel */}
              {mobileMenuOpen && (
                <div
                  ref={menuRef}
                  className="fixed left-0 right-0 top-16 z-50 bg-white border-t shadow px-4 py-6 space-y-4 md:hidden"
                >
                  <Link href="/services/blog-automation" className="block font-medium text-gray-700">
                    Blog Agent
                  </Link>
                  <Link href="/services/social-media-automation" className="block font-medium text-gray-700">
                    Social Media Automation
                  </Link>
                  <Link href="/services/seo-automation" className="block font-medium text-gray-700">
                    SEO Automation
                  </Link>
                  <Link href="/services/email-marketing-automation" className="block font-medium text-gray-700">
                    Email Marketing Automation
                  </Link>
                  <Link href="/services/crm-automation" className="block font-medium text-gray-700">
                    CRM Automation
                  </Link>
                  <Link href="#pricing" className="block text-gray-700">
                    Pricing
                  </Link>
                  <Link href="#contact" className="block text-gray-700">
                    Contact
                  </Link>
                  <Link href="/about" className="block text-primary font-medium">
                    About
                  </Link>
                  <Button
                    size="lg"
                    className="w-full hover:bg-blue-700"
                    onClick={() => {
                      setSelectedCalLink("awwtomation/awwtomation-consultation")
                      setCalModalOpen(true)
                    }}
                  >
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full min-h-[80vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            {/* Floating Icons */}
            <div className="absolute inset-0 z-0">
              {/* Innovation */}
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Growth */}
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Team */}
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Mission */}
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Automation */}
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Cog className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Passion */}
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Launch */}
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Rocket className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* Trust */}
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

          {/* Hero Content */}
          <div className="z-20 text-center max-w-4xl mx-auto space-y-6 relative">
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              About Awwtomation
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              The Awwtomation Story
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Awwtomation was founded in May 2025 with a clear mission: to empower businesses through efficient and effective automation solutions. We recognized the growing need for streamlined operations and sought to provide accessible, impactful automation services that help companies save time, reduce manual effort, and achieve sustainable growth.

Our approach is rooted in practical problem-solving. We focus on identifying areas where automation can deliver tangible benefits, from optimizing routine tasks to integrating complex systems. Our goal is to enable businesses to operate more smoothly and strategically, allowing them to concentrate on their core objectives.
            </p>
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

 

        {/* What We Do */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What We Specialize In</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We craft intelligent automation solutions that transform how businesses operate, grow, and succeed in
                today&apos;s digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <NotebookPen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Blog Automation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Our AI-powered blog agent generates SEO-optimized articles tailored to your brand in minutes. No
                    more writer&apos;s block or last minute deadlines.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <SquareChartGantt className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    Social Media Automation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Use our Social Planner to schedule and post across platforms effortlessly. This keeps you consistent
                    and engaged without being online 24/7.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    SEO Automation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Get data driven SEO automation with real-time rank tracking, automated reporting, and AI content
                    creation. We build custom dashboards and tools that visualize your metrics.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Email Marketing Automation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automate email campaigns, segmentation, and personalization to nurture leads and boost conversions
                    with targeted messaging.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <Cog className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                    CRM Automation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Streamline your sales and marketing funnels with CRM integration. Automate lead capture, follow-ups,
                    and email workflows so every prospect is nurtured.
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
                    Custom Business Process Automation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Whether it&apos;s syncing data between tools, automating internal approvals, or integrating platforms, we
                    craft smart, no-code/low-code systems that save time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Motto */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Motto</h2>
            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Automate. Accelerate. Assert.
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Because we believe every business, big or small, deserves tools that don&apos;t just save time, but transform
              how they grow. Backed by a product-driven mindset and the hunger to build systems that actually work,
              we&apos;re not just riding the automation wave — we&apos;re helping shape its future.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 bg-muted/50" id="team">
          <Parallax speed={-5}>
            <div className="container px-4 md:px-6 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Nuclear Team</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
                Two visionaries with complementary expertise, united by a shared passion for building automation
                solutions that transform businesses.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 items-start justify-center px-6 md:px-16 lg:px-32">
              {/* Prakhyat */}
              <Card className="group relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative z-10 p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src="/prakhyat.png"
                      alt="Prakhyat Shrestha"
                      className="rounded-full object-cover w-32 h-32 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl group-hover:text-blue-700 transition-colors duration-300">
                        Prakhyat Shrestha
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">CO-FOUNDER</p>
                      <p className="text-sm text-muted-foreground">B.Tech CSE, VIT, IN</p>
                      <p className="text-sm text-muted-foreground">📍 KATHMANDU 🇳🇵</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Prakhyat leads automation strategy, technical architecture, and innovation across the automation
                      spectrum. With a background in engineering and a strong foundation in artificial intelligence, he
                      brings deep technical insight and a visionary mindset to help grow businesses of all scales.
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/prakhyat-shrestha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Kushal */}
              <Card className="group relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative z-10 p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src="/kushal.png"
                      alt="Kushal Sarkar"
                      className="rounded-full object-cover w-32 h-32 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl group-hover:text-green-700 transition-colors duration-300">
                        Kushal Sarkar
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">CO-FOUNDER</p>
                      <p className="text-sm text-muted-foreground">MS Data Science, GSU, USA</p>
                      <p className="text-sm text-muted-foreground">📍 ATLANTA 🇺🇸</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Kushal drives business strategy, customer success, and operational scale. With a strong foundation
                      in data science, marketing, and automation technologies, he brings a growth-oriented, analytical
                      mindset and is known for turning scrappy ideas into scalable systems.
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/ksarkar011/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Parallax>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground">
              Join the growing number of businesses that trust Awwtomation to automate their workflows, accelerate their
              growth, and assert their competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setSelectedCalLink("awwtomation/awwtomation-consultation")
                  setCalModalOpen(true)
                }}
              >
                Start Your Automation Journey <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted transition-all duration-300 bg-transparent"
                asChild
                onClick={() => setMessageModalOpen(true)}
              >
                Get in Touch
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
                <Link href="/terms-and-conditions" className="hover:text-foreground">
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
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </ParallaxProvider>
  )
}
