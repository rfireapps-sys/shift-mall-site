"use client"

import { useRef } from "react"
import { focusRing } from "./parts"

// カードを、まとめて開く・閉じるボタン。同じタブの中の、data-wall-card のカードだけを動かす
// （出典の details は動かさない）
export function ExpandAll() {
  const ref = useRef<HTMLDivElement | null>(null)

  const setAll = (open: boolean) => {
    const panel = ref.current?.closest<HTMLElement>("[data-tab-panel]")
    panel?.querySelectorAll<HTMLDetailsElement>("details[data-wall-card]").forEach((d) => {
      d.open = open
    })
  }

  const buttonClass = `min-h-11 rounded-sm border border-ink bg-white px-4 text-sm font-bold text-foreground transition-[background-color,border-color,color] hover:bg-background ${focusRing}`

  return (
    <div ref={ref} className="flex flex-wrap items-center gap-3">
      <p className="text-sm text-foreground/80">項目を押すと、くわしい説明が開きます。</p>
      <div className="flex gap-2">
        <button type="button" onClick={() => setAll(true)} className={buttonClass}>
          すべて開く
        </button>
        <button type="button" onClick={() => setAll(false)} className={buttonClass}>
          すべて閉じる
        </button>
      </div>
    </div>
  )
}
