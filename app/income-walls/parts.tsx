import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

// 税金・年収の壁のページの部品と出典。タブごとの中身（single-panel.tsx・family-panel.tsx）から使う。

export type Source = { label: string; href: string }
export type Kind = "self-tax" | "family" | "insurance"

export const kindLabel: Record<Kind, string> = {
  "self-tax": "自分の税金",
  family: "家族の扶養",
  insurance: "保険",
}

// 自分の税金＝墨、家族の扶養＝黄、保険＝白地に墨の枠。黄の上は墨の文字（CLAUDE.mdの配色）
export const kindClass: Record<Kind, string> = {
  "self-tax": "bg-ink text-white",
  family: "bg-yellow text-ink",
  insurance: "border border-ink bg-white text-ink",
}

// 早見図。税は「〜を超える」、健康保険の扶養は「〜以上」で、境目の数え方が違う
export const sources = {
  ntaKaisei2026: { label: "国税庁「令和8年度税制改正による源泉所得税の改正のあらまし」", href: "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf" },
  ntaQa2026: { label: "国税庁「基礎控除の見直し等に関するQ&A（令和8年度改正）」", href: "https://www.nta.go.jp/users/gensen/2026kiso/pdf/0026005-024.pdf" },
  ntaKiso2025: { label: "国税庁「令和7年度税制改正による所得税の基礎控除の見直し等について」", href: "https://www.nta.go.jp/users/gensen/2025kiso/index.htm" },
  mofFinance: { label: "財務省「特集 令和8年度 税制改正（国税）等について」", href: "https://www.mof.go.jp/public_relations/finance/202604/202604c.html" },
  mofTaikou: { label: "財務省「令和8年度税制改正の大綱」", href: "https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/20251226taikou.pdf" },
  chuoResident: { label: "中央区「令和9年度から適用される個人住民税の改正」", href: "https://www.city.chuo.lg.jp/a0009/kurashi/zeikin/juuminzei/r9kaisei.html" },
  egovChihouzei: { label: "e-Gov法令検索「地方税法」（第24条の5、第295条）", href: "https://laws.e-gov.go.jp/law/325AC0000000226" },
  // 住民税の所得控除（配偶者控除・配偶者特別控除を含む）。34条は道府県民税、314条の2は市町村民税（2026/11/16、e-Govの本文で確認）
  egovChihouzeiKoujo: { label: "e-Gov法令検索「地方税法」（第34条、第314条の2）", href: "https://laws.e-gov.go.jp/law/325AC0000000226" },
  nta1180: { label: "国税庁 No.1180 扶養控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm" },
  nta1177: { label: "国税庁 No.1177 特定親族特別控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm" },
  nenkinDependent: { label: "日本年金機構「従業員が家族を被扶養者にするとき」", href: "https://www.nenkin.go.jp/service/kounen/tekiyo/hihokensha1/20141202.html" },
  nenkin19to22: { label: "日本年金機構「19歳以上23歳未満の方の被扶養者認定における年間収入要件」", href: "https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" },
  nenkinAgeTiming: { label: "日本年金機構「年齢要件（19歳以上23歳未満）は、いつの時点で判定するのですか」", href: "https://www.nenkin.go.jp/section/faq/kounen/dependents/aged19to22/timing.html" },
  mhlwContractQa: { label: "厚生労働省「労働契約内容による年間収入が基準額未満である場合の被扶養者の認定における年間収入の取扱いに係るQ&A」", href: "https://www.mhlw.go.jp/content/001678029.pdf" },
  nenkinContract: { label: "日本年金機構「労働契約内容による年間収入での被扶養者の認定」", href: "https://www.nenkin.go.jp/oshirase/taisetu/jigyosho/2026/202605/0501.html" },
  mhlwKabe: { label: "厚生労働省「『年収の壁』への対応」", href: "https://www.mhlw.go.jp/stf/taiou_001_00002.html" },
  nenkinWage: { label: "日本年金機構「2026年10月 短時間労働者の賃金要件の撤廃」", href: "https://www.nenkin.go.jp/oshirase/taisetu/jigyosho/2026/202610/100104.html" },
  mhlwPart: { label: "厚生労働省「パート・アルバイトの方への社会保険の適用について」", href: "https://www.mhlw.go.jp/tekiyoukakudai/seido/tanjikan" },
  nenkinMulti: { label: "日本年金機構「複数の事業所に雇用されるようになったときの手続き」", href: "https://www.nenkin.go.jp/service/kounen/tekiyo/hihokensha1/20131022.html" },
  egovKoyou: { label: "e-Gov法令検索「雇用保険法」（第6条）", href: "https://laws.e-gov.go.jp/law/349AC0000000116" },
  // 2か所で働く人は、主たる賃金を受ける1か所で入ることの根拠（法6条には書かれていない。2026/11/16、Q6の本文で確認）
  mhlwKoyouQa: { label: "厚生労働省「雇用保険制度 Q＆A～事業主の皆様へ」（Q6）", href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000140565.html" },
  nta1900: { label: "国税庁 No.1900 給与所得者で確定申告が必要な人", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm" },
  nta2520: { label: "国税庁 No.2520 2か所以上から給与をもらっている人の源泉徴収", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2520.htm" },
  yokohamaShinkoku: { label: "横浜市「市民税・県民税の申告について」", href: "https://www.city.yokohama.lg.jp/kurashi/koseki-zei-hoken/zeikin/y-shizei/kojin-shiminzei-kenminzei/kojin-shiminzei-shosai/shiminzei-shinkoku.html" },
  nta1191: { label: "国税庁 No.1191 配偶者控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm" },
  nta1195: { label: "国税庁 No.1195 配偶者特別控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm" },
  edogawaHikazei: { label: "江戸川区「住民税の非課税」", href: "https://www.city.edogawa.tokyo.jp/e013/kurashi/zeikin/juminzei/zei_gaiyo/hikazei.html" },
  nenkinSpouseJob: { label: "日本年金機構「配偶者が転職・退職したときの手続き」", href: "https://www.nenkin.go.jp/service/kokunen/kanyu/20120712.html" },
  nenkin3go: { label: "日本年金機構「3号不整合期間があると、将来の年金はどうなるのですか」", href: "https://www.nenkin.go.jp/section/faq/kokunen/seido/3go-fuseigou/20121203-02.html" },
  egovKokuminNenkin: { label: "e-Gov法令検索「国民年金法」（第7条、第12条、附則第3条）", href: "https://laws.e-gov.go.jp/law/334AC0000000141" },
  nenkinHokenryoChosei: { label: "日本年金機構「保険料調整制度とは」", href: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html" },
  nenkinChoseiJigyosho: { label: "日本年金機構「保険料調整制度の対象となる事業所・申出期限」", href: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/jigyosho.html" },
  nenkinChoseiHihokensha: { label: "日本年金機構「保険料調整制度の対象となる被保険者」", href: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/hihokensha.html" },
  // 配偶者が65歳になると第3号から外れることの根拠（2012年ごろの資料だった03.pdfから差し替え、2026/11/16）
  nenkinSpouse65: { label: "日本年金機構「第3号被保険者の配偶者（厚生年金等の加入者）が65歳になったときの手続き」", href: "https://www.nenkin.go.jp/service/kokunen/kanyu/20150119.html" },
  nta1175: { label: "国税庁 No.1175 勤労学生控除", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1175.htm" },
  chuoHikazei: { label: "中央区「住民税がかからない方」", href: "https://www.city.chuo.lg.jp/a0009/kurashi/zeikin/juuminzei/kakaranaikata.html" },
  nenkinGakusei: { label: "日本年金機構「国民年金保険料の学生納付特例制度」", href: "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html" },
  nenkinTanjikan: { label: "日本年金機構「短時間労働者に対する健康保険・厚生年金保険の適用の拡大」", href: "https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html" },
  nenkinQaKakudai: { label: "日本年金機構「短時間労働者に対する健康保険・厚生年金保険の適用拡大Q&A集（令和8年10月・令和9年10月施行分）」（問34）", href: "https://www.nenkin.go.jp/oshirase/topics/2021/0219.files/QA0810.pdf" },
  egovKokuho: { label: "e-Gov法令検索「国民健康保険法」（第76条）", href: "https://laws.e-gov.go.jp/law/333AC0000000192" },
  egovKokuminNenkinKisoku: { label: "e-Gov法令検索「国民年金法施行規則」（第6条の2）", href: "https://laws.e-gov.go.jp/law/335M50000100012" },
  egovKokuhoKisoku: { label: "e-Gov法令検索「国民健康保険法施行規則」（第3条）", href: "https://laws.e-gov.go.jp/law/333M50000100053" },
  // 令和7年度税制改正（103万円→123万円）を踏まえた事業主向けのリーフレット。2026年の改正を踏まえたものではない
  mhlwHaigushaTeate: { label: "厚生労働省「『配偶者手当』の在り方の検討をお願いします」", href: "https://www.mhlw.go.jp/content/11200000/001496664.pdf" },
} satisfies Record<string, Source>

// 赤い太字。赤い文字だけを拾い読みすると、要点がひととおり分かるように使う（ユーザー判断、2026/11/14）。
// 赤は白地の上で6.85:1（CLAUDE.mdの配色）
export function Em({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-red">{children}</strong>
}

// トップページと同じ「英字ラベル＋日本語の見出し」（web-mihoncho-4 PART7-03、CLAUDE.mdの「反復」）
export function EnLabel({ children }: { children: ReactNode }) {
  return <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red md:text-sm">{children}</p>
}

export function SectionHeading({ id, en, children }: { id: string; en: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <EnLabel>{en}</EnLabel>
      <h2 id={id} className="font-heading text-2xl font-bold text-foreground md:text-3xl">
        {children}
      </h2>
    </div>
  )
}

export function KindBadge({ kind }: { kind: Kind }) {
  return (
    <span className={`inline-block shrink-0 rounded-sm px-2 py-0.5 text-xs font-bold ${kindClass[kind]}`}>
      {kindLabel[kind]}
    </span>
  )
}

export function SourceList({ items }: { items: Source[] }) {
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

export function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-sm font-bold text-foreground">{label}</dt>
      <dd className="text-foreground/80">{children}</dd>
    </div>
  )
}

export function SumChip({ mode }: { mode: "sum" | "each" }) {
  return mode === "sum" ? (
    <span className="mr-1 inline-block rounded-sm bg-red px-2 py-0.5 text-xs font-bold text-white">合算</span>
  ) : (
    <span className="mr-1 inline-block rounded-sm border border-red bg-white px-2 py-0.5 text-xs font-bold text-red">勤め先ごと</span>
  )
}

export function WallCard({
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


export type TimelineItem = { amount: string; edge: string; label: string; kind: Kind; href: string }

export function WordsSection({ id, extra = [] }: { id: string; extra?: { term: string; desc: string }[] }) {
  return (
    <section aria-labelledby={id} className="space-y-5">
      <SectionHeading id={id} en="Words">このページで使う言葉</SectionHeading>
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
          ...extra,
        ].map((w) => (
          <div key={w.term} className="rounded-sm border border-border bg-white px-4 py-3">
            <dt className="font-bold text-foreground">{w.term}</dt>
            <dd className="mt-1 text-sm text-foreground/80">{w.desc}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

// 早見図：スマホで読みやすいよう、縦の数直線にする
export function TimelineSection({ id, items, children }: { id: string; items: TimelineItem[]; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="space-y-5">
      <SectionHeading id={id} en="Overview">年収の壁の早見図（2026年の収入）</SectionHeading>
      <ol className="relative ml-2 border-l-2 border-ink">
        {items.map((t) => (
          <li key={t.amount + t.label} className="relative">
            <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-red" aria-hidden="true" />
            <a href={t.href} className="block min-h-14 py-2 pl-6 hover:bg-white sm:flex sm:items-center sm:gap-3">
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
      <p className="text-sm text-foreground/80">{children}</p>
      <p className="text-sm text-foreground/70">項目を押すと、それぞれの説明に移ります。</p>
    </section>
  )
}
