import { Wordmark } from "@/components/wordmark"

// ヘッダーのロゴ：確定ロゴ（2026/11/18。うさぎの線画に「S」が耳のようにつく形）と、その右の文字のロゴタイプ。
// 文字は、ナビの項目より大きくする（2026/11/20、ユーザー指示）。狭い幅（640〜767px）では、ナビを守るため文字を隠す。
export function SiteLogo() {
  return (
    <>
      <img src="/logo.png" alt="" width={600} height={396} className="h-11 w-auto" />
      <Wordmark className="ml-2.5 hidden text-[1.5rem] leading-none tracking-wide text-ink md:inline-block lg:text-[2.4375rem]" />
    </>
  )
}
