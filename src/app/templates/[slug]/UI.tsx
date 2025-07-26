"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TemplateDetailHero } from "@/components/template-detail-hero"
import { TemplateInfoPanel } from "@/components/template-info-panel"
import { SampleOutputModal } from "@/components/sample-output-modal"
import { getTemplateBySlug } from "@/lib/template-utils"
import { ChevronRight, Code, Cog, Mail, NotebookPen, SquareChartGantt, Menu, X, Headphones } from "lucide-react"
import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import { useState, useRef, useEffect } from "react"

interface TemplateDetailPageProps {
  slug: string
}

export default function TemplateDetailPage({ slug }: TemplateDetailPageProps) {
  const template = getTemplateBySlug(slug)
  const menuRef = useRef(null)
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
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

  if (!template) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Template Not Found</h1>
        <p className="text-muted-foreground mb-8">The automation template you are looking for does not exist.</p>
        <Link href="/templates">
          <Button>Back to Templates</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-[100dvh] flex-col px-4 md:px-12 transition-all duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
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
              <Link href="/services" className="group flex gap-4">
                  Services
                  </Link>
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
                  {/* Customer Support Automation */}
                  <Link
                    href="/services/customer-support-automation"
                    className="group flex gap-4 hover:bg-gray-50 p-3 rounded-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                      <Headphones className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Customer Support Automation</div>
                      <p className="text-sm text-gray-500">AI chatbots, smart routing & 24/7 support</p>
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
            <Link href="/templates" className="text-sm font-medium hover:text-primary">
              Free Automation Templates
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
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
                <Link href="/services/email-marketing-automation" className="block font-medium text-gray-700">
                  Email Marketing Automation
                </Link>
                <Link href="/services/customer-support-automation" className="block font-medium text-gray-700">
                  Customer Support Automation
                </Link>
                <Link href="/blog" className="block font-medium text-gray-700">
                  Blog
                </Link>
                <Link href="/#pricing" className="block text-gray-700">
                  Pricing
                </Link>
                <Link href="/#contact" className="block text-gray-700">
                  Contact
                </Link>
                <Link href="/about" className="block text-gray-700">
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
                  Automate Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <TemplateDetailHero template={template} />

        <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://links.tdacrm.com.au/widget/form/wsay1vThv8lpkuAfvJ3u?platform=n8n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Download Now (n8n)
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              
              <Button
                size="lg"
                variant="outline"
                disabled
                className="w-full sm:w-auto bg-gray-200 text-gray-500 cursor-not-allowed"
              >
                Coming Soon (Make.com)
              </Button>
            </div>

            {/* Info Panel */}
            <div className="mb-12">
              <TemplateInfoPanel template={template} />
            </div>

            {/* Description Section */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Introduction to {template.title}</h2>
              <p className="text-muted-foreground text-lg">{template.introduction}</p>

              <h3 className="text-2xl font-bold tracking-tighter">Workflow Description: {template.title}</h3>
              <p className="text-muted-foreground text-lg">{template.workflowDescription}</p>

              <h3 className="text-2xl font-bold tracking-tighter">Difficulty: {template.difficulty}</h3>
              <p className="text-muted-foreground text-lg">
                This template is designed for users with {template.difficulty === "Beginner" ? "no" : "some"}{" "}
                familiarity with automation platforms.{" "}
                {template.difficulty === "Intermediate"
                  ? "Connecting your GA4 and GSC accounts is straightforward, but customizing the AI processing or PDF report generation may require a basic understanding of workflow logic. Comprehensive documentation is provided to guide you through advanced configurations, making automated SEO reports accessible with a moderate learning curve."
                  : "Comprehensive documentation is provided to guide you through advanced configurations."}
              </p>
            </div>

            {/* Benefits & ROI Section */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Benefits and ROI of {template.title}</h2>
              <ul className="grid gap-4 text-lg text-muted-foreground">
                {template.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold tracking-tighter">Beyond the Demo: Unleash Full Potential</h3>
              <p className="text-muted-foreground text-lg">
                This template is a powerful starting point for automated SEO reports. It&apos;s highly extensible, allowing
                for custom reporting, automated alerts, advanced data visualization, and even automated action
                triggers. This solution evolves with your SEO strategy, offering a fully customized reporting
                automation experience.
              </p>
            </div>

            {/* Sample Output Section */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Sample Output</h2>
              <p className="text-muted-foreground text-lg">
                Get a clear preview of what you can expect from this automation template.
              </p>
              <SampleOutputModal sampleOutputUrl={template.sampleOutputUrl} />
            </div>

            {/* Tags Section */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Relevant Tags</h2>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/templates?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold transition-colors hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
