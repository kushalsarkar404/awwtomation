import { automationTemplates } from "@/data/automation-templates"
import { getIndexablePostsData, getPostBySlug } from "@/lib/blog"
import {
  aboutPageSeo,
  blogIndexSeo,
  homePageSeo,
  serviceDefinitions,
  servicesHubSeo,
  SITE_NAME,
  SITE_URL,
  templateLibrarySeo,
  type FaqItem,
  type ServiceKey,
} from "@/lib/seo"
import { getTemplateBySlug } from "@/lib/template-utils"

export interface AgentContentEntry {
  path: string
  markdownPath: string
  title: string
  description: string
  section: "Core pages" | "Services" | "Templates" | "Guides"
}

const serviceCapabilities: Record<ServiceKey, string[]> = {
  "blog-automation": [
    "Keyword and topic research workflows",
    "Structured content briefs",
    "AI-assisted drafting with human review",
    "CMS publishing and internal linking",
    "Content refresh and performance reporting",
  ],
  "social-media-automation": [
    "Content planning and approval routing",
    "Channel-aware scheduling and publishing",
    "Comment, inbox, and lead triage",
    "CRM handoff and performance reporting",
  ],
  "seo-automation": [
    "GA4 and Google Search Console reporting",
    "Keyword rank monitoring",
    "Technical SEO alerts",
    "Content briefs and on-page quality checks",
    "Internal-link and refresh suggestions",
  ],
  "email-marketing-automation": [
    "Lifecycle segmentation and triggers",
    "Lead nurture and onboarding sequences",
    "CRM and commerce data synchronization",
    "Deliverability, conversion, and revenue reporting",
  ],
  "crm-automation": [
    "Lead capture, enrichment, scoring, and routing",
    "Pipeline updates and ownership rules",
    "Follow-up reminders and lifecycle handoffs",
    "Data quality checks and revenue reporting",
  ],
  "customer-support-automation": [
    "Support intake and ticket triage",
    "Knowledge-grounded answers",
    "Voice, chat, email, and scheduling workflows",
    "Human escalation and support analytics",
  ],
}

function markdownPath(path: string) {
  return path === "/" ? "/index.md" : `${path}.md`
}

function absolutePath(path: string) {
  return `${SITE_URL}${path}`
}

function frontmatter({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `canonical: ${JSON.stringify(absolutePath(path))}`,
    `markdown: ${JSON.stringify(absolutePath(markdownPath(path)))}`,
    `publisher: ${JSON.stringify(SITE_NAME)}`,
    `language: ${JSON.stringify("en")}`,
    "---",
    "",
  ].join("\n")
}

function faqMarkdown(faqs: FaqItem[]) {
  if (!faqs.length) return ""

  return [
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
  ].join("\n")
}

function linkList(items: Array<{ title: string; href: string; description?: string }>) {
  return items
    .map((item) => `- [${item.title}](${absolutePath(item.href)})${item.description ? `: ${item.description}` : ""}`)
    .join("\n")
}

function homepageMarkdown() {
  const services = Object.values(serviceDefinitions)

  return `${frontmatter({ title: homePageSeo.title, description: homePageSeo.description, path: "/" })}# ${homePageSeo.heroTitle}

${homePageSeo.heroDescription}

## What Awwtomation does

Awwtomation is an AI automation agency that designs and implements connected workflows for growing businesses. The team focuses on repetitive, rules-based work across marketing, sales, content, support, reporting, and operations while keeping people in control of decisions that need context.

## Automation services

${linkList(services.map((service) => ({ title: service.shortName, href: service.href, description: service.description })))}

## How an engagement works

- Find the constraint by mapping the process, tools, owners, handoffs, and intended outcome.
- Build the workflow with appropriate integrations, access controls, approval gates, and failure handling.
- Measure adoption and operational impact, then improve the system as the business changes.

## Measured client outcomes

- $3,000 in monthly savings from automating booking and order workflows.
- 15 hours reclaimed each week by reducing repetitive coordination and administration.
- 35% fewer appointment no-shows after rebuilding reminders and follow-up rules.

${faqMarkdown(homePageSeo.faqs)}
## Contact

- Website: ${SITE_URL}
- Email: contact@awwtomation.com
- Consultation: https://cal.com/awwtomation/awwtomation-consultation
`
}

function servicesMarkdown() {
  const services = Object.values(serviceDefinitions)

  return `${frontmatter({ title: servicesHubSeo.title, description: servicesHubSeo.description, path: "/services" })}# ${servicesHubSeo.heroTitle}

${servicesHubSeo.heroDescription}

## What is included

An Awwtomation engagement can include process discovery, system and data mapping, workflow design, integration implementation, AI-assisted steps, permissions, human approvals, quality assurance, documentation, launch, monitoring, and optimization. Work can begin with one measurable workflow and expand after the first system is stable.

## Available services

${linkList(services.map((service) => ({ title: service.shortName, href: service.href, description: service.description })))}

## Where to start

- Slow lead response: start with CRM and email automation.
- Manual reporting: start with SEO or custom operations reporting automation.
- Inconsistent content production: start with blog and social media automation.
- Repetitive support demand: start with customer support automation.

${faqMarkdown(servicesHubSeo.faqs)}`
}

