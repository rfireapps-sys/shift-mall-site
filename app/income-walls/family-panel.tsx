import { Check } from "lucide-react"
import { type TimelineItem, sources, Em, SectionHeading, Row, SumChip, WallCard, WordsSection, TimelineSection } from "./parts"

// 2つ目のタブ：家族（配偶者）がいてパート・アルバイトで働く人（2026/11/16追加、ユーザーが推奨案を採用）。
// 金額は、調査メモ（共有メモのフォルダ research_notes/配偶者がいるパートの年収の壁/）で一次情報と照らしたもの。
// 社労士の立場のレビュー（review_family_1.md）と反証（review_family_refutation_1.md）で残った28件を反映（2026/11/16）。
// 江戸川区の166万円は2025年の収入（令和8年度）の値。2026年の収入の値は計算でしか出せていないので載せていない。
// 住民税の配偶者特別控除の令和9年度の表は一次情報で見つからなかったので、「区切りが少し違う」とだけ書いている。
// 雇用保険の週10時間への改正（2028年10月）は、資料の本文を確かめられていないので載せていない。
// 住民税の135万円は、障害者のほか未成年者・寡婦・ひとり親にもあるが、どれも配偶者がいる人には当てはまらないので、障害者だけを書く。
// 健康保険の扶養の一般の判定で通勤手当を含むことは、一次情報の明文が見つかっていないので「ふつう入ります」にとどめる。
// 180万円の月15万円と、失業手当の5,000円は、日本年金機構のページに数字がなく、計算で出した値。

const timeline: TimelineItem[] = [
  { amount: "119万円", edge: "を超える", label: "あなたの住民税がかかり始める（目安）", kind: "self-tax", href: "#family-resident-tax" },
  { amount: "130万円", edge: "以上", label: "配偶者の健康保険の扶養から外れる（60歳以上などは180万円）", kind: "insurance", href: "#family-health-insurance" },
  { amount: "136万円", edge: "を超える", label: "配偶者控除が、配偶者特別控除に変わる", kind: "family", href: "#family-spouse-tax" },
  { amount: "169万円", edge: "を超える", label: "配偶者の所得税の控除が減り始める", kind: "family", href: "#family-spouse-tax" },
  { amount: "178万円", edge: "を超える", label: "あなたの所得税がかかり始める", kind: "self-tax", href: "#family-income-tax" },
  { amount: "207万円", edge: "を超える", label: "配偶者の所得税の控除がなくなる", kind: "family", href: "#family-spouse-tax" },
]

