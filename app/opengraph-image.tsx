import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { siteConfig, isReleased } from "@/lib/site-config"

// 内容は完全に静的（リクエストごとに変わらない）なので、edgeランタイムは使わず
// 通常のNode.jsランタイムで静的生成させる。

export const alt = `${siteConfig.appName} — ${siteConfig.tagline}`
export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// トライアル配色（red #B90101 / yellow #FFD400 / blue #0A5CFF / ink #111418）をOGP画像にも適用。
// ぼかしなしのオフセット影（shadow-flat）もCSS任せにできないため、
// ここでは同じ視覚効果をボーダー2枚の重ねで再現している。
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`
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
        {/* 確定ロゴ（2026/11/18） */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={227} height={150} alt="" />
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
          <div style={{ display: "flex", width: 56, height: 10, backgroundColor: "#B90101" }} />
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#B90101" }}>
            {siteConfig.releaseTiming}{isReleased ? " 検証版公開" : " 検証版公開予定"}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
