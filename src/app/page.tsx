"use client"
import { useState } from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Code, Cog, Instagram, Linkedin, NotebookPen, SquareChartGantt } from "lucide-react"
import { CalModal } from "@/components/cal-modal"

import { ParallaxMouse } from "@/components/parallax-mouse"


export default function LandingPage() {
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  return(
    <ParallaxProvider>
      <div className="flex min-h-[100dvh] flex-col px-4 md:px-12">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
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
              </div>
            </div>

            <nav className="hidden md:flex gap-6">
              <Link href="#services" className="text-sm font-medium hover:text-primary">
                Services
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">
                Pricing
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
            <Button size="lg" onClick={() => {
  setSelectedCalLink("awwtomation/awwtomation-consultation?layout=mobile")
  setCalModalOpen(true)
}}>
            Automate Now
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Parallax speed={-20} className="w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-10"></div>
                <div className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
              </Parallax>
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Parallax speed={-15} className="absolute -top-20 -left-20">
                  <div className="w-40 h-40 rounded-full bg-muted blur-3xl"></div>
                </Parallax>
                <Parallax speed={-10} className="absolute top-1/3 -right-20">
                  <div className="w-60 h-60 rounded-full bg-muted blur-3xl"></div>
                </Parallax>
                <Parallax speed={-20} className="absolute -bottom-20 left-1/4">
                  <div className="w-40 h-40 rounded-full bg-muted blur-3xl"></div>
                </Parallax>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <Parallax speed={25} className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      We Save You Time. You Make More Money!
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Streamline your business operations with automation and boost your profits effortlessly. Book a
                      free consultation today to discover how we can save you time and scale your growth.
                    </p>
                  </Parallax>
                  <Parallax speed={15} className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={() => {
  setSelectedCalLink("awwtomation/awwtomation-consultation?layout=mobile")
  setCalModalOpen(true)
}}>
            Automate Your Process Now
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
                    <Button variant="outline" size="lg">
                    Not Now? Message Us 
                    </Button>
                  </Parallax>
                </div>
                <Parallax speed={-10} className="mx-auto lg:order-last">
                  <ParallaxMouse speed={0.02}>
                    <Image
                      src="/hero-image.png"
                      width={550}
                      height={550}
                      alt="Business Process Automation"
                      className="object-contain"
                    />
                  </ParallaxMouse>
                </Parallax>
              </div>
            </div>
          </section>

          {/*tools marquee*/}
          {/* Tools Marquee */}
          <section className="w-full py-8 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <p className="text-sm text-muted-foreground">TRUSTED BY BUSINESSES USING</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                  {["HubSpot", "Zoho", "Pipedrive", "Calendly", "Google", "Notion", "Airtable"].map((tool, index) => (
                    <ParallaxMouse key={tool} speed={0.01 * (index + 1)}>
                      <div className="flex items-center justify-center">
                        <p className="text-xl font-semibold text-muted-foreground/70">{tool}</p>
                      </div>
                    </ParallaxMouse>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Automate What Matters Most</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We help all size businesses automate time-consuming business processes — so you can focus on scaling
                    instead of juggling tools.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Parallax speed={25} className="mx-auto">
                  <Image
                    src="/happy-people.png"
                    width={550}
                    height={550}
                    alt="Automation Services"
                    className="object-contain sm:w-full"
                  />
                </Parallax>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Cog className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">CRM Automation</h3>
                        <p className="text-muted-foreground">
                          Autamated Lead Capture/ Nurture; Integrate Data to Your CRM From Any App; Build Custom Workflows For Your Requirements
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <SquareChartGantt className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Social Planner</h3>
                        <p className="text-muted-foreground">
                        Schedule Post Across Any Social Platform; Automated Content Generation & Detailed Analytics Dashboard.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">SEO Automation</h3>
                        <p className="text-muted-foreground">
                          Query/ Pages Rank Tracking, Automated Comprehensive SEO Reporting & Customized Reporting Dashboard.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <NotebookPen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Blog Agent</h3>
                        <p className="text-muted-foreground">
                        Automated SEO Optimized / Humanized Blogs; Publish Directly to Your CMS & Analytics Reporting Dashboard.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

{/* Pricing Section */}
<section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Pricing</div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Simple pricing designed for long-term growth
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We build lasting systems for your business. Start simple, grow with automation.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
      {[
        {
          name: "Creator Plan",
          description: "Designed for Influencers, Content Creators, Bloggers, and Writers",
          features: [
            "Automated content generation",
            "Social media planning and scheduling",
            "SEO-optimized blog creation",
          ],
          cta: "Looking to scale your content with ease?",
          popular: false,
          calLink: "awwtomation/creator-initial-consultation",
        },
        {
          name: "Small and Medium-sized Business",
          description: "Designed for E-commerce Stores, Marketing/SEO Agencies, Local Businesses",
          features: [
            "Email marketing automation",
            "Marketing and SEO process automation",
            "Client engagement workflows",
          ],
          cta: "Ready to streamline and grow your business?",
          popular: true,
          calLink: "awwtomation/smb-awwtomation-consultation",
        },
        {
          name: "Enterprise Plan",
          description: "Designed for Large Organizations and Teams with Complex Workflow Needs",
          features: [
            "Fully tailored workflow automation",
            "Advanced integration and analytics",
            "High-priority support and dedicated onboarding",
          ],
          cta: "Looking for enterprise-grade automation at scale?",
          popular: false,
          calLink: "awwtomation/enterprise-awwtomation-consultation",
        },
      ].map((plan, i) => (
        <Parallax key={i} speed={5 + i * 5} className="flex">
          <Card className={`relative w-full h-full flex flex-col justify-between ${plan.popular ? "border-primary" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground z-10">
                Most Popular
              </div>
            )}
            <CardHeader className="flex flex-col items-center justify-center space-y-2 text-center">
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4">
              <ul className="space-y-2 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3 items-center text-center">
              <p className="font-medium">{plan.cta}</p>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => {
                  setSelectedCalLink(plan.calLink)
                  setCalModalOpen(true)
                  console.log(selectedCalLink)
                }}
              >
                Get a Quote
              </Button>
            </CardFooter>
          </Card>
        </Parallax>
      ))}
    </div>
  </div>
</section>



          {/* Testimonials Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Parallax speed={-13}>
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
                <div className="w-full h-full opacity-10">
                  <div className="absolute -top-20 -left-20 w-80 h-80 bg-muted rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 -right-20 w-80 h-80 bg-muted rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-muted rounded-full blur-3xl"></div>
                </div>
              </Parallax>
            </div>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from businesses that have transformed their operations with our automation solutions.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote:
                      "Awwtomation saved us 15+ hours per week on CRM updates alone. Our sales team can focus on closing deals instead of data entry.",
                    author: "Sarah Johnson",
                    position: "Sales Director, TechCorp",
                  },
                  {
                    quote:
                      "The custom dashboard they built pulls data from 5 different platforms. I finally have a single source of truth for all our metrics.",
                    author: "Michael Chen",
                    position: "Marketing Manager, GrowthBrand",
                  },
                  {
                    quote:
                      "Their appointment workflow automation eliminated double-bookings and reduced no-shows by 35%. Worth every penny.",
                    author: "Jessica Williams",
                    position: "Founder, ConsultCo",
                  },
                ].map((testimonial, i) => (
                  <Card key={i} className="text-left">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{testimonial.quote}</p>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Parallax speed={-10}>
                <div className="w-full h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/90 to-background"></div>
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/50 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/50 rounded-full blur-3xl"></div>
                </div>
              </Parallax>
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Parallax speed={5} className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to save time and multiply your profits?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Book an appointment with our automation experts today and discover how we can transform your
                    business processes.
                  </p>
                </Parallax>
                <Parallax speed={10} className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" onClick={() => {
  setSelectedCalLink("awwtomation/awwtomation-consultation?layout=mobile")
  setCalModalOpen(true)
}}>
            Book an Appointment
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
                </Parallax>
                <p className="text-xs text-muted-foreground">Free consultation. No obligation.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Parallax speed={-5}>
                <div className="w-full h-full">
                  <div className="absolute top-1/3 -left-20 w-80 h-80 bg-muted/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-muted/30 rounded-full blur-3xl"></div>
                </div>
              </Parallax>
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get answers to common questions about our automation services.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-3xl gap-6 py-12">
                {[
                  {
                    question: "How long does it take to implement automation?",
                    answer:
                      "Most starter automations can be implemented within 1-2 weeks. More complex custom solutions typically take 3-4 weeks, depending on the number of integrations and complexity of your workflows.",
                  },
                  {
                    question: "Do I need technical knowledge to use the automations?",
                    answer:
                      "No technical knowledge is required. We build user-friendly systems and provide comprehensive training and documentation. Our goal is to make automation accessible to everyone on your team.",
                  },
                  {
                    question: "What if I need changes after implementation?",
                    answer:
                      "We offer ongoing support packages to maintain and update your automations as your business evolves. The first month of support is included with every project.",
                  },
                  {
                    question: "Which tools and platforms do you work with?",
                    answer:
                      "We work with most popular business tools including HubSpot, Zoho, Pipedrive, Calendly, Google Workspace, Notion, Airtable, Zapier, Make (Integromat), and many more. If you use a specific tool, just ask!",
                  },
                ].map((faq, i) => (
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
        </main>

        {/* Footer */}
        <footer className="w-full border-t py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
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
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      CRM Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Appointment Workflow
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      SEO Reporting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Custom Dashboards
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
