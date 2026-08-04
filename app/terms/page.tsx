import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `利用規約 | ${siteConfig.appName}`,
  description: `${siteConfig.appName} の利用規約`,
}

export default function TermsPage() {
  return (
    <LegalLayout title="利用規約" updatedAt="2025年1月1日">
      <p className="text-muted-foreground">
        この利用規約（以下「本規約」といいます）は、{siteConfig.tradeName}
        （以下「当方」といいます）が提供するアプリケーション「{siteConfig.appName}
        」（以下「本アプリ」といいます）の利用条件を定めるものです。本アプリをご利用いただくにあたっては、本規約に同意いただいたものとみなします。
      </p>

      <LegalSection heading="第1条（適用）">
        <p>
          本規約は、ユーザーと当方との間の本アプリの利用に関わる一切の関係に適用されるものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第2条（利用登録）">
        <p>
          本アプリは、ダウンロードおよびインストールをもって利用を開始できるものとします。ユーザーは、本規約に従い本アプリを利用するものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第3条（禁止事項）">
        <p>
          ユーザーは、本アプリの利用にあたり、次の行為をしてはなりません。
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>本アプリの運営を妨害するおそれのある行為</li>
          <li>本アプリを不正に改変、リバースエンジニアリングする行為</li>
          <li>その他、当方が不適切と判断する行為</li>
        </ul>
      </LegalSection>

      <LegalSection heading="第4条（本アプリの提供の停止等）">
        <p>
          当方は、システムの保守点検、天災地変、その他やむを得ない事由が生じた場合には、ユーザーに事前に通知することなく本アプリの全部または一部の提供を停止または中断することができるものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第5条（免責事項）">
        <p>
          当方は、本アプリに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証するものではありません。本アプリの利用によりユーザーに生じた損害について、当方は一切の責任を負わないものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第6条（利用規約の変更）">
        <p>
          当方は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の本規約は、本アプリ内または本ウェブサイトに掲載した時点から効力を生じるものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第7条（準拠法・裁判管轄）">
        <p>
          本規約の解釈にあたっては日本法を準拠法とします。本アプリに関して紛争が生じた場合には、当方の所在地を管轄する裁判所を専属的合意管轄とします。
        </p>
      </LegalSection>

      <LegalSection heading="お問い合わせ">
        <p>
          本規約に関するお問い合わせは、{siteConfig.supportEmail} までご連絡ください。
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
