import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SplitButtonLink } from "@/components/split-button"

export function GetApp() {
  return (
    <section id="get" className="mx-auto max-w-2xl px-6 py-4 md:py-8">
      <Reveal className="flex flex-col items-center gap-5 rounded-sm border border-border bg-card px-6 py-10 text-center shadow-flat-sm md:flex-row md:justify-between md:px-10 md:text-left">
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">Google Play でも入手予定</h2>
          <p className="mt-1 text-sm leading-relaxed text-foreground/70">
            Android 版を Google Play で配信予定です。公開後は下のボタンからストアへ移動できます。
          </p>
          <p className="mt-2 text-xs text-foreground/50">{siteConfig.paidNote}</p>
        </div>
        <SplitButtonLink href={siteConfig.playUrl} compact className="shrink-0 shadow-flat-sm">
          Google Play で入手
        </SplitButtonLink>
      </Reveal>
    </section>
  )
}
