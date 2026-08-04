import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function AboutOperator() {
  return (
    <section id="operator" className="mx-auto max-w-5xl px-6 py-20 md:py-24">
      <Reveal>
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          運営について
        </h2>
      </Reveal>
      <Reveal delay={120} className="mt-8 max-w-2xl">
      <dl className="divide-y divide-border border-t border-border">
        <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
          <dt className="w-40 shrink-0 text-sm font-medium text-muted-foreground">
            屋号
          </dt>
          <dd className="text-foreground">{siteConfig.tradeName}</dd>
        </div>
        <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
          <dt className="w-40 shrink-0 text-sm font-medium text-muted-foreground">
            運営形態
          </dt>
          <dd className="text-foreground">個人が開発・運営</dd>
        </div>
        <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
          <dt className="w-40 shrink-0 text-sm font-medium text-muted-foreground">
            取り扱いアプリ
          </dt>
          <dd className="text-foreground">{siteConfig.appName}</dd>
        </div>
      </dl>
      </Reveal>
    </section>
  )
}
