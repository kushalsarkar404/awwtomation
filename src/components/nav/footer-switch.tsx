"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { isLandingPath } from "@/lib/nav"

/** Landing pages render their own footer; everything else gets the site footer. */
export function FooterSwitch({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return isLandingPath(pathname) ? null : <>{children}</>
}
