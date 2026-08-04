import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

const links = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/tradelaw", label: "特定商取引法に基づく表記" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading font-bold text-foreground">
            {siteConfig.appName}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siteConfig.tradeName}
          </p>
        </div>

        <nav aria-label="フッター">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-10">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.tradeName}
        </p>
      </div>
    </footer>
  )
}
