import { SiApple, SiGoogleplay } from "react-icons/si"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SplitButtonLink } from "@/components/split-button"
import { PhoneMockup } from "@/components/phone-mockup"

// TODO: Google Playでの配信が始まったら、ボタンのhrefを siteConfig.playUrl に、
// ラベルを「Google Play で入手」に戻す。それまではLINE事前登録に誘導する。
export function GetApp() {
  return (
    <section id="get" className="mx-auto max-w-2xl scroll-mt-20 px-6 py-4 md:py-8">
      <Reveal>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red">Get The App</p>
      </Reveal>
      <Reveal delay={40} className="mt-2">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">アプリ入手</h2>
      </Reveal>
      <Reveal delay={80} className="mt-6 flex flex-col items-center gap-8 rounded-sm border border-border bg-card px-6 py-10 text-center shadow-flat-sm md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <PhoneMockup />
          <div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <SiGoogleplay className="h-4 w-4 shrink-0 text-foreground/70" aria-hidden="true" />
              <h2 className="font-heading text-xl font-bold text-foreground">Google Play でも入手予定</h2>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-foreground/70">
              Android 版を Google Play で配信予定です。公開まではLINE公式アカウントでお知らせします。
            </p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-foreground/60 md:justify-start">
              <SiApple className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              iOS 版も順次リリース予定です。
            </p>
            <p className="mt-2 text-xs text-foreground/50">{siteConfig.paidNote}</p>
            <SplitButtonLink href={siteConfig.lineUrl} compact className="mt-5 shadow-flat-sm">
              LINEで登録する
            </SplitButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
