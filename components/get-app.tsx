import { SiApple, SiGoogleplay } from "react-icons/si"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SplitButtonLink } from "@/components/split-button"
import { PhoneMockup } from "@/components/phone-mockup"

// TODO: Google Playでの配信が始まったら、ボタンのhrefを siteConfig.playUrl に、
// ラベルを「Google Play で入手」に戻す。それまではLINE事前登録に誘導する。
export function GetApp() {
  return (
    <section id="get" className="scroll-mt-20 px-6 py-4 md:py-8">
      <div className="mx-auto max-w-2xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-red">Get The App</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">アプリ入手</h2>
        </Reveal>
        <Reveal delay={80} className="mt-6 lg:mt-10 flex flex-col items-center gap-8 rounded-sm border border-border bg-card px-6 py-10 text-left shadow-flat-sm md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <PhoneMockup />
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">まずはAndroidで配信予定</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                iPhone版はAndroid版のあとに対応予定です。公開まではLINE公式アカウントや各種SNSでお知らせします。
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-3.5 text-sm font-bold text-white shadow-flat-sm transition-colors hover:bg-foreground/80"
                >
                  <SiGoogleplay className="h-4 w-4" aria-hidden="true" />
                  Google Play（準備中）
                </a>
                <a
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-3.5 text-sm font-bold text-white shadow-flat-sm transition-colors hover:bg-foreground/80"
                >
                  <SiApple className="h-4 w-4" aria-hidden="true" />
                  App Store（対応予定）
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
