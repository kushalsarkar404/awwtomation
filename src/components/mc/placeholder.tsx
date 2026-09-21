import { cn } from "@/lib/utils"

/**
 * Stand-in for a photograph or video that has not been shot yet. It keeps the
 * exact footprint of the real asset and says what should go there, so layout
 * never shifts when the real file arrives. Swap for next/image or <video>.
 */
export function PhotoSlot({
  label,
  className,
  tone = "warm",
  video = false,
  hideLabel = false,
}: {
  label: string
  className?: string
  tone?: "warm" | "cool" | "dark" | "light"
  video?: boolean
  hideLabel?: boolean
}) {
  const tones = {
    warm: "bg-[linear-gradient(135deg,#cfc6bc_0%,#9d8f84_45%,#5d534c_100%)]",
    cool: "bg-[linear-gradient(135deg,#b9c9d6_0%,#7d93a6_50%,#3f4f5e_100%)]",
    dark: "bg-[linear-gradient(135deg,#4a4a4a_0%,#262626_55%,#121212_100%)]",
    light: "bg-[linear-gradient(135deg,#f1eeea_0%,#dcd6cf_100%)]",
  }
  return (
    <div
      role="img"
      aria-label={`${video ? "Video" : "Photo"} placeholder: ${label}`}
      className={cn("relative overflow-hidden", tones[tone], className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,.35) 0 1px, transparent 1px 14px)",
        }}
      />
      {video ? (
        <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-ink">
          <svg viewBox="0 0 24 24" className="ml-1 size-8" aria-hidden>
            <path d="M6 4l14 8-14 8z" fill="currentColor" />
          </svg>
        </span>
      ) : null}
      {!hideLabel ? (
        <span className="mc-label-sm absolute bottom-3 left-1/2 hidden -translate-x-1/2 rounded bg-black/55 px-2 py-1 text-white sm:block">
          {video ? "Video" : "Photo"} · {label}
        </span>
      ) : null}
    </div>
  )
}
