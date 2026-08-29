export const SITE_URL = "https://www.awwtomation.com"
export const SITE_NAME = "Awwtomation"

export type ServiceKey =
  | "blog-automation"
  | "social-media-automation"
  | "seo-automation"
  | "email-marketing-automation"
  | "crm-automation"
  | "customer-support-automation"

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LinkCardItem {
  title: string
  href: string
  description: string
  label?: string
}

export interface ServiceDefinition {
  key: ServiceKey
  name: string
  shortName: string
  href: string
  primaryKeyword: string
  secondaryKeywords: string[]
  title: string
  description: string
  heroTitle: string
  heroDescription: string
  faqs: FaqItem[]
  relatedResources: LinkCardItem[]
}

export const serviceDefinitions: Record<ServiceKey, ServiceDefinition> = {
  "blog-automation": {
    key: "blog-automation",
    name: "Blog Automation Service",
    shortName: "Blog Automation",
    href: "/services/blog-automation",
    primaryKeyword: "blog automation service",
    secondaryKeywords: ["blog automation", "ai blog writing service", "seo blog automation"],
    title: "Blog Automation Service for SEO Growth | Awwtomation",
    description:
      "Scale SEO content with automated research, drafting, review, publishing, internal linking, and reporting workflows built around your editorial standards.",
    heroTitle: "A Cleaner Blog Production System",
    heroDescription:
      "Connect keyword research, AI-assisted drafting, human review, CMS publishing, internal linking, and reporting in one blog automation workflow.",
    faqs: [
      {
        question: "How do you automate blog posts without losing quality?",
        answer:
          "The safest approach automates topic discovery, keyword clustering, briefs, AI-assisted drafts, internal linking suggestions, CMS uploads, and reporting while keeping human review in place for facts, brand voice, and final editorial judgment.",
      },
      {
        question: "Will blog automation replace human editors?",
        answer:
          "No. The strongest setup uses automation for research, drafting, formatting, and publishing while keeping human review in place for brand voice, fact-checking, positioning, and final approval.",
      },
      {
        question: "Can you connect blog automation to our current CMS and workflow?",
        answer:
          "Yes. We can connect blog workflows to systems like WordPress, Webflow, Notion, Airtable, Google Docs, and approval tools so content moves cleanly from brief to publish.",
      },
      {
        question: "How does blog automation help SEO rankings?",
        answer:
          "It helps by improving publishing consistency, expanding topic coverage, speeding up refresh cycles, and standardizing on-page SEO elements like headings, metadata, internal links, and schema opportunities.",
      },
    ],
    relatedResources: [
      {
        title: "Best SEO Tools to Supercharge Audience Growth",
        href: "/blog/best-seo-tools-to-supercharge-audience-growth",
        description: "Use this to shape your content operations stack and reporting workflow.",
        label: "Related blog",
      },
      {
        title: "Why Link Building Can't Be Fully Automated",
        href: "/blog/why-link-building-cant-be-fully-automated",
        description: "A useful boundary-setting piece for what automation should and should not own.",
        label: "Related blog",
      },
      {
        title: "SEO Automation Service",
        href: "/services/seo-automation",
        description: "Pair blog production with technical reporting and optimization workflows.",
        label: "Related service",
      },
    ],
  },
  "social-media-automation": {
    key: "social-media-automation",
    name: "Social Media Automation Service",
    shortName: "Social Media Automation",
    href: "/services/social-media-automation",
    primaryKeyword: "social media automation service",
    secondaryKeywords: [
      "social media automation",
      "automated social media posting service",
      "social media workflow automation",
    ],
    title: "Social Media Automation Service | Awwtomation",
    description:
      "Automate social content planning, approvals, scheduling, lead routing, community workflows, and reporting across your highest-value channels.",
    heroTitle: "Plan, Approve, and Publish From One Workflow",
    heroDescription:
      "Coordinate social content, approvals, scheduling, lead routing, and channel reporting without passing work between disconnected tools.",
    faqs: [
      {
        question: "What are the risks of automating social media publishing?",
        answer:
          "The main risks are low-context posting, delayed responses, and off-brand messaging. A strong social media automation setup uses approval steps, channel-specific rules, and escalation paths so automation improves consistency without damaging engagement.",
      },
      {
        question: "Does social media automation hurt engagement?",
        answer:
          "Not when it is implemented correctly. Automation should handle repetitive scheduling, routing, and reporting so your team can spend more time on creative direction and meaningful conversations.",
      },
      {
        question: "Can you connect social automation with our CRM and email tools?",
        answer:
          "Yes. We can route leads, form submissions, and high-intent engagements from social channels into your CRM, email nurture flows, and internal notifications.",
      },
      {
        question: "Which businesses benefit most from social media automation?",
        answer:
          "Agencies, local businesses, ecommerce brands, and content teams benefit most because they need consistent output, faster responses, and measurable performance without manual coordination.",
      },
    ],
    relatedResources: [
      {
        title: "Automation Services",
        href: "/services",
        description: "See how social workflows connect to CRM, email, SEO, and support automation services.",
        label: "Related service",
      },
      {
        title: "CRM Automation Service",
        href: "/services/crm-automation",
        description: "Turn social responses and lead capture into automated follow-up sequences.",
        label: "Related service",
      },
      {
        title: "Email Marketing Automation Service",
        href: "/services/email-marketing-automation",
        description: "Link campaign engagement to nurture flows and segmented lifecycle messaging.",
        label: "Related service",
      },
    ],
  },
  "seo-automation": {
    key: "seo-automation",
    name: "SEO Automation Service",
    shortName: "SEO Automation",
    href: "/services/seo-automation",
    primaryKeyword: "seo automation service",
    secondaryKeywords: ["seo automation", "ai seo service", "seo reporting automation"],
    title: "SEO Automation Service for Growth | Awwtomation",
    description:
      "Automate SEO reporting, rank tracking, technical alerts, content briefs, internal linking, and stakeholder updates without losing strategic control.",
    heroTitle: "SEO Reporting Without Spreadsheet Drift",
    heroDescription:
      "Automate keyword tracking, technical alerts, content briefs, dashboards, and stakeholder reports while keeping strategy and QA with your team.",
    faqs: [
      {
        question: "Can SEO be automated?",
        answer:
          "Yes, parts of SEO can be automated safely. Reporting, keyword monitoring, technical alerts, content briefs, metadata drafting, internal linking suggestions, and publishing workflows all benefit from automation when strategy and QA stay human-led.",
      },
      {
        question: "Can SEO automation help agencies and in-house teams?",
        answer:
          "Yes. Agencies use it to standardize reporting and delivery, while in-house teams use it to reduce repetitive work and act faster on content and technical opportunities.",
      },
      {
        question: "Do you automate SEO reporting from GA4 and Search Console?",
        answer:
          "Yes. We connect GA4, Google Search Console, spreadsheets, CRM data, and other sources into dashboards and recurring reports so performance is easier to track and explain.",
      },
      {
        question: "How long does SEO automation take to show business value?",
        answer:
          "Operational value is visible quickly because teams spend less time on exports and manual QA. Ranking improvements take longer, but automation helps teams execute consistently and spot issues earlier.",
      },
    ],
    relatedResources: [
      {
        title: "Best SEO Tools to Supercharge Audience Growth",
        href: "/blog/best-seo-tools-to-supercharge-audience-growth",
        description: "Compare the tools most often used in modern SEO reporting and execution stacks.",
        label: "Related blog",
      },
      {
        title: "Why Link Building Can't Be Fully Automated",
        href: "/blog/why-link-building-cant-be-fully-automated",
        description: "Clarify where automation helps and where human-led outreach still matters.",
        label: "Related blog",
      },
      {
        title: "Blog Automation Service",
        href: "/services/blog-automation",
        description: "Connect reporting and keyword ops to a repeatable content publishing pipeline.",
        label: "Related service",
      },
    ],
  },
  "email-marketing-automation": {
    key: "email-marketing-automation",
    name: "Email Marketing Automation Service",
    shortName: "Email Marketing Automation",
    href: "/services/email-marketing-automation",
    primaryKeyword: "email marketing automation service",
    secondaryKeywords: [
      "email marketing automation",
      "email automation agency",
      "automated email campaigns",
    ],
    title: "Email Marketing Automation Service | Awwtomation",
    description:
      "Build automated welcome, nurture, onboarding, recovery, segmentation, and reporting workflows across your CRM and email platform.",
    heroTitle: "Lifecycle Email That Responds to Customer Behavior",
    heroDescription:
      "Build welcome, nurture, onboarding, recovery, segmentation, and reporting workflows around real customer events in your CRM and email platform.",
    faqs: [
      {
        question: "What is email marketing automation?",
        answer:
          "Email marketing automation is the use of triggers, segmentation, and behavior-based workflows to send the right message at the right time. We commonly implement welcome flows, lead nurture sequences, onboarding emails, abandoned cart recovery, re-engagement campaigns, and reporting dashboards.",
      },
      {
        question: "Can you work with our current email platform?",
        answer:
          "Yes. We regularly work with Mailchimp, Klaviyo, HubSpot, ConvertKit, ActiveCampaign, and CRM-connected stacks as long as the platform supports APIs, events, or webhooks.",
      },
      {
        question: "How does email marketing automation improve conversions?",
        answer:
          "It improves conversions by sending better-timed, behavior-based messages, reducing manual delays, and making it easier to segment audiences based on real activity and lifecycle stage.",
      },
      {
        question: "Do you handle analytics and attribution too?",
        answer:
          "Yes. We can connect email platform data to CRM outcomes, dashboards, and recurring reports so your team sees which automations influence pipeline and revenue.",
      },
    ],
    relatedResources: [
      {
        title: "Drive Sales with Email Marketing Automation",
        href: "/blog/drive-sales-with-email-marketing-automation",
        description: "A practical guide to funnel design, nurture sequences, and revenue-driving flows.",
        label: "Related blog",
      },
      {
        title: "Best Email Marketing Platforms",
        href: "/blog/best-email-marketing-platforms",
        description: "Compare the tools you may want to automate around.",
        label: "Related blog",
      },
      {
        title: "CRM Automation Service",
        href: "/services/crm-automation",
        description: "Connect lifecycle campaigns to lead routing, scoring, and pipeline stages.",
        label: "Related service",
      },
    ],
  },
  "crm-automation": {
    key: "crm-automation",
    name: "CRM Automation Service",
    shortName: "CRM Automation",
    href: "/services/crm-automation",
    primaryKeyword: "crm automation service",
    secondaryKeywords: ["crm automation", "crm automation agency", "crm workflow automation"],
    title: "CRM Automation Service for Growth | Awwtomation",
    description:
      "Automate lead capture, scoring, routing, follow-ups, pipeline updates, reporting, and customer handoffs across your sales stack.",
    heroTitle: "Route Leads Faster and Keep the Pipeline Current",
    heroDescription:
      "Automate lead capture, scoring, routing, follow-up, record updates, and customer handoffs across the tools your sales team already uses.",
    faqs: [
      {
        question: "What is CRM automation?",
        answer:
          "CRM automation is the use of workflows and triggers to automate lead capture, routing, follow-ups, deduplication, handoffs, and data syncing between sales, marketing, and support systems.",
      },
      {
        question: "Can CRM automation work with the tools we already use?",
        answer:
          "Yes. We build around your current CRM and connected tools whenever possible so you improve process quality without replacing your whole stack.",
      },
      {
        question: "How does CRM automation help sales teams?",
        answer:
          "It reduces response time, standardizes follow-up, improves lead quality visibility, and removes repetitive admin work so reps can focus on conversations and deals.",
      },
      {
        question: "Do you support custom CRM workflows and reporting?",
        answer:
          "Yes. We can tailor triggers, fields, pipeline stages, alerts, and dashboards to fit the way your business actually sells and services customers.",
      },
    ],
    relatedResources: [
      {
        title: "CRM Integration: The Ultimate Guide",
        href: "/blog/crm-integration-ultimate-guide-to-unify-business-operations",
        description: "Use this to plan how sales, marketing, and support systems should connect.",
        label: "Related blog",
      },
      {
        title: "Top CRM Tool",
        href: "/blog/top-crm-tool",
        description: "A shortlisting resource for teams evaluating CRM tooling.",
        label: "Related blog",
      },
      {
        title: "Email Marketing Automation Service",
        href: "/services/email-marketing-automation",
        description: "Extend CRM events into lifecycle campaigns and nurture sequences.",
        label: "Related service",
      },
    ],
  },
  "customer-support-automation": {
    key: "customer-support-automation",
    name: "Customer Support Automation Service",
    shortName: "Customer Support Automation",
    href: "/services/customer-support-automation",
    primaryKeyword: "customer support automation service",
    secondaryKeywords: [
      "customer support automation",
      "customer service automation",
      "chatbot automation service",
    ],
    title: "Customer Support Automation Service | Awwtomation",
    description:
      "Automate support triage, AI-assisted answers, ticket routing, CRM updates, escalation workflows, self-service, and reporting.",
    heroTitle: "Resolve Routine Requests Faster",
    heroDescription:
      "Triage tickets, surface approved answers, update customer records, and escalate complex conversations to the right person.",
    faqs: [
      {
        question: "How do you automate customer support without hurting the customer experience?",
        answer:
          "You automate the repetitive parts first: chatbot triage, FAQ handling, ticket routing, scheduling, status updates, escalation triggers, satisfaction surveys, and reporting. A good support automation design also includes fallback escalation so customers can reach a human quickly when the issue is complex.",
      },
      {
        question: "Will support automation replace our team?",
        answer:
          "No. The goal is to remove repetitive work and first-line volume so your team can focus on complex, revenue-critical, and empathy-heavy conversations.",
      },
      {
        question: "Can you connect support automation with our CRM or help desk?",
        answer:
          "Yes. We can connect chatbots, inboxes, forms, and ticketing systems with CRMs, calendars, knowledge bases, and internal notifications.",
      },
      {
        question: "How do you keep automated support accurate?",
        answer:
          "We use clear routing logic, knowledge-source governance, fallback escalation paths, and reporting so the automation stays accurate and improves over time.",
      },
    ],
    relatedResources: [
      {
        title: "Best Live Chat Software for Businesses",
        href: "/blog/best-live-chat-software-for-businesses",
        description: "Use this when planning the chat and routing layer of your support stack.",
        label: "Related blog",
      },
      {
        title: "CRM Automation Service",
        href: "/services/crm-automation",
        description: "Turn support interactions into cleaner customer records and follow-up workflows.",
        label: "Related service",
      },
      {
        title: "Automation Services",
        href: "/services",
        description: "See how support automation fits into a broader operations automation roadmap.",
        label: "Related service",
      },
    ],
  },
}