export function FamilyPanel() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-foreground/80">
          このタブは、配偶者がいて、パートやアルバイトで働く人に向けたものです。主に、<Em>配偶者の扶養に入っている人</Em>を想定して、2026年の収入にあてはまる金額をまとめます。
        </p>
        <p className="rounded-sm border border-border bg-white px-4 py-3 text-sm text-foreground/80">
          金額は、収入が給与だけの場合の目安です。フリーランスや業務委託の収入がある人は、数え方が変わるところがあります。<Em>税金の壁は、あなたの住民税、あなたの所得税、配偶者の税金で別々に決まっています。</Em>178万円までなら税金がまったくかからない、という意味ではありません。自分の場合どうなるかは、ページの最後の相談先で確認してください。
        </p>
      </div>

      <WordsSection
        id="family-words-heading"
        extra={[
          {
            term: "国民年金の第3号",
            desc: "厚生年金（公務員などの共済組合を含む）に加入している配偶者の扶養に入っている、20歳以上60歳未満の人のことです。配偶者は、原則65歳未満の人に限ります。自分で保険料を払わずに、国民年金に入っていることになります。",
          },
        ]}
      />

      <TimelineSection id="family-timeline-heading" items={timeline}>
        税金は1月から12月までの収入で見て、健康保険の扶養は、これからの1年間の収入の見込みで見ます。配偶者と一緒に住んでいるときは、配偶者の収入の半分未満であることも条件なので、130万円より低い金額で外れることがあります。年収とは別に、<Em>勤め先の社会保険に入ると、130万円未満でも配偶者の健康保険の扶養から外れます。</Em>
      </TimelineSection>

      <WallCard
        id="family-resident-tax"
        en="Resident Tax"
        kind="self-tax"
        amount="約119万円"
        title="あなたの住民税がかかり始める（目安）"
        before="2025年の収入なら、扶養している家族がいない場合の目安は110万円です。"
        sourceItems={[sources.chuoResident, sources.edogawaHikazei, sources.egovChihouzei]}
      >
        <Row label="だれに関係？">収入があるすべての人</Row>
        <Row label="どうなる？">
          2026年の給与が<Em>約119万円以下なら、住民税がかかりません（東京23区などで、扶養している家族がいない場合）。</Em>この住民税は、2027年度に払うものです。配偶者の扶養に入っている人も、この金額で見ます。
        </Row>
        <Row label="子どもなどを扶養しているとき">
          あなたが家族を扶養していると、<Em>住民税がかからない金額は上がります。</Em>たとえば江戸川区では、扶養している家族が1人なら、2025年の収入で166万円以下です（2026年の収入では、これより上がる見込みです）。配偶者の扶養親族になっている子は、あなたの人数には数えません。
        </Row>
        <Row label="障害のある人">2027年1月1日の時点で障害者にあたる人は、2026年の合計所得が135万円以下（給与だけなら約209万円以下）なら、住民税がかかりません。</Row>
        <Row label="気をつけること">
          金額は、<Em>住んでいる市区町村や家族構成で変わります。</Em>正確な金額は、お住まいの市区町村で確認してください。
        </Row>
      </WallCard>

      <WallCard
        id="family-health-insurance"
        en="Health Insurance"
        kind="insurance"
        amount={<>130万円<span className="mt-1 block text-lg md:text-xl">60歳以上などは180万円</span></>}
        title="配偶者の健康保険の扶養から外れる"
        sourceItems={[sources.nenkinDependent, sources.nenkinContract, sources.mhlwContractQa, sources.nenkinSpouse65, sources.nenkinSpouseJob, sources.nenkin3go, sources.egovKokuminNenkin, sources.egovKokuminNenkinKisoku, sources.egovKokuhoKisoku, sources.mhlwKabe]}
      >
        <Row label="だれに関係？">
          配偶者が勤め先の健康保険に入っていて、その扶養に入っている人。配偶者が国民健康保険のときは、扶養の仕組みがないので、この壁は関係ありません。
        </Row>
        <Row label="どうなる？">
          これからの1年間の収入の見込みが<Em>130万円以上になると、扶養から外れます。</Em>60歳以上の人と、おおむね障害厚生年金を受けられる程度の障害がある人は、180万円未満です。月の目安は108,333円以下です（180万円の人は、180万円を12で割った15万円未満）。この収入には、ふつう通勤手当や賞与も入り、税金の収入とは数え方が違います。<Em>年金（60歳以上の人の老齢年金や、障害年金など）を受けている人は、その年金もこの収入に入ります。</Em>細かい扱いは、配偶者の健康保険（健康保険組合など）で違うことがあるので、確認してください。
        </Row>
        <Row label="一緒に住んでいるとき">
          配偶者と一緒に住んでいる場合は、原則として、配偶者の収入の半分未満であることも条件です。半分以上でも、収入が130万円（60歳以上などは180万円）未満で配偶者の収入を上回らず、生活の状況から配偶者が家計の中心と認められるときは、扶養に入れることがあります。離れて暮らしている場合は、配偶者からの仕送りの額より収入が少ないことも条件です。19〜22歳の150万円は、配偶者として扶養に入っている人にはあてはまりません。
        </Row>
        <Row label="年金">
          配偶者が厚生年金に加入していて、その扶養に入っている20歳以上60歳未満の人は、国民年金の第3号です。<Em>自分で保険料を払わずに、国民年金に入っていることになります。</Em>
        </Row>
        <Row label="外れたあと">
          扶養から外れるときは、配偶者が勤め先を通して、その都度届け出ます。勤め先の社会保険に入るなら、健康保険と厚生年金の手続きは勤め先がします。入らないなら、国民健康保険に入り、20歳以上60歳未満の人は、国民年金の第1号にも変わります。<Em>国民健康保険と国民年金の届け出は、どちらも14日以内に市区町村にします。</Em>国民健康保険の届け出は、世帯主がします。国民年金の届け出を忘れると、将来の年金が減ることがあります。
        </Row>
        <Row label="130万円未満でも外れるとき">
          週20時間以上などの条件で勤め先の社会保険に入ると、<Em>年収が130万円未満でも、配偶者の健康保険の扶養から外れます。</Em>
        </Row>
        <Row label="第3号から外れるとき">
          配偶者が会社を辞めたときや、65歳になったとき（原則）は、第3号から外れます。<Em>あなたが60歳未満なら第1号に変わり、14日以内に市区町村へ届け出て、国民年金の保険料を払います。</Em>配偶者が会社を辞めたときは、ふつう健康保険の扶養も外れます。配偶者が転職して、次の勤め先でも厚生年金に入るなら、第3号のままです。健康保険の扶養は、配偶者が新しい勤め先を通して入り直す手続きをします。配偶者が65歳になっても勤め続けていれば、健康保険の扶養は続きます。
        </Row>
        <Row label="2026年4月から">
          収入が給与だけの人は、配偶者の勤め先に労働条件通知書などを出すと、労働契約に書かれた賃金（手当や賞与を含む）をもとに、収入の見込みを判定してもらえるようになりました。契約に書かれていない残業代は、ふつうの範囲なら、この見込みに入りません。ただし、シフト制で労働時間が契約に書かれていない場合や、契約期間が1年未満の場合、通勤手当などの金額が契約ではっきりしない場合などは、この方法を使えません。
        </Row>
        <Row label="一時的に増えたとき">
          繁忙期の残業などで一時的に収入が増えたときは、勤め先の証明があれば、扶養のままでいられる場合があります（原則として連続2回まで）。
        </Row>
        <Row label="失業手当を受けるとき">
          仕事を辞めて雇用保険の失業手当（基本手当）を受けるときは、日額が3,612円以上だと扶養から外れます。60歳以上などの人の目安は、日額5,000円未満です（180万円を360で割った額）。
        </Row>
        <Row label="フリーランスの収入">フリーランスや業務委託の収入は、売上から経費を引いた額で見ます。</Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="sum" /> 収入は合算して見るのが基本です。
        </Row>
      </WallCard>

      <WallCard
        id="family-spouse-tax"
        en="Spouse Tax"
        kind="family"
        amount={<>136万円<span className="mx-2 text-2xl md:text-3xl">・</span>169万円<span className="mx-2 text-2xl md:text-3xl">・</span>207万円</>}
        title="配偶者の税金が変わる"
        before="2025年の収入なら、配偶者控除は123万円以下、38万円の控除は160万円まで、控除がなくなるのは201万5,999円を超えたときです。"
        sourceItems={[sources.nta1191, sources.nta1195, sources.ntaKaisei2026, sources.chuoResident, sources.egovChihouzeiKoujo]}
      >
        <Row label="だれに関係？">給与が207万円以下で、配偶者が所得税を払っている人（配偶者の事業の専従者になっている人は除きます）</Row>
        <Row label="どうなる？">
          あなたの給与が136万円以下なら、配偶者は配偶者控除を受けられます。控除の額は、配偶者の合計所得が900万円以下なら38万円です。136万円を超えると配偶者特別控除に変わりますが、<Em>配偶者が受ける控除は、169万円までは同じ38万円です。</Em>169万円を超えると控除は段階的に減り、<Em>207万円を超えると、配偶者が受ける控除はなくなります。</Em>どれも配偶者の所得税の話です。
        </Row>
        <Row label="配偶者の収入">
          配偶者の合計所得が900万円（給与だけなら1,095万円）を超えると、控除の額が減ります。1,000万円（給与だけなら1,195万円）を超えると、どちらの控除も受けられません。
        </Row>
        <Row label="住民税">配偶者の住民税にも同じ仕組みがあり、控除の額と区切りが少し違います。</Row>
        <Row label="手続き">
          配偶者が勤め先の年末調整で「給与所得者の配偶者控除等申告書」を出します。申告書には、あなたのその年の収入の見込みを書きます。実際の収入が見込みと変わって136万円などの区切りを超えたときは、配偶者の勤め先に伝えてください。年末調整のやり直しや、確定申告が要ることがあります。
        </Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="sum" /> あなたのすべての収入を合算します。
        </Row>
      </WallCard>

      <WallCard
        id="family-income-tax"
        en="Income Tax"
        kind="self-tax"
        amount="178万円"
        title="あなたの所得税がかかり始める"
        before="2025年の収入なら160万円です。2028年以降の金額は、これからの税制改正で決まります。"
        sourceItems={[sources.ntaKaisei2026, sources.mofFinance, sources.ntaQa2026, sources.nta2520, sources.nta1900]}
      >
        <Row label="だれに関係？">収入があるすべての人</Row>
        <Row label="どうなる？">
          2026年と2027年の収入は、<Em>給与が178万円以下なら所得税がかかりません。</Em>配偶者の扶養に入っている人も同じです。ただし、<Em>住民税は、東京23区などでは約119万円を超えるとかかり始めます。</Em>
        </Row>
        <Row label="いつから？">
          2026年の収入全体に、この金額があてはまります。毎月の給与から引かれる所得税は11月まで前のままで、メインの勤め先の給与の差は、12月の年末調整で戻ります。年末調整を受けない人（11月までに仕事を辞めた人など）や、メイン以外の勤め先の給与は、確定申告で精算します。
        </Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="sum" /> すべての勤め先の収入を合算します。メイン以外の勤め先では、給与が少なくても所得税が引かれ、<Em>引かれすぎた分は確定申告で戻ることがあります。</Em>確定申告が必要になる条件は、1つ目のタブの「確定申告が必要になるとき」にまとめています。
        </Row>
      </WallCard>

      <WallCard
        id="family-social-insurance"
        en="Social Insurance"
        kind="insurance"
        amount={<><s className="text-foreground/50">106万円</s><span className="ml-3 align-middle rounded-sm bg-ink px-2 py-1 text-base text-white md:text-lg">なくなりました</span></>}
        title="勤め先の社会保険に入る条件"
        sourceItems={[sources.nenkinWage, sources.mhlwPart, sources.nenkinTanjikan, sources.nenkinQaKakudai, sources.nenkinHokenryoChosei, sources.nenkinChoseiJigyosho, sources.nenkinChoseiHihokensha, sources.nenkinMulti, sources.egovKoyou, sources.mhlwKoyouQa]}
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
              "学生ではない",
              "勤め先の会社で、厚生年金に入っている人が51人以上",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden="true" />
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>
          <span className="mt-3 block">
            51人未満でも、労使の合意で申し出て、対象になっている会社があります。国や自治体の職場は、人数にかかわらず対象です。会社の人数の条件は、2027年10月から段階的に下がり、2035年10月になくなります。契約で決まった労働時間が週20時間未満でも、残業などで実際の労働時間が2か月続けて週20時間以上になり、その後も続く見込みのときは、ほかの3つの条件を満たしていれば、3か月目の初日から加入します。
          </span>
        </Row>
        <Row label="4分の3以上働く人">
          週の労働時間と月の労働日数が、同じ職場のフルタイムの人の4分の3以上なら、<Em>会社の人数の条件がなくても入ります。</Em>ただし、個人経営のお店などでは、入らない場合もあります。
        </Row>
        <Row label="入ると変わること">
          <Em>配偶者の健康保険の扶養から外れ、勤め先の健康保険と厚生年金に入ります。</Em>扶養から外す届け出は、配偶者が勤め先を通してします。保険料は給与から引かれ、半分は勤め先が負担します。そのかわり、将来の年金が増え、病気やけがで休んだときの手当金などを受けられます。
        </Row>
        <Row label="保険料の負担を軽くする制度">
          2026年10月から、標準報酬月額が12万6,000円以下の人の保険料の一部を、勤め先が負担できる制度があります。<Em>使えるのは一部の会社で働く人だけで、使うかどうかは勤め先が決めます。</Em>対象の会社は、2026年10月以降に労使の合意で新しく対象になった会社と、2027年10月以降に人数の条件が下がって新しく対象になった会社などです。2026年10月1日の時点ですでに対象だった会社で働く人、4分の3以上働いて入っている人、2か所以上で社会保険に入っている人は、対象外です。期間は、勤め先が使い始めた月から通算3年で、3年目は軽くなる分が半分になります。
        </Row>
        <Row label="掛け持ちのとき">
          <SumChip mode="each" /> 加入するかどうかは、勤め先ごとに判定します。2か所の労働時間を足して、週20時間以上かどうかを見ることはしません。2か所とも条件を満たしたときは、本人が10日以内に届け出をして、2か所の給与を合わせた額で保険料が決まります。
        </Row>
        <Row label="雇用保険">
          雇用保険は、週20時間以上で、31日以上働く見込みがあると入ります。2か所で働く人は、原則として主な1か所で入ります。雇用保険に入っても、配偶者の健康保険の扶養には関係しません。
        </Row>
      </WallCard>

      <WallCard
        id="family-allowance"
        en="Family Allowance"
        kind="family"
        amount="会社ごと"
        title="配偶者の会社の家族手当"
        sourceItems={[sources.mhlwHaigushaTeate]}
      >
        <Row label="どういうもの？">
          配偶者の会社が出す配偶者手当（家族手当）は、<Em>法律で決まった制度ではなく、それぞれの会社の決まり</Em>です。
        </Row>
        <Row label="気をつけること">
          「妻（夫）の年収が103万円以下」のように、収入の条件を付けている会社もあります。<Em>条件と金額は、配偶者の勤め先の就業規則で確認してください。</Em>
        </Row>
      </WallCard>

      <section aria-labelledby="family-contact-heading" className="space-y-5">
        <SectionHeading id="family-contact-heading" en="Contact">わからないときの相談先</SectionHeading>
        <p className="text-foreground/80">このタブは、一般的な説明です。<Em>自分の場合どうなるかは、次の窓口に相談してください。</Em></p>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            { topic: "所得税", place: "税務署" },
            { topic: "住民税", place: "お住まいの市区町村" },
            { topic: "勤め先の社会保険・保険料の負担を軽くする制度", place: "あなたの勤め先" },
            { topic: "健康保険の扶養・第3号", place: "配偶者の勤め先（配偶者が協会けんぽに入っているときは年金事務所）" },
            { topic: "国民健康保険・国民年金の第1号", place: "お住まいの市区町村" },
            { topic: "配偶者の家族手当", place: "配偶者の勤め先" },
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
