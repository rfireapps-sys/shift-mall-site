"use client"

import { useEffect, useState } from "react"
import { Zen_Maru_Gothic } from "next/font/google"

// 「モール」用の丸ゴシック極太（遊びのある側）。「シフト」は本文と同じ BIZ UDPGothic（真面目な側）。
const maru = Zen_Maru_Gothic({ subsets: ["latin"], weight: "900" })

// 2026/11/20: G2とG3をstgで見比べるための仮の切り替え。決まったら片方を残して、この切り替えは消す。
// 使い方: URLの末尾に ?logo=g2 または ?logo=g3 を付ける（付けないときはG2）。
type Variant = "g2" | "g3"

const g3 = [
  { c: "モ", r: -8, y: -0.06 },
  { c: "ー", r: 5, y: 0.04 },
  { c: "ル", r: -6, y: -0.05 },
]

export function SiteLogo() {
  const [variant, setVariant] = useState<Variant>("g2")
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("logo")
    if (v === "g3") setVariant("g3")
  }, [])

  return (
    <>
      {/* 確定ロゴ（2026/11/18）。うさぎの線画に「S」が耳のようにつく形 */}
      <img src="/logo.png" alt="" width={600} height={396} className="h-11 w-auto" />
      <span className="ml-2.5 inline-flex items-center whitespace-nowrap text-2xl leading-none tracking-wide text-ink">
        <span className="font-bold">シフト</span>
        <span className={maru.className} aria-hidden={false}>
          {variant === "g2" ? (
            <span className="inline-block" style={{ transform: "translateY(-0.08em) rotate(-8deg)" }}>
              モール
            </span>
          ) : (
            g3.map((g) => (
              <span
                key={g.c}
                className="inline-block"
                style={{ transform: `translateY(${g.y}em) rotate(${g.r}deg)` }}
              >
                {g.c}
              </span>
            ))
          )}
        </span>
      </span>
    </>
  )
}