export const serviceCards: LinkCardItem[] = Object.values(serviceDefinitions).map((service) => ({
  title: service.shortName,
  href: service.href,
  description: service.description,
  label: "Service",
}))

export const homePageSeo = {
  title: "AI Automation Agency | Awwtomation",
  description:
    "Awwtomation designs and implements AI automation for CRM, marketing, content, support, reporting, and internal operations.",
  keywords: [
    "business automation services",
    "business process automation services",
    "automation agency",
    "business automation agency",
    "marketing automation agency",
    "workflow automation services",
  ],
  heroTitle: "AI Automation for the Work Slowing You Down",
  heroDescription:
    "We connect your CRM, marketing, content, and support tools so leads get answered, reports stay current, and repetitive work stops eating the week.",
  faqs: [
    {
      question: "What does a business automation agency do?",
      answer:
        "A business automation agency maps the manual work slowing down your company, then designs systems for lead handling, reporting, content, communication, and operations so teams can move faster with fewer errors.",
    },
    {
      question: "How do you automate service business operations without replacing every tool?",
      answer:
        "Most service businesses start by automating lead routing, follow-ups, reporting, publishing, and support workflows inside the systems they already use. The goal is usually cleaner execution, not a full software replacement.",
    },
    {
      question: "Are professional services automation and business process automation the same?",
      answer:
        "They overlap, but they are not identical. Professional services automation usually focuses on delivery, utilization, and coordination inside service firms, while business process automation is broader and can include marketing, sales, finance, support, and operations workflows.",
    },
    {
      question: "How can business process automation improve customer service?",
      answer:
        "It improves customer service by reducing response delays, routing requests faster, syncing context between systems, and giving teams clearer workflows for follow-ups, escalations, and reporting.",
    },
  ],
  relatedResources: [
    {
      title: "Automation Services Hub",
      href: "/services",
      description: "Review the full service stack across CRM, SEO, email, support, and social workflows.",
      label: "Core page",
    },
    {
      title: "Small Business Workflow Automation: n8n vs Make Guide",
      href: "/blog/small-business-workflow-automation-n8n-make-guide",
      description: "A practical guide to the orchestration layer behind modern workflow automation services.",
      label: "Related blog",
    },
    {
      title: "What is RPA? A Comprehensive Guide to Robotic Process Automation",
      href: "/blog/what-is-rpa-robotic-process-automation-guide",
      description: "A foundational article for teams comparing task automation, workflow automation, and broader process change.",
      label: "Related blog",
    },
  ],
}

