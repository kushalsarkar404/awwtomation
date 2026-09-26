"use client"

import { Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const POSTER = "/video/awwtomation-promo-poster.webp"
const SOURCES = [
  // AV1 first: about a quarter smaller. Browsers without an AV1 decoder skip it.
  { src: "/video/awwtomation-promo-av1.mp4", type: 'video/mp4; codecs="av01.0.08M.08, mp4a.40.2"' },
  { src: "/video/awwtomation-promo-h264.mp4", type: 'video/mp4; codecs="avc1.640029, mp4a.40.2"' },
]

/**
 * The 30-second brand film in the footer. Nothing downloads until the footer
 * is close to the screen; it then plays muted on a loop, and pauses whenever it
 * scrolls away. Browsers only autoplay muted, so the music waits behind a sound
 * button. With reduced motion it waits on the poster with controls.
 */
export function FooterVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) setLoad(true)
      },
      { rootMargin: "300px 0px" },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  // Sources are added after the first render, so the element has to be told to pick one.
  useEffect(() => {
    if (load) ref.current?.load()
  }, [load])

  useEffect(() => {
    const video = ref.current
    if (!video || !load) return
    if (visible && !reduced) video.play().catch(() => {})
    else video.pause()
  }, [load, visible, reduced])

  function toggleSound() {
    const video = ref.current
    if (!video) return
    video.muted = !muted
    setMuted(!muted)
    if (!muted) return
    setLoad(true)
    video.play().catch(() => {})
  }

  return (
    <div className={cn("relative", className)}>
      <video
        ref={ref}
        className="block size-full bg-ink object-cover"
        poster={POSTER}
        muted={muted}
        loop
        playsInline
        preload="none"
        controls={reduced}
        aria-label="Awwtomation brand film: grow faster with automated Instagram and Messenger replies"
      >
        {load ? SOURCES.map((source) => <source key={source.src} src={source.src} type={source.type} />) : null}
      </video>
      {reduced ? null : (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Turn sound on" : "Turn sound off"}
          aria-pressed={!muted}
          className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:bottom-[1vw] lg:right-[1vw]"
        >
          {muted ? <VolumeX className="size-5" aria-hidden /> : <Volume2 className="size-5" aria-hidden />}
        </button>
      )}
    </div>
  )
}
