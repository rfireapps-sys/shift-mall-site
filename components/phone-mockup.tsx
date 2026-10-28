// アプリの実機スクショ（開発中の画面）を、スマホの枠に入れて見せる。
// スクショ側にステータスバーがあるので、枠の中にはダイナミックアイランドとホームインジケーターだけ重ねる。
const screens = {
  home: {
    src: "/images/app-home.webp",
    alt: "シフトモールのホーム画面。今日までの実績額と、財布の残高（空想のお金）が表示されている。",
  },
  calendar: {
    src: "/images/app-calendar.webp",
    alt: "シフトモールのカレンダー画面。日ごとの勤務時間が表示されている。",
  },
} as const

// fill: 親の高さに合わせて、上から切り取って表示する（親は高さを持つ相対配置の枠）。幅は240px固定。
// 指定なし: 上から visibleHeight(px。既定330)だけ見せる。端末の全高は約520px。
export function PhoneMockup({
  className = "",
  fill = false,
  visibleHeight = 330,
  screen = "home",
}: {
  className?: string
  fill?: boolean
  visibleHeight?: number
  screen?: keyof typeof screens
}) {
  const { src, alt } = screens[screen]

  return (
    // 全体だと大きすぎるため、上半分だけ見せる。PCではカードの下端にのぞかせる。
    <div
      className={
        fill
          ? `absolute inset-y-0 left-0 overflow-hidden pl-[3px] pr-[6px] ${className}`
          : `shrink-0 overflow-hidden pl-[3px] pr-[6px] ${className}`
      }
      style={fill ? undefined : { height: visibleHeight }}
    >
      <div className="relative w-[240px]">
        {/* サイドボタン */}
        <span aria-hidden="true" className="absolute -left-[3px] top-24 h-6 w-[3px] rounded-l-sm bg-ink" />
        <span aria-hidden="true" className="absolute -left-[3px] top-32 h-10 w-[3px] rounded-l-sm bg-ink" />
        <span aria-hidden="true" className="absolute -right-[3px] top-28 h-14 w-[3px] rounded-r-sm bg-ink" />

        {/* 本体フレーム */}
        <div className="aspect-[9/19.5] w-full rounded-[2.75rem] border-[10px] border-ink bg-ink shadow-flat-lg">
          {/* スクショ（920×2000）は枠の画面より少し横長なので、幅に合わせて上に寄せ、下の余りは白で埋める */}
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
            <img className="block h-auto w-full" src={src} alt={alt} width={920} height={2000} />

            {/* ダイナミックアイランド */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
            />

            {/* ホームインジケーター */}
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-ink/30"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
