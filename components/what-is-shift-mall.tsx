import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function WhatIsShiftMall() {
  const lines = siteConfig.whatIsShiftMall.split("\n")

  return (
    <section id="what" className="scroll-mt-20 px-6 pb-8 pt-20 md:pb-12 md:pt-32">
      <div className="mx-auto max-w-3xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-red">Service</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">シフトモールとは？</h2>
        </Reveal>
        <Reveal delay={80} className="mt-6 lg:mt-10">
          <p className="text-balance text-lg leading-loose text-foreground/80 md:text-xl lg:text-3xl lg:font-bold lg:leading-relaxed lg:text-foreground">
            {lines.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i < lines.length - 1 && <br className="hidden sm:block" />}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-8 lg:max-w-3xl">
          {siteConfig.whatIsShiftMallDetail.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className={idx > 0 ? "mt-8 border-l-4 border-red pl-5 text-pretty leading-loose text-foreground/80 md:text-lg lg:text-balance" : "text-pretty leading-loose text-foreground/80 md:text-lg lg:text-balance"}>
              {paragraph.includes("空想のお金") ? (
                <>
                  シフトモールは勤務表と空想通販という二つの機能があります。まずは日々働いてあなたの勤怠を入力しましょう。すると締日には<span className="text-red">空想のお金がアプリ内のお財布に入金されます</span>。そこからはあなたの自由。好きなものを買ってください。ただし実際のお金は消費されません。商品も届きません。<span className="text-red">もし本当に欲しいと思ったら、アプリ内から買いに行けます</span>。
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
