import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { LegalLayout } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `税金・年収の壁について | ${siteConfig.appName}`,
  description:
    "2026年の収入にあてはまる「年収の壁」（住民税・所得税・扶養・社会保険）を、掛け持ちで働く人向けに、国税庁・厚生労働省・日本年金機構などの公表資料をもとにまとめました。",
}

// 金額と制度は、2026/11/13〜14に国の一次情報（国税庁・財務省・厚生労働省・日本年金機構・e-Govの法令）で確かめたもの。
// 住民税は市区町村が決めるので、自治体（中央区・横浜市）の公式ページも出典にしている。
// 2026/11/14に、社労士の立場のレビューと別の役の反証で残った指摘（22件）を反映した。
// 毎年の税制改正（12月ごろに大綱、春に成立）と、社会保険の企業規模の条件の段階的な縮小（2027年10月〜）のたびに見直すこと。
// 2028年分以後の所得税の金額は未定（今の法律のままなら168万円だが、財務省は178万円を維持する方針）なので、載せていない。
// 雇用保険の週10時間への改正（2028年10月の予定とされる）は、一次資料の本文を確かめられていないので、載せていない。

type Source = { label: string; href: string }
type Kind = "self-tax" | "family" | "insurance"

const kindLabel: Record<Kind, string> = {
  "self-tax": "自分の税金",
  family: "家族の扶養",
  insurance: "保険",
}

// 自分の税金＝墨、家族の扶養＝黄、保険＝白地に墨の枠。黄の上は墨の文字（CLAUDE.mdの配色）
const kindClass: Record<Kind, string> = {
  "self-tax": "bg-ink text-white",
  family: "bg-yellow text-ink",
  insurance: "border border-ink bg-white text-ink",
}

// 早見図。税は「〜を超える」、健康保険の扶養は「〜以上」で、境目の数え方が違う
const timeline: { amount: string; edge: string; label: string; kind: Kind; href: string }[] = [
  { amount: "119万円", edge: "を超える", label: "住民税がかかり始める（目安）", kind: "self-tax", href: "#resident-tax" },
  { amount: "130万円", edge: "以上", label: "家族の健康保険の扶養から外れる", kind: "insurance", href: "#health-insurance" },
  { amount: "136万円", edge: "を超える", label: "家族の税金の扶養から外れる", kind: "family", href: "#family-tax" },
  { amount: "150万円", edge: "以上", label: "家族の健康保険の扶養から外れる（19〜22歳）", kind: "insurance", href: "#health-insurance" },
  { amount: "159万円", edge: "を超える", label: "親の控除が減り始める（19〜22歳）", kind: "family", href: "#age-19-22" },
  { amount: "178万円", edge: "を超える", label: "所得税がかかり始める", kind: "self-tax", href: "#income-tax" },
  { amount: "197万円", edge: "を超える", label: "親の控除がなくなる（19〜22歳）", kind: "family", href: "#age-19-22" },
]

