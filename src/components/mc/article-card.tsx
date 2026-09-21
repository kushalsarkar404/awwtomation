import Link from "next/link"

import type { Article } from "@/lib/articles"

/** Card from ManyChat's How-to grid: colourful art on top, "How to" + title below. */
export function ArticleCard({ article, prefix }: { article: Article; prefix?: string }) {
  const href = article.collection === "guides" ? `/how-to/${article.slug}` : `/blog/${article.slug}`
  const title = prefix && article.title.toLowerCase().startsWith(prefix.toLowerCase()) ? article.title.slice(prefix.length).trim() : article.title
  return (
    <Link href={href} className="group block overflow-hidden bg-white shadow-[0_2px_24px_-8px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1">
      <div className="mc-grid relative flex aspect-[447/245] items-center justify-center overflow-hidden" style={{ backgroundColor: article.color }} aria-hidden>
        <span className="size-24 rotate-[-8deg] rounded-[28px] bg-white/85 shadow-lg" />
        <span className="absolute right-[18%] top-[22%] size-10 rounded-full bg-ink/85" />
        <span className="absolute bottom-[20%] left-[20%] h-6 w-24 rounded-full bg-white/60" />
      </div>
      <div className="px-8 pb-10 pt-7">
        <p className="text-[1.625rem] font-bold leading-[1.15] tracking-tight xl:text-[clamp(1.625rem,1.75vw,2.125rem)]">
          {prefix ? <span className="text-mute">{prefix} </span> : null}
          {title}
        </p>
      </div>
    </Link>
  )
}
