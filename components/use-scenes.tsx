import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function UseScenes() {
  return (
    <section id="scenes" className="scroll-mt-20 px-6 pt-24 md:pt-36">
      <div className="mx-auto max-w-2xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-red">Scenes</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">こんなとき</h2>
        </Reveal>

        <ul className="mt-10 flex flex-col gap-4 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6">
          {siteConfig.useScenes.map((scene, i) => (
            <Reveal
              key={scene.title}
              as="li"
              delay={i * 80}
              className="rounded-sm border border-border bg-card p-6 shadow-flat-sm lg:p-8"
            >
              <h3 className="font-heading text-balance text-lg font-bold text-foreground md:text-xl">{scene.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70 md:text-base">{scene.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
