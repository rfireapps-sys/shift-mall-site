import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function PhilosophySection() {
  const lines = siteConfig.philosophyBody.split("\n")

  return (
    <section className="mx-auto max-w-3xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="text-pretty text-lg leading-loose text-foreground/80 md:text-xl">
          {lines.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i < lines.length - 1 && <br className="hidden sm:block" />}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  )
}
