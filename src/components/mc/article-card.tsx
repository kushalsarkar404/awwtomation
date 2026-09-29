import Link from "next/link"

import { GuideArt } from "@/components/mc/guide-art"
import { PlatformIcon } from "@/components/ui/platform-icon"
import type { Article, GuidePlatform } from "@/lib/articles"
import { cn } from "@/lib/utils"

/** "Instagram", "Facebook" or both, as small glyphs beside the step count. */
export function PlatformBadges({ platform, className }: { platform: GuidePlatform; className?: string }) {
  const platforms = platform === "both" ? (["INSTAGRAM", "FACEBOOK"] as const) : platform === "instagram" ? (["INSTAGRAM"] as const) : (["FACEBOOK"] as const)
  return (
    <span className={cn("flex items-center gap-1.5", className)}>
      {platforms.map((p) => (
        <span key={p} className={cn("grid size-6 place-items-center rounded-[7px] text-white", p === "INSTAGRAM" ? "bg-magenta" : "bg-blue")}>
          <PlatformIcon platform={p} size={13} />
          <span className="sr-only">{p === "INSTAGRAM" ? "Instagram" : "Facebook"}</span>
        </span>
      ))}
    </span>
  )
}

/** Card from ManyChat's How-to grid: the guide's drawing on top, "How to" + title below. */
export function ArticleCard({ article, prefix, steps }: { article: Article; prefix?: string; steps?: number }) {
  const href = `/how-to/${article.slug}`
  const title = prefix && article.title.toLowerCase().startsWith(prefix.toLowerCase()) ? article.title.slice(prefix.length).trim() : article.title
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_2px_24px_-8px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.28)] xl:rounded-[1.4vw]"
    >
      <GuideArt name={article.art} color={article.color} />
      <div className="flex flex-1 flex-col px-7 pb-7 pt-6 xl:px-[1.9vw] xl:pb-[1.8vw] xl:pt-[1.5vw]">
        <p className="text-[1.5rem] font-bold leading-[1.15] tracking-tight xl:text-[clamp(1.5rem,1.6vw,2rem)]">
          {prefix ? <span className="text-mute">{prefix} </span> : null}
          {title}
        </p>
        <p className="mt-3 line-clamp-2 text-[0.9375rem] leading-snug text-mute xl:text-[clamp(0.9375rem,0.95vw,1.125rem)]">{article.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <PlatformBadges platform={article.platform} />
          <span className="mc-label-sm flex items-center gap-2 text-mute transition-colors group-hover:text-ink">
            {steps ? `${steps} steps` : "Read"}
            <svg aria-hidden viewBox="0 0 20 12" className="h-3 w-5 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
