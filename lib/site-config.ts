// 差し替え用のプレースホルダー。ここを書き換えるだけで全ページに反映されます。
export const siteConfig = {
  // 屋号
  tradeName: "プロメテウスドライバー",
  // アプリ名
  appName: "シフトモール",
  // タグライン（企業理念）
  // 表記ルール: 前半「じぶんのしあわせ」はひらがな、後半「自分で決められる」は漢字
  taglineLine1: "じぶんのしあわせを、",
  taglineLine2: "自分で決められるように。",
  // 検索エンジン・OGP用のプレーンテキスト版タグライン
  tagline: "じぶんのしあわせを、自分で決められるように。",
  // 検索結果・SNSに出るトップページのtitle / description
  seoTitle: "シフトモール | 総収入の見込みと空想通販のアプリ",
  seoDescription:
    "複数の仕事を合わせた収入の見込みと、空想の買い物体験ができるアプリ「シフトモール」の公式サイト。2026年11月リリース予定。事前登録はLINEで受け付けています。",
  // 配信開始後の検索の説明文（isReleased のときに使う）
  seoDescriptionReleased:
    "複数の仕事を合わせた収入の見込みと、空想の買い物体験ができるアプリ「シフトモール」の公式サイト。2026年11月に配信を開始しました。",
  // 世界観セクション（理念の背景にある問題意識）
  philosophyBody:
    "他人に流されず、自分だけの幸せを、自分で見つけられるように。",
  // 理念の下に置くビジョン（目指す世界）
  visionBody: "誰もが幸せになれる世界を創る",
  // サブコピー
  subCopy:
    "複数の仕事を合わせた収入の見込みと、\n空想の買い物体験ができるアプリ",
  // 「シフトモールとは？」セクション
  whatIsShiftMall:
    "総収入の見込みと空想通販が使えるサービスです。",
  // 「シフトモールとは？」セクションの詳細説明
  whatIsShiftMallDetail:
    "日々の勤務を入力すると、締日に空想のお金がアプリ内のお財布に入金されます。そのお金で好きなものを買えますが、実際のお金は使われず、商品も届きません。もし本当に欲しいと思ったら、アプリ内から買いに行けます。\n\n空想の買い物体験を経て、本当に欲しいものを見つけましょう。",
  // 対応する働き方（疎外感を避けるため「シフト」「バイト」に限定しないことを明示）
  workStyles: ["シフト", "バイト", "フリーランス", "SES", "正社員"],
  // サポートメール
  supportEmail: "support@shift-mall.com",
  // ストアのURL（未定なら "#"）。URLを入れると、アプリ入手のボタンがLINEからそのストアに切り替わる。
  playUrl: "#",
  appStoreUrl: "#",
  // LINE公式アカウント 友だち追加URL
  lineUrl: "https://line.me/R/ti/p/@589mmvmv",
  // X（旧Twitter）公式アカウント
  xUrl: "https://x.com/shiftmall_jp",
  // リリース予定時期
  releaseTiming: "2026年11月",
  // 無料・登録不要・データの保存先（Hero・使い方の注記で使う。v2でクラウドバックアップ等を入れるときは見直す）
  freeNote: "無料で使えます（広告が表示されます）",
  noSignupNote: "アカウント登録は不要です",
  localDataNote: "入力した内容は、お使いの端末の中にだけ保存されます。",
  // 「シフトモールとは？」で、対象を働き方で限定しないことを示す一文
  whoCanUse: "アルバイトやパート、フリーランスや会社員の方も使えます。",
  // 「こんなとき」の注記（実際の利用者の声に見えないようにする）
  useScenesNote: "※ 利用場面のイメージです。実際の利用者の声ではありません。",
  // 「こんなとき」：使う場面（利用者の言葉で。順番は、操作の順＝勤務登録が最初）
  useScenes: [
    {
      title: "私の働き方でも、使えるんだ",
      body: "副業など、本業以外の収入があっても、複数の働き方を登録して、一括管理できます。",
    },
    {
      title: "バイト代が入る日が、少し楽しみになる",
      body: "勤務を入れておくと、締日に空想のお金が入金されます。",
    },
    {
      title: "気になるものを、とりあえず買えちゃう",
      body: "空想のお金なので、実際のお金を気にせず買えます。",
    },
  ],
  // ヘッダーナビの項目（クリックでページ内スクロール）
  navItems: [
    { label: "サービス", href: "#what" },
    { label: "使い方", href: "#how-it-works" },
    { label: "理念", href: "#philosophy" },
    { label: "ストーリー", href: "#story" },
    { label: "お知らせ", href: "#news" },
    { label: "アプリ入手", href: "#preregister" },
  ],
  // 配信開始後に、お知らせ欄の「予定」の項目と置き換えるお知らせ（isReleased のときに使う）
  releasedNewsItem: { date: "2026.11", tag: "お知らせ", body: "配信を開始しました。" },
  // お知らせ欄（新しい情報が増えたら先頭に追加する）
  newsItems: [
    { date: "2026.11", tag: "予定", body: "iOS/Android版のリリースを予定しています。" },
    { date: "2026.10", tag: "お知らせ", body: "公式LINEアカウントで事前登録の受付を開始しました。" },
    { date: "2026.10", tag: "お知らせ", body: "X（旧Twitter）で発信を始めました。" },
  ],
  // 4ステップ
  steps: [
    { title: "勤務表に勤務時間を入力する", body: "働いた時間を入れます。" },
    { title: "締日に入金される", body: "締め日になると、勤務時間から収入の見込みが自動で計算されます。" },
    { title: "空想のお金で買い物する", body: "入金された空想のお金で、通販を楽しめます。" },
    { title: "本当に欲しいものを見つける", body: "あなたが本当に欲しいものを見つけましょう。" },
  ],
} as const

// ストアのURLが入っていれば、そのストアで配信中とみなす（未定は "#"）。
export const isOnStore = (url: string) => url !== "#"

// どちらかのストアのURLが入ったら、配信中とみなす。
// Hero・ヘッダー・FAB・事前登録セクション・アプリ入手・お知らせ・検索の説明文・OGP画像が、配信開始後の表示に切り替わる。
export const isReleased = isOnStore(siteConfig.playUrl) || isOnStore(siteConfig.appStoreUrl)

// 配信中のストアに合わせた一言（アプリ入手の見出しと、PCのFABのカードで使う）。
// 片方のストアだけ先に公開されたときも、事実と食い違わないようにする。
const playReleased = isOnStore(siteConfig.playUrl)
const appStoreReleased = isOnStore(siteConfig.appStoreUrl)
export const releaseLabel =
  playReleased && appStoreReleased
    ? "iOS/Androidで配信中"
    : playReleased
      ? "Androidで配信中（iOSは準備中）"
      : appStoreReleased
        ? "iOSで配信中（Androidは準備中）"
        : "iOS/Androidで配信予定"
