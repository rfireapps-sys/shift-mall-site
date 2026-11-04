import { SiApple } from "react-icons/si"
import { GooglePlayIcon } from "@/components/google-play-icon"
import { siteConfig, isReleased, isOnStore } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SplitButtonLink } from "@/components/split-button"
import { PhoneMockup } from "@/components/phone-mockup"

// ストアのURLが未定（"#"）の間は、ボタンをLINE事前登録に誘導し、ラベルに「（準備中）」を付ける。
// 配信が始まったら、siteConfig.playUrl / appStoreUrl にURLを入れるだけで、そのストアのボタンが切り替わる。
const stores = [
  { name: "Google Play", url: siteConfig.playUrl, icon: <GooglePlayIcon className="h-4 w-4" /> },
  { name: "App Store", url: siteConfig.appStoreUrl, icon: <SiApple className="h-4 w-4" aria-hidden="true" /> },
]

const playReleased = isOnStore(siteConfig.playUrl)
const appStoreReleased = isOnStore(siteConfig.appStoreUrl)
// 片方のストアだけ先に公開されたときも、見出しが事実と食い違わないようにする。
const heading =
  playReleased && appStoreReleased
    ? "iOS/Androidで配信中"
    : playReleased
      ? "Androidで配信中（iOSは準備中）"
      : appStoreReleased
        ? "iOSで配信中（Androidは準備中）"
        : "iOS/Androidで配信予定"

export function GetApp() {
  return (
    <section id="get" className="scroll-mt-20 px-6 py-4 md:py-8">
      <div className="mx-auto max-w-2xl lg:max-w-[69rem]">
        <Reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] lg:text-xl text-red">Get The App</p>
        </Reveal>
        <Reveal delay={40} className="mt-2">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">アプリ入手</h2>
        </Reveal>
        {/* PC（md以上）は、文章を左・スマホモックを右に置き、モックをカードの下端にのぞかせる。 */}
        <Reveal delay={80} className="mt-6 flex flex-col items-start gap-8 overflow-hidden rounded-sm border border-border bg-card px-6 pt-10 text-left shadow-flat-sm md:mt-10 md:flex-row-reverse md:items-end md:justify-between md:gap-12 md:px-12 md:pt-12 lg:px-20">
          <PhoneMockup className="self-center md:self-auto" />
          <div className="pb-10 md:self-center md:py-16">
            <h3 className="font-heading text-xl font-bold text-foreground">{heading}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {isReleased
                ? "お使いのスマホのストアから、無料でインストールできます。"
                : "公開まではLINE公式アカウントや各種SNSでお知らせします。"}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              {stores.map((store) => {
                const released = isOnStore(store.url)
                return (
                  <a
                    key={store.name}
                    href={released ? store.url : siteConfig.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-3.5 text-sm font-bold text-white shadow-flat-sm transition-colors hover:bg-foreground/80"
                  >
                    {store.icon}
                    {released ? `${store.name} で入手` : `${store.name}（準備中）`}
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
