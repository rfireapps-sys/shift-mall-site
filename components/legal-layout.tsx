import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string
  updatedAt: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
        <p className="mt-3 text-sm text-muted-foreground">最終更新日: {updatedAt}</p>

        <article className="mt-12 space-y-10 leading-relaxed text-foreground">
          {children}
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">
              利用規約
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              プライバシーポリシー
            </Link>
            <Link href="/tradelaw" className="text-muted-foreground hover:text-foreground">
              特定商取引法に基づく表記
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.tradeName}
          </p>
        </div>
      </footer>
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
