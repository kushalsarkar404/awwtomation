"use client"

import { useEffect, useState, type RefObject } from "react"

/**
 * 0 when the element's top reaches the top of the viewport, 1 when its bottom
 * reaches the bottom: the progress through a tall "pinned" section whose
 * child is position: sticky. Throttled to one read per animation frame.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const read = () => {
      frame = 0
      const node = ref.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      const value = travel <= 0 ? (rect.top <= 0 ? 1 : 0) : -rect.top / travel
      setProgress(Math.min(1, Math.max(0, value)))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])

  return progress
}

/** Maps a sub-range of 0..1 progress onto 0..1. */
export function segment(progress: number, start: number, end: number) {
  return Math.min(1, Math.max(0, (progress - start) / (end - start)))
}
