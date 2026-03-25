"use client"

import { CalModal } from "@/components/cal-modal"
import { MessageModal } from "@/components/message-modal"
import { SampleOutputModal } from "@/components/sample-output-modal"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplateDetailHero } from "@/components/template-detail-hero"
import { TemplateInfoPanel } from "@/components/template-info-panel"
import { Button } from "@/components/ui/button"
import { serviceDefinitions } from "@/lib/seo"
import { getTemplateBySlug } from "@/lib/template-utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect,useRef,useState } from "react"

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

  const templateContext = [template.title, template.category, ...template.tags].join(" ").toLowerCase()
  const relatedLinks = [
    /seo|analytics|report/.test(templateContext)
      ? {
          title: serviceDefinitions["seo-automation"].shortName,
          href: serviceDefinitions["seo-automation"].href,
          description: serviceDefinitions["seo-automation"].description,
          label: "Related service",
        }
      : null,
    /social|reddit|engagement/.test(templateContext)
      ? {
          title: serviceDefinitions["social-media-automation"].shortName,
          href: serviceDefinitions["social-media-automation"].href,
          description: serviceDefinitions["social-media-automation"].description,
          label: "Related service",
        }
      : null,
    {
      title: "Automation Services",
      href: "/services",
      description: "Move from a starter template to a fully implemented workflow across your stack.",
      label: "Core page",
    },
  ].filter((item): item is NonNullable<typeof item> => Boolean(item))

  return (
    <div className="flex min-h-[100dvh] flex-col transition-all duration-300">
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

            <LinkCardSection
              eyebrow="Next Step"
              title="Turn This Template Into a Production Workflow"
              description="Use the template as a starting point, then connect it to the service page that matches the workflow you want to operationalize."
              links={relatedLinks}
              className="rounded-3xl"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
      <MessageModal open={messageModalOpen} onOpenChange={setMessageModalOpen} />
    </div>
  )
}
