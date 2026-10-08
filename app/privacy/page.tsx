import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${siteConfig.appName}`,
  description: `${siteConfig.appName}のプライバシーポリシー`,
}

// 本文は、運営者から受け取った正式な文面（shift-mall-legal.pdf、プライバシーポリシーは2026年10月7日版）。
// 文言を勝手に変えないこと。変更するときは運営者に確認する。
// 2026/10/5: 運営者の指示で、サイトの用語にそろえて「仮想」を「空想」に統一した。
const externalServices = [
  {
    name: "Google AdMob(Google LLC)",
    sent: "広告ID(広告識別子)、IPアドレス、端末・アプリの情報",
    purpose:
      "広告の表示と、その効果の測定。iPhoneでは、広告IDを使ってよいかをアプリ内で確認し、許可されない場合は広告IDを使いません",
  },
  {
    name: "Firebase Crashlytics(Google LLC)",
    sent: "アプリが異常終了したときの動作の記録、端末・アプリの情報、アプリごとの識別情報",
    purpose: "不具合の調査と修正",
  },
  {
    name: "Firebase Remote Config(Google LLC)",
    sent: "設定の取得に必要な、アプリごとの識別情報と端末・アプリの情報",
    purpose: "機能のオン・オフなどの配信設定の取得",
  },
  {
    name: "GitHub(GitHub, Inc.)",
    sent: "通信に必要なIPアドレスなど",
    purpose: "商品情報・お知らせの取得",
  },
]

export default function PrivacyPage() {
  return (
    <LegalLayout title="プライバシーポリシー" updatedAt="2026年10月7日">
      <p className="text-muted-foreground">運営者: {siteConfig.tradeName}</p>

      <LegalSection heading="1. 運営者">
        <p>
          本アプリ「{siteConfig.appName}」は、{siteConfig.tradeName}(以下「運営者」)が提供します。本ポリシーは、本アプリでの情報の取り扱いを定めるものです。
        </p>
      </LegalSection>

      <LegalSection heading="2. アプリに入力する情報">
        <p>
          勤務・給与の設定、カレンダーの記録、メモ、お届け先、購入履歴など、アプリに入力した内容は、お使いの端末の中にだけ保存します。運営者のサーバーには送信しません。お届け先はアプリ内の演出にだけ使い、実際の配送は行いません。
        </p>
      </LegalSection>

      <LegalSection heading="3. 外部サービスに送信される情報">
        <p>
          本アプリは次の外部サービスを利用しており、その範囲で端末の情報が各社に送信されます。アプリに入力した勤務・給与・お届け先の内容は含まれません。
        </p>
        <ul className="space-y-4">
          {externalServices.map((s) => (
            <li key={s.name}>
              <p className="font-bold text-foreground">・{s.name}</p>
              <p className="pl-4">送信される情報: {s.sent}</p>
              <p className="pl-4">目的: {s.purpose}</p>
            </li>
          ))}
        </ul>
        <p>各社での取り扱いは、それぞれのプライバシーポリシーをご確認ください。</p>
      </LegalSection>

      <LegalSection heading="4. 利用目的">
        <p>
          アプリに入力した内容は、給与計算・カレンダー表示・空想ショッピングの表示にだけ使います。外部サービスに送信される情報の目的は、3.に記載のとおりです。
        </p>
      </LegalSection>

      <LegalSection heading="5. 第三者への提供">
        <p>
          アプリに入力した内容を、第三者に販売・提供することはありません。3.の外部サービスへの送信と、法令に基づく場合を除き、運営者が受け取った情報を第三者に提供することもありません。
        </p>
      </LegalSection>

      <LegalSection heading="6. 端末のバックアップ">
        <p>
          お使いの端末でバックアップ機能(Googleの自動バックアップ、iCloudバックアップなど)が有効な場合、アプリに入力した内容(勤務・給与の設定、カレンダーの記録、メモ、お届け先、購入履歴、パスコードのハッシュ値(元のパスコードには戻せない形に変換した値)など)が、お客様ご自身のGoogleアカウントまたはiCloudにバックアップされることがあります。機種変更の際に内容が引き継がれるのはこのためです。運営者がバックアップの内容を受け取ることはありません。バックアップの対象から外したい場合は、端末の設定で本アプリのバックアップをオフにしてください。
        </p>
      </LegalSection>

      <LegalSection heading="7. 広告の設定">
        <p>
          端末の設定から、広告IDのリセットや、興味・関心に基づく広告の無効化ができます。iPhoneでは、「設定」→「プライバシーとセキュリティ」→「トラッキング」から、本アプリへの許可をいつでも変更できます。
        </p>
      </LegalSection>

      <LegalSection heading="8. データの削除">
        <p>
          アプリをアンインストールするか、設定画面からデータをリセットすると、端末内のデータを削除できます。端末のバックアップとしてGoogleアカウントまたはiCloudに保存された内容は、それぞれの設定から削除してください。
        </p>
      </LegalSection>

      <LegalSection heading="9. お問い合わせ">
        <p>
          ご質問・ご意見・ご要望は、運営者の公式LINEで受け付けます。設定画面の「フィードバックを送る」から開けます(
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {siteConfig.lineUrl}
          </a>
          )。
        </p>
        <p>
          LINEでご連絡いただいた場合、運営者はLINEの表示名とメッセージの内容を受け取ります。これらは、お問い合わせへの対応、ご本人の確認、対応の記録・管理にだけ使います。対応が終わったあと、運営者が管理できる範囲の記録は不要になり次第削除します(LINE社のサーバーに残る分は、運営者では削除できません)。LINEでの情報の取り扱いは、LINEのプライバシーポリシーをご確認ください。
        </p>
        <p>
          運営者は、アプリに入力された内容を保有していないため、それらの開示・訂正・削除のご請求には応じられません。端末内のデータは、8.の方法でご自身で削除できます。
        </p>
        <p>
          LINEで受け取った情報については、ご本人からのご請求に応じて、開示・訂正・削除に対応します。請求は公式LINEで受け付け、手数料はいただきません。ご本人であることは、LINE上のやり取りで確認します。
        </p>
      </LegalSection>

      <LegalSection heading="10. 本ポリシーの変更">
        <p>
          運営者は、必要に応じて本ポリシーを変更することがあります。変更後の内容は、アプリ内および公式サイトに掲載した時点から効力を生じます。
        </p>
      </LegalSection>

      <LegalSection heading="11. 公式サイトのアクセス解析">
        <p>
          公式サイト(https://shift-mall.com)では、アクセス状況を把握して改善に役立てるため、Cloudflare, Inc.のWeb Analyticsを利用しています。閲覧したページ、参照元、国や地域、ブラウザや端末の種類などの統計情報が、Cloudflare社で収集・集計されます。Cookieは使用せず、個々の訪問者を追跡・特定する情報は取得しません(Cloudflare社の説明による)。取り扱いの詳細は、Cloudflare社のプライバシーポリシーをご確認ください。
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
