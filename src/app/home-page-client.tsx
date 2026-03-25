"use client"
import { useState } from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Code, Cog, Mail, NotebookPen, SquareChartGantt } from "lucide-react"
import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
// import RealEstateBanner from "@/components/real-estate-banner"
import { ParallaxMouse } from "@/components/parallax-mouse"
import TrustpilotCollector from "@/components/TrustPilotCollector"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs"
import { homePageSeo } from "@/lib/seo"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function LandingPage() {
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  // const [bannerVisible, setBannerVisible] = useState(true) // <- default true

  return(
    <ParallaxProvider>
     <div className="flex min-h-[100dvh] flex-col transition-all duration-300">
      <>
    {/* Real Estate Feature Banner */}
    {/* <RealEstateBanner position="top" setVisible={setBannerVisible} /> */}

        <SiteHeader
          onPrimaryCta={() => {
            setSelectedCalLink("awwtomation/awwtomation-consultation")
            setCalModalOpen(true)
          }}
        />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full pt-24 pb-16 md:pt-28 md:pb-12 lg:pt-32 lg:pb-24 xl:pt-40 xl:pb-32 relative overflow-hidden">

            
  {/* Background Blur Layers */}
  <div className="absolute inset-0 z-0">
    <Parallax speed={-20} className="w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-10"></div>
      {/* Removed broken background URL */}
      <div className="w-full h-full bg-background"></div>
    </Parallax>
  </div>
  
  {/* Decorative Parallax Blurs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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

  {/* Main Hero Content */}
  <div className="container px-4 md:px-6 relative z-20">
    
  <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">

      {/* Text Block */}
      <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
        <Parallax speed={25} className="space-y-2">
          <PageBreadcrumbs
            items={[{ name: "Home", href: "/" }]}
            className="mb-4 flex justify-center lg:justify-start"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            {homePageSeo.heroTitle}
          </h1>
          <p className="max-w-xl text-muted-foreground md:text-xl mx-auto lg:mx-0">
            {homePageSeo.heroDescription}
          </p>
        </Parallax>

        <Parallax speed={15} className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
          <Button size="lg" className=" hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"onClick={() => {
            setSelectedCalLink("awwtomation/awwtomation-consultation")
            setCalModalOpen(true)
          }}>
            Automate Your Process Now
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => setMessageModalOpen(true)}>
            Not Now? Message Us
          </Button>
   
        </Parallax>

      </div>

      {/* Hero Image */}
      {/* Hero Image */}
      {/* Hero Image — Hidden on mobile */}
      <div className="hidden sm:flex justify-center w-full">
  <Parallax speed={0}>
    <ParallaxMouse speed={0.01}>
      <Image
        src="/hero-image.png"
        alt="Business Process Automation"
        width={550}
        height={550}
        className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
    </ParallaxMouse>
  </Parallax>
</div>

    </div>
  </div>
</section>



          {/*tools marquee*/}
          {/* Tools Marquee */}
          <section className="w-full py-8 bg-muted/50">
          
  <div className="container px-4 md:px-6">
  <section className="mb-8 mt-8">
        <TrustpilotCollector />
      </section>
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <p className="text-sm text-muted-foreground">TRUSTED BY BUSINESSES USING</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
        {["HubSpot", "Zoho", "Pipedrive", "Calendly", "Google", "Notion", "Airtable", "HighLevel"].map((tool) => (
          <ParallaxMouse key={tool} speed={0.01 * (1)}>
            <div className="flex items-center justify-center w-24 h-10">
              <Image
                src={`/${tool}.png`}
                alt={`${tool} logo`}
                width={192*2}
                height={80*2}
                className="object-contain"
              />
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Business Automation Services Built Around Your Highest-Value Workflows
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We help growing businesses automate CRM, SEO, social media, blog publishing, email marketing, and
                    customer support workflows so teams can spend less time on coordination and more time on growth.
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
                          Automated Lead Capture / Nurture.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <SquareChartGantt className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Social Media Automation</h3>
                        <p className="text-muted-foreground">
                        Automated Content Generation & Analytics Dashboard.
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
                        Automated Comprehensive SEO Reporting.
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
                        Automated SEO Optimized / Humanized Blogs.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Email Marketing Automation</h3>
                        <p className="text-muted-foreground">
                        Automated Campaigns, Segmentation, and Personalization.
                        </p>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <LinkCardSection
            eyebrow="Resources"
            title="Research the Systems Behind Stronger Automation"
            description="These supporting pages strengthen the core business automation topics we want the homepage to rank for and give visitors clearer next steps."
            links={homePageSeo.relatedResources}
          />

{/* Pricing Section */}
<section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Pricing</div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Business Automation Pricing Plans That Scale With Your Growth
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
                  <section className="mb-8 mt-8">
        <TrustpilotCollector />
      </section>
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
                      "Awwtomation saved us $3,000/mo and 15+ hrs/week by automating our whole hotel booking and order system. Our other staffs can focus on other priorities.",
                    author: "Yam Bhd. Khatri",
                    position: "Owner, Kathmandu Kitchen- JAPAN",
                  },
                  {
                    quote:
                      "The custom dashboard they built pulls data from multiple platforms. I finally have a single source of truth for all our metrics.",
                    author: "Prajwal Adhikari",
                    position: "Founder, RoomieNow",
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
                  Get Free Business Automation Consultation
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Book an appointment with our automation experts today and discover how we can transform your
                    business processes.
                  </p>
                </Parallax>
                <Parallax speed={10} className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className=" hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => {
  setSelectedCalLink("awwtomation/awwtomation-consultation")
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
                {homePageSeo.faqs.map((faq, i) => (
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



        <SiteFooter />
        <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
        <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
        </>
      </div>
      
    </ParallaxProvider>

  )
}
