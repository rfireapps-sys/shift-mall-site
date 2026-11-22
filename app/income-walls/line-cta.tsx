import { CampaignButton } from "@/components/campaign-button"
import { siteConfig } from "@/lib/site-config"
import { SectionHeading } from "./parts"

// ページの最後の案内（2026/11/22、ユーザーが文面を了承）。検索から来た人に、アプリの名前と公式LINEを知ってもらう。
// 「年収の壁を判定できる」とは書かない（制度の判定をアプリが保証するように読めるため）。
// 事前登録キャンペーン（先着100名）には触れない（事前登録が100名限定に読めないようにするため）。
// 配信前の文面。配信開始後（isReleased）は「公開予定」の文を、ストアの案内に切り替えること。
export function LineCta() {
  return (
    <section aria-labelledby="line-cta" className="space-y-4 border-t border-border pt-10">
      <SectionHeading id="line-cta" en="About the app">
        複数の仕事の収入を、ひとつにまとめて見たい人へ
      </SectionHeading>
      <p className="max-w-3xl text-muted-foreground">
        {siteConfig.appName}は掛け持ちや副業の勤務時間を入力すると、複数の仕事を合わせた収入の見込みが分かるアプリです。{siteConfig.releaseTiming}に検証版を公開する予定です。公式LINEで、公開のお知らせを受け取れます。
      </p>
      <CampaignButton href={siteConfig.lineUrl}>公式LINEで知らせを受け取る</CampaignButton>
    </section>
  )
}
