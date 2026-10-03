import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

// 赤・黄・青の3色のみを反復して使う。始点と終点で赤に戻ることで一巡した印象を出す。
const stepColors = ["bg-red text-white", "bg-yellow text-yellow-foreground", "bg-blue text-white", "bg-red text-white"]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-border bg-background px-6 py-28 md:py-40">
      <div className="mx-auto max-w-2xl lg:grid lg:max-w-5xl lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red">How It Works</p>
          </Reveal>
          <Reveal delay={40} className="mt-4">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">かんたん4ステップ</h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">

          <div className="relative mt-16 lg:mt-0 rounded-sm border border-border bg-card px-6 py-14 shadow-flat-lg sm:px-10">
            <div className="relative flex flex-col gap-20 md:gap-28">
              <div
                aria-hidden="true"
                className="absolute left-[22px] top-11 bottom-11 w-px bg-border"
              />
              {siteConfig.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80} className="relative flex items-start gap-5">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-lg font-bold shadow-flat-sm ${stepColors[i]}`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-foreground/70">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
        </div>

        <Reveal delay={siteConfig.steps.length * 80} className="mt-8">
          <p className="text-xs leading-relaxed text-foreground/60">
            ※ アカウント登録は不要です。データはお使いの端末だけに保存されます。
          </p>
        </Reveal>
        </div>
      </div>
    </section>
  )
}
