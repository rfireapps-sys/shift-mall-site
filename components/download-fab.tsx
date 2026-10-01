"use client"

import { useEffect, useState } from "react"

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
      href="#preregister"
      aria-label="事前登録セクションへ移動"
      className={`fixed bottom-6 right-6 z-50 inline-flex items-stretch overflow-hidden rounded-full shadow-flat transition-all duration-300 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <span className="flex items-center justify-center bg-ink px-6 py-4 text-base font-bold text-white">
        事前
      </span>
      <span className="flex items-center justify-center bg-blue px-6 py-4 text-base font-bold text-white">
        登録
      </span>
    </a>
  )
}
