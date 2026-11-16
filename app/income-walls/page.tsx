import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"
import { IncomeWallsTabs } from "./tabs"
import { SinglePanel } from "./single-panel"
import { FamilyPanel } from "./family-panel"

export const metadata: Metadata = {
  title: `税金・年収の壁について | ${siteConfig.appName}`,
  description:
    "2026年の収入にあてはまる「年収の壁」（住民税・所得税・扶養・社会保険）を、掛け持ちで働く人と、家族がいてパート・アルバイトで働く人に分けて、国税庁・厚生労働省・日本年金機構などの公表資料をもとにまとめました。",
}

// 金額と制度は、国の一次情報（国税庁・財務省・厚生労働省・日本年金機構・e-Govの法令）で確かめたもの。
// 住民税は市区町村が決めるので、自治体（中央区・横浜市）の公式ページも出典にしている。
// 2026/11/14と11/16に、社労士の立場のレビュー（スキル sharoushi-review）と、別の役の反証で残った指摘を反映した。
// 毎年の税制改正（12月ごろに大綱、春に成立）と、社会保険の企業規模の条件の段階的な縮小（2027年10月〜）のたびに見直すこと。
// 2028年分以後の所得税の金額は未定（今の法律のままなら168万円だが、財務省は178万円を維持する方針）なので、載せていない。
// 雇用保険の週10時間への改正（2028年10月の予定とされる）は、一次資料の本文を確かめられていないので、載せていない。
// タブは2つ（2026/11/16、ユーザーが推奨案を採用）。2つ目のタブは URL の #family で直接開ける。

export default function IncomeWallsPage() {
  return (
    <LegalLayout title="税金・年収の壁について" updatedAt="2026年11月16日">
      <IncomeWallsTabs
        tabs={[
          { id: "single", label: "ひとりで働く人・家族の扶養に入っている人", panel: <SinglePanel /> },
          { id: "family", label: "家族がいてパート・アルバイトで働く人", panel: <FamilyPanel /> },
        ]}
      />
    </LegalLayout>
  )
}
