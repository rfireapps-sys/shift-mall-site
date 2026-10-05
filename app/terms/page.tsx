import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `利用規約 | ${siteConfig.appName}`,
  description: `${siteConfig.appName} の利用規約`,
}

// 本文は、運営者から受け取った正式な文面（shift-mall-legal.pdf、2026年10月4日版）。
// 文言を勝手に変えないこと。変更するときは運営者に確認する。
// 2026/10/5: 運営者の指示で、サイトの用語にそろえて「仮想」を「空想」に統一した。
export default function TermsPage() {
  return (
    <LegalLayout title="利用規約" updatedAt="2026年10月5日">
      <p className="text-muted-foreground">運営者: {siteConfig.tradeName}</p>

      <LegalSection heading="第1条(はじめに)">
        <p>
          本規約は、{siteConfig.tradeName}(以下「運営者」)が提供するアプリ「{siteConfig.appName}」(以下「本アプリ」)の利用条件を定めるものです。本アプリをダウンロード・利用した時点で、利用者は本規約に同意したものとみなします。
        </p>
      </LegalSection>

      <LegalSection heading="第2条(提供内容)">
        <p>
          本アプリは、利用者が入力した勤務時間・給与条件をもとに、給与額・年収の見込みを自動計算し表示する機能と、その結果を使って買い物を体験できる空想ショッピング機能を提供します。計算結果はあくまで概算であり、実際の給与額・税額を保証するものではありません。
        </p>
      </LegalSection>

      <LegalSection heading="第3条(空想の財布・空想ショッピング)">
        <p>
          本アプリの財布の金額は、利用者が入力した勤務記録から計算した給与の見込みを表示するものであり、実際のお金ではありません。本アプリは、実際の金銭の入金・出金・決済・送金を一切行いません。
        </p>
        <p>
          空想ショッピングでの購入は、アプリ内のシミュレーションです。商品の注文・発送・配送は行いません。お届け先の登録は、アプリ内の演出にだけ使います。
        </p>
        <p>
          本アプリから外部のサイトや店舗を案内する場合、その先での取引は、利用者とその事業者との間のものであり、運営者は当事者ではありません。
        </p>
      </LegalSection>

      <LegalSection heading="第4条(免責事項)">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            本アプリの計算結果は、利用者が入力した情報にもとづく概算であり、実際の給与額・税額を保証するものではありません。正確な給与・税額については、雇用主または税理士等の専門家にご確認ください。
          </li>
          <li>
            本アプリのデータは、お使いの端末の中にだけ保存されます。端末の故障・紛失・初期化、アプリの削除、機種変更などでデータが失われても、運営者はデータを復元できません。必要に応じて、端末のバックアップ機能などをご利用ください。
          </li>
          <li>
            運営者が利用者に負う損害賠償責任は、運営者に軽過失がある場合に限り、利用者に直接生じた通常の損害の範囲に限ります。運営者に故意または重大な過失がある場合は、この限りではありません。
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="第5条(禁止事項)">
        <p>
          利用者は、本アプリの無断複製・改変・逆コンパイル・再配布その他運営者が不適切と判断する行為を行ってはならないものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第6条(有料機能)">
        <p>
          本アプリは、一部の機能を有料プランとして提供する場合があります。有料プランの購入手続きはApp Store / Google Playの規定に従うものとし、購入内容の復元は、プランの画面の「購入を復元」から行えます。
        </p>
      </LegalSection>

      <LegalSection heading="第7条(広告・外部サービス・個人情報)">
        <p>
          本アプリには広告が表示されます。本アプリが利用する外部サービスと、情報の取り扱いは、プライバシーポリシーに定めるとおりです。
        </p>
      </LegalSection>

      <LegalSection heading="第8条(規約の変更)">
        <p>
          運営者は、必要と判断した場合、本規約の内容を変更できるものとします。変更後の規約は、アプリ内または公式サイトに掲載した時点から効力を生じるものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第9条(準拠法・管轄)">
        <p>
          本規約の解釈にあたっては日本法を準拠法とします。本アプリに関して紛争が生じた場合には、法律上管轄権を有する裁判所に加え、東京地方裁判所を第一審の付加的合意管轄裁判所とします。
        </p>
      </LegalSection>

      <LegalSection heading="第10条(お問い合わせ)">
        <p>
          本規約に関するお問い合わせは、運営者の公式LINE(
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {siteConfig.lineUrl}
          </a>
          )よりご連絡ください。設定画面の「フィードバックを送る」からも開けます。
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
