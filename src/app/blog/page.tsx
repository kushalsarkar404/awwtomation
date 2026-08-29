import { SeoJsonLd } from "@/components/seo/json-ld";
import { LinkCardSection } from "@/components/seo/link-card-section";
import { FaqCardSection } from "@/components/seo/faq-card-section";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { ServicePageHero } from "@/components/service-page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getIndexablePostsData } from "@/lib/blog";
import { blogIndexSeo,buildBreadcrumbSchema,buildFaqSchema,buildItemListSchema,buildWebPageSchema,serviceCards,toMetaTitle } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 9;

type BlogSearchParams = Promise<{ page?: string; sort?: string }>;

export async function generateMetadata({ searchParams }: { searchParams?: BlogSearchParams }): Promise<Metadata> {
  const params = await searchParams;
  const page = Number(params?.page ?? "1");
  const pageNumber = Number.isInteger(page) && page > 1 ? page : 1;
  const canonicalUrl = pageNumber > 1
    ? `https://www.awwtomation.com/blog?page=${pageNumber}`
    : "https://www.awwtomation.com/blog";
  const title = pageNumber > 1 ? toMetaTitle(`${blogIndexSeo.title} - Page ${pageNumber}`) : blogIndexSeo.title;
  const isSortVariation = Boolean(params?.sort);

  return {
    title,
    description: blogIndexSeo.description,
    keywords: blogIndexSeo.keywords,
    openGraph: {
      title,
      description: blogIndexSeo.description,
      url: canonicalUrl,
      siteName: "Awwtomation",
      type: "website",
      images: [
        {
          url: "https://www.awwtomation.com/images/blog-automation.png",
          width: 1200,
          height: 630,
          alt: "Awwtomation business automation guides",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: blogIndexSeo.description,
      images: ["https://www.awwtomation.com/images/blog-automation.png"],
    },
    robots: isSortVariation
      ? { index: false, follow: true }
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
        "text/markdown": "https://www.awwtomation.com/blog.md",
      },
    },
  };
}

export default async function BlogPage({ searchParams }: { searchParams?: BlogSearchParams }) {
  const allPosts = getIndexablePostsData();
  const params = await searchParams;
  const page = Number(params?.page ?? "1");
  const sortOrder = params?.sort === "asc" ? "asc" : "desc";

  if (!Number.isInteger(page) || page < 1 || (params?.sort && !["asc", "desc"].includes(params.sort))) {
    notFound();
  }

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
  if (page > Math.max(1, totalPages)) {
    notFound();
  }
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(start, end);

  return (
    <div className="content-page flex min-h-[100dvh] flex-col bg-[#050505] text-white">
      <SeoJsonLd
        data={[
          buildWebPageSchema({
            title: "Business Automation Blog",
            description: blogIndexSeo.heroDescription,
            path: page > 1 ? `/blog?page=${page}` : "/blog",
          }),
          buildBreadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
          ]),
          buildItemListSchema({
            title: "Business Automation Blog",
            path: "/blog",
            items: paginatedPosts.map((post) => ({ name: post.title, href: `/blog/${post.slug}` })),
          }),
          buildFaqSchema(blogIndexSeo.faqs),
        ]}
      />
      <SiteHeader primaryCtaHref="https://cal.com/awwtomation/awwtomation-consultation" />

      {/* Main Content */}
      <main className="flex-1">
        <ServicePageHero title={blogIndexSeo.heroTitle} description={blogIndexSeo.heroDescription} />
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:pb-32 lg:pt-16">
          <PageBreadcrumbs className="mb-10" items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

          <section className="mb-16 border-y border-white/10 py-10" aria-labelledby="blog-topics-title">
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
              <div>
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-200">
                  <span className="h-px w-8 bg-violet-300/70" aria-hidden="true" />
                  Topic guides
                </p>
                <h2 id="blog-topics-title" className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white">
                  Explore automation by business function
                </h2>
              </div>
              <nav className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2" aria-label="Automation topics">
                {serviceCards.map((topic) => (
                  <Link key={topic.href} href={topic.href} className="bg-[#0b0b0d] px-5 py-4 text-sm text-zinc-300 transition hover:bg-[#141418] hover:text-white">
                    {topic.title} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </nav>
            </div>
          </section>

          <div className="mb-8 flex justify-end border-b border-white/10 pb-6">
          <form method="GET" className="flex flex-wrap items-center gap-3">
            <label className="text-sm text-zinc-500" htmlFor="sortOrder">
              Sort articles
            </label>
            <select
              id="sortOrder"
              name="sort"
              defaultValue={sortOrder}
              className="min-w-[12rem] rounded-full border border-white/10 bg-[#0d0d0f] px-4 py-2 text-sm text-zinc-200 outline-none focus:border-white/30"
            >
              <option value="desc">Newest to Oldest</option>
              <option value="asc">Oldest to Newest</option>
            </select>
            <input type="hidden" name="page" value="1" />
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Apply
            </button>
          </form>
          
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0d] transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                {post.coverImage && (
                  <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.18em] text-zinc-600">{post.date}</p>
                  <h2 className="text-xl font-semibold leading-7 tracking-[-0.02em] text-white transition group-hover:text-violet-200">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
                  <span className="mt-auto pt-8 text-sm font-medium text-zinc-200">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                  key={i}
                  href={`/blog?page=${i + 1}&sort=${sortOrder}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm ${page === i + 1 ? "border-white bg-white text-black" : "border-white/10 bg-[#0b0b0d] text-zinc-400 hover:border-white/30 hover:text-white"}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16">
            <LinkCardSection
              eyebrow="Explore Services"
              title="Need help implementing a workflow?"
              description="Start with the service that matches the process you are trying to fix."
              links={serviceCards}
              className="rounded-3xl"
            />
          </div>

          <section className="mt-16 grid gap-10 border-y border-white/10 py-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-200">
                <span className="h-px w-8 bg-violet-300/70" aria-hidden="true" />
                Editorial approach
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                How we write these guides
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-zinc-400">
              <p>
                We publish explainers, comparisons, and workflow guides for teams deciding what to automate, what to keep manual, and what to test before launch.
              </p>
              <p>
                Platform features, prices, and policies can change. Check the linked provider documentation and test permissions, limits, data handling, and failure behavior before using any workflow in production.
              </p>
            </div>
          </section>

          <FaqCardSection
            title="Automation blog FAQs"
            description="How to use the guides and what subjects the Awwtomation editorial library covers."
            faqs={blogIndexSeo.faqs}
            className="mt-16 rounded-3xl"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
