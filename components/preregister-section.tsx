import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import { SplitButtonLink } from "@/components/split-button"

export function PreregisterSection() {
  return (
    <section id="preregister" className="scroll-mt-20 border-t border-border bg-red px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-white">Preregister</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">事前登録</h2>
        </Reveal>
        <Reveal delay={60} className="mt-6 lg:mt-10 lg:max-w-3xl">
          <p className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">先着100名</p>
          <p className="mt-4 text-pretty text-xl font-bold leading-relaxed text-white md:text-2xl">
            LINE公式アカウントを友だち追加して、あることをすると、あなたのニックネームが当サイトに載ります！
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-white md:text-lg">
            {siteConfig.releaseTiming}リリース予定です。LINEでは、最新情報をお届けします。
          </p>
          <Link
            href="/special-thanks"
            className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-white underline underline-offset-4 md:text-base"
          >
            スペシャルサンクスを見る
          </Link>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-col items-start gap-4">
          <SplitButtonLink href={siteConfig.lineUrl} className="shadow-flat-lg">
            LINEで友だち追加
          </SplitButtonLink>
          <p className="text-sm text-white">配信は不定期です。ブロックはいつでもできます。</p>
        </Reveal>
      </div>
    </section>
  )
}
