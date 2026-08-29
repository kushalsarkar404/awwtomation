"use client"

import { CalModal } from "@/components/cal-modal"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Alert,AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card"
import {
Calendar,
ChevronRight,
Database,
Eye,
Globe,
Lock,
Settings,
Shield,
UserCheck
} from "lucide-react"
import Link from "next/link"
import { useEffect,useRef,useState } from "react"

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
    <div className="content-page flex min-h-[100dvh] flex-col bg-[#050505] text-white">
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
      <section className="w-full border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.2),transparent_55%)] px-4 pb-20 pt-32 md:px-12 md:pt-40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="mx-auto flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-200">
            <span className="h-px w-8 bg-violet-300/70" aria-hidden="true" />
            Privacy & Data Protection
          </p>

          <div className="flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-violet-300" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Privacy Policy
            </h1>
          </div>

          <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
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
      <SiteFooter />

      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
