// 差し替え用のプレースホルダー。ここを書き換えるだけで全ページに反映されます。
export const siteConfig = {
  // 屋号
  tradeName: "{TRADE_NAME}",
  // アプリ名
  appName: "シフトモール",
  // 短いキャッチコピー（本命案）
  tagline: "働いた分が、架空の買い物になる。",
  // 有料注記（小さめに表示）
  paidNote: "一部機能は有料 / サブスクリプション対応",
  // サポートメール
  supportEmail: "support@example.com",
  // Google Play URL（未定なら "#"）
  playUrl: "#",
  // ヒーロー画像（動画素材ができたら heroVideo を追加して差し替え可能）
  heroPoster: "/hero-poster.png",
  // アプリのプレビュー画像
  appPreview: "/app-preview.png",
} as const
