"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ParallaxMouseProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxMouse({ children, speed = 0.05, className = "" }: ParallaxMouseProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position relative to the center of the screen
      const x = (clientX - innerWidth / 2) * speed
      const y = (clientY - innerHeight / 2) * speed

      ref.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [speed])

  return (
    <div ref={ref} className={`transition-transform duration-200 ease-out ${className}`}>
      {children}
    </div>
  )
}
