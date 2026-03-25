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
Bell,
Bot,
Calendar,
CheckCircle,
ChevronRight,
ClipboardList,
Clock,
Database,
DollarSign,
Globe,
Headphones,
Lightbulb,
MessageCircle,
Mic,
Phone,
PhoneCall,
RefreshCw,
Search,
Settings,
Shield,
Star,
Target,
Timer,
TrendingUp,
UserCheck,
Users,
Workflow,
Zap
} from "lucide-react"
import { useEffect,useRef,useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export default function CustomerSupportAutomationPage() {
  const serviceSeo = serviceDefinitions["customer-support-automation"]
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
        <section className="w-full min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="hidden sm:flex justify-center w-full">
            {/* Floating Customer Support Icons */}
            <div className="absolute inset-0 z-0">
              {/* Headphones */}
              <div className="absolute floating-logo floating-logo-1" style={{ top: "15%", left: "10%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Headphones className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              {/* Chat/Message */}
              <div className="absolute floating-logo floating-logo-2" style={{ top: "25%", right: "15%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              {/* Phone Support */}
              <div className="absolute floating-logo floating-logo-3" style={{ top: "60%", left: "8%" }}>
                <div className="w-11 h-11 md:w-15 md:h-15 bg-green-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Phone className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              {/* Bot/AI */}
              <div className="absolute floating-logo floating-logo-4" style={{ top: "40%", right: "8%" }}>
                <div className="w-13 h-13 md:w-17 md:h-17 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <Bot className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              {/* Calendar/Scheduling */}
              <div className="absolute floating-logo floating-logo-5" style={{ top: "70%", right: "20%" }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Calendar className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              {/* Clipboard/Forms */}
              <div className="absolute floating-logo floating-logo-6" style={{ top: "20%", left: "25%" }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
                  <ClipboardList className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              {/* Voice/Mic */}
              <div className="absolute floating-logo floating-logo-7" style={{ top: "50%", left: "20%" }}>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-red-500 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
                  <Mic className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              {/* Search/Knowledge */}
              <div className="absolute floating-logo floating-logo-8" style={{ top: "35%", left: "35%" }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg opacity-15 hover:opacity-35 transition-opacity">
                  <Search className="w-4 h-4 md:w-6 md:h-6 text-white" />
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
              Customer Support Automation Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              Customer Support Automation Service for AI Chatbots, Ticket Routing, and Self-Service
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We design customer service automation that resolves repetitive questions, routes tickets to the right
              team, and keeps humans in the loop for complex issues. Every rollout connects your help desk, CRM,
              knowledge base, and reporting so the system is useful on day one.
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
                Book a Workflow Audit <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Pair this service with{" "}
              <Link href="/services/crm-automation" className="font-semibold text-teal-700 hover:underline">
                CRM Automation
              </Link>
              ,{" "}
              <Link href="/services/email-marketing-automation" className="font-semibold text-teal-700 hover:underline">
                Email Marketing Automation
              </Link>
              , and{" "}
              <Link href="/blog/best-live-chat-software-for-businesses" className="font-semibold text-teal-700 hover:underline">
                Best Live Chat Software for Businesses
              </Link>{" "}
              when you want support, lifecycle messaging, and channel routing to work from the same customer record.
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

        {/* Why Customer Support Automation is a Game-Changer */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why Customer Support Automation Works</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              The goal is not to replace support. It is to automate the repetitive work first, shorten response times,
              and give agents better context when a conversation needs a human. That is how customer support
              automation improves both speed and service quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Faster First Responses
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Deflect common questions immediately with chatbots, help-center search, and clear routing rules.
                    <span className="font-semibold text-blue-600"> Reduce wait time from the first touch</span> and
                    keep customers moving.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-red-700 transition-colors duration-300">
                    Lower Ticket Load
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automate triage, categorization, status updates, and repetitive follow-ups so your team handles
                    fewer low-value tickets.
                    <span className="font-semibold text-red-600"> Reserve human effort for exceptions</span> and edge
                    cases.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Always-On Coverage
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Support automation answers after-hours questions, captures contact details, and creates a clean
                    handoff when the issue needs a person.
                    <span className="font-semibold text-green-600"> Keep coverage consistent</span> across every
                    channel.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Measurable Service Quality
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Track first-response time, deflection rate, escalation quality, and CSAT so the program improves
                    with real data.
                    <span className="font-semibold text-purple-600"> Make support performance visible</span> instead
                    of guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversational AI & Intelligent Chatbots */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Customer Service Chatbots and AI Customer Service</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Deploy chatbots that answer FAQs, check order or account status, qualify requests, and hand off to an
                agent with context preserved. That makes customer service automation feel useful instead of generic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Instant Resolutions
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Answer FAQs, route by intent, and surface status updates in real time.
                    <span className="font-semibold text-blue-600"> Resolve routine questions faster</span> without
                    blocking the queue.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Natural Language Understanding
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Intent detection keeps the bot from forcing customers down a fixed menu.
                    <span className="font-semibold text-green-600"> Human-like interactions</span> that still stay
                    on-task.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Seamless Agent Handoff
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Complex issues transfer with the conversation history, customer details, and issue summary intact.
                    <span className="font-semibold text-purple-600"> No repeated context</span> for the customer.
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
                    Triage and Escalation
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Ask the right follow-up questions, route by issue type, and send urgent requests to the correct
                    queue.
                    <span className="font-semibold text-orange-600"> Turn support into a cleaner workflow</span>, not
                    just a chatbot demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automated Appointment Booking & Scheduling */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Support Triage, Scheduling, and Ticket Routing</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Automate the back-and-forth that slows support teams down: request intake, callback booking, queue
                assignment, SLA-aware routing, and follow-up reminders. This is where customer support automation
                starts to save time fast.
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
                    24/7 Self-Service
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Allow clients to book callbacks or service slots without waiting for a rep.
                    <span className="font-semibold text-teal-600"> Remove scheduling friction</span> from the support
                    queue.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <RefreshCw className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Real-Time Availability
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Shows your team&apos;s real-time availability, preventing double bookings.
                    <span className="font-semibold text-blue-600"> Always up-to-date</span> scheduling that works
                    seamlessly.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <Bell className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    Automated Reminders & Follow-ups
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Send reminders for callbacks, scheduled follow-ups, or document requests via the channel your
                    customers actually use.
                    <span className="font-semibold text-green-600"> Reduce missed follow-through</span> and repeated
                    outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Intake Forms & Data Capture */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Smart Intake Forms and Support Data Capture</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Replace inefficient paper or PDF forms with dynamic, digital intake forms that route requests to the
                right team, capture the right fields the first time, and eliminate manual re-entry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Timer className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Reduce Administrative Work
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automate the entire intake process from data capture to routing.
                    <span className="font-semibold text-orange-600"> Save 15+ hours weekly</span> on admin tasks.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Improved Data Accuracy
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Built-in validation ensures all necessary information is captured correctly.
                    <span className="font-semibold text-green-600"> 99% accuracy rate</span> with smart validation.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Seamless Integration
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Automatically sync with your CRM, help desk, or other business systems.
                    <span className="font-semibold text-blue-600"> Single source of truth</span> for customer data.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Enhanced Security and Compliance
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Built with security in mind, ensuring HIPAA and GDPR compliance.
                    <span className="font-semibold text-purple-600"> Bank-level security</span> for sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice AI & Interactive Voice Response (IVR) */}
        <section className="py-20 px-4 md:px-12 bg-muted/50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Voice AI and Automated Call Answering</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Modernize your phone support with Voice AI that understands spoken requests, answers common questions,
                verifies the issue, and routes callers to the right outcome without making them repeat themselves.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <PhoneCall className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-green-700 transition-colors duration-300">
                    24/7 Phone Support
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Offer round-the-clock assistance for account questions, order issues, and standard requests.
                    <span className="font-semibold text-green-600"> Never miss a call</span> with intelligent voice
                    automation.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Mic className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Natural Conversation Flow
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Advanced Voice AI understands complex queries and sentiment for natural conversations.
                    <span className="font-semibold text-blue-600"> Human-like interactions</span> that feel authentic.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <ArrowRight className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    Intelligent Call Routing
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automatically identify call reasons and route to the most appropriate agent or department.
                    <span className="font-semibold text-purple-600"> Reduce transfers by 80%</span> with smart routing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chat With Your Data */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Knowledge Base Chat and RAG Support Assistants</h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Give agents and customers a search layer over policies, docs, macros, and ticket history so answers
                come from your own content. This is the practical way to use RAG in customer support automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Instant Access to Information
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Ask questions in natural language and get answers grounded in your own documentation.
                    <span className="font-semibold text-blue-600"> Reduce manual searching</span> across help docs and
                    old tickets.
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
                    Reduced Training Time
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    New hires get the same answers as senior agents without memorizing every policy edge case.
                    <span className="font-semibold text-green-600"> Faster onboarding</span> and fewer internal pings.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Consistent Responses
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Keep answers aligned across chat, email, and voice so policy changes do not create conflicting
                    responses.
                    <span className="font-semibold text-purple-600"> Consistency across channels</span> is easier to
                    maintain.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Lightbulb className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    Identify Knowledge Gaps
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Log unanswered questions so your team sees where policies, macros, or docs need work.
                    <span className="font-semibold text-orange-600"> Continuous improvement</span> becomes part of the
                    support process.
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
              <h2 className="text-3xl md:text-4xl font-bold">Benefits and ROI of Customer Support Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We focus on the metrics support leaders actually care about: faster first response, lower cost per
                contact, cleaner ticket routing, better agent utilization, and higher CSAT.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors duration-300">
                    <DollarSign className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-red-700 transition-colors duration-300">
                    Lower Cost per Contact
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Automate repetitive questions and status updates so each live agent minute goes further.
                    <span className="font-semibold text-red-600"> Reduce wasted handling time</span> across every
                    channel.
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
                    Better Agent Utilization
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Route repetitive work away from your best agents and give them the issues that need judgment.
                    <span className="font-semibold text-green-600"> More time for complex cases</span> and retention
                    risk.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    24/7 Availability and Instant Responses
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Offer immediate support around the clock so customers do not wait for business hours.
                    <span className="font-semibold text-blue-600"> Capture demand the moment it appears</span>.
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
                    Improved First-Contact Resolution
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Clear routing and better knowledge retrieval reduce back-and-forth.
                    <span className="font-semibold text-purple-600"> Solve more issues on the first touch</span> and
                    cut repeat contacts.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    Better Cross-Team Handoffs
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Support can trigger CRM updates, follow-up tasks, and next-step notifications without manual copy
                    and paste.
                    <span className="font-semibold text-orange-600"> Keep context moving</span> between teams.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-8 rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    Data-Driven Insights
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    Collect data on repeat issues, unresolved intents, and handoff friction so the workflow gets better
                    over time.
                    <span className="font-semibold text-teal-600"> Build a support ops feedback loop</span> instead of
                    a black box.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Awwtomation */}
        <section className="py-20 px-4 md:px-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How We Implement Customer Support Automation</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We start with a workflow audit, map the intents that create the most volume, and design routing,
                knowledge, and escalation rules before anything goes live. That keeps the rollout grounded in real
                operations instead of generic chatbot demos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Workflow className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    Workflow Audit and Intent Mapping
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We review tickets, chat logs, and call reasons to see where automation will remove the most
                    friction.
                    <span className="font-semibold text-blue-600"> Start with the highest-volume intents</span> first.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Bot className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Systems Integration and Routing
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We connect your help desk, CRM, forms, calendars, and notifications so every handoff has the right
                    context.
                    <span className="font-semibold text-green-600"> Routing stays consistent</span> across the stack.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Settings className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    Knowledge Base and RAG Setup
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We shape the content source, fallback rules, and answer style so the assistant uses your approved
                    material.
                    <span className="font-semibold text-purple-600"> Grounded responses</span> are easier to trust.
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
                    QA, Governance, and Human Handoff
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We define what the bot can answer, when to escalate, and how to log failures for review.
                    <span className="font-semibold text-orange-600"> Safe rollouts</span> depend on clear boundaries.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    Monitoring and Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We review deflection, resolution, escalation, and satisfaction data after launch and tune the flow.
                    <span className="font-semibold text-teal-600"> Continuous improvement</span> is part of the service.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden border p-6 rounded-xl bg-background shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    Measured Rollout Plan
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Every implementation starts with target metrics so you can see whether the automation is actually
                    improving support.
                    <span className="font-semibold text-indigo-600"> Proof comes from the numbers</span>, not promises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LinkCardSection
          eyebrow="Related Resources"
          title="Related Services and Guides"
          description="Use these pages to shape your support stack, routing logic, CRM sync, and live-chat planning."
          links={serviceSeo.relatedResources}
        />

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <div className="absolute top-1/3 -left-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Teams usually ask how to automate customer support tickets, how to automate customer support
                  workflows, how automated call answering works, and whether RAG can help keep answers accurate.
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Automate Your Customer Support?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Stop letting manual tasks create bottlenecks and start delivering the fast, efficient, and personalized
              service your customers deserve. Transform your support operations with a workflow audit, routing plan,
              and implementation roadmap built around your real ticket volume.
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
                We&apos;ll audit your current support workflows and design a tailored automation roadmap to help you reduce
                costs, improve efficiency, and elevate your customer experience.
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
