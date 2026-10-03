import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SplitButtonLink } from "@/components/split-button"

export function PreregisterSection() {
  return (
    <section id="preregister" className="scroll-mt-20 border-t border-border bg-red px-6 py-28 md:py-40">
      <div className="mx-auto max-w-xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">Preregister</p>
        </Reveal>
        <Reveal delay={40} className="mt-4">
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">事前登録</h2>
        </Reveal>
        <Reveal delay={60} className="mt-6 lg:mt-10 lg:max-w-2xl">
          <p className="text-pretty leading-relaxed text-white md:text-lg">
            {siteConfig.releaseTiming}リリース予定です。LINE公式アカウントを友だち追加すると、リリース時に一番早くお知らせが届きます。
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-col items-start gap-4">
          <SplitButtonLink href={siteConfig.lineUrl} className="shadow-flat-lg">
            LINEで登録する
          </SplitButtonLink>
          <p className="text-sm text-white">配信は不定期です。ブロックはいつでもできます。</p>
        </Reveal>
      </div>
    </section>
  )
}
