// 事前登録セクションへ誘導するボタン。ブランドカラー（ルビーレッド・ピンクレッド）の白いボタンで、3行を中央揃えにする。
// スマホのFABとHeroで使う。
export function CampaignButton({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex flex-col items-center justify-center rounded-lg border-2 border-[#B90101] bg-white px-6 py-2.5 text-center text-sm font-bold leading-snug text-[#B90101] shadow-[4px_4px_0_#FE6965] ${className}`}
    >
      <span>先着100名限定</span>
      <span>キャンペーン中！</span>
      <span className="underline underline-offset-4">詳細を見る</span>
    </a>
  )
}
