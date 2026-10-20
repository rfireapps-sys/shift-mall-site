import type { ReactNode } from "react"

// ブランドカラー（ルビーレッド・ピンクレッド）の白いボタン。スマホのFAB、Hero、事前登録セクションで使う。
// onRed: 赤い背景の上に置くとき。影がピンクだと沈むので、黒いずらし影にする。
export function CampaignButton({
  href,
  children,
  className = "",
  onRed,
}: {
  href: string
  children: ReactNode
  className?: string
  onRed?: boolean
}) {
  return (
    <a
      href={href}
      className={`inline-flex flex-col items-center justify-center rounded-lg border-2 border-[#B90101] bg-white px-6 py-2.5 text-center text-sm font-bold leading-snug text-[#B90101] ${
        onRed ? "shadow-flat" : "shadow-[4px_4px_0_#FE6965]"
      } ${className}`}
    >
      {children}
    </a>
  )
}