export const servicesHubSeo = {
  title: "AI Automation Services | Awwtomation",
  description:
    "AI automation services for CRM, SEO, email, social media, content, customer support, reporting, and internal operations.",
  keywords: [
    "automation services",
    "workflow automation services",
    "marketing automation services",
    "professional services automation",
    "robotic process automation services",
  ],
  heroTitle: "Automation for the Work Between Your Tools",
  heroDescription:
    "We build and maintain workflows for lead routing, lifecycle email, reporting, content production, social publishing, and support operations.",
  faqs: [
    {
      question: "What is professional services automation?",
      answer:
        "Professional services automation is the use of systems and workflows to reduce repetitive delivery, reporting, coordination, and customer-management tasks across service businesses.",
    },
    {
      question: "How do automation services help customer service and operations?",
      answer:
        "They shorten response times, reduce manual routing, improve visibility, and make it easier for teams to work from the same source of truth across departments.",
    },
    {
      question: "Can automation services be rolled out in phases?",
      answer:
        "Yes. Most companies start with one core workflow such as CRM follow-up, email nurture, support triage, or reporting, then expand once the early process wins are visible.",
    },
    {
      question: "What is included in workflow automation services?",
      answer:
        "Workflow automation services usually cover discovery, system mapping, automation design, implementation, QA, reporting, and ongoing optimization across the processes creating the most drag or lost revenue.",
    },
  ],
  relatedResources: [
    {
      title: "What is Agentic AI? Complete Guide",
      href: "/blog/what-is-agentic-ai-complete-guide",
      description: "A useful primer for teams evaluating newer AI-driven workflow patterns.",
      label: "Related blog",
    },
    {
      title: "Small Business Workflow Automation: n8n vs Make Guide",
      href: "/blog/small-business-workflow-automation-n8n-make-guide",
      description: "A practical guide to choosing the orchestration layer behind your automations.",
      label: "Related blog",
    },
    ...serviceCards.slice(0, 2),
  ],
}

