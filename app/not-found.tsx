import type { Metadata } from "next"
import Link from "next/link"
import { LegalLayout } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"

// ないURLを開いたときのページ（静的書き出しでは out/404.html になる）。
// 以前はNext.jsの英語の404画面のままで、トップへの戻り道がなかった（2026/11/13）。
export const metadata: Metadata = {
  title: `ページが見つかりません | ${siteConfig.appName}`,
}

export default function NotFound() {
  return (
    <LegalLayout title="ページが見つかりません">
      <p className="text-muted-foreground">
        お探しのページは、移動したか、なくなった可能性があります。URLをもう一度お確かめください。
      </p>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center rounded-sm bg-ink px-8 font-bold text-white shadow-flat-sm transition-opacity hover:opacity-90"
      >
        トップページへ戻る
      </Link>
    </LegalLayout>
  )
}
