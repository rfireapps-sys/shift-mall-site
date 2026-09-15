import { siteConfig } from "@/lib/site-config"
import { SplitButtonLink } from "@/components/split-button"

export function SiteHero() {
  return (
    <section className="relative flex min-h-[92svh] w-full flex-col justify-center overflow-hidden bg-background px-6 py-32">
      <div className="mx-auto w-full max-w-3xl">
        <div
          className="hero-fade inline-flex overflow-hidden rounded-sm text-xs font-bold tracking-wide shadow-flat-sm"
          style={{ animationDelay: "0s" }}
        >
          <span className="bg-gold px-3 py-1.5 text-gold-foreground">SHIFT</span>
          <span className="bg-navy px-3 py-1.5 text-white">MALL</span>
        </div>

        <p
          className="hero-fade mt-8 text-sm font-medium tracking-wide text-foreground/70"
          style={{ animationDelay: "0.1s" }}
        >
          {siteConfig.appName} 事前登録受付中
        </p>

        <h1 className="font-heading mt-4 text-balance text-[2.75rem] font-bold leading-[1.3] text-foreground sm:text-6xl md:text-7xl">
          <span className="hero-fade block" style={{ animationDelay: "0.2s" }}>
            {siteConfig.taglineLine1}
          </span>
          <span className="hero-fade block" style={{ animationDelay: "0.32s" }}>
            {siteConfig.taglineLine2}
          </span>
        </h1>

        <p
          className="hero-fade mt-8 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 md:text-lg"
          style={{ animationDelay: "0.46s" }}
        >
          {siteConfig.subCopy}
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-5" style={{ animationDelay: "0.56s" }}>
          <SplitButtonLink href="#preregister" className="shadow-flat">
            事前登録する
          </SplitButtonLink>
          <p className="text-xs text-foreground/60">{siteConfig.releaseTiming}リリース予定</p>
        </div>
      </div>
    </section>
  )
}
