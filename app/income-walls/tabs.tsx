"use client"

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react"

// ページ内のタブ。W3C の WAI-ARIA Authoring Practices の「Tabs」の例（自動で切り替わる型）の考え方で作った。
// 依存パッケージは増やさない（2026/11/16、ユーザーが推奨案を採用）。
// - 矢印キー（左右）・Home・End で、タブを移りながら切り替える
// - 両方のタブの中身はHTMLに書き出し、選んでいない方は hidden にする（検索からも読める）
// - URLの # で開くタブを決める。# がタブの中の見出しやカードを指すときは、そのタブを開いてからそこへ移る
export type TabItem = { id: string; label: string; panel: ReactNode }

export function IncomeWallsTabs({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(tabs[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const select = useCallback(
    (id: string, { updateHash }: { updateHash: boolean }) => {
      setActive(id)
      if (updateHash) {
        // 1つ目のタブは # を付けない（ページのいつものURLのまま）
        const url = id === tabs[0].id ? window.location.pathname : `#${id}`
        window.history.replaceState(null, "", url)
      }
    },
    [tabs],
  )

  useEffect(() => {
    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1))
      if (!hash) return
      const tab = tabs.find((t) => t.id === hash)
      if (tab) {
        setActive(tab.id)
        return
      }
      const target = document.getElementById(hash)
      const panel = target?.closest<HTMLElement>("[data-tab-panel]")
      if (target && panel?.dataset.tabPanel) {
        setActive(panel.dataset.tabPanel)
        // hidden が外れてから移る
        requestAnimationFrame(() => target.scrollIntoView())
      }
    }
    openFromHash()
    window.addEventListener("hashchange", openFromHash)
    return () => window.removeEventListener("hashchange", openFromHash)
  }, [tabs])

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = -1
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = tabs.length - 1
    if (next < 0) return
    e.preventDefault()
    select(tabs[next].id, { updateHash: true })
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="space-y-10">
      <div role="tablist" aria-label="読む人を選ぶ" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {tabs.map((t, i) => {
          const selected = t.id === active
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(t.id, { updateHash: true })}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-12 rounded-sm border px-4 py-3 text-left text-sm font-bold transition-colors md:text-base ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-ink bg-white text-foreground hover:bg-background"
              }`}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          data-tab-panel={t.id}
          hidden={t.id !== active}
          tabIndex={0}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
        >
          {t.panel}
        </div>
      ))}
    </div>
  )
}