const sources = {
  ntaKaisei2026: { label: "国税庁「令和8年度税制改正による源泉所得税の改正のあらまし」", href: "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf" },
  ntaQa2026: { label: "国税庁「基礎控除の見直し等に関するQ&A（令和8年度改正）」", href: "https://www.nta.go.jp/users/gensen/2026kiso/pdf/0026005-024.pdf" },
  ntaKiso2025: { label: "国税庁「令和7年度税制改正による所得税の基礎控除の見直し等について」", href: "https://www.nta.go.jp/users/gensen/2025kiso/index.htm" },
  mofFinance: { label: "財務省「特集 令和8年度 税制改正（国税）等について」", href: "https://www.mof.go.jp/public_relations/finance/202604/202604c.html" },
  mofTaikou: { label: "財務省「令和8年度税制改正の大綱」", href: "https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/20251226taikou.pdf" },
  chuoResident: { label: "中央区「令和9年度から適用される個人住民税の改正」", href: "https://www.city.chuo.lg.jp/a0009/kurashi/zeikin/juuminzei/r9kaisei.html" },
  egovChihouzei: { label: "e-Gov法令検索「地方税法」（第24条の5、第295条）", href: "https://laws.e-gov.go.jp/law/325AC0000000226" },
  nta1180: { label: "国税庁 No.1180 扶養控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm" },
  nta1177: { label: "国税庁 No.1177 特定親族特別控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm" },
  nenkinDependent: { label: "日本年金機構「従業員が家族を被扶養者にするとき」", href: "https://www.nenkin.go.jp/service/kounen/tekiyo/hihokensha1/20141202.html" },
  nenkin19to22: { label: "日本年金機構「19歳以上23歳未満の方の被扶養者認定における年間収入要件」", href: "https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" },
  nenkinAgeTiming: { label: "日本年金機構「年齢要件（19歳以上23歳未満）は、いつの時点で判定するのですか」", href: "https://www.nenkin.go.jp/section/faq/kounen/dependents/aged19to22/timing.html" },
  nenkinContract: { label: "日本年金機構「労働契約内容による年間収入での被扶養者の認定」", href: "https://www.nenkin.go.jp/oshirase/taisetu/jigyosho/2026/202605/0501.html" },
  mhlwKabe: { label: "厚生労働省「『年収の壁』への対応」", href: "https://www.mhlw.go.jp/stf/taiou_001_00002.html" },
  nenkinWage: { label: "日本年金機構「2026年10月 短時間労働者の賃金要件の撤廃」", href: "https://www.nenkin.go.jp/oshirase/taisetu/jigyosho/2026/202610/100104.html" },
  mhlwPart: { label: "厚生労働省「パート・アルバイトの方への社会保険の適用について」", href: "https://www.mhlw.go.jp/tekiyoukakudai/seido/tanjikan" },
  nenkinMulti: { label: "日本年金機構「複数の事業所に雇用されるようになったときの手続き」", href: "https://www.nenkin.go.jp/service/kounen/tekiyo/hihokensha1/20131022.html" },
  egovKoyou: { label: "e-Gov法令検索「雇用保険法」（第6条）", href: "https://laws.e-gov.go.jp/law/349AC0000000116" },
  nta1900: { label: "国税庁 No.1900 給与所得者で確定申告が必要な人", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm" },
  nta2520: { label: "国税庁 No.2520 2か所以上から給与をもらっている人の源泉徴収", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2520.htm" },
  yokohamaShinkoku: { label: "横浜市「市民税・県民税の申告について」", href: "https://www.city.yokohama.lg.jp/kurashi/koseki-zei-hoken/zeikin/y-shizei/kojin-shiminzei-kenminzei/kojin-shiminzei-shosai/shiminzei-shinkoku.html" },
} satisfies Record<string, Source>

// 赤い太字。赤い文字だけを拾い読みすると、要点がひととおり分かるように使う（ユーザー判断、2026/11/14）。
// 赤は白地の上で6.85:1（CLAUDE.mdの配色）
function Em({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-red">{children}</strong>
}

// トップページと同じ「英字ラベル＋日本語の見出し」（web-mihoncho-4 PART7-03、CLAUDE.mdの「反復」）
function EnLabel({ children }: { children: ReactNode }) {
  return <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red md:text-sm">{children}</p>
}

function SectionHeading({ id, en, children }: { id: string; en: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <EnLabel>{en}</EnLabel>
      <h2 id={id} className="font-heading text-2xl font-bold text-foreground md:text-3xl">
        {children}
      </h2>
    </div>
  )
}

function KindBadge({ kind }: { kind: Kind }) {
  return (
    <span className={`inline-block shrink-0 rounded-sm px-2 py-0.5 text-xs font-bold ${kindClass[kind]}`}>
      {kindLabel[kind]}
    </span>
  )
}

function SourceList({ items }: { items: Source[] }) {
  return (
    <div className="border-t border-border pt-3">
      <p className="text-xs font-bold text-foreground/70">出典</p>
      <ul className="mt-1">
        {items.map((s) => (
          <li key={s.href}>
            {/* 押せる高さを44px近くにする（実装チェックリスト①） */}
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 py-2 text-sm text-foreground/80 underline decoration-border underline-offset-4 hover:text-foreground"
            >
              {s.label}
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="sr-only">（新しいタブで開きます）</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-sm font-bold text-foreground">{label}</dt>
      <dd className="text-foreground/80">{children}</dd>
    </div>
  )
}

function SumChip({ mode }: { mode: "sum" | "each" }) {
  return mode === "sum" ? (
    <span className="mr-1 inline-block rounded-sm bg-red px-2 py-0.5 text-xs font-bold text-white">合算</span>
  ) : (
    <span className="mr-1 inline-block rounded-sm border border-red bg-white px-2 py-0.5 text-xs font-bold text-red">勤め先ごと</span>
  )
}

function WallCard({
  id,
  en,
  kind,
  amount,
  title,
  children,
  before,
  sourceItems,
}: {
  id: string
  en: string
  kind: Kind
  amount: ReactNode
  title: string
  children: ReactNode
  before?: ReactNode
  sourceItems: Source[]
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 rounded-sm border border-ink bg-white p-5 shadow-flat md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <EnLabel>{en}</EnLabel>
        <KindBadge kind={kind} />
      </div>
      <p className="mt-3 font-heading text-4xl font-bold tabular-nums text-red md:text-5xl">{amount}</p>
      <h2 id={`${id}-title`} className="mt-2 font-heading text-xl font-bold text-foreground md:text-2xl">{title}</h2>
      <dl className="mt-6 space-y-5">{children}</dl>
      {before && (
        <p className="mt-6 rounded-sm bg-background px-3 py-2 text-sm text-foreground/80">{before}</p>
      )}
      <div className="mt-5">
        <SourceList items={sourceItems} />
      </div>
    </section>
  )
}

export default function IncomeWallsPage() {
  return (
    <LegalLayout title="税金・年収の壁について" updatedAt="2026年11月14日">
      <div className="space-y-4">
        <p className="text-foreground/80">
          「年収の壁」は、収入がある金額を超えると、税金や社会保険料がかかり始めたり、家族の扶養から外れたりする境目のことです。このページでは、<Em>2026年の収入にあてはまる金額</Em>を中心にまとめます。掛け持ちで働く人が迷いやすい「収入を合算するのか、勤め先ごとに見るのか」も書きます。
        </p>
        <p className="rounded-sm border border-border bg-white px-4 py-3 text-sm text-foreground/80">
          金額は、<Em>収入が給与だけで、扶養している家族がいない場合の目安</Em>です。フリーランスや業務委託の収入がある人は、数え方が変わるところがあります。このページは一般的な説明なので、自分の場合どうなるかは、ページの最後の相談先で確認してください。
        </p>
      </div>

      <section aria-labelledby="words-heading" className="space-y-5">
        <SectionHeading id="words-heading" en="Words">このページで使う言葉</SectionHeading>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            {
              term: "扶養に入る",
              desc: "親や配偶者に養われている家族として扱われることです。税金と健康保険では、扶養に入れる収入の上限が別々に決まっています。",
            },
            {
              term: "控除",
              desc: "税金を計算するときに、収入から差し引ける金額です。控除が多いほど、税金は少なくなります。",
            },
          ].map((w) => (
            <div key={w.term} className="rounded-sm border border-border bg-white px-4 py-3">
              <dt className="font-bold text-foreground">{w.term}</dt>
              <dd className="mt-1 text-sm text-foreground/80">{w.desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 早見図：スマホで読みやすいよう、縦の数直線にする */}
      <section aria-labelledby="timeline-heading" className="space-y-5">
        <SectionHeading id="timeline-heading" en="Overview">年収の壁の早見図（2026年の収入）</SectionHeading>
        <ol className="relative ml-2 border-l-2 border-ink">
          {timeline.map((t) => (
            <li key={t.amount + t.label} className="relative">
              <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-red" aria-hidden="true" />
              <a
                href={t.href}
                className="block min-h-14 py-2 pl-6 hover:bg-white sm:flex sm:items-center sm:gap-3"
              >
                <span className="block font-heading font-bold tabular-nums text-red sm:w-36 sm:shrink-0">
                  <span className="text-lg">{t.amount}</span>
                  <span className="ml-0.5 text-xs">{t.edge}</span>
                </span>
                <span className="mt-0.5 flex flex-1 items-center justify-between gap-3 sm:mt-0">
                  <span className="text-sm text-foreground">{t.label}</span>
                  <KindBadge kind={t.kind} />
                </span>
              </a>
            </li>
          ))}
        </ol>
        <p className="text-sm text-foreground/80">
          税金は1月から12月までの収入で見て、健康保険の扶養は、これからの1年間の収入の見込みで見ます。年収とは別に、<Em>勤め先の社会保険に入ると、130万円未満でも家族の健康保険の扶養から外れます。</Em>
        </p>
        <p className="text-sm text-foreground/70">項目を押すと、それぞれの説明に移ります。</p>
      </section>

      <WallCard
        id="resident-tax"
        en="Resident Tax"
        kind="self-tax"
        amount="約119万円"
        title="住民税がかかり始める（目安）"
        before="2025年の収入なら、目安は110万円です。"
        sourceItems={[sources.chuoResident, sources.mofTaikou, sources.egovChihouzei]}
      >
        <Row label="だれに関係？">収入があるすべての人</Row>
        <Row label="どうなる？">
          東京23区などで、扶養している家族がいなければ、2026年の給与が<Em>約119万円以下で住民税がかかりません。</Em>この住民税は、2027年度に払うものです。
        </Row>
        <Row label="気をつけること">
          金額は、<Em>住んでいる市区町村や家族構成で変わります。</Em>正確な金額は、お住まいの市区町村で確認してください。18歳未満の人には別の基準があり、合計所得が135万円以下なら住民税がかかりません。
        </Row>
      </WallCard>

      <WallCard
        id="health-insurance"
        en="Health Insurance"
        kind="insurance"
        amount={<>130万円<span className="mt-1 block text-lg md:text-xl">19〜22歳は150万円</span></>}
        title="家族の健康保険の扶養から外れる"
        sourceItems={[sources.nenkinDependent, sources.nenkin19to22, sources.nenkinAgeTiming, sources.nenkinContract, sources.mhlwKabe]}
      >
        <Row label="だれに関係？">
          親や配偶者が勤め先の健康保険に入っていて、その扶養に入っている人。家族が国民健康保険のときは、扶養の仕組みがないので、この壁は関係ありません。
        </Row>
        <Row label="どうなる？">
          これからの1年間の収入の見込みが<Em>130万円以上になると、扶養から外れます。</Em>月の目安は108,333円です。家族と一緒に住んでいる場合は、家族の収入の半分未満であることも条件です。外れたあとは、自分で国民健康保険に入るか、勤め先の社会保険に入って、<Em>保険料を自分で払います。</Em>配偶者の扶養に入っていた人が勤め先の社会保険に入らない場合は、国民年金の保険料も自分で払うことになります。
        </Row>
        <Row label="19〜22歳の人">
          2025年10月から、<Em>150万円未満なら扶養に入れる</Em>ようになりました（配偶者として扶養に入っている人は除きます）。19〜22歳かどうかは、その年の12月31日時点の年齢で見ます。
        </Row>
        <Row label="130万円未満でも外れるとき">
          週20時間以上などの条件で勤め先の社会保険に入ると、<Em>年収が130万円未満でも、家族の健康保険の扶養から外れます。</Em>
        </Row>
        <Row label="2026年4月から">
          収入が給与だけの人について、家族の健康保険は、労働契約に書かれた賃金をもとに収入の見込みを判定できるようになりました。契約に書かれていない残業代は、ふつうの範囲なら、この見込みに入りません。ただし、シフト制で労働時間が契約に書かれていない場合や、契約期間が1年未満の場合などは、この方法を使えません。
        </Row>
        <Row label="一時的に増えたとき">
          残業などで一時的に収入が増えたときは、勤め先の証明があれば、扶養のままでいられる場合があります（原則として連続2回まで）。
        </Row>
        <Row label="フリーランスの収入">フリーランスや業務委託の収入は、売上から経費を引いた額で見ます。</Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="sum" /> 収入は合算して見るのが基本です。通勤手当を含めるかなどの細かい扱いは、家族が加入している健康保険に確認してください。
        </Row>
      </WallCard>

      <WallCard
        id="family-tax"
        en="Family Tax"
        kind="family"
        amount="136万円"
        title="家族の税金の扶養から外れる"
        before="2025年の収入なら123万円です。"
        sourceItems={[sources.ntaKaisei2026, sources.nta1180]}
      >
        <Row label="だれに関係？">親や配偶者に、税金の上で扶養されている人</Row>
        <Row label="どうなる？">
          <Em>給与が136万円以下なら、親や配偶者は、あなたを扶養にして控除を受けられます。</Em>この壁で変わるのは、<Em>あなたの税金ではなく、家族の税金</Em>です。配偶者の場合は、136万円を超えても、収入に応じて減っていく「配偶者特別控除」があります。
        </Row>
        <Row label="気をつけること">
          2026年の改正で新しく扶養の対象になったときは、親や配偶者が勤め先に「扶養控除等申告書」を出す必要があります。
        </Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="sum" /> すべての収入を合算します。
        </Row>
      </WallCard>

      <WallCard
        id="age-19-22"
        en="Age 19–22"
        kind="family"
        amount={<>159万円<span className="mx-2 text-2xl md:text-3xl">と</span>197万円</>}
        title="19〜22歳の人と、親の控除"
        before="2025年の収入なら、それぞれ150万円と188万円です。"
        sourceItems={[sources.nta1177, sources.ntaKaisei2026]}
      >
        <Row label="だれに関係？">親に扶養されている19〜22歳の人</Row>
        <Row label="どうなる？">
          親の所得税では、子の給与が<Em>159万円以下なら、親は満額の控除を受けられます。</Em>159万円を超えると控除は段階的に減り、<Em>197万円を超えるとなくなります。</Em>年齢は、その年の12月31日時点で見ます。住民税では、金額と区切りが違います。
        </Row>
      </WallCard>

      <WallCard
        id="income-tax"
        en="Income Tax"
        kind="self-tax"
        amount="178万円"
        title="所得税がかかり始める"
        before="2025年の収入なら160万円です。この160万円は、国税庁の資料の控除額から計算した金額です。2028年以降の金額は、これからの税制改正で決まります。"
        sourceItems={[sources.ntaKaisei2026, sources.mofFinance, sources.ntaQa2026, sources.ntaKiso2025]}
      >
        <Row label="だれに関係？">収入があるすべての人</Row>
        <Row label="どうなる？">
          2026年と2027年の収入は、<Em>給与が178万円以下なら所得税がかかりません。</Em>
        </Row>
        <Row label="いつから？">
          2026年の収入全体に、この金額があてはまります。ただ、毎月の給与から引かれる所得税は11月まで前のままで、<Em>差は12月の年末調整で戻ります。</Em>年末調整を受けない人（11月までに仕事を辞めた人など）や、メイン以外の勤め先の給与は、確定申告で精算します。
        </Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="sum" /> すべての勤め先の収入を合算します。
        </Row>
      </WallCard>

      <WallCard
        id="social-insurance"
        en="Social Insurance"
        kind="insurance"
        amount={<><s className="text-foreground/50">106万円</s><span className="ml-3 align-middle rounded-sm bg-ink px-2 py-1 text-base text-white md:text-lg">なくなりました</span></>}
        title="勤め先の社会保険に入る条件"
        sourceItems={[sources.nenkinWage, sources.mhlwPart, sources.nenkinMulti, sources.egovKoyou]}
      >
        <Row label="何が変わった？">
          以前は、条件の一つが「月8.8万円（年収で約106万円）以上」でした。この条件は、<Em>2026年10月1日になくなりました。</Em>
        </Row>
        <Row label="今の条件">
          <span className="block">次の4つにすべてあてはまると、勤め先の社会保険に入ります。<Em>年収は条件に入っていません。</Em></span>
          <ul className="mt-3 space-y-2">
            {[
              "契約で決まった週の労働時間が20時間以上",
              "2か月を超えて働く見込みがある",
              "学生ではない（休学中・定時制・通信制の人は対象）",
              "勤め先の会社で、厚生年金に入っている人が51人以上",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden="true" />
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>
          <span className="mt-3 block">
            会社の人数の条件は、2027年10月から段階的に下がり、2035年10月になくなります。残業で週20時間を超える状態が続くときは、対象になることがあります。
          </span>
        </Row>
        <Row label="4分の3以上働く人">
          週の労働時間と月の労働日数が、同じ職場のフルタイムの人の4分の3以上なら、<Em>会社の人数の条件がなくても入ります。</Em>学生でも入ります。ただし、個人経営のお店などでは、入らない場合もあります。
        </Row>
        <Row label="入ると変わること">
          <Em>勤め先の社会保険に入ると、家族の健康保険の扶養から外れます。</Em>
        </Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="each" /> 加入するかどうかは、勤め先ごとに判定します。2か所の労働時間を足して、週20時間以上かどうかを見ることはしません。2か所とも条件を満たしたときは届け出をして、2か所の給与を合わせた額で保険料が決まります。詳しくは勤め先に確認してください。
        </Row>
        <Row label="雇用保険">雇用保険は、今は週20時間以上で入ります。2か所で働く人は、原則として主な1か所で入ります。</Row>
      </WallCard>

      <section aria-labelledby="multi-heading" className="space-y-5">
        <SectionHeading id="multi-heading" en="Multiple Jobs">掛け持ちで働く人が気をつけること</SectionHeading>
        <div className="overflow-hidden rounded-sm border border-ink bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-foreground/5 text-foreground">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">壁</th>
                <th scope="col" className="px-4 py-3 font-bold">収入の数え方</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {[
                { name: "所得税・住民税", mode: "sum" as const },
                { name: "家族の税金の扶養", mode: "sum" as const },
                { name: "家族の健康保険の扶養", mode: "sum" as const, note: "基本" },
                { name: "勤め先の社会保険への加入", mode: "each" as const },
              ].map((r) => (
                <tr key={r.name}>
                  <th scope="row" className="px-4 py-3 font-medium">{r.name}</th>
                  <td className="px-4 py-3">
                    <SumChip mode={r.mode} />
                    {r.note && <span className="ml-1 text-foreground/70">（{r.note}）</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-sm border border-ink bg-white p-5 shadow-flat md:p-7">
          <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">確定申告が必要になるとき</h3>
          <p className="mt-3 text-foreground/80">
            <Em>扶養控除等申告書を出せるのは、メインの勤め先1か所だけです。</Em>メイン以外の勤め先の給与は、ふつう年末調整されません。<Em>次の合計が20万円を超えると、確定申告が必要です。</Em>給与の合計が少ないときなど、必要ない場合もあります。
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold text-foreground">
            <span className="rounded-sm border border-ink px-3 py-2">年末調整されなかった給与</span>
            <span aria-hidden="true">＋</span>
            <span className="rounded-sm border border-ink px-3 py-2">給与以外の所得</span>
            <span aria-hidden="true">＞</span>
            <span className="rounded-sm bg-red px-3 py-2 text-white">20万円</span>
          </div>
          <p className="mt-4 text-sm text-foreground/80">
            給与以外の所得は、売上から経費を引いた額です。メイン以外の勤め先では、給与が少なくても所得税が引かれ、<Em>引かれすぎた分は確定申告で戻ることがあります。</Em>所得税の確定申告が要らない場合でも、住民税の申告が必要なことがあるので、お住まいの市区町村で確認してください。
          </p>
          <div className="mt-5">
            <SourceList items={[sources.nta1900, sources.nta2520, sources.yokohamaShinkoku]} />
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="space-y-5">
        <SectionHeading id="contact-heading" en="Contact">わからないときの相談先</SectionHeading>
        <p className="text-foreground/80">このページは、一般的な説明です。<Em>自分の場合どうなるかは、次の窓口に相談してください。</Em></p>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            { topic: "所得税", place: "税務署" },
            { topic: "住民税", place: "お住まいの市区町村" },
            { topic: "勤め先の社会保険・雇用保険", place: "勤め先" },
            { topic: "健康保険の扶養", place: "家族が加入している健康保険、年金事務所" },
          ].map((c) => (
            <div key={c.topic} className="rounded-sm border border-border bg-white px-4 py-3">
              <dt className="text-sm font-bold text-foreground">{c.topic}</dt>
              <dd className="mt-1 text-foreground/80">{c.place}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm text-foreground/70">
          金額と制度は、国税庁・財務省・厚生労働省・日本年金機構の公表資料と法令（住民税は市区町村の公表資料）をもとに、2026年11月14日時点でまとめています。
        </p>
      </section>
    </LegalLayout>
  )
}
