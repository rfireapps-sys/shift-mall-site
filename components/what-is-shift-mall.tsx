import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function WhatIsShiftMall() {
  const lines = siteConfig.whatIsShiftMall.split("\n")

  return (
    <section id="what" className="mx-auto max-w-3xl scroll-mt-20 px-6 pb-8 pt-20 md:pb-12 md:pt-32">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red">Service</p>
      </Reveal>
      <Reveal delay={40} className="mt-2">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">シフトモールとは？</h2>
      </Reveal>
      <Reveal delay={80} className="mt-6">
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
