import { Reveal } from "@/components/reveal"

export function WhySection() {
  return (
    <section id="story" className="scroll-mt-20 bg-background px-6 pt-24 md:pt-36">
      {/* PC（lg以上）は、見出しを上、その下を文章（左）と写真（右）の2カラムにする。
          写真は、1・3枚目の上端が本文の1行目の文字の頭、2枚目の下端が最後の行の文字の下にそろうよう、本文と同じ高さに伸ばす。
          本文は18pxの文字で行の高さ36px（leading-loose）なので、段落の枠と文字の間に9pxずつ余白がある。その9pxを上下で引いている。 */}
      <div className="mx-auto max-w-2xl lg:grid lg:max-w-[69rem] lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
        <Reveal className="mb-14 grid grid-cols-3 gap-3 md:mb-20 md:gap-4 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mb-0 lg:mt-[calc(2.5rem+9px)] lg:gap-4 lg:self-stretch">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-flat-sm lg:aspect-auto lg:h-[calc(100%-2.5rem-9px)]">
            <img
              src="/images/why-scaffold.jpg"
              alt=""
              className="photo-tone absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] translate-y-6 overflow-hidden rounded-sm shadow-flat-sm md:translate-y-8 lg:aspect-auto lg:h-[calc(100%-2.5rem-9px)] lg:translate-y-10">
            <img
              src="/images/why-origin-laptop.jpg"
              alt=""
              className="photo-tone absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-flat-sm lg:aspect-auto lg:h-[calc(100%-2.5rem-9px)]">
            <img
              src="/images/why-cafe-closing.jpg"
              alt=""
              className="photo-tone absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-12 lg:col-start-1 lg:row-start-1">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-red">Story</p>
          </Reveal>
          <Reveal delay={40} className="mt-2">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              なぜ、シフトモールなのか
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2">
          <Reveal delay={80} className="mt-8 lg:mt-10">
            {/* 右端をそろえる（日本トレカセンターの文章と同じ見せ方）。文ごとの改行はやめ、文節単位で折り返しながら両端揃えにする */}
            <p className="text-justify [word-break:normal] leading-loose text-foreground/80 [text-wrap:pretty] md:text-lg">
              掛け持ちしていると、<span className="text-red">収入の合計はなかなか見えません。</span>私もそれで困りました。だから、複数の仕事を合わせた収入の見込みが分かるアプリにしました。
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-6">
            <p className="text-justify [word-break:normal] leading-loose text-foreground/80 [text-wrap:pretty] md:text-lg">
              それと、欲しいものを試しに買ってみたくなることはありませんか？ 空想通販なら、買いたいものを買いたいだけ買えます。<span className="text-red">実際のお金は使わず、手元にも届きませんが、購買意欲を満たせます。</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
