import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function PhilosophySection() {
  const lines = siteConfig.philosophyBody.split("\n")

  return (
    <section id="philosophy" className="scroll-mt-20 px-6 pb-8 pt-28 md:pb-12 md:pt-40">
      <div className="mx-auto max-w-3xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-red">Philosophy</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">理念</h2>
        </Reveal>
        <Reveal delay={80} className="mt-6 lg:mt-10">
          <p className="text-balance text-lg leading-loose text-foreground/80 md:text-xl lg:text-3xl lg:leading-relaxed">
            {lines.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i < lines.length - 1 && <br className="hidden sm:block" />}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
