import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { DownloadFab } from "@/components/download-fab"

export function LegalLayout({
  title,
  updatedAt,
  showFab = false,
  children,
}: {
  title: string
  updatedAt?: string
  // キャンペーンの追従ボタン・カードを出すか。規約などを読む間は邪魔になるので、スペシャルサンクスだけで出す（ユーザー判断、2026/11/11）。
  showFab?: boolean
  children: ReactNode
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-2">
          {/* 押せる高さを44px以上にする（実装チェックリスト①）。上下の余白はリンク側に持たせる */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {siteConfig.appName}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h1>
        {updatedAt && <p className="mt-3 text-sm text-muted-foreground">最終更新日: {updatedAt}</p>}

        <article className="mt-12 space-y-10 leading-relaxed text-foreground">
          {children}
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex flex-wrap gap-x-6 text-sm">
            <Link href="/terms" className="inline-block py-3 text-muted-foreground hover:text-foreground">
              利用規約
            </Link>
            <Link href="/privacy" className="inline-block py-3 text-muted-foreground hover:text-foreground">
              プライバシーポリシー
            </Link>
            <Link href="/recommended-environment" className="inline-block py-3 text-muted-foreground hover:text-foreground">
              推奨環境
            </Link>
            <Link href="/special-thanks" className="inline-block py-3 text-muted-foreground hover:text-foreground">
              スペシャルサンクス
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.tradeName}
          </p>
        </div>
      </footer>

      {showFab && <DownloadFab base="/" />}
    </div>
  )
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-lg font-bold text-foreground">{heading}</h2>
      <div className="space-y-3 text-muted-foreground">{children}</div>
    </section>
  )
}
