import { siteConfig } from "@/lib/site-config"
import { SplitButtonLink } from "@/components/split-button"

export function SiteHero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] w-full flex-col justify-end overflow-hidden px-6 pb-20 pt-32">
      <img
        src="/images/hero-crossing.jpg"
        alt=""
        className="photo-tone absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-3xl">
        <div
          className="hero-fade inline-flex overflow-hidden rounded-sm text-xs font-bold tracking-wide shadow-flat-sm sm:hidden"
          style={{ animationDelay: "0s" }}
        >
          <span className="bg-yellow px-3 py-1.5 text-yellow-foreground">SHIFT</span>
          <span className="bg-ink px-3 py-1.5 text-white">MALL</span>
        </div>

        <p
          className="hero-fade mt-8 text-base font-bold tracking-wide text-white"
          style={{ animationDelay: "0.1s" }}
        >
          {siteConfig.appName} 事前登録受付中
        </p>

        {/* 文節（inline-block）単位で改行させ、「しあわせ」「決められる」が途中で割れないようにする。
            文言を変えたら、ここの区切りも合わせて直すこと。 */}
        <h1 className="font-heading mt-4 text-[calc((100vw-3rem)/9.2)] font-bold leading-[1.3] text-white sm:text-6xl md:text-7xl">
          <span className="hero-fade block" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block">じぶんの</span>
            <span className="inline-block">しあわせを、</span>
          </span>
          <span className="hero-fade block" style={{ animationDelay: "0.32s" }}>
            <span className="inline-block text-red">自分で</span>
            <span className="inline-block">決められるように。</span>
          </span>
        </h1>

        <p
          className="hero-fade mt-8 max-w-xl whitespace-pre-line text-base leading-relaxed text-white/85 md:text-lg"
          style={{ animationDelay: "0.46s" }}
        >
          {siteConfig.subCopy}
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-5" style={{ animationDelay: "0.56s" }}>
          <SplitButtonLink href="#preregister" className="shadow-flat">
            事前登録する
          </SplitButtonLink>
          <p className="text-sm font-medium text-white">{siteConfig.releaseTiming}リリース予定</p>
        </div>
      </div>
    </section>
  )
}
