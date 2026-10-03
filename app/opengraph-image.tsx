import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

// 内容は完全に静的（リクエストごとに変わらない）なので、edgeランタイムは使わず
// 通常のNode.jsランタイムで静的生成させる。

export const alt = `${siteConfig.appName} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// トライアル配色（red #E00010 / yellow #FFD400 / blue #0A5CFF / ink #111418）をOGP画像にも適用。
// ぼかしなしのオフセット影（shadow-flat）もCSS任せにできないため、
// ここでは同じ視覚効果をボーダー2枚の重ねで再現している。
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* バッジ: SHIFT / MALL の二色分割 */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 6,
                left: 6,
                width: "100%",
                height: "100%",
                backgroundColor: "#111418",
              }}
            />
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#FFD400",
                  color: "#111418",
                  fontSize: 28,
                  fontWeight: 700,
                  padding: "10px 22px",
                }}
              >
                SHIFT
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#111418",
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: 700,
                  padding: "10px 22px",
                }}
              >
                MALL
              </div>
            </div>
          </div>
        </div>

        {/* タグライン */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#111418", lineHeight: 1.35 }}>
            {siteConfig.taglineLine1}
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#111418", lineHeight: 1.35 }}>
            {siteConfig.taglineLine2}
          </div>
        </div>

        {/* フッター行: リリース時期 + 赤のアクセントバー */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 56, height: 10, backgroundColor: "#E00010" }} />
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#E00010" }}>
            {siteConfig.releaseTiming}リリース予定
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
