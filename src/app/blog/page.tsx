import { SeoJsonLd } from "@/components/seo/json-ld";
import { LinkCardSection } from "@/components/seo/link-card-section";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getIndexablePostsData } from "@/lib/blog";
import { blogIndexSeo,buildBreadcrumbSchema,buildItemListSchema,buildWebPageSchema,serviceCards } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: blogIndexSeo.title,
  description: blogIndexSeo.description,
  keywords: blogIndexSeo.keywords,
  openGraph: {
    title: blogIndexSeo.title,
    description: blogIndexSeo.description,
    url: "https://www.awwtomation.com/blog",
    siteName: "Awwtomation",
    type: "website",
    images: [
      {
        url: "https://www.awwtomation.com/images/blog-automation.png",
        width: 1200,
        height: 630,
        alt: "Awwtomation Blog - Business Automation Insights"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: blogIndexSeo.title,
    description: blogIndexSeo.description,
    images: ["https://www.awwtomation.com/images/blog-automation.png"]
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.awwtomation.com/blog"
  }
};

const POSTS_PER_PAGE = 8;

export default async function BlogPage({ searchParams }: { searchParams?: Promise<{ page?: string, sort?: string }> }) {
  const allPosts = getIndexablePostsData();
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const sortOrder = (params?.sort === "asc" ? "asc" : "desc");

  // Sort posts by date
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (sortOrder === "desc") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(start, end);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: "Business Automation Blog",
            description: blogIndexSeo.heroDescription,
            path: "/blog",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
          ]),
          buildItemListSchema({
            title: "Business Automation Blog",
            path: "/blog",
            items: allPosts.map((post) => ({ name: post.title, href: `/blog/${post.slug}` })),
          }),
        ]}
      />
      <SiteHeader primaryCtaHref="https://cal.com/awwtomation/awwtomation-consultation" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:py-14">
          <div className="mb-8 space-y-5">
            <PageBreadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{blogIndexSeo.heroTitle}</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                {blogIndexSeo.heroDescription}
              </p>
            </div>
          </div>

          <div className="mb-10 items-center gap-4">
          {/* Sort Dropdown */}
          <form method="GET" className="mb-4 flex flex-wrap items-center gap-3">
            <label className="mr-2 text-sm text-muted-foreground" htmlFor="sortOrder">
              Sort by:
            </label>
            <select
              id="sortOrder"
              name="sort"
              defaultValue={sortOrder}
              className="min-w-[12rem] rounded border px-3 py-2 text-sm"
            >
              <option value="desc">Newest to Oldest</option>
              <option value="asc">Oldest to Newest</option>
            </select>
            <input type="hidden" name="page" value="1" />
            <button
              type="submit"
              className="rounded border bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
            >
              Apply
            </button>
          </form>
          
          </div>

          {/* Blog Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-muted p-4 transition-shadow hover:shadow-lg bg-background"
              >
                {post.coverImage && (
                  <div className="mb-4 rounded-md overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="rounded-md object-cover w-full h-48 transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                  key={i}
                  href={`/blog?page=${i + 1}&sort=${sortOrder}`}
                  className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16">
            <LinkCardSection
              eyebrow="Explore Services"
              title="Turn These Guides Into Working Automation Systems"
              description="The blog supports the commercial service pages. If you are moving from research to implementation, start with the service that matches your bottleneck."
              links={serviceCards}
              className="rounded-3xl"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
