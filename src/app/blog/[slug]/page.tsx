import { getPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import Link from "next/link"
import type { Metadata } from "next"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCard } from "@/components/BlogCard"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  

  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt || `Read our blog post: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read our blog post: ${post.title}`,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const readMorePosts = post.readMore
    ? await Promise.all(post.readMore.map((slug: string) => getPostBySlug(slug)))
    : [];

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
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Sticky Back to Blogs link, just text */}
      <div className="sticky top-0 z-30 mb-6 w-full bg-white py-2 border-b border-gray-200 dark:border-gray-800">
        <Link href="/blog" className="text-sm text-muted-foreground hover:underline bg-transparent border-none shadow-none px-0 py-0">
          ← Back to Blogs
        </Link>
      </div>

      {/* Two-column layout on xl: TOC left, content right */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-[20rem_1fr] gap-12">
        {/* Table of Contents - sticky in its column */}
        <aside className="hidden xl:block">
          <TableOfContents content={post.content} />
        </aside>

        {/* Main Content */}
        <div className="min-w-0">
          <div className="mb-10 space-y-2">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-sm text-muted-foreground">{post.date}</p>
          </div>

          <article className="prose prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
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
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 text-lg">{children}</p>
                ),
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
                      className="rounded-lg shadow-lg w-full object-cover max-h-96"
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
                  <div className="my-8 overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm">
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-r border-gray-300 dark:border-gray-600 last:border-r-0">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700 last:border-r-0">
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
      {readMorePosts.length > 0 && (
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Read More</h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {readMorePosts.map((post) =>
              post ? (
                <BlogCard key={post.slug} post={post} />
              ) : null
            )}
          </div>
        </section>
      )}
    </div>
  )
}
