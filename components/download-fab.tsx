"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function DownloadFab() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={siteConfig.playUrl}
      aria-label="アプリを入手"
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      アプリを入手
    </a>
  )
}
