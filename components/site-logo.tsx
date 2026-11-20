import { Zen_Maru_Gothic } from "next/font/google"

// 「モール」用の丸ゴシック極太（遊びのある側）。「シフト」は本文と同じ BIZ UDPGothic（真面目な側）。
const maru = Zen_Maru_Gothic({ subsets: ["latin"], weight: "900" })

// 2026/11/20、ユーザー指示（G3に決定）：1文字ずつ角度と高さを変え、右上がりにする。
// 「シ」を一番下げ、「ル」を一番上げる。y は文字の高さ（em）、r は回転（度）。
const chars = [
  { c: "シ", y: 0.07, r: 0, maru: false },
  { c: "フ", y: 0.04, r: 0, maru: false },
  { c: "ト", y: 0.01, r: 0, maru: false },
  { c: "モ", y: -0.02, r: -6, maru: true },
  { c: "ー", y: -0.05, r: 3, maru: true },
  { c: "ル", y: -0.1, r: -8, maru: true },
]

export function SiteLogo() {
  return (
    <>
      {/* 確定ロゴ（2026/11/18）。うさぎの線画に「S」が耳のようにつく形 */}
      <img src="/logo.png" alt="" width={600} height={396} className="h-11 w-auto" />
      <span
        aria-label="シフトモール"
        className="ml-2.5 inline-flex items-center whitespace-nowrap text-2xl leading-none tracking-wide text-ink"
      >
        {chars.map((g) => (
          <span
            key={g.c}
            aria-hidden="true"
            className={`inline-block ${g.maru ? maru.className : "font-bold"}`}
            style={{ transform: `translateY(${g.y}em) rotate(${g.r}deg)` }}
          >
            {g.c}
          </span>
        ))}
      </span>
    </>
  )
}
