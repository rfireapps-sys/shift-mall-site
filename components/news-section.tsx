import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function NewsSection() {
  return (
    <section id="news" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-2xl rounded-sm border border-border bg-card px-6 py-8 shadow-flat-lg md:px-10 md:py-10">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red">News</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">お知らせ</h2>
        </Reveal>

        <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
          {siteConfig.newsItems.map((item, i) => (
            <Reveal key={item.date + item.body} delay={i * 60} as="li" className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="flex shrink-0 items-baseline gap-3">
                <span className="font-heading text-sm tabular-nums text-foreground/60">{item.date}</span>
                <span
                  className={`rounded-sm px-2 py-0.5 text-xs font-bold ${
                    item.tag === "予定" ? "bg-yellow text-yellow-foreground" : "bg-foreground/10 text-foreground"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
              <p className="leading-relaxed text-foreground/80">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
