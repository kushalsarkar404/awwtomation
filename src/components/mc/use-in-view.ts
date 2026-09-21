"use client"

import { useEffect, useState, type RefObject } from "react"

/**
 * True while the element sits inside the middle band of the viewport. Scene
 * animations hang off this so a phone never plays itself out before the reader
 * has scrolled down to it. They should start once the section is on screen.
 */
export function useInView(ref: RefObject<HTMLElement | null>, band = 0.18) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const margin = `${-Math.round(band * 100)}% 0px`
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: margin })
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, band])

  return inView
}
