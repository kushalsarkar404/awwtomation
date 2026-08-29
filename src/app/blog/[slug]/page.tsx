import { BlogCard } from "@/components/BlogCard"
import { BlogEmailMarketingSolutionForm } from "@/components/blog-email-marketing-solution-form"
import { SeoJsonLd } from "@/components/seo/json-ld"
import { LinkCardSection } from "@/components/seo/link-card-section"
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TableOfContents } from "@/components/table-of-contents"
import { estimateReadingTime,extractFaqsFromMarkdown,getPostBySlug,getRelatedPosts } from "@/lib/blog"
import { buildBreadcrumbSchema,buildFaqSchema,getBlogBreadcrumbs,getPrimaryServiceForPost,getSupplementaryServicesForPost,toMetaDescription,toMetaTitle } from "@/lib/seo"
import "highlight.js/styles/github-dark.css"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Children,isValidElement } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

const siteUrl = "https://www.awwtomation.com"
const emailMarketingLeadSlugs = new Set([
  "best-open-source-email-marketing-platforms",
  "key-features-of-email-automation-platform",
  "drive-sales-with-email-marketing-automation",
  "best-email-marketing-platforms",
  "guide-to-master-email-marketing-for-business",
])

type MarkdownNode = {
  children?: MarkdownNode[]
  type?: string
}

