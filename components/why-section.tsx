import { Reveal } from "@/components/reveal"

export function WhySection() {
  return (
    <section id="story" className="scroll-mt-20 bg-background px-6 pt-24 md:pt-36">
      {/* PC（lg以上）は、見出しを上、その下を文章（左）と写真（右）の2カラムにする。
          写真は、1・3枚目の上端が本文の始まり、2枚目の下端が本文の終わりにそろうよう、本文と同じ高さに伸ばす。 */}
      <div className="mx-auto max-w-2xl lg:grid lg:max-w-[69rem] lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
        <Reveal className="mb-14 grid grid-cols-3 gap-3 md:mb-20 md:gap-4 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mb-0 lg:mt-10 lg:gap-4 lg:self-stretch">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-flat-sm lg:aspect-auto lg:h-[calc(100%-2.5rem)]">
            <img
              src="/images/why-scaffold.jpg"
              alt=""
              className="photo-tone absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] translate-y-6 overflow-hidden rounded-sm shadow-flat-sm md:translate-y-8 lg:aspect-auto lg:h-[calc(100%-2.5rem)] lg:translate-y-10">
            <img
              src="/images/why-origin-laptop.jpg"
              alt=""
              className="photo-tone absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-flat-sm lg:aspect-auto lg:h-[calc(100%-2.5rem)]">
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
            {/* 文ごとに改行し、1文が長いときは行の長さをそろえる（文の途中で「でも」だけが残るような改行を避ける） */}
            <p className="leading-loose text-foreground/80 md:text-lg">
              <span className="block text-balance">お金の計算ってすごく面倒ですよね？</span>
              <span className="block text-balance">正直苦手です。</span>
              <span className="block text-balance">
                だからAIに給与計算をお願いしていましたが、<span className="text-red">全然信頼できませんでした</span>。
              </span>
              <span className="block text-balance">ならば信頼できるアプリを作ろう。</span>
              <span className="block text-balance">でもただ給与計算できるなんてつまらない。</span>
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-6">
            <p className="leading-loose text-foreground/80 md:text-lg">
              <span className="block text-balance">お金ってすぐ無くなりませんか？</span>
              <span className="block text-balance">税金や借金の返済で自分の給与を100%使えない。</span>
              <span className="block text-balance text-red">なのに欲しいものは無限にある。</span>
              <span className="block text-balance">だからとりあえず欲しいものを買いたい。</span>
              <span className="block text-balance">それらを叶えるアプリです。</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
