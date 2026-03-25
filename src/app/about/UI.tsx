"use client"

import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card,CardContent } from "@/components/ui/card"
import {
ChevronRight,
Code,
Cog,
ExternalLink,
Heart,
Lightbulb,
Linkedin,
Mail,
NotebookPen,
Rocket,
Shield,
SquareGanttChartIcon as SquareChartGantt,
Target,
TrendingUp,
Users,
Zap
} from "lucide-react"
import Link from "next/link"
import { useEffect,useRef,useState } from "react"
import { Parallax,ParallaxProvider } from "react-scroll-parallax"

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
        <SiteFooter />
               
        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      </div>
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </ParallaxProvider>
  )
}
