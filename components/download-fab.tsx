"use client"

import { useEffect, useState } from "react"
import { SplitButtonLink } from "@/components/split-button"

// 同じ導線がすでに見えている間（Heroのボタン・事前登録セクション・フッター）は隠す。
const hideTargets = ['#top a[href="#preregister"]', "#preregister", "footer"]

export function DownloadFab() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        setHidden(visible.size > 0)
      },
      { rootMargin: "-72px 0px 0px 0px" },
    )
    for (const selector of hideTargets) {
      const el = document.querySelector(selector)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <SplitButtonLink
      href="#preregister"
      compact
      aria-label="事前登録セクションへ移動"
      className={`fixed bottom-4 right-4 z-50 shadow-flat transition-all duration-300 sm:bottom-6 sm:right-6 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      事前登録する
    </SplitButtonLink>
  )
}
