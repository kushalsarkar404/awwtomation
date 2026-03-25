"use client"

import { CalModal } from "@/components/cal-modal"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Alert,AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card"
import {
AlertCircle,
Calendar,
ChevronRight,
FileText,
Shield
} from "lucide-react"
import Link from "next/link"
import { useEffect,useRef,useState } from "react"

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
      <SiteFooter />

      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
