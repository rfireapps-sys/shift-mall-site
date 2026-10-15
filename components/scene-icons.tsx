// 「こんなとき」用の、自作のピクトグラム。外部の素材は使っていない。
// 配色は赤・黄・青・墨、ハードエッジ、ずらし影（サイトの方針に合わせる）。
type SceneIconName = "jobs" | "wallet" | "bag"

const common = {
  viewBox: "0 0 96 96",
  fill: "none",
  strokeWidth: 3,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
}

export function SceneIcon({ name, className = "" }: { name: SceneIconName; className?: string }) {
  if (name === "jobs") {
    // 複数の働き方を、まとめて並べる（赤・黄・青の3つ）
    const rows = [
      { y: 8, color: "fill-red" },
      { y: 36, color: "fill-yellow" },
      { y: 64, color: "fill-blue" },
    ]
    return (
      <svg {...common} className={`stroke-ink ${className}`}>
        {rows.map((r) => (
          <g key={r.y}>
            <rect x="12" y={r.y + 4} width="76" height="22" className="fill-ink" stroke="none" />
            <rect x="8" y={r.y} width="76" height="22" className="fill-card" />
            <rect x="8" y={r.y} width="22" height="22" className={r.color} />
            <path d={`M38 ${r.y + 11}H74`} />
          </g>
        ))}
      </svg>
    )
  }

  if (name === "wallet") {
    // 財布に、コインが入っていく
    return (
      <svg {...common} className={`stroke-ink ${className}`}>
        <circle cx="32" cy="26" r="13" className="fill-yellow" />
        <text x="32" y="32" textAnchor="middle" fontSize="16" fontWeight="700" className="fill-ink" stroke="none">
          ¥
        </text>
        <rect x="14" y="44" width="76" height="46" className="fill-ink" stroke="none" />
        <rect x="10" y="40" width="76" height="46" className="fill-blue" />
        <rect x="10" y="40" width="76" height="12" className="fill-red" />
        <rect x="58" y="60" width="28" height="16" className="fill-yellow" />
        <circle cx="68" cy="68" r="3" className="fill-ink" stroke="none" />
      </svg>
    )
  }

  // bag: 買い物袋
  return (
    <svg {...common} className={`stroke-ink ${className}`}>
      <rect x="22" y="38" width="60" height="54" className="fill-ink" stroke="none" />
      <path d="M32 36V26a12 12 0 0 1 24 0v10" />
      <rect x="18" y="34" width="60" height="54" className="fill-red" />
      <rect x="36" y="52" width="24" height="24" className="fill-yellow" />
      <path d="M48 58v12M42 64h12" />
    </svg>
  )
}
