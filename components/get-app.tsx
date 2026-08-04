import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function GetApp() {
  return (
    <section id="get" className="mx-auto max-w-5xl px-6 py-4 md:py-8">
      <Reveal className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-br from-primary via-primary to-[oklch(0.4_0.13_170)] px-6 py-10 text-center shadow-xl md:flex-row md:justify-between md:px-12 md:text-left">
        <div>
          <h2 className="font-heading text-xl font-bold text-primary-foreground">
            入手する
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
            Android 版を Google Play で配信予定です。下のボタン、または画面右下からストアへ移動できます。
          </p>
          <p className="mt-2 text-xs text-primary-foreground/70">{siteConfig.paidNote}</p>
        </div>
        <a
          href={siteConfig.playUrl}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-md transition-transform hover:scale-[1.03]"
        >
          Google Play で入手
        </a>
      </Reveal>
    </section>
  )
}
