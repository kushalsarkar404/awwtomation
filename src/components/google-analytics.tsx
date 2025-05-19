"use client"

import { useEffect } from "react"

export default function GoogleAnalytics() {
  useEffect(() => {
    // Prevent duplicate injection
    if (document.getElementById("ga-script")) return

    const script = document.createElement("script")
    script.id = "ga-script"
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-MLCYQ9306W"
    document.head.appendChild(script)

    const inlineScript = document.createElement("script")
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MLCYQ9306W');
    `
    document.head.appendChild(inlineScript)
  }, [])

  return null
}
