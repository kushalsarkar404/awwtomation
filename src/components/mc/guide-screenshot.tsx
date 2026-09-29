import type { GuideImage } from "@/lib/articles"
import { readImageSize } from "@/lib/image-size"
import { cn } from "@/lib/utils"

/**
 * A screenshot from the app in a plain browser frame: three dots and the
 * address the reader will see, so they know which page they should be on.
 * Screenshots are taken at 2x, so a close-up is never shown larger than the
 * app draws it: half its pixel width is its widest.
 */
export function GuideScreenshot({ image, priority = false, className }: { image: GuideImage; priority?: boolean; className?: string }) {
  const size = readImageSize(image.src)
  return (
    <figure
      className={cn("mx-auto overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_30px_60px_-30px_rgba(15,15,15,0.35)] lg:rounded-[1.25vw]", className)}
      style={size ? { maxWidth: Math.round(size.width / 2) } : undefined}
    >
      <div className="flex items-center gap-3 border-b border-line bg-fog px-4 py-2.5 lg:px-[1.1vw] lg:py-[0.7vw]">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-full bg-white px-4 py-1 font-mono text-[0.6875rem] tracking-[0.02em] text-mute lg:text-[clamp(0.6875rem,0.72vw,0.875rem)]">
          {image.address}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      <a href={image.src} target="_blank" rel="noopener" aria-label={`${image.alt} (opens full size)`} className="block cursor-zoom-in">
        {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP from the app, served as is */}
        <img
          src={image.src}
          alt={image.alt}
          width={size?.width}
          height={size?.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="block h-auto w-full"
        />
      </a>
    </figure>
  )
}
