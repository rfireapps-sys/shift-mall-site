import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${siteConfig.appName}`,
  description: `${siteConfig.appName} のプライバシーポリシー`,
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="プライバシーポリシー" updatedAt="2025年1月1日">
      <p className="text-muted-foreground">
        {siteConfig.tradeName}（以下「当方」といいます）は、提供するアプリケーション「
        {siteConfig.appName}
        」（以下「本アプリ」といいます）におけるユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
      </p>

      <LegalSection heading="1. 取得する情報">
        <p>
          本アプリは、サービス提供および品質向上のために、以下の情報を取得する場合があります。
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>端末情報（OS バージョン、機種名など）</li>
          <li>アプリの利用状況および操作ログ</li>
          <li>不具合発生時のクラッシュ情報</li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. 利用目的">
        <p>取得した情報は、次の目的のために利用します。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>本アプリの提供・維持・改善のため</li>
          <li>不具合の調査および対応のため</li>
          <li>お問い合わせへの対応のため</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. 第三者提供">
        <p>
          当方は、法令に基づく場合を除き、あらかじめユーザーの同意を得ることなく個人情報を第三者に提供することはありません。
        </p>
      </LegalSection>

      <LegalSection heading="4. 外部サービスの利用">
        <p>
          本アプリは、利用状況の解析や不具合の把握のために、外部の解析サービスを利用する場合があります。これらのサービスにおける情報の取り扱いは、各サービスの提供者が定めるプライバシーポリシーに従います。
        </p>
      </LegalSection>

      <LegalSection heading="5. 情報の管理">
        <p>
          当方は、取得した情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
        </p>
      </LegalSection>

      <LegalSection heading="6. プライバシーポリシーの変更">
        <p>
          本ポリシーの内容は、法令その他必要に応じて変更されることがあります。変更後の本ポリシーは、本アプリ内または本ウェブサイトに掲載した時点から効力を生じるものとします。
        </p>
      </LegalSection>

      <LegalSection heading="7. お問い合わせ">
        <p>
          本ポリシーに関するお問い合わせは、{siteConfig.supportEmail} までご連絡ください。
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
