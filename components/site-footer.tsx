import Link from "next/link"
import { SiX, SiLine } from "react-icons/si"
import { siteConfig } from "@/lib/site-config"

const legalLinks = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/recommended-environment", label: "推奨環境" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-14 text-sm lg:max-w-[72rem]">
        <div>
          <p className="font-heading font-bold text-foreground">{siteConfig.appName}</p>
          <p className="mt-1 text-foreground/60">{siteConfig.tradeName}</p>
        </div>

        <nav aria-label="フッター" className="flex flex-col">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-block py-3 text-foreground/70 underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <span className="py-3 text-foreground/70">税金・年収の壁について（近日公開）</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-flat-sm transition-colors hover:bg-blue"
          >
            <SiX className="h-4 w-4" aria-hidden="true" />
            X（Twitter）
          </a>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-flat-sm transition-colors hover:bg-green-600"
          >
            <SiLine className="h-4 w-4" aria-hidden="true" />
            LINE
          </a>
          <span className="text-foreground/70">Instagram（近日開設）</span>
        </div>

        <p className="text-xs text-foreground/65">
          &copy; {new Date().getFullYear()} {siteConfig.tradeName}
        </p>
      </div>
    </footer>
  )
}
