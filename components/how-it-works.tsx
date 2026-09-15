import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

const stepColors = ["bg-gold text-gold-foreground", "bg-terracotta text-white", "bg-navy text-white", "bg-gold text-gold-foreground"]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-background px-6 py-28 md:py-40">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">かんたん4ステップ</h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {siteConfig.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="flex items-start gap-5">
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
    </section>
  )
}
