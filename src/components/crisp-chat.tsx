"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    $crisp: unknown[]
    CRISP_WEBSITE_ID: string
  }
}

export default function CrispChat() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.$crisp?.length) return

    window.$crisp = []
    window.CRISP_WEBSITE_ID = "754ebcca-6b64-4d41-9636-c73e85b7eac0"

    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.head.appendChild(script)
  }, [])

  return null
}
