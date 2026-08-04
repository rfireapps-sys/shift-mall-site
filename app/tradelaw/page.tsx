import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `特定商取引法に基づく表記 | ${siteConfig.appName}`,
  description: `${siteConfig.appName} の特定商取引法に基づく表記`,
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
      <dt className="w-44 shrink-0 text-sm font-medium text-muted-foreground">
        {label}
      </dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  )
}

export default function TradeLawPage() {
  return (
    <LegalLayout title="特定商取引法に基づく表記" updatedAt="2025年1月1日">
      <p className="text-muted-foreground">
        本表記は、特定商取引に関する法律第11条に基づき記載しています。
      </p>

      <dl className="divide-y divide-border border-t border-border">
        <Row label="販売事業者（屋号）" value={siteConfig.tradeName} />
        <Row label="運営責任者" value="（担当者名を記載）" />
        <Row label="所在地" value="請求があった場合、遅滞なく開示します" />
        <Row label="電話番号" value="請求があった場合、遅滞なく開示します" />
        <Row label="メールアドレス" value={siteConfig.supportEmail} />
        <Row label="販売価格" value="各アプリストアの掲載価格に準じます" />
        <Row
          label="商品代金以外の必要料金"
          value="通信料等はお客様のご負担となります"
        />
        <Row
          label="お支払い方法"
          value="Google Play が定める決済手段によります"
        />
        <Row
          label="お支払い時期"
          value="各アプリストアの規定に従い、購入手続き完了時に確定します"
        />
        <Row
          label="商品の引渡し時期"
          value="決済完了後、直ちにご利用いただけます"
        />
        <Row
          label="返品・キャンセル"
          value="デジタル商品の性質上、原則として返品・返金はお受けできません。各アプリストアの返金ポリシーに従います"
        />
      </dl>

      <LegalSection heading="お問い合わせ">
        <p>
          本表記に関するお問い合わせは、{siteConfig.supportEmail} までご連絡ください。
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
