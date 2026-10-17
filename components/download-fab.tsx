"use client"

import { useEffect, useState } from "react"
import { CampaignButton } from "@/components/campaign-button"
import { siteConfig } from "@/lib/site-config"

// 同じ導線がすでに見えている間（Heroのボタン・事前登録セクション・フッター）は隠す。
const hideTargets = ['#top a[href="#preregister"]', "#preregister", "footer"]

// href: トップページでは "#preregister"、規約などの別ページでは "/#preregister"（トップの事前登録セクションへ）。
export function DownloadFab({ href = "#preregister" }: { href?: string }) {
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

  const visibility = hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"

  return (
    <>
      {/* スマホ：QRコードは同じ端末では読み込めないので、事前登録セクションへのボタンのまま（色はPCのカードと同じブランドカラー） */}
      <CampaignButton
        href={href}
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 sm:bottom-6 sm:right-6 lg:hidden ${visibility}`}
      >
        <span>先着100名限定</span>
        <span>キャンペーン中！</span>
        <span className="underline underline-offset-4">詳細を見る</span>
      </CampaignButton>

      {/* PC：QRコードがそのままLINE友だち追加へのリンクになる */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden w-72 flex-col gap-3 rounded-lg border-2 border-[#B90101] bg-white p-5 text-ink shadow-[4px_4px_0_#FE6965] transition-all duration-300 lg:flex ${visibility}`}
      >
        <p className="font-heading text-2xl font-bold leading-tight text-[#B90101]">先着100名！</p>
        <p className="text-pretty text-sm font-bold leading-relaxed">
          <span className="inline-block">LINEを友だち追加して、</span>
          <span className="inline-block">あることをすると</span>
          <br />
          <span className="inline-block">あなたのニックネームが</span>
          <span className="inline-block">サイトに載ります！</span>
        </p>
        <p className="text-sm font-bold leading-relaxed">QRコードを読み込んで友だち追加する</p>
        <a
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINE公式アカウントを友だち追加"
          className="mt-1 block w-fit leading-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="block" src="/line-qr.png" alt="LINE公式アカウントの友だち追加用QRコード" width={132} height={132} />
        </a>
      </div>
    </>
  )
}
