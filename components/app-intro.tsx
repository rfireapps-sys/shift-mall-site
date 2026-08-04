import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

const points = [
  "シフトや勤務から給料を計算",
  "締め日にアプリ内財布へ自動で反映",
  "架空のお金で通販体験",
]

export function AppIntro() {
  return (
    <section id="about-app" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal direction="left">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            {siteConfig.appName} について
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {siteConfig.appName} は、勤怠・シフトから給料を計算し、締め日にアプリ内の財布へ反映。
            そのお金で架空通販を楽しめる Android アプリです。
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point, i) => (
              <Reveal as="li" key={point} delay={150 + i * 120}>
                <span className="flex gap-3 leading-relaxed text-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.paidNote}です。料金の詳細はアプリ内をご確認ください。
          </p>
        </Reveal>

        <Reveal direction="right" delay={100} className="flex justify-center">
          <Image
            src={siteConfig.appPreview || "/placeholder.svg"}
            alt={`${siteConfig.appName} のアプリ画面`}
            width={520}
            height={520}
            className="h-auto w-full max-w-sm"
            priority
          />
        </Reveal>
      </div>
    </section>
  )
}