export const blogIndexSeo = {
  title: "AI & Workflow Automation Guides | Awwtomation",
  description:
    "Practical guides on AI automation, CRM, email marketing, SEO, customer support, content systems, and workflow design for growing teams.",
  keywords: [
    "business automation blog",
    "workflow automation guides",
    "CRM automation tips",
    "email marketing automation",
    "SEO automation guide",
    "customer support automation",
  ],
  heroTitle: "Automation Guides for Growing Teams",
  heroDescription:
    "Clear comparisons and implementation guides for CRM, SEO, email, support, content, and workflow automation.",
  faqs: [
    {
      question: "What topics does the Awwtomation blog cover?",
      answer:
        "The blog covers AI automation, workflow design, CRM, email marketing, SEO, content operations, customer support, automation platforms, and practical implementation decisions for growing businesses.",
    },
    {
      question: "Who is the Awwtomation blog for?",
      answer:
        "It is written for founders, operators, marketers, revenue teams, support leaders, and technical teams evaluating how automation can improve a real business process.",
    },
    {
      question: "How should I use these automation guides?",
      answer:
        "Use the guides to understand a workflow, compare approaches, identify risks, and prepare requirements. Validate platform capabilities, policies, permissions, and pricing before implementing advice in production.",
    },
  ],
}

