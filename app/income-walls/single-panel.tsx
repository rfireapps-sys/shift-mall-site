import { Check } from "lucide-react"
import { type TimelineItem, sources, Em, SectionHeading, SourceList, Row, SumChip, WallCard, WordsSection, TimelineSection } from "./parts"

const timeline: TimelineItem[] = [
  { amount: "119万円", edge: "を超える", label: "住民税がかかり始める（目安）", kind: "self-tax", href: "#resident-tax" },
  { amount: "130万円", edge: "以上", label: "家族の健康保険の扶養から外れる（19〜22歳の子は150万円）", kind: "insurance", href: "#health-insurance" },
  { amount: "136万円", edge: "を超える", label: "家族の税金の扶養から外れる", kind: "family", href: "#family-tax" },
  { amount: "150万円", edge: "以上", label: "家族の健康保険の扶養から外れる（19〜22歳の子。配偶者を除く）", kind: "insurance", href: "#health-insurance" },
  { amount: "159万円", edge: "を超える", label: "親の所得税の控除が減り始める（19〜22歳）", kind: "family", href: "#age-19-22" },
  { amount: "178万円", edge: "を超える", label: "所得税がかかり始める", kind: "self-tax", href: "#income-tax" },
  { amount: "197万円", edge: "を超える", label: "親の所得税の控除がなくなる（19〜22歳）", kind: "family", href: "#age-19-22" },
]


// 1つ目のタブ：ひとりで働く人・家族の扶養に入っている人
export function SinglePanel() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-foreground/80">
          「年収の壁」は、収入がある金額を超えると、税金や社会保険料がかかり始めたり、家族の扶養から外れたりする境目のことです。このページでは、<Em>2026年の収入にあてはまる金額</Em>を中心にまとめます。掛け持ちで働く人が迷いやすい「収入を合算するのか、勤め先ごとに見るのか」も書きます。
        </p>
        <p className="rounded-sm border border-border bg-white px-4 py-3 text-sm text-foreground/80">
          金額は、<Em>収入が給与だけで、扶養している家族がいない場合の目安</Em>です。フリーランスや業務委託の収入がある人は、数え方が変わるところがあります。このページは一般的な説明なので、自分の場合どうなるかは、ページの最後の相談先で確認してください。
        </p>
      </div>

      <WordsSection id="words-heading" />

      <TimelineSection id="timeline-heading" items={timeline}>
        税金は1月から12月までの収入で見て、健康保険の扶養は、これからの1年間の収入の見込みで見ます。年収とは別に、<Em>勤め先の社会保険に入ると、130万円未満でも家族の健康保険の扶養から外れます。</Em>
      </TimelineSection>

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
          金額は、<Em>住んでいる市区町村や家族構成で変わります。</Em>正確な金額は、お住まいの市区町村で確認してください。18歳未満の人には別の基準があり、合計所得が135万円以下（給与だけなら約209万円以下）なら住民税がかかりません。
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
          これからの1年間の収入の見込みが<Em>130万円以上になると、扶養から外れます。</Em>月の目安は108,333円です。家族と一緒に住んでいる場合は、家族の収入の半分未満であることも条件です。<Em>離れて暮らしている場合は、家族からの仕送りの額より収入が少ないことも条件です。</Em>外れたあとは、自分で国民健康保険に入るか、勤め先の社会保険に入って、<Em>保険料を自分で払います。</Em>配偶者の扶養に入っていた人が勤め先の社会保険に入らない場合は、国民年金の保険料も自分で払うことになります。
        </Row>
        <Row label="外れるとき">扶養から外れるときは、家族が勤め先を通して、その都度届け出ます。</Row>
        <Row label="19〜22歳の人">
          2025年10月から、<Em>150万円未満なら扶養に入れる</Em>ようになりました（配偶者として扶養に入っている人は除きます）。19〜22歳かどうかは、その年の12月31日時点の年齢で見ます。150万円を12か月で割ると、月12万5,000円です。
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
        <Row label="国民年金">20歳以上の人は、家族の扶養に入っていても、国民年金の保険料がかかります。保険料がかからない第3号は、配偶者の扶養に入っている人だけです。</Row>
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
        <Row label="だれに関係？">親や配偶者に、税金の上で養われている人</Row>
        <Row label="どうなる？">
          <Em>給与が136万円以下なら、親や配偶者は、あなたを扶養にして控除を受けられます。</Em>この壁で変わるのは、<Em>あなたの税金ではなく、家族の税金</Em>です。配偶者の場合は、136万円を超えても、収入に応じて減っていく「配偶者特別控除」があります。<Em>19〜22歳の子の場合、親の所得税の控除は、136万円を超えても159万円まで変わりません</Em>（下の19〜22歳の説明を見てください）。
        </Row>
        <Row label="気をつけること">
          2026年の改正で子が新しく扶養の対象になったときは、親が勤め先に「扶養控除等申告書」を出します。配偶者の場合は、年末調整で「配偶者控除等申告書」を出します。
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
        <Row label="だれに関係？">親に養われている19〜22歳の人</Row>
        <Row label="どうなる？">
          <Em>親の所得税では、子の給与が159万円以下なら、親は満額の控除を受けられます。</Em>159万円を超えると控除は段階的に減り、<Em>197万円を超えると親の所得税の控除はなくなります。</Em>年齢は、その年の12月31日時点で見ます。住民税では、金額と区切りが違います。
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
          2026年の収入全体に、この金額があてはまります。ただ、毎月の給与から引かれる所得税は11月まで前のままで、<Em>メインの勤め先の給与の差は、12月の年末調整で戻ります。</Em><Em>年末調整を受けない人（11月までに仕事を辞めた人など）や、メイン以外の勤め先の給与は、確定申告で精算します。</Em>
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
          <SumChip mode="each" /> 加入するかどうかは、勤め先ごとに判定します。2か所の労働時間を足して、週20時間以上かどうかを見ることはしません。2か所とも条件を満たしたときは、本人が10日以内に届け出をして、2か所の給与を合わせた額で保険料が決まります。詳しくは勤め先や年金事務所に確認してください。
        </Row>
        <Row label="雇用保険">雇用保険は、週20時間以上で、31日以上働く見込みがあると入ります。昼間の学生は、原則として入りません。2か所で働く人は、原則として主な1か所で入ります。</Row>
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
            <Em>扶養控除等申告書を出せるのは、メインの勤め先1か所だけです。</Em>メイン以外の勤め先の給与は、ふつう年末調整されません。<Em>次の合計が20万円を超えると、確定申告が必要です（払いすぎた税金が戻るだけの人は、申告の義務はありません）。</Em>給与の合計が少ないときなど、必要ない場合もあります。
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
            { topic: "健康保険の扶養", place: "家族の勤め先（家族が協会けんぽに入っているときは年金事務所）" },
            { topic: "国民健康保険・国民年金", place: "お住まいの市区町村" },
          ].map((c) => (
            <div key={c.topic} className="rounded-sm border border-border bg-white px-4 py-3">
              <dt className="text-sm font-bold text-foreground">{c.topic}</dt>
              <dd className="mt-1 text-foreground/80">{c.place}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm text-foreground/70">
          金額と制度は、国税庁・財務省・厚生労働省・日本年金機構の公表資料と法令（住民税は市区町村の公表資料）をもとに、2026年11月16日時点でまとめています。
        </p>
      </section>
    </div>
  )
}
