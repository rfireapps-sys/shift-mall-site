import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `推奨環境について | ${siteConfig.appName}`,
  description: `${siteConfig.appName}を快適にご利用いただくための推奨環境（対応OS）のご案内`,
}

// 対応OSの値は、アプリ側リポジトリ(work_simulator)の設定から確認したもの（2026/10/7時点）。
//   iOS: IPHONEOS_DEPLOYMENT_TARGET = 15.0 / Android: minSdk 24 (= Android 7.0)
// アプリのリリースや、Flutterのバージョンを上げたときは、値が変わっていないか確認して更新すること。
const supportedOs = [
  { os: "iOS（iPhone）", version: "iOS 15.0 以上" },
  { os: "Android", version: "Android 7.0 以上" },
]

const faqs = [
  {
    q: "Q1. 推奨環境より古いOSでも利用できますか？",
    a: "推奨環境より古いOSでは、アプリをインストールできない、または一部の機能が正しく動作しない可能性があります。快適にご利用いただくために、推奨環境でのご利用をお願いします。",
  },
  {
    q: "Q2. アプリが正しく動作しない場合はどうすればよいですか？",
    a: "まず、お使いの端末のOSが推奨環境に該当するかをご確認ください。該当している場合は、アプリを最新版にアップデートし、アプリと端末を再起動してお試しください。それでも解決しない場合は、公式LINEまたはアプリ内の「フィードバックを送る」からご連絡ください。",
  },
  {
    q: "Q3. OSのバージョンはどこで確認できますか？",
    a: "iPhoneは「設定」→「一般」→「情報」の「iOSバージョン」、Androidは「設定」→「デバイス情報（または端末情報）」の「Androidバージョン」から確認できます。機種によって表示場所や名称が異なる場合があります。",
  },
]

export default function RecommendedEnvironmentPage() {
  return (
    <LegalLayout title="推奨環境について" updatedAt="2026年10月7日">
      <p className="text-muted-foreground">
        {siteConfig.appName}をより快適にご利用いただくために、以下の環境でのご利用を推奨しております。推奨環境以外でのご利用の場合、一部の機能が正常に動作しない可能性がありますので、あらかじめご了承ください。
      </p>

      <LegalSection heading="スマートフォンでご利用の場合">
        <div className="overflow-hidden rounded-sm border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-foreground/5 text-foreground">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">OS</th>
                <th scope="col" className="px-4 py-3 font-bold">対応バージョン</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground/80">
              {supportedOs.map((row) => (
                <tr key={row.os}>
                  <th scope="row" className="px-4 py-3 font-medium text-foreground">{row.os}</th>
                  <td className="px-4 py-3">{row.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          {siteConfig.appName}は、App Store（iPhone）またはGoogle Play（Android）からインストールするアプリです。
        </p>
      </LegalSection>

      <LegalSection heading="ご利用にあたっての注意事項">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            推奨環境より古いOSでは、アプリをインストールできない、または一部の機能が動作しないなどの不具合が起こる可能性があります。
          </li>
          <li>
            安定してご利用いただくために、お使いの端末のOSとアプリを、最新の状態にアップデートすることをおすすめします。
          </li>
          <li>
            推奨環境は、今後のアプリの更新にともなって変更になることがあります。
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="よくある質問">
        <dl className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="space-y-2">
              <dt className="font-bold text-foreground">{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </LegalSection>

      <p className="text-muted-foreground">
        ご不明な点がございましたら、
        <a
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          公式LINE
        </a>
        よりお気軽にご連絡ください。
      </p>
    </LegalLayout>
  )
}