function unwrapImageParagraphs() {
  return (tree: MarkdownNode) => {
    const visitNode = (node: MarkdownNode, parent?: MarkdownNode, index?: number) => {
      if (
        parent &&
        Array.isArray(parent.children) &&
        typeof index === "number" &&
        node?.type === "paragraph" &&
        Array.isArray(node.children) &&
        node.children.length === 1 &&
        node.children[0]?.type === "image"
      ) {
        parent.children[index] = node.children[0]
        return
      }

      if (!Array.isArray(node?.children)) {
        return
      }

      node.children.forEach((child, childIndex) => {
        visitNode(child, node, childIndex)
      })
    }

    visitNode(tree)
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  const canonicalUrl = `${siteUrl}/blog/${slug}`
  const description = toMetaDescription(post.excerpt || `Read our blog post: ${post.title}`)
  const title = toMetaTitle(`${post.title} | Awwtomation`)
  const imageUrl = post.coverImage ? new URL(post.coverImage, siteUrl).toString() : undefined

  return {
    title,
    description,
    keywords: post.keywords,
    robots: post.noindex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    alternates: {
      canonical: canonicalUrl,
      types: {
        "text/markdown": `${canonicalUrl}.md`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Awwtomation",
      type: "article",
      publishedTime: post.date,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()

  const relatedPosts = getRelatedPosts(post, 4)
  const shouldShowEmailMarketingLead = emailMarketingLeadSlugs.has(slug)
  const canonicalUrl = `${siteUrl}/blog/${slug}`
  const imageUrl = post.coverImage ? new URL(post.coverImage, siteUrl).toString() : undefined
  const readingTime = estimateReadingTime(post.content)
  const faqItems = extractFaqsFromMarkdown(post.content)
  const breadcrumbs = getBlogBreadcrumbs(slug, post.title)
  const primaryService = getPrimaryServiceForPost(post)
  const supplementaryServices = getSupplementaryServicesForPost(post)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonicalUrl,
    image: imageUrl ? [imageUrl] : undefined,
    keywords: post.keywords,
    articleSection: primaryService?.shortName ?? "Business Automation",
    wordCount: post.content.trim().split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en",
    author: {
      "@id": `${siteUrl}/#organization`,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/full-logo.svg`,
      },
    },
  }

  // Function to generate heading IDs - improved version
  const generateHeadingId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except word chars, spaces, and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
      .trim()
  }

  return (
    <div className="content-page flex min-h-[100dvh] flex-col bg-[#050505] text-white">
      <SeoJsonLd
        data={[
          articleSchema,
          buildBreadcrumbSchema(breadcrumbs),
          ...(faqItems.length ? [buildFaqSchema(faqItems)] : []),
        ]}
      />
      <SiteHeader primaryCtaHref="https://cal.com/awwtomation/awwtomation-consultation" />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 xl:pb-32 xl:pt-40">
          <div className="mb-6">
            <PageBreadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-12">
            <aside className="hidden xl:flex xl:sticky xl:top-24 xl:self-start xl:flex-col xl:gap-6">
              <TableOfContents content={post.content} className="static top-auto max-h-[calc(100vh-10rem)]" />
              {shouldShowEmailMarketingLead && (
                <BlogEmailMarketingSolutionForm className="w-80 max-w-full" pageSlug={slug} postTitle={post.title} />
              )}
            </aside>

            <div className="min-w-0">
              <div className="mb-12 max-w-4xl space-y-4 border-b border-white/10 pb-10">
                <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{post.title}</h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{readingTime} min read</span>
                </div>
                {primaryService ? (
                  <p className="text-sm text-muted-foreground">
                    Related service:{" "}
                    <Link className="text-primary hover:underline" href={primaryService.href}>
                      {primaryService.shortName}
                    </Link>
                  </p>
                ) : null}
              </div>

              <div className="mb-8 space-y-6 xl:hidden">
                <TableOfContents content={post.content} className="static top-auto max-h-none" />
                {shouldShowEmailMarketingLead && (
                  <BlogEmailMarketingSolutionForm pageSlug={slug} postTitle={post.title} />
                )}
              </div>

              <article className="prose prose-lg prose-zinc max-w-4xl dark:prose-invert prose-headings:tracking-[-0.025em] prose-a:text-violet-300">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, unwrapImageParagraphs]}
                  rehypePlugins={[rehypeRaw, rehypeHighlight]}
                  components={{
                // Headings with proper hierarchy, spacing, and IDs for navigation
                h1: ({ children }) => {
                  const text = children?.toString() || ""
                  const id = generateHeadingId(text)
                  return (
                    <h1
                      id={id}
                      className="text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 scroll-mt-8"
                    >
                      {children}
                    </h1>
                  )
                },
                h2: ({ children }) => {
                  const text = children?.toString() || ""
                  const id = generateHeadingId(text)
                  return (
                    <h2 id={id} className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white scroll-mt-8">
                      {children}
                    </h2>
                  )
                },
                h3: ({ children }) => {
                  const text = children?.toString() || ""
                  const id = generateHeadingId(text)
                  return (
                    <h3
                      id={id}
                      className="text-2xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-100 scroll-mt-8"
                    >
                      {children}
                    </h3>
                  )
                },
                h4: ({ children }) => {
                  const text = children?.toString() || ""
                  const id = generateHeadingId(text)
                  return (
                    <h4
                      id={id}
                      className="text-xl font-semibold mb-2 mt-4 text-gray-800 dark:text-gray-100 scroll-mt-8"
                    >
                      {children}
                    </h4>
                  )
                },
                h5: ({ children }) => {
                  const text = children?.toString() || ""
                  const id = generateHeadingId(text)
                  return (
                    <h5 id={id} className="text-lg font-medium mb-2 mt-4 text-gray-700 dark:text-gray-200 scroll-mt-8">
                      {children}
                    </h5>
                  )
                },
                h6: ({ children }) => {
                  const text = children?.toString() || ""
                  const id = generateHeadingId(text)
                  return (
                    <h6
                      id={id}
                      className="text-base font-medium mb-2 mt-3 text-gray-600 dark:text-gray-300 uppercase tracking-wide scroll-mt-8"
                    >
                      {children}
                    </h6>
                  )
                },
                // Text elements
                p: ({ children }) => {
                  const childNodes = Children.toArray(children)
                  const hasBlockChild = childNodes.some(
                    (child) =>
                      isValidElement(child) &&
                      typeof child.type === "string" &&
                      ["div","figure","img","pre","table"].includes(child.type),
                  )

                  if (hasBlockChild) {
                    return <>{children}</>
                  }

                  return (
                    <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
                      {children}
                    </p>
                  )
                },
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
                ),
                em: ({ children }) => <em className="italic text-gray-700 dark:text-gray-300">{children}</em>,
                del: ({ children }) => <del className="line-through text-gray-500 dark:text-gray-400">{children}</del>,
                mark: ({ children }) => (
                  <mark className="bg-yellow-200 dark:bg-yellow-900 px-1 rounded">{children}</mark>
                ),
                // Lists with proper nesting and spacing
                ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</li>,
                // Blockquotes with different styles
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-6 pr-4 py-4 my-6 italic text-blue-900 dark:text-blue-100 rounded-r-lg">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div>{children}</div>
                    </div>
                  </blockquote>
                ),
                // Links with hover effects
                a: ({ children, href, ...props }) => (
                  <a
                    href={href}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 hover:decoration-blue-800 dark:hover:decoration-blue-300 transition-colors"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                // Images with captions and styling
                img: ({ src, alt, title, ...props }) => (
                  <figure className="my-8">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={alt}
                      title={title}
                      className="h-auto w-full rounded-lg shadow-lg"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      {...props}
                    />
                    {alt && (
                      <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                ),
                // Tables with Notion-style design
                table: ({ children }) => (
                  <div className="my-8 overflow-x-auto rounded-xl border border-gray-300 shadow-sm dark:border-gray-600">
                    <table className="min-w-full border-collapse">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>,
                tbody: ({ children }) => (
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">{children}</tr>
                ),
                th: ({ children }) => (
                  <th className="border-r border-gray-300 px-4 py-3 text-left align-top text-xs font-medium uppercase tracking-wider text-gray-500 last:border-r-0 dark:border-gray-600 dark:text-gray-300 sm:text-sm">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-r border-gray-200 px-4 py-3 align-top text-sm text-gray-900 last:border-r-0 dark:border-gray-700 dark:text-gray-100 whitespace-normal break-words">
                    {children}
                  </td>
                ),
                // Horizontal rules
                hr: () => (
                  <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                ),
                // Task lists (checkboxes)
                input: ({ type, checked, ...props }) => {
                  if (type === "checkbox") {
                    return (
                      <input
                        type="checkbox"
                        checked={checked}
                        className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        disabled
                        {...props}
                      />
                    )
                  }
                  return <input type={type} {...props} />
                },
                // Details/Summary (collapsible content)
                details: ({ children }) => (
                  <details className="my-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    {children}
                  </details>
                ),
                summary: ({ children }) => (
                  <summary className="bg-gray-50 dark:bg-gray-800 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium text-gray-900 dark:text-gray-100">
                    {children}
                  </summary>
                ),
                // Keyboard shortcuts
                kbd: ({ children }) => (
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                    {children}
                  </kbd>
                ),
                // Subscript and Superscript
                sub: ({ children }) => <sub className="text-xs">{children}</sub>,
                sup: ({ children }) => <sup className="text-xs">{children}</sup>,
                // Abbreviations
                abbr: ({ children, title }) => (
                  <abbr
                    title={title}
                    className="border-b border-dotted border-gray-400 dark:border-gray-500 cursor-help"
                  >
                    {children}
                  </abbr>
                ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </article>
            </div>
          </div>

          <section className="mt-12">
            <LinkCardSection
              eyebrow="Next Step"
              title="Turn This Research Into an Automation Workflow"
              description="If you are past the research phase, these service pages are the best next step for implementation."
              links={supplementaryServices}
            />
          </section>
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h3 className="mb-4 text-2xl font-semibold">
                {shouldShowEmailMarketingLead ? "Related Email Marketing Guides" : "Related Guides"}
              </h3>
              <div className="grid gap-8 sm:grid-cols-2">
                {relatedPosts.map((post) =>
                  post ? (
                    <BlogCard key={post.slug} post={post} />
                  ) : null
                )}
              </div>
            </section>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
