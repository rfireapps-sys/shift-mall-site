"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react"
import { ArrowUp, Check } from "lucide-react"
import { focusRing } from "./parts"

// ページ内のタブ。W3C の WAI-ARIA Authoring Practices の「Tabs」の例（自動で切り替わる型）の考え方で作った。
// 依存パッケージは増やさない（2026/11/16、ユーザーが推奨案を採用）。
// - 矢印キー（左右）・Home・End で、タブを移りながら切り替える
// - 両方のタブの中身はHTMLに書き出し、選んでいない方は hidden にする（検索からも読める）
// - URLの # で開くタブを決める。# がタブの中の見出しやカードを指すときは、そのタブを開いてからそこへ移る
// - hidden="until-found"（ページ内検索で見つかるようにする）は、React 19.3 が hidden を真偽値として扱い、
//   hidden="" で書き出すため使っていない（2026/11/17確認）
export type TabItem = { id: string; label: string; panel: ReactNode }

export function IncomeWallsTabs({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(tabs[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tabsTopRef = useRef<HTMLDivElement | null>(null)

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

  // moveFocus は、ページを開いたあとにリンクで # が変わったときだけ true にする。
  // 元のパネルが hidden になるとフォーカスが body に落ちるので、移った先の見出しへ移す
  const openFromHash = useCallback((moveFocus: boolean) => {
    const hash = decodeURIComponent(window.location.hash.slice(1))
    if (!hash) {
      // 戻る操作で # のないURLに戻ったときは、1つ目のタブに戻す（読み込み時は、もともと1つ目のタブ）
      if (moveFocus) setActive(tabs[0].id)
      return
    }
    const tab = tabs.find((t) => t.id === hash)
    if (tab) {
      setActive(tab.id)
      return
    }
    const target = document.getElementById(hash)
    const panel = target?.closest<HTMLElement>("[data-tab-panel]")
    if (target && panel?.dataset.tabPanel) {
      // 移り先のカードが閉じていると、中身が見えないので、先に開く（カード自身と、入れ子の details の両方）
      const card = target.querySelector<HTMLDetailsElement>(":scope > details[data-wall-card]")
      if (card) card.open = true
      let parent = target.closest("details")
      while (parent) {
        parent.open = true
        parent = parent.parentElement?.closest("details") ?? null
      }
      setActive(panel.dataset.tabPanel)
      // hidden が外れてから移る
      requestAnimationFrame(() => {
        target.scrollIntoView()
        if (moveFocus) {
          if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1")
          target.focus({ preventScroll: true })
        }
      })
    }
  }, [tabs])

  // 読み込んだときの # は、描画の前に読む（#family で開いたとき、1つ目のタブが見える時間を短くするため）。
  // 書き出したHTMLは1つ目のタブなので、JSが読み込まれるまでの間は、1つ目のタブが見える
  useLayoutEffect(() => {
    openFromHash(false)
  }, [openFromHash])

  useEffect(() => {
    const onHashChange = () => openFromHash(true)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [openFromHash])

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

  // パネルの末尾から、もう一方のタブへ移る。タブの位置まで戻り、選んだタブにフォーカスを移す
  const openOther = (index: number) => {
    select(tabs[index].id, { updateHash: true })
    tabsTopRef.current?.scrollIntoView()
    tabRefs.current[index]?.focus({ preventScroll: true })
  }

  return (
    <div className="space-y-10">
      <div ref={tabsTopRef} className="scroll-mt-8">
        <p id="income-walls-tabs-label" className="text-sm font-bold text-foreground">
          あてはまるほうを選んでください。
        </p>
        <div
          role="tablist"
          aria-labelledby="income-walls-tabs-label"
          className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
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
                className={`flex min-h-12 items-start gap-2 rounded-sm border px-3 py-3 text-left text-sm sm:px-4 font-bold transition-[background-color,border-color,color] md:text-base ${focusRing} ${
                  selected
                    ? "border-ink bg-ink text-white"
                    : "border-ink bg-white text-foreground hover:bg-background"
                }`}
              >
                {/* 色の反転のほかに、選んでいるかどうかを形でも示す（選んでいるタブだけチェック）。
                    丸は選択肢（ラジオボタン）に見えるので使わず、文字の位置がそろうよう同じ幅の枠を残す */}
                <span className="mt-px h-5 w-5 shrink-0" aria-hidden="true">
                  {selected && <Check className="h-5 w-5" strokeWidth={3} />}
                </span>
                <span className="text-balance">{t.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {tabs.map((t, i) => {
        const otherIndex = (i + 1) % tabs.length
        return (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            data-tab-panel={t.id}
            hidden={t.id !== active}
            tabIndex={0}
            className="space-y-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
          >
            {t.panel}
            {tabs.length > 1 && (
              <button
                type="button"
                onClick={() => openOther(otherIndex)}
                className={`flex min-h-12 w-full items-start gap-2 rounded-sm border border-ink bg-white px-4 py-3 text-left transition-[background-color,border-color,color] hover:bg-background ${focusRing}`}
              >
                <ArrowUp className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-foreground/80">もう一方のタブを見る</span>
                  <span className="block font-bold text-balance text-foreground">{tabs[otherIndex].label}</span>
                </span>
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}
