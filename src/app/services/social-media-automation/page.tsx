"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParallaxProvider } from "react-scroll-parallax"
import { CalModal } from "@/components/cal-modal"
import {
  Globe,
  Zap,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  X,
  Menu,
  Cog,
  NotebookPen,
  SquareGanttChartIcon as SquareChartGantt,
  Code,
  Calendar,
  Users,
  BarChart3,
  Clock,
  Target,
  MessageSquare,
  TrendingUp,
  Eye,
} from "lucide-react"

export default function SocialMediaAutomationPage() {
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
              <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
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
                Automate Now
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
                  <Link href="/services/crm-automation" className="block font-medium text-gray-700">
                    CRM Automation
                  </Link>
                  <Link href="#pricing" className="block text-gray-700">
                    Pricing
                  </Link>
                  <Link href="#contact" className="block text-gray-700">
                    Contact
                  </Link>
                  
                  <Button
                    size="lg"
                    className="w-full hover:bg-blue-700"
                    onClick={() => {
                      setSelectedCalLink("awwtomation/awwtomation-consultation")
                      setCalModalOpen(true)
                    }}
                  >
                    Automate Now
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </header>
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
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              Social Media Automation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              Plan, Schedule, and Grow with Awwtomation&apos;s Social Planner
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Automate your entire social media presence from one powerful tool. Save time, stay consistent, and
              increase engagement effortlessly.
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
            <h2 className="text-3xl md:text-4xl font-bold">Transform Your Social Media Strategy</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Stop posting randomly and start growing strategically. Our Social Planner automates your entire social
              media workflow so you can focus on what matters most - your business.
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
                    Schedule weeks of content in minutes. Our AI finds the perfect posting times for maximum engagement.
                    <span className="font-semibold text-blue-600"> Save 10+ hours weekly</span> on content planning.
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
                    Manage all your social accounts from one dashboard. Post to 7+ platforms simultaneously.
                    <span className="font-semibold text-green-600"> Increase reach by 400%</span> with cross-platform
                    automation.
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
                    Track what works and optimize automatically. Get insights that drive real business results.
                    <span className="font-semibold text-purple-600"> Boost engagement by 250%</span> with data-driven
                    posting.
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
              <h2 className="text-3xl md:text-4xl font-bold">Platform-Specific Automation</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Each platform has unique requirements. Our automation adapts to maximize performance on every channel
                where your audience lives.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Facebook,
                  name: "Facebook",
                  color: "blue",
                  features: [
                    "Auto-schedule to Pages and Groups",
                    "Smart comment management",
                    "Lead ad CRM integration",
                    "Peak engagement timing",
                  ],
                  benefit: "Increase page engagement by 180%",
                },
                {
                  icon: Instagram,
                  name: "Instagram",
                  color: "pink",
                  features: [
                    "Stories, Reels & carousel automation",
                    "Hashtag optimization",
                    "Location-based posting",
                    "DM auto-responses",
                  ],
                  benefit: "Grow followers 3x faster",
                },
                {
                  icon: Twitter,
                  name: "Twitter (X)",
                  color: "gray",
                  features: [
                    "Thread scheduling & optimization",
                    "Auto-retweet top content",
                    "Trend monitoring",
                    "Engagement tracking",
                  ],
                  benefit: "Boost tweet impressions by 300%",
                },
                {
                  icon: Linkedin,
                  name: "LinkedIn",
                  color: "blue",
                  features: [
                    "Professional content scheduling",
                    "Lead generation automation",
                    "Company page management",
                    "Network growth tracking",
                  ],
                  benefit: "Generate 5x more B2B leads",
                },
                {
                  icon: Globe,
                  name: "Pinterest",
                  color: "red",
                  features: [
                    "Pin scheduling & optimization",
                    "Board management automation",
                    "SEO-optimized descriptions",
                    "Traffic analytics",
                  ],
                  benefit: "Drive 400% more website traffic",
                },
                {
                  icon: Zap,
                  name: "TikTok",
                  color: "black",
                  features: [
                    "Video upload automation",
                    "Trending hashtag integration",
                    "Caption generation",
                    "Performance tracking",
                  ],
                  benefit: "Increase video views by 500%",
                },
                {
                  icon: Youtube,
                  name: "YouTube",
                  color: "red",
                  features: [
                    "Video & Shorts scheduling",
                    "Auto-generated descriptions",
                    "Playlist management",
                    "Community post automation",
                  ],
                  benefit: "Grow subscriber base by 250%",
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
              <h2 className="text-3xl md:text-4xl font-bold">Seamless Workflow Integrations</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Connect your entire business ecosystem. Our automation works with 300+ platforms to create a unified
                workflow that saves time and eliminates manual work.
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
                    Sync leads from social media directly to your CRM. Automate follow-ups and nurture campaigns.
                    <span className="font-semibold text-green-600"> Convert 40% more leads</span> with automated
                    workflows.
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
                    Connect with Slack, Discord, and project management tools. Keep your team aligned and productive.
                    <span className="font-semibold text-blue-600"> Improve team efficiency by 60%</span> with unified
                    communication.
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
                    Pull content from Google Sheets, Airtable, or Notion. Automate content creation and distribution.
                    <span className="font-semibold text-purple-600"> Publish 5x more content</span> with zero extra
                    effort.
                  </p>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold">Global Reach, Local Impact</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Expand your reach while maintaining local relevance. Our geo-targeting features ensure your content
                resonates with audiences worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Smart Time Zones
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically post at optimal times for each region.
                    <span className="font-semibold text-blue-600"> Reach global audiences</span> when they're most
                    active.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Multi-Language Support
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Create campaigns in multiple languages with automated translation and localization.
                    <span className="font-semibold text-green-600"> Expand to new markets</span> effortlessly.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Local Hashtags
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically include region-specific hashtags and trending topics.
                    <span className="font-semibold text-purple-600"> Boost local discovery</span> by 200%.
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
                    Cultural Adaptation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Adapt content for local holidays, events, and cultural preferences.
                    <span className="font-semibold text-orange-600"> Increase engagement</span> with relevant content.
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
              <h2 className="text-3xl md:text-4xl font-bold">Perfect for Growing Businesses</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Whether you're a solo entrepreneur or managing multiple brands, our automation scales with your needs
                and delivers measurable results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Local Businesses",
                  description: "Stay consistent without full-time social media staff",
                  benefit: "Save $3,000+ monthly on hiring",
                  icon: Users,
                },
                {
                  title: "Digital Agencies",
                  description: "Manage multiple clients efficiently from one dashboard",
                  benefit: "Handle 5x more clients",
                  icon: Target,
                },
                {
                  title: "eCommerce Brands",
                  description: "Run cross-platform campaigns that drive sales",
                  benefit: "Increase online sales by 150%",
                  icon: TrendingUp,
                },
                {
                  title: "Content Creators",
                  description: "Scale your output and grow your audience faster",
                  benefit: "Grow following 3x faster",
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
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Awwtomation?</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We don't just provide tools - we deliver complete automation solutions that transform how you manage
                social media and grow your business.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Custom Automation Workflows",
                  description: "Tailored solutions that fit your unique business needs and goals",
                  benefit: "ROI of 500%+ within 3 months",
                  icon: Cog,
                },
                {
                  title: "Powered by Advanced Technology",
                  description: "Built on n8n for maximum flexibility and control over your automations",
                  benefit: "99.9% uptime guarantee",
                  icon: Zap,
                },
                {
                  title: "Transparent Pricing",
                  description: "No hidden fees, no surprises - just clear, honest pricing that scales with you",
                  benefit: "Save 70% vs hiring staff",
                  icon: Target,
                },
                {
                  title: "Expert Support & Training",
                  description: "Ongoing consultations and support to maximize your automation success",
                  benefit: "24/7 expert assistance",
                  icon: Users,
                },
                {
                  title: "Scalable for Any Business",
                  description: "From startups to enterprises - our solutions grow with your business",
                  benefit: "Handle unlimited growth",
                  icon: TrendingUp,
                },
                {
                  title: "Global Reach, Local Impact",
                  description: "Geo-targeted scheduling and localization for worldwide audience engagement",
                  benefit: "Expand to new markets 10x faster",
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
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/awwtomation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://youtube.com/@Awwtomation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Youtube className="h-5 w-5" />
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
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      CRM Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      SEO Automation
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
                <Link href="#" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-foreground">
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