export const templateLibrarySeo = {
  title: "Free AI Automation Templates | Awwtomation",
  description:
    "Download practical automation templates for n8n, SEO reporting, social engagement, and repeatable marketing and operations workflows.",
  keywords: [
    "free automation templates",
    "n8n templates",
    "workflow automation templates",
    "SEO reporting template",
    "marketing automation templates",
  ],
  heroTitle: "Free Automation Templates for Growth and Reporting Workflows",
  heroDescription:
    "Start with reusable automation templates for SEO reporting, growth workflows, and channel execution, then customize them around your stack.",
  faqs: [
    {
      question: "What is an automation template?",
      answer:
        "An automation template is a reusable workflow that defines triggers, actions, connections, and logic for a repeatable process. It provides a starting point that can be adapted to your accounts, data, and approval rules.",
    },
    {
      question: "Which platform do Awwtomation templates use?",
      answer:
        "The currently available templates are built for n8n. Each template page lists its platform, difficulty, required connections, workflow behavior, and a sample output where available.",
    },
    {
      question: "Are the automation templates production ready?",
      answer:
        "Templates are starting points. Before production use, review credentials, permissions, field mappings, rate limits, error handling, approval steps, and the policies of every connected platform.",
    },
    {
      question: "Can Awwtomation customize a template for my business?",
      answer:
        "Yes. A template can be adapted to your software stack, business rules, reporting format, data model, and governance requirements as part of a custom automation engagement.",
    },
  ],
}

