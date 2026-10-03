import { siteConfig } from "@/lib/site-config"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-3 sm:gap-4 sm:px-6">
        <a
          href="#top"
          className="hidden shrink-0 overflow-hidden rounded-sm text-xs font-bold tracking-wide shadow-flat-sm sm:inline-flex"
        >
          <span className="bg-yellow px-2.5 py-1 text-yellow-foreground">SHIFT</span>
          <span className="bg-ink px-2.5 py-1 text-white">MALL</span>
        </a>

        <nav aria-label="サイト内" className="no-scrollbar min-w-0 flex-1 overflow-x-auto">
          <ul className="flex w-full items-center justify-between whitespace-nowrap text-[13px] font-medium text-foreground/80 sm:w-max sm:min-w-full sm:justify-end sm:gap-3 sm:text-base md:gap-3.5 md:text-lg lg:gap-5 lg:text-2xl">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block border-b-2 border-transparent px-1 py-3.5 transition-colors hover:border-red hover:text-foreground sm:px-0 sm:py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
