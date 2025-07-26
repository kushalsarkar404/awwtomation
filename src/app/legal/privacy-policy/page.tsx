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
  Shield,
  Calendar,
  Eye,
  Lock,
  UserCheck,
  Database,
  Globe,
  Settings,
  Headphones
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PrivacyPage() {
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
                  <Link href="/templates" className="text-sm font-medium hover:text-primary">
                Free Automation Templates
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


      {/* Hero Section */}
      <section className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
            Privacy & Data Protection
          </Badge>

          <div className="flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal data. This policy
            explains how we collect, use, and safeguard your information when you use our services.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: June 28, 2025</span>
          </div>
        </div>
      </section>

      {/* GDPR Compliance Notice */}
      <section className="py-8 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Alert className="border-green-200 bg-green-50">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>GDPR Compliant:</strong> This privacy policy is designed to comply with the General Data
              Protection Regulation (GDPR) and other applicable data protection laws. We respect your privacy rights and
              provide clear information about how we handle your personal data.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Table of Contents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <Link href="#information-collect" className="text-blue-600 hover:text-blue-800 hover:underline">
                  1. Information We Collect
                </Link>
                <Link href="#how-we-use" className="text-blue-600 hover:text-blue-800 hover:underline">
                  2. How We Use Your Information
                </Link>
                <Link href="#how-we-share" className="text-blue-600 hover:text-blue-800 hover:underline">
                  3. How We Share Your Information
                </Link>
                <Link href="#data-security" className="text-blue-600 hover:text-blue-800 hover:underline">
                  4. Data Security
                </Link>
                <Link href="#data-retention" className="text-blue-600 hover:text-blue-800 hover:underline">
                  5. Data Retention
                </Link>
                <Link href="#your-rights" className="text-blue-600 hover:text-blue-800 hover:underline">
                  6. Your Data Protection Rights
                </Link>
                <Link href="#third-party" className="text-blue-600 hover:text-blue-800 hover:underline">
                  7. Third-Party Links
                </Link>
                <Link href="#children" className="text-blue-600 hover:text-blue-800 hover:underline">
                  8. Children&apos;s Privacy
                </Link>
                <Link href="#changes" className="text-blue-600 hover:text-blue-800 hover:underline">
                  9. Changes to This Policy
                </Link>
                <Link href="#contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                  10. Contact Us
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              This Privacy Policy describes how Awwtomation collects, uses, and discloses your
              information when you visit our website at{" "}
              <Link href="https://www.awwtomation.com" className="text-blue-600 hover:underline">
                https://www.awwtomation.com
              </Link>{" "}
              and use our automation services. We are committed to protecting your privacy and ensuring the security of
              your personal data.
            </p>
            <p className="text-lg leading-relaxed">
              By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do
              not agree with the terms, please do not access or use our services.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <Card id="information-collect">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-6">
                <p>
                  We may collect various types of information from and about users of our website and services,
                  including:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Personal Data</h4>
                    <p className="mb-3">
                      Personal Data refers to any information that can be used to identify you directly or indirectly.
                      This may include, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Contact Information:</strong> Name, email address, postal address, phone number.
                      </li>
                      <li>
                        <strong>Business Information:</strong> Company name, job title, industry, and details about your
                        business automation needs.
                      </li>
                      <li>
                        <strong>Payment Information:</strong> Details necessary for processing payments for our services
                        (e.g., credit card numbers, billing address). Please note that we use secure third-party payment
                        processors, and we do not store sensitive payment card details on our servers.
                      </li>
                      <li>
                        <strong>Communication Data:</strong> Information you provide when you communicate with us, such
                        as inquiries, feedback, or support requests via email, contact forms, or social media.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Non-Personal Data</h4>
                    <p className="mb-3">
                      Non-Personal Data refers to information that does not directly identify you. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Usage Data:</strong> Information about how you access and use our website and services,
                        such as your IP address, browser type, operating system, referring URLs, pages viewed, time
                        spent on pages, and clickstream data.
                      </li>
                      <li>
                        <strong>Technical Data:</strong> Information about the devices you use to access our website,
                        including hardware models, operating system versions, unique device identifiers, and mobile
                        network information.
                      </li>
                      <li>
                        <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking
                        technologies to collect information about your browsing activities, remember your preferences,
                        and enhance your user experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card id="how-we-use">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Providing and Managing Services:</strong> To deliver the automation services you request,
                    process transactions, manage your accounts, and provide customer support.
                  </li>
                  <li>
                    <strong>Communication:</strong> To respond to your inquiries, send you administrative information,
                    technical notices, updates, security alerts, and support messages.
                  </li>
                  <li>
                    <strong>Marketing and Promotion:</strong> To send you marketing communications, newsletters, and
                    promotional offers about our services that may be of interest to you. You can opt-out of these
                    communications at any time.
                  </li>
                  <li>
                    <strong>Improving Our Services:</strong> To analyze usage trends, monitor the effectiveness of our
                    marketing campaigns, personalize your experience, and improve the functionality and quality of our
                    website and services.
                  </li>
                  <li>
                    <strong>Security and Fraud Prevention:</strong> To detect, prevent, and address technical issues,
                    security incidents, and fraudulent activities.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, and
                    governmental requests.
                  </li>
                  <li>
                    <strong>Analytics:</strong> To perform data analysis, research, and reporting to understand our
                    audience and optimize our business operations.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card id="how-we-share">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  3. How We Share Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We may share your information with third parties in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> We engage trusted third-party service providers to perform
                    functions on our behalf, such as payment processing, website hosting, data analysis, marketing
                    assistance, customer service, and IT support.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization,
                    bankruptcy, or sale of all or a portion of our assets, your information may be transferred to the
                    acquiring entity.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or
                    in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Protection of Rights:</strong> We may disclose your information when we believe it is
                    necessary to investigate, prevent, or take action regarding potential violations of our policies,
                    suspected fraud, or situations involving potential threats to safety.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share your information with your consent or at your
                    direction.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card id="data-security">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                We implement reasonable technical and organizational measures designed to protect your personal data from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>

              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card id="data-retention">
              <CardHeader>
                <CardTitle className="text-xl">5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card id="your-rights">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  6. Your Data Protection Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Depending on your location and applicable data protection laws, you may have the following rights
                  regarding your personal data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold">Right to Access</h5>
                      <p className="text-sm">You have the right to request copies of your personal data.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Right to Rectification</h5>
                      <p className="text-sm">
                        You have the right to request that we correct any information you believe is inaccurate.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Right to Erasure</h5>
                      <p className="text-sm">
                        You have the right to request that we erase your personal data, under certain conditions.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Right to Restrict Processing</h5>
                      <p className="text-sm">
                        You have the right to request that we restrict the processing of your personal data.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold">Right to Object to Processing</h5>
                      <p className="text-sm">
                        You have the right to object to our processing of your personal data, under certain conditions.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Right to Data Portability</h5>
                      <p className="text-sm">
                        You have the right to request that we transfer your data to another organization.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Right to Withdraw Consent</h5>
                      <p className="text-sm">
                        Where we rely on your consent, you have the right to withdraw that consent at any time.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the contact details provided below.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card id="third-party">
              <CardHeader>
                <CardTitle className="text-xl">7. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Our website may contain links to third-party websites that are not operated by us. We have no control
                  over and assume no responsibility for the content, privacy policies, or practices of any third-party
                  sites or services. We strongly advise you to review the Privacy Policy of every site you visit.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card id="children">
              <CardHeader>
                <CardTitle className="text-xl">8. Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Our services are not intended for individuals under the age of 13. We do not knowingly collect
                  personally identifiable information from anyone under the age of 13. If you are a parent or guardian
                  and you are aware that your child has provided us with personal data, please contact us.
                </p>
                <p>
                  If we become aware that we have collected personal data from children without verification of parental
                  consent, we take steps to remove that information from our servers.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card id="changes">
              <CardHeader>
                <CardTitle className="text-xl">9. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the &apos;Last Updated&apos; date at the top of this Privacy
                  Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page. For material changes, we will provide at least
                  30 days&apos; notice prior to the changes taking effect.
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card id="contact">
              <CardHeader>
                <CardTitle className="text-xl">10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <Shield className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-semibold">Your Privacy Matters to Us</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to protecting your personal data and respecting your privacy rights. If you have any
                  questions or concerns about how we handle your information, don&apos;t hesitate to reach out.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCalLink("awwtomation/awwtomation-consultation")
                    setCalModalOpen(true)
                  }}
                  className="hover:bg-green-700 bg-green-600"
                >
                  Contact Us About Privacy
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
                    <Link href="/services/crm-automation" className="text-muted-foreground hover:text-foreground">
                      CRM Automation
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
                    <Link
                      href="/services/customer-support-automation"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Customer Support Automation
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
  )
}