export const aboutPageSeo = {
  title: "About Awwtomation | AI Automation Agency",
  description:
    "Meet the team behind Awwtomation and our approach to building reliable AI automation systems for marketing, sales, support, and operations.",
  keywords: [
    "about awwtomation",
    "business automation agency",
    "marketing automation agency",
    "workflow automation experts",
    "CRM automation specialists",
  ],
  heroTitle: "We Build the Systems Between Your Systems",
  heroDescription:
    "Awwtomation is a small automation team that maps the process, connects the tools, tests the edge cases, and stays accountable through launch.",
  faqs: [
    {
      question: "What does Awwtomation specialize in?",
      answer:
        "Awwtomation specializes in AI and workflow automation for CRM, email marketing, SEO, content, social media, customer support, reporting, and connected business operations.",
    },
    {
      question: "Where is Awwtomation based?",
      answer:
        "Awwtomation is led by founders based in Kathmandu, Nepal and Atlanta, United States, and works with businesses remotely across markets and time zones.",
    },
    {
      question: "How does Awwtomation approach AI automation projects?",
      answer:
        "Projects begin with process and outcome mapping, followed by workflow design, implementation, quality assurance, launch, documentation, and measurement. Human review stays in the workflow wherever judgment or risk requires it.",
    },
    {
      question: "Does Awwtomation work with existing business software?",
      answer:
        "Yes. The usual goal is to connect and improve the systems a team already uses rather than force a complete platform replacement.",
    },
  ],
}

export const privacyPageSeo = {
  title: "Privacy Policy | Awwtomation",
  description:
    "Review how Awwtomation collects, uses, stores, and protects personal data when you use our website, forms, and automation services.",
  keywords: ["privacy policy", "data protection", "website privacy", "Awwtomation privacy policy"],
}

