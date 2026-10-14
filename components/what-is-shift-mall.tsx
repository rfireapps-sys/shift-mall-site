import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { PhoneMockup } from "@/components/phone-mockup"

export function WhatIsShiftMall() {
  const lines = siteConfig.whatIsShiftMall.split("\n")

  return (
    <section id="what" className="scroll-mt-20 px-6 pt-24 md:pt-36">
      <div className="mx-auto max-w-3xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-red">Service</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">シフトモールとは？</h2>
        </Reveal>
        {/* PC（lg以上）は、文章を左・スマホモックを右に置き、モックは文章（冒頭の一文〜最後の段落）と同じ高さにする。
            スマホは文章の下に、上半分だけ見せる。 */}
        <div className="mt-6 lg:mt-10 lg:grid lg:grid-cols-[1fr_16rem] lg:gap-x-16">
          <div>
            <Reveal delay={80}>
              <p className="text-balance text-lg leading-loose text-foreground/80 md:text-xl lg:text-3xl lg:font-bold lg:leading-relaxed lg:text-foreground">
                {lines.map((line, i) => (
                  <span key={line} className="block">
                    {line}
                    {i < lines.length - 1 && <br className="hidden sm:block" />}
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-4 lg:max-w-3xl">
              <p className="text-pretty leading-loose text-foreground/80 md:text-lg lg:text-balance">{siteConfig.whoCanUse}</p>
            </Reveal>
            <Reveal delay={160} className="mt-8 lg:max-w-3xl">
              {siteConfig.whatIsShiftMallDetail.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className={idx > 0 ? "mt-8 border-l-4 border-red pl-5 text-pretty leading-loose text-foreground/80 md:text-lg lg:text-balance" : "text-pretty leading-loose text-foreground/80 md:text-lg lg:text-balance"}>
                  {paragraph.includes("空想のお金") ? (
                    <>
                      日々の勤務を入力すると、締日に<span className="text-red">空想のお金がアプリ内のお財布に入金されます</span>。そのお金で好きなものを買えますが、実際のお金は使われず、商品も届きません。<span className="text-red">もし本当に欲しいと思ったら、アプリ内から買いに行けます</span>。
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-10 lg:mt-0">
            <div className="relative hidden h-full lg:block">
              <PhoneMockup fill />
              <p className="absolute left-[3px] top-full mt-3 text-xs text-foreground/60">※ 画面はイメージです。</p>
            </div>
            <div className="lg:hidden">
              <PhoneMockup />
              <p className="mt-3 text-xs text-foreground/60">※ 画面はイメージです。</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
