import { M_PLUS_Rounded_1c } from "next/font/google"

// 「モール」用の丸ゴシック極太 M PLUS Rounded 1c（遊びのある側。2026/11/20、ユーザーが16書体から選んだ）。
// 「シフト」は本文と同じ BIZ UDPGothic（真面目な側）。
const maru = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: "900" })

// 2026/11/20、ユーザー指示（G3に決定）：「シフト」は水平のまま。「モール」だけ、モを下げ、ルを大きく上げて高低をはっきりさせる。
// y は文字の高さ（em。プラスが下）、r は回転（度）。大きさは、置いた場所の font-size に従う。
const chars = [
  { c: "シ", y: 0, r: 0, maru: false },
  { c: "フ", y: 0, r: 0, maru: false },
  { c: "ト", y: 0, r: 0, maru: false },
  { c: "モ", y: 0.1, r: -6, maru: true },
  { c: "ー", y: -0.04, r: 3, maru: true },
  { c: "ル", y: -0.24, r: -10, maru: true },
]

// 文字で描いた「シフトモール」のロゴタイプ。ヘッダーと、見出しの中の「シフトモール」で使う。
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span aria-label="シフトモール" className={`inline-block whitespace-nowrap ${className}`}>
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
  )
}
