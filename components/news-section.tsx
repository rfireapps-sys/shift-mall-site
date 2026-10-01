import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function NewsSection() {
  return (
    <section id="news" className="scroll-mt-20 border-t border-border bg-ink px-6 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">News</p>
        </Reveal>
        <Reveal delay={40} className="mt-4">
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">お知らせ</h2>
        </Reveal>

        <ul className="mt-12 flex flex-col divide-y divide-white/15 border-t border-white/15">
          {siteConfig.newsItems.map((item, i) => (
            <Reveal key={item.date + item.body} delay={i * 60} as="li" className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="flex shrink-0 items-baseline gap-3">
                <span className="font-heading text-sm tabular-nums text-white/60">{item.date}</span>
                <span
                  className={`rounded-sm px-2 py-0.5 text-xs font-bold ${
                    item.tag === "予定" ? "bg-yellow text-yellow-foreground" : "bg-white/10 text-white"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
              <p className="leading-relaxed text-white/85">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
