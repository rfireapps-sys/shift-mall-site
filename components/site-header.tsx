import { siteConfig } from "@/lib/site-config"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-3 sm:gap-4 sm:px-6">
        <a
          href="#top"
          className="inline-flex shrink-0 overflow-hidden rounded-sm text-[9px] font-bold tracking-wide shadow-flat-sm sm:text-xs"
        >
          <span className="bg-yellow px-1.5 py-1 text-yellow-foreground sm:px-2.5">SHIFT</span>
          <span className="bg-ink px-1.5 py-1 text-white sm:px-2.5">MALL</span>
        </a>

        <nav aria-label="サイト内" className="no-scrollbar min-w-0 flex-1 overflow-x-auto">
          <ul className="flex w-max min-w-full items-center justify-end gap-2.5 whitespace-nowrap text-xs font-medium text-foreground/80 sm:text-base md:gap-3.5 md:text-lg lg:gap-5 lg:text-2xl">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="border-b-2 border-transparent py-2 transition-colors hover:border-red hover:text-foreground"
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
