"use client"

import { useEffect, useState } from "react"
import { Bell } from "lucide-react"
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

  // TODO: Google Playでの配信が始まったら、hrefを siteConfig.playUrl に、
  // ラベルを「アプリを入手」に戻す。それまではLINE事前登録に誘導する。
  return (
    <a
      href={siteConfig.lineUrl}
      aria-label="LINEで事前登録する"
      className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow shadow-flat transition-all duration-300 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <Bell className="h-6 w-6 text-ink" aria-hidden="true" />
    </a>
  )
}