function serviceMarkdown(key: ServiceKey) {
  const service = serviceDefinitions[key]

  return `${frontmatter({ title: service.title, description: service.description, path: service.href })}# ${service.name}

${service.heroDescription}

## What Awwtomation builds

${serviceCapabilities[key].map((capability) => `- ${capability}`).join("\n")}

## Implementation approach

- Audit the current process, systems, owners, data, and baseline metric.
- Design triggers, field mappings, business rules, permissions, approvals, and exception paths.
- Build and test the workflow against realistic success and failure scenarios.
- Launch with documentation, monitoring, and clear human ownership.
- Review the measured result and refine the workflow after production use.

## Related resources

${linkList(service.relatedResources)}

${faqMarkdown(service.faqs)}`
}

function aboutMarkdown() {
  return `${frontmatter({ title: aboutPageSeo.title, description: aboutPageSeo.description, path: "/about" })}# About Awwtomation

${aboutPageSeo.description}

## Company facts

- Leadership locations: Kathmandu, Nepal and Atlanta, United States.
- Service area: Remote and worldwide.
- Core expertise: AI automation, workflow design, systems integration, and reporting.
- Engagement model: Discovery, implementation, quality assurance, launch, documentation, and optimization.

## Leadership

### Prakhyat Shrestha, Co-founder

Prakhyat leads process mapping, integration architecture, and technical delivery. He is based in Kathmandu and has a B.Tech in Computer Science and Engineering from VIT.

### Kushal Sarkar, Co-founder

Kushal leads discovery, data design, and client delivery. He is based in Atlanta and has an MS in Data Science from Georgia State University.

## Operating principles

- Start with the business process and measurable outcome.
- Keep permissions, approvals, monitoring, and recovery paths visible.
- Build maintainable workflows that real teams can understand and own.

${faqMarkdown(aboutPageSeo.faqs)}`
}

function templateIndexMarkdown() {
  return `${frontmatter({ title: templateLibrarySeo.title, description: templateLibrarySeo.description, path: "/templates" })}# ${templateLibrarySeo.heroTitle}

${templateLibrarySeo.heroDescription}

## Available automation templates

${linkList(automationTemplates.map((template) => ({ title: template.title, href: `/templates/${template.slug}`, description: template.excerpt })))}

## Before production use

- Review required applications, accounts, permissions, and credentials.
- Map inputs, fields, schedules, destinations, and business ownership.
- Test duplicate prevention, rate limits, retries, errors, and recovery behavior.
- Add human review wherever the workflow can affect customers, brand, money, or sensitive data.

${faqMarkdown(templateLibrarySeo.faqs)}`
}

function templateMarkdown(slug: string) {
  const template = getTemplateBySlug(slug)
  if (!template) return null
  const path = `/templates/${template.slug}`

  return `${frontmatter({ title: template.title, description: template.metaDescription, path })}# ${template.title}

${template.excerpt}

## Template facts

- Platform: ${template.availability.platform}
- Difficulty: ${template.difficulty}
- Category: ${template.category}
- Price: ${template.currentPrice === 0 ? "Free" : `$${template.currentPrice}`}
- Creator: ${template.creator.name}
- Topics: ${template.tags.join(", ")}

## Introduction

${template.introduction}

## Workflow description

${template.workflowDescription}

## Benefits

${template.benefits.map((benefit) => `- ${benefit}`).join("\n")}

## Production checklist

- Replace demonstration credentials and destinations with your own approved accounts.
- Review permissions, field mappings, schedules, limits, retry behavior, and duplicate prevention.
- Test the workflow with non-production data before enabling the live trigger.
- Assign an owner for monitoring, failures, and future changes.
`
}

