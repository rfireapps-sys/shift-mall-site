// 実機スクショではなく、「シフト管理 + 財布」のイメージを伝えるための概念図。
// アプリの実際のUIが固まるまでの仮の見せ方。
const shifts = [
  { day: "9/24 (水)", hours: "17:00–22:00", amount: "¥6,875" },
  { day: "9/26 (金)", hours: "10:00–15:00", amount: "¥6,250" },
  { day: "9/28 (日)", hours: "12:00–20:00", amount: "¥10,000" },
]

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    // スマホ幅では上半分だけ見せる（全体だと大きすぎるため）。md以上は全体を表示する。
    <div className={`h-[330px] shrink-0 overflow-hidden pl-[3px] pr-[6px] md:h-auto md:overflow-visible md:px-0 ${className}`}>
      <div className="relative w-[240px]">
        {/* サイドボタン */}
        <span aria-hidden="true" className="absolute -left-[3px] top-24 h-6 w-[3px] rounded-l-sm bg-ink" />
        <span aria-hidden="true" className="absolute -left-[3px] top-32 h-10 w-[3px] rounded-l-sm bg-ink" />
        <span aria-hidden="true" className="absolute -right-[3px] top-28 h-14 w-[3px] rounded-r-sm bg-ink" />

        {/* 本体フレーム */}
        <div className="aspect-[9/19.5] w-full rounded-[2.75rem] border-[10px] border-ink bg-ink shadow-flat-lg">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-card">
            {/* ステータスバー */}
            <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-bold text-foreground">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-3.5 rounded-[1px] border border-foreground/70" aria-hidden="true" />
              </div>
            </div>

            {/* ダイナミックアイランド */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
            />

            <div className="flex flex-1 flex-col gap-3 px-4 pb-5 pt-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex overflow-hidden rounded-sm text-[10px] font-bold">
                  <span className="bg-yellow px-1.5 py-0.5 text-yellow-foreground">SHIFT</span>
                  <span className="bg-ink px-1.5 py-0.5 text-white">MALL</span>
                </span>
                <span className="text-[10px] text-foreground/50">9月</span>
              </div>

              <div className="flex flex-col gap-1.5">
                {shifts.map((s) => (
                  <div key={s.day} className="flex items-center justify-between rounded-sm bg-muted px-2.5 py-1.5">
                    <div>
                      <p className="text-[10px] font-bold text-foreground">{s.day}</p>
                      <p className="text-[9px] text-foreground/55">{s.hours}</p>
                    </div>
                    <p className="text-[10px] font-bold text-foreground">{s.amount}</p>
                  </div>
                ))}
              </div>

              <div className="mt-1 rounded-sm bg-red px-3 py-3 text-white">
                <p className="text-[9px] font-medium text-white/80">使っていいお金</p>
                <p className="font-heading mt-0.5 text-xl font-bold">¥23,125</p>
                <span className="mt-2 inline-block rounded-sm bg-yellow px-2 py-0.5 text-[9px] font-bold text-yellow-foreground">
                  買い物へ
                </span>
              </div>
            </div>

            {/* ホームインジケーター */}
            <div className="flex justify-center pb-2">
              <span aria-hidden="true" className="h-1 w-24 rounded-full bg-ink/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
