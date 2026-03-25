"use client"
import { CalModal } from "@/components/cal-modal"
import { FaqCardSection } from "@/components/seo/faq-card-section"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getServiceBreadcrumbs,serviceDefinitions } from "@/lib/seo"
import Link from "next/link"
import {
BarChart3,
Calendar,
ChevronRight,
Clock,
Cog,
Eye,
Facebook,
Globe,
Instagram,
Linkedin,
MessageSquare,
Target,
TrendingUp,
Twitter,
Users,
Youtube,
Zap
} from "lucide-react"
import { useEffect,useRef,useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export default function SocialMediaAutomationPage() {
  const serviceSeo = serviceDefinitions["social-media-automation"]
  const menuRef = useRef(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const relatedResources = [
    ...serviceSeo.relatedResources,
    {
      title: "Blog Automation Service",
      href: "/services/blog-automation",
      description: "Connect social publishing to a repeatable content pipeline for repurposing and distribution.",
      label: "Related service",
    },
    {
      title: "SEO Automation Service",
      href: "/services/seo-automation",
      description: "Tie social reporting and content refreshes to a broader search visibility workflow.",
      label: "Related service",
    },
  ]

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
    <>
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
        {/* Hero Section with Floating Social Media Logos */}
        <section className="w-full min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            {/* Floating Social Media Logos */}
            <div className="absolute inset-0 z-0">
              {/* Facebook */}
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>

              {/* Instagram */}
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>

              {/* Twitter/X */}
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-black rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-blue-700 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>

              {/* TikTok */}
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>
              </div>

              {/* YouTube */}
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </div>

              {/* Pinterest */}
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-red-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
              </div>

              {/* Snapchat */}
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
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
              Social Media Automation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              {serviceSeo.heroTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We build social media automation around the parts of the workflow that create drag: planning, approvals,
              scheduling, inbox triage, lead capture, and reporting. Strategy stays human-led while repeatable
              execution becomes reliable.
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
        {/* What is the Social Planner */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">What Social Media Automation Should Actually Handle</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              If you are trying to automate social media posts, the goal is not to replace your team. It is to remove
              repetitive publishing, routing, and reporting work so strategy, creative, and community management move
              faster. We map the workflow, set approval rules, and connect the output to CRM and analytics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Smart Scheduling
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Queue posts by channel, campaign, and time zone. Keep your calendar full without manual publishing
                    every day, and leave room for real-time edits when campaigns change.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Multi-Platform Management
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Manage Facebook, Instagram, X, LinkedIn, Pinterest, TikTok, and YouTube from one workflow.
                    Standardize what can be automated and where human review should stay in place.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Performance Analytics
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Track posts, clicks, comments, and handoffs in one reporting layer. Use the data to decide which
                    content drives pipeline, not just vanity engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform-Specific Automation */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Channel-Specific Rules, Not One-Size-Fits-All Automation</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Every network needs a different setup. We tailor post timing, format checks, approval steps, inbox
                routing, and lead handoff rules so automation stays useful on the channels that matter most to your
                audience.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Facebook,
                  name: "Facebook",
                  color: "blue",
                  features: [
                    "Page and group scheduling",
                    "Comment routing and inbox triage",
                    "Lead form handoff to CRM",
                    "Campaign-level timing windows",
                  ],
                  benefit: "Built for community and lead capture",
                },
                {
                  icon: Instagram,
                  name: "Instagram",
                  color: "pink",
                  features: [
                    "Feed, Reels, and story scheduling",
                    "Caption and hashtag support",
                    "Approval before publish",
                    "DM routing for fast responses",
                  ],
                  benefit: "Best for visual brands and creators",
                },
                {
                  icon: Twitter,
                  name: "Twitter (X)",
                  color: "gray",
                  features: [
                    "Thread scheduling",
                    "Trend-aware posting",
                    "Keyword monitoring",
                    "Engagement triage",
                  ],
                  benefit: "Useful for fast-moving content teams",
                },
                {
                  icon: Linkedin,
                  name: "LinkedIn",
                  color: "blue",
                  features: [
                    "Company page scheduling",
                    "Founder and team profile support",
                    "B2B lead capture",
                    "Editorial approvals",
                  ],
                  benefit: "Strong for B2B demand generation",
                },
                {
                  icon: Globe,
                  name: "Pinterest",
                  color: "red",
                  features: [
                    "Board scheduling",
                    "SEO-friendly descriptions",
                    "Cross-post planning",
                    "Traffic tracking",
                  ],
                  benefit: "Good for evergreen discovery",
                },
                {
                  icon: Zap,
                  name: "TikTok",
                  color: "black",
                  features: [
                    "Video queue management",
                    "Caption support",
                    "Publishing checklist",
                    "Performance review",
                  ],
                  benefit: "Helpful for high-volume video teams",
                },
                {
                  icon: Youtube,
                  name: "YouTube",
                  color: "red",
                  features: [
                    "Shorts and video scheduling",
                    "Metadata prep",
                    "Community post planning",
                    "Publishing QA",
                  ],
                  benefit: "Useful for long-form and short-form video ops",
                },
              ].map((platform, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      platform.color === "blue"
                        ? "from-blue-50 to-indigo-50"
                        : platform.color === "pink"
                          ? "from-pink-50 to-purple-50"
                          : platform.color === "gray"
                            ? "from-gray-50 to-slate-50"
                            : platform.color === "red"
                              ? "from-red-50 to-orange-50"
                              : "from-purple-50 to-indigo-50"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 ${
                        platform.color === "blue"
                          ? "bg-blue-100 group-hover:bg-blue-200"
                          : platform.color === "pink"
                            ? "bg-pink-100 group-hover:bg-pink-200"
                            : platform.color === "gray"
                              ? "bg-gray-100 group-hover:bg-gray-200"
                              : platform.color === "red"
                                ? "bg-red-100 group-hover:bg-red-200"
                                : "bg-purple-100 group-hover:bg-purple-200"
                      } rounded-lg flex items-center justify-center mb-4 transition-colors duration-300`}
                    >
                      <platform.icon
                        className={`h-6 w-6 ${
                          platform.color === "blue"
                            ? "text-blue-600"
                            : platform.color === "pink"
                              ? "text-pink-600"
                              : platform.color === "gray"
                                ? "text-gray-600"
                                : platform.color === "red"
                                  ? "text-red-600"
                                  : "text-purple-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        platform.color === "blue"
                          ? "group-hover:text-blue-700"
                          : platform.color === "pink"
                            ? "group-hover:text-pink-700"
                            : platform.color === "gray"
                              ? "group-hover:text-gray-700"
                              : platform.color === "red"
                                ? "group-hover:text-red-700"
                                : "group-hover:text-purple-700"
                      } transition-colors duration-300`}
                    >
                      {platform.name}
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-sm mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                      {platform.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`text-sm font-semibold ${
                        platform.color === "blue"
                          ? "text-blue-600"
                          : platform.color === "pink"
                            ? "text-pink-600"
                            : platform.color === "gray"
                              ? "text-gray-600"
                              : platform.color === "red"
                                ? "text-red-600"
                                : "text-purple-600"
                      }`}
                    >
                      {platform.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Integrations */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How Social Publishing Connects to the Rest of the Stack</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A good automation setup does not stop at scheduling. We connect forms, CRM records, email follow-up,
                and collaboration tools so a high-intent interaction can trigger the next step automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    CRM Integration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Sync leads from social forms, DMs, and landing pages into HubSpot, Salesforce, Zoho, or the CRM you
                    already use. Route ownership and follow-up based on campaign source, location, or audience segment.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Team Collaboration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Keep approvals, comments, and handoffs inside Slack, Discord, Trello, or Notion so work moves
                    without scattered feedback and status chasing.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Content Management
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Pull assets from Google Sheets, Airtable, or Notion, then queue, review, and publish from a single
                    workflow with clearer QA before posting.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl border bg-background px-6 py-5 text-left shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Connected workflows
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                When social publishing needs lead follow-up or repurposed content, connect it to{" "}
                <Link href="/services/crm-automation" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
                  CRM automation
                </Link>
                ,{" "}
                <Link
                  href="/services/email-marketing-automation"
                  className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                  email marketing automation
                </Link>
                ,{" "}
                <Link href="/services/blog-automation" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
                  blog automation
                </Link>
                ,{" "}
                <Link href="/services/seo-automation" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
                  SEO automation
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm text-muted-foreground mt-12">
              {[
                "HubSpot",
                "Salesforce",
                "Zoho",
                "Mailchimp",
                "ConvertKit",
                "Google Sheets",
                "Airtable",
                "Notion",
                "Slack",
                "Discord",
                "Trello",
                "Klaviyo",
              ].map((tool, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-background px-3 py-2 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <span className="font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      {tool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO Targeting */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-5xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How We Implement It</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We start with your posting process, approval requirements, and channel mix, then build the automation
                around the handoffs your team already uses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Discovery
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Map current posting, moderation, and reporting steps to find where manual work, delays, or missed
                    follow-up happen.
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
                    Build
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Configure workflows, rules, and triggers in the tools you already use, then add approvals,
                    fallbacks, and notifications before launch.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Launch
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Test posting, handoff, and reporting with a controlled rollout so the first live cycle is stable
                    and visible.
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
                    Optimize
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Review performance, exceptions, and team feedback, then tune timing, templates, and routing over
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Teams That Need Consistent Output</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Whether you manage one brand or many, our automation is designed to keep publishing consistent,
                approvals clear, and follow-up visible without adding more manual overhead.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Local Businesses",
                  description: "Stay consistent without hiring a full-time social manager",
                  benefit: "Recover hours each week",
                  icon: Users,
                },
                {
                  title: "Marketing Agencies",
                  description: "Manage client approvals, publishing, and reporting from one system",
                  benefit: "Support more accounts without chaos",
                  icon: Target,
                },
                {
                  title: "eCommerce Brands",
                  description: "Run product launches, promotions, and UGC campaigns on repeat",
                  benefit: "Keep campaigns on schedule",
                  icon: TrendingUp,
                },
                {
                  title: "Content Creators",
                  description: "Turn one idea into a multi-channel workflow without losing your voice",
                  benefit: "Publish faster across platforms",
                  icon: Eye,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="text-sm font-semibold text-blue-600">{item.benefit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Awwtomation */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Teams Choose Awwtomation for Social Media Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We do not stop at the scheduler. We document the workflow, build the automation, test the edge cases,
                and hand your team a system that can be trusted in production.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Custom Automation Workflows",
                  description: "Tailored to your channels, approval rules, and reporting needs",
                  benefit: "Built around your actual process",
                  icon: Cog,
                },
                {
                  title: "Works With Your Current Stack",
                  description: "Implemented with n8n and the tools you already use, not around a forced platform swap",
                  benefit: "Lower setup friction",
                  icon: Zap,
                },
                {
                  title: "Transparent Scope and QA",
                  description: "We define triggers, exceptions, and fallback paths so the system is easier to maintain",
                  benefit: "Clearer ownership",
                  icon: Target,
                },
                {
                  title: "Expert Support & Training",
                  description: "Your team gets implementation guidance and handoff docs",
                  benefit: "Faster adoption",
                  icon: Users,
                },
                {
                  title: "Scalable for Any Business",
                  description: "Start with one workflow and expand into CRM, email, SEO, or blog automation",
                  benefit: "Easier to expand",
                  icon: TrendingUp,
                },
                {
                  title: "Practical Production Systems",
                  description: "Built for day-to-day use, not demo-only automation",
                  benefit: "Designed for real operations",
                  icon: Globe,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="text-sm font-semibold text-green-600">{item.benefit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Support Your Social Workflow With Connected Systems"
          description="These related pages show how social publishing connects to CRM, email, SEO, and content automation."
          links={relatedResources}
        />

        <FaqCardSection
          title="Social Media Automation FAQs"
          description="Get answers to the questions teams usually ask before automating publishing, routing, and reporting."
          faqs={serviceSeo.faqs}
        />

        <section className="py-20 px-4 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Automate Your Social Workflow?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Replace manual scheduling, fragmented reporting, and slow handoffs with a social media automation
              service that connects publishing to CRM, email, and content operations.
            </p>
            <Button
              size="lg"
              className="hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                setSelectedCalLink("awwtomation/awwtomation-consultation")
                setCalModalOpen(true)
              }}
            >
              Book an Implementation Call <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>
        {/* Footer */}
       {/* Footer */}
       <SiteFooter />
        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      </div>
    </ParallaxProvider>
    </>
  )
}
