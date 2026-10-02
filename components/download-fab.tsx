"use client"

import { useEffect, useState } from "react"
import { SplitButtonLink } from "@/components/split-button"

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
    <SplitButtonLink
      href="#preregister"
      aria-label="事前登録セクションへ移動"
      className={`fixed bottom-6 right-6 z-50 shadow-flat transition-all duration-300 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      事前登録する
    </SplitButtonLink>
  )
}
