"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalModal } from "@/components/cal-modal"
import {
  Mail,
  ChevronRight,
  X,
  Menu,
  Cog,
  NotebookPen,
  SquareGanttChartIcon as SquareChartGantt,
  Code,
  FileText,
  Calendar,
  Shield,
  AlertCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TermsPage() {
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
                <Link href="/blog" className="block font-medium text-gray-700">Blog</Link>
                <Link href="#pricing" className="block text-gray-700">
                  Pricing
                </Link>
                <Link href="#contact" className="block text-gray-700">
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
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
            Agreement Information
          </Badge>

          <div className="flex items-center justify-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Terms and Conditions
            </h1>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services. By accessing or using our
            services, you agree to be bound by these terms.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: June 28, 2025</span>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <strong>Important:</strong> These Terms and Conditions constitute a strong binding agreement between you
              and Awwtomation. If you disagree with any part of these terms, then you may not access our website or use
              our services.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Table of Contents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <Link href="#acceptance" className="text-blue-600 hover:text-blue-800 hover:underline">
                  1. Acceptance of Terms
                </Link>
                <Link href="#services" className="text-blue-600 hover:text-blue-800 hover:underline">
                  2. Services Provided
                </Link>
                <Link href="#responsibilities" className="text-blue-600 hover:text-blue-800 hover:underline">
                  3. Client Responsibilities
                </Link>
                <Link href="#payment" className="text-blue-600 hover:text-blue-800 hover:underline">
                  4. Fees and Payment
                </Link>
                <Link href="#intellectual" className="text-blue-600 hover:text-blue-800 hover:underline">
                  5. Intellectual Property
                </Link>
                <Link href="#confidentiality" className="text-blue-600 hover:text-blue-800 hover:underline">
                  6. Confidentiality
                </Link>
                <Link href="#warranties" className="text-blue-600 hover:text-blue-800 hover:underline">
                  7. Disclaimer of Warranties
                </Link>
                <Link href="#liability" className="text-blue-600 hover:text-blue-800 hover:underline">
                  8. Limitation of Liability
                </Link>
                <Link href="#indemnification" className="text-blue-600 hover:text-blue-800 hover:underline">
                  9. Indemnification
                </Link>
                <Link href="#termination" className="text-blue-600 hover:text-blue-800 hover:underline">
                  10. Termination
                </Link>
                <Link href="#changes" className="text-blue-600 hover:text-blue-800 hover:underline">
                  11. Changes to Terms
                </Link>
                <Link href="#contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                  12. Contact Us
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              These Terms and Conditions govern your access to and use of the website{" "}
              <Link href="https://www.awwtomation.com" className="text-blue-600 hover:underline">
                https://www.awwtomation.com
              </Link>{" "}
              the Site and the automation services provided by Awwtomation.
            </p>
            <p className="text-lg leading-relaxed">
              By accessing or using the Site and our Services, you agree to be bound by these Terms. If you disagree
              with any part of the Terms, then you may not access the Site or use our Services.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <Card id="acceptance">
              <CardHeader>
                <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  By accessing the Site or using any of our Services, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms, as well as our Privacy Policy. These Terms constitute a strong
                  binding agreement between you and Awwtomation.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card id="services">
              <CardHeader>
                <CardTitle className="text-xl">2. Services Provided</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Awwtomation provides various business automation services, including but not limited to: blog
                  automation, CRM automation, SEO automation, and social media automation. The specific details, scope,
                  and pricing of the services will be outlined in a separate proposal, statement of work, or service
                  agreement entered into between Awwtomation and the client.
                </p>
                <p>
                  In the event of any conflict between these Terms and a Service Agreement, the terms of the Service
                  Agreement shall prevail.
                </p>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card id="responsibilities">
              <CardHeader>
                <CardTitle className="text-xl">3. Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>As a client of Awwtomation, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide accurate, complete, and current information as required for the provision of Services.
                  </li>
                  <li>
                    Cooperate with Awwtomation in a timely manner by providing necessary access, materials, information,
                    and approvals required for the performance of the Services.
                  </li>
                  <li>
                    Ensure that all data, content, and materials provided to Awwtomation comply with applicable laws and
                    do not infringe upon the rights of any third party.
                  </li>
                  <li>
                    Maintain the confidentiality of your account credentials and be responsible for all activities that
                    occur under your account.
                  </li>
                  <li>Comply with all applicable laws and regulations in your use of our Services.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card id="payment">
              <CardHeader>
                <CardTitle className="text-xl">4. Fees and Payment</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Pricing:</h4>
                    <p>
                      Fees for our Services will be detailed during the consultation for respective Service Agreement.
                      Prices are subject to change upon notice from Awwtomation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Payment Terms:</h4>
                    <p>
                      Unless otherwise specified in the Service Agreement, payments are due upon receipt of the invoice.
                      We accept various payment methods as indicated on our invoices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Taxes:</h4>
                    <p>
                      All fees are exclusive of any applicable taxes, duties, or charges imposed by governmental
                      authorities, which shall be your responsibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card id="intellectual">
              <CardHeader>
                <CardTitle className="text-xl">5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Our Content:</h4>
                    <p>
                      You may not use, reproduce, distribute, or create derivative works from our content without our
                      express written permission.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Client Content:</h4>
                    <p>
                      You retain all ownership rights to the data, content, and materials you provide to us for the
                      purpose of our Services. You grant Awwtomation a limited, non-exclusive, royalty-free license to
                      use, reproduce, and modify your content solely for the purpose of providing the Services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Deliverables:</h4>
                    <p>
                      Unless otherwise specified in the Service Agreement, any deliverables created by Awwtomation for
                      you as part of the Services will be owned by you upon full payment for such Services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card id="confidentiality">
              <CardHeader>
                <CardTitle className="text-xl">6. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Both parties agree to keep confidential all non-public information disclosed by the other party during
                  the course of their engagement, including but not limited to business plans, technical data, and
                  client information. This obligation of confidentiality shall survive the termination of these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card id="warranties">
              <CardHeader>
                <CardTitle className="text-xl">7. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Our Site and Services are provided on an &apos;as is&apos; and &apos;as available&apos; basis, without any warranties of
                  any kind, either express or implied, including but not limited to implied warranties of
                  merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                  Awwtomation does not warrant that the Services will be uninterrupted, secure, or error-free.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card id="liability">
              <CardHeader>
                <CardTitle className="text-xl">8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  In no event shall Awwtomation, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your access to or use of or inability to access or use the Service.</li>
                  <li>any conduct or content of any third party on the Service.</li>
                  <li>any content obtained from the Service.</li>
                  <li>
                    unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
                    contract, tort (including negligence), or any other legal theory, whether or not we have been
                    informed of the possibility of such damage, and even if a remedy set forth herein is found to have
                    failed of its essential purpose.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card id="indemnification">
              <CardHeader>
                <CardTitle className="text-xl">9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  You agree to defend, indemnify, and hold harmless Awwtomation and its licensees and licensors, and
                  their employees, contractors, agents, officers, and directors, from and against any and all claims,
                  damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to
                  attorney&apos;s fees), resulting from or arising out of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your use and access of the Service, by you or any person using your account and password</li>
                  <li>a breach of these Terms</li>
                  <li>content posted by you on the Service.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card id="termination">
              <CardHeader>
                <CardTitle className="text-xl">10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior
                  notice or liability, under our sole discretion, for any reason whatsoever and without limitation,
                  including but not limited to a breach of the Terms. If you wish to terminate your account, you may
                  simply discontinue using the Service.
                </p>
              </CardContent>
            </Card>

            {/* Section 11 */}
            <Card id="changes">
              <CardHeader>
                <CardTitle className="text-xl">11. Changes to Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
                  What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound
                  by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the
                  Service.
                </p>
              </CardContent>
            </Card>

            {/* Section 12 */}
            <Card id="contact">
              <CardHeader>
                <CardTitle className="text-xl">12. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    By email:{" "}
                    <Link href="mailto:contact@awwtomation.com" className="text-blue-600 hover:underline">
                      contact@awwtomation.com
                    </Link>
                  </li>
                  <li>
                    By visiting this page on our website:{" "}
                    <Link href="https://www.awwtomation.com" className="text-blue-600 hover:underline">
                      https://www.awwtomation.com
                    </Link>
                  </li>
                  <li>By sending a message to us in the live chat. (We use Crispchat for our online chat support)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <Shield className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold">Questions About Our Terms?</h3>
                <p className="text-muted-foreground">
                  Our team is here to help clarify any questions you may have about our terms and conditions.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCalLink("awwtomation/awwtomation-consultation")
                    setCalModalOpen(true)
                  }}
                  className="hover:bg-blue-700"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
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
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:contact@awwtomation.com" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
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
  )
}