function blogIndexMarkdown() {
  const posts = getIndexablePostsData().sort(
    (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
  )

  return `${frontmatter({ title: blogIndexSeo.title, description: blogIndexSeo.description, path: "/blog" })}# ${blogIndexSeo.heroTitle}

${blogIndexSeo.heroDescription}

## Guides and articles

${linkList(posts.map((post) => ({ title: post.title, href: `/blog/${post.slug}`, description: post.excerpt })))}

## Editorial approach

Awwtomation publishes explainers, comparisons, and workflow guides for teams deciding what to automate, what to keep manual, and what to test before launch. Platform features, prices, and policies can change, so readers should verify current provider documentation before production implementation.

${faqMarkdown(blogIndexSeo.faqs)}`
}

async function blogPostMarkdown(slug: string) {
  const post = await getPostBySlug(slug)
  if (!post || post.noindex) return null
  const path = `/blog/${post.slug}`

  return `${frontmatter({ title: post.title, description: post.excerpt, path })}# ${post.title}

Published: ${post.date}

${post.content.trim()}

## About this guide

Published by Awwtomation. Verify time-sensitive platform features, prices, and policies against current provider documentation before production use.
`
}

export function getAgentContentEntries(): AgentContentEntry[] {
  const core: AgentContentEntry[] = [
    {
      path: "/",
      markdownPath: "/index.md",
      title: homePageSeo.heroTitle,
      description: homePageSeo.description,
      section: "Core pages",
    },
    {
      path: "/about",
      markdownPath: "/about.md",
      title: "About Awwtomation",
      description: aboutPageSeo.description,
      section: "Core pages",
    },
    {
      path: "/services",
      markdownPath: "/services.md",
      title: servicesHubSeo.heroTitle,
      description: servicesHubSeo.description,
      section: "Core pages",
    },
    {
      path: "/templates",
      markdownPath: "/templates.md",
      title: templateLibrarySeo.heroTitle,
      description: templateLibrarySeo.description,
      section: "Templates",
    },
    {
      path: "/blog",
      markdownPath: "/blog.md",
      title: blogIndexSeo.heroTitle,
      description: blogIndexSeo.description,
      section: "Guides",
    },
  ]
  const services = Object.values(serviceDefinitions).map<AgentContentEntry>((service) => ({
    path: service.href,
    markdownPath: markdownPath(service.href),
    title: service.heroTitle,
    description: service.description,
    section: "Services",
  }))
  const templates = automationTemplates.map<AgentContentEntry>((template) => ({
    path: `/templates/${template.slug}`,
    markdownPath: `/templates/${template.slug}.md`,
    title: template.title,
    description: template.metaDescription,
    section: "Templates",
  }))
  const guides = getIndexablePostsData().map<AgentContentEntry>((post) => ({
    path: `/blog/${post.slug}`,
    markdownPath: `/blog/${post.slug}.md`,
    title: post.title,
    description: post.excerpt,
    section: "Guides",
  }))

  return [...core, ...services, ...templates, ...guides]
}

export function isAgentContentPath(pathname: string) {
  return getAgentContentEntries().some((entry) => entry.path === pathname)
}

export async function getAgentMarkdown(pathname: string) {
  if (pathname === "/") return homepageMarkdown()
  if (pathname === "/about") return aboutMarkdown()
  if (pathname === "/services") return servicesMarkdown()
  if (pathname === "/templates") return templateIndexMarkdown()
  if (pathname === "/blog") return blogIndexMarkdown()

  const service = Object.values(serviceDefinitions).find((candidate) => candidate.href === pathname)
  if (service) return serviceMarkdown(service.key)

  if (pathname.startsWith("/templates/")) {
    return templateMarkdown(pathname.slice("/templates/".length))
  }

  if (pathname.startsWith("/blog/")) {
    return blogPostMarkdown(pathname.slice("/blog/".length))
  }

  return null
}

export function buildLlmsTxt() {
  const entries = getAgentContentEntries()
  const sections: AgentContentEntry["section"][] = ["Core pages", "Services", "Templates", "Guides"]

  return `# Awwtomation

> Awwtomation is an AI automation agency that designs and implements connected workflows for CRM, email marketing, SEO, content, social media, customer support, reporting, and business operations.

Use the Markdown links below for concise, machine-readable versions of Awwtomation pages. Canonical HTML pages remain the source URLs for citation and indexing.

${sections
  .map((section) => {
    const links = entries
      .filter((entry) => entry.section === section)
      .map((entry) => `- [${entry.title}](${absolutePath(entry.markdownPath)}): ${entry.description}`)
      .join("\n")
    return `## ${section}\n\n${links}`
  })
  .join("\n\n")}

## Optional

- [Full site Markdown](${SITE_URL}/llms-full.txt): Combined Markdown for all public core, service, template, and guide pages.
- [XML sitemap](${SITE_URL}/sitemap.xml): Canonical indexable HTML URLs.
`
}

export async function buildLlmsFullTxt() {
  const pages = await Promise.all(
    getAgentContentEntries().map(async (entry) => ({
      entry,
      content: await getAgentMarkdown(entry.path),
    })),
  )

  return `# Awwtomation: full site content

> Combined Markdown representations of Awwtomation's public core, service, template, and guide pages.

${pages
  .filter((page) => page.content)
  .map(
    ({ entry, content }) =>
      `\n---\n\nSource: ${absolutePath(entry.path)}\nMarkdown: ${absolutePath(entry.markdownPath)}\n\n${content}`,
  )
  .join("\n")}
`
}