export const termsPageSeo = {
  title: "Terms and Conditions | Awwtomation",
  description:
    "Read the Awwtomation terms and conditions covering website use, service engagement, intellectual property, payments, and client responsibilities.",
  keywords: ["terms and conditions", "service terms", "website terms", "Awwtomation terms"],
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`
}

function truncateAtWord(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, " ").trim()
  if (normalized.length <= maxLength) return normalized

  const shortened = normalized.slice(0, maxLength - 1)
  const lastSpace = shortened.lastIndexOf(" ")
  return `${shortened.slice(0, lastSpace > maxLength * 0.7 ? lastSpace : maxLength - 1).trimEnd()}…`
}

export function toMetaTitle(value: string) {
  return truncateAtWord(value, 60)
}

export function toMetaDescription(value: string) {
  return truncateAtWord(value, 155)
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/full-logo.svg"),
    description: homePageSeo.description,
    email: "contact@awwtomation.com",
    knowsAbout: [
      "Artificial intelligence automation",
      "Business process automation",
      "CRM automation",
      "Marketing automation",
      "SEO automation",
      "Customer support automation",
    ],
    sameAs: [
      "https://www.instagram.com/awwtomation/",
      "https://www.linkedin.com/company/awwtomation/",
      "https://youtube.com/@Awwtomation",
      "https://x.com/awwtomation",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Prakhyat Shrestha",
        sameAs: "https://www.linkedin.com/in/prakhyat-shrestha/",
      },
      {
        "@type": "Person",
        name: "Kushal Sarkar",
        sameAs: "https://www.linkedin.com/in/ksarkar011/",
      },
    ],
  }
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: homePageSeo.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildWebPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

export function buildServiceSchema(service: ServiceDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.href)}#service`,
    name: service.name,
    serviceType: service.primaryKeyword,
    url: absoluteUrl(service.href),
    description: service.description,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  }
}

export function buildItemListSchema({
  title,
  path,
  items,
}: {
  title: string
  path: string
  items: Array<{ name: string; href: string }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: absoluteUrl(path),
    hasPart: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: {
          "@type": "WebPage",
          "@id": absoluteUrl(item.href),
          name: item.name,
        },
      })),
    },
  }
}

export function getServiceBreadcrumbs(service: ServiceDefinition): BreadcrumbItem[] {
  return [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.shortName, href: service.href },
  ]
}

export function getBlogBreadcrumbs(slug?: string, title?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]

  if (slug && title) {
    items.push({ name: title, href: `/blog/${slug}` })
  }

  return items
}

function normalize(values: string[]) {
  return values.join(" ").toLowerCase()
}

export function getPrimaryServiceForPost(post: { slug: string; title: string; keywords?: string[] }) {
  const haystack = normalize([post.slug, post.title, ...(post.keywords ?? [])])

  if (/(email|mailchimp|klaviyo|convertkit|automation platform)/.test(haystack)) {
    return serviceDefinitions["email-marketing-automation"]
  }

  if (/(crm|lead|hubspot|salesforce|pipedrive|zoho)/.test(haystack)) {
    return serviceDefinitions["crm-automation"]
  }

  if (/(seo|search|link building)/.test(haystack)) {
    return serviceDefinitions["seo-automation"]
  }

  if (/(social|instagram|tiktok|linkedin|youtube)/.test(haystack)) {
    return serviceDefinitions["social-media-automation"]
  }

  if (/(chat|support|service)/.test(haystack)) {
    return serviceDefinitions["customer-support-automation"]
  }

  if (/(blog|content)/.test(haystack)) {
    return serviceDefinitions["blog-automation"]
  }

  return undefined
}

export function getSupplementaryServicesForPost(post: { slug: string; title: string; keywords?: string[] }) {
  const primary = getPrimaryServiceForPost(post)
  const picks = primary
    ? [primary, serviceDefinitions["crm-automation"], serviceDefinitions["seo-automation"]]
    : [serviceDefinitions["seo-automation"], serviceDefinitions["email-marketing-automation"], serviceDefinitions["crm-automation"]]

  const unique = new Map<ServiceKey, ServiceDefinition>()
  for (const item of picks) {
    unique.set(item.key, item)
  }

  return Array.from(unique.values())
    .slice(0, 3)
    .map((service) => ({
      title: service.shortName,
      href: service.href,
      description: service.description,
      label: "Related service",
    }))
}
