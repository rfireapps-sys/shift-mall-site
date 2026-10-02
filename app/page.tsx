import { SiteHeader } from "@/components/site-header"
import { SiteHero } from "@/components/site-hero"
import { PhilosophySection } from "@/components/philosophy-section"
import { WhatIsShiftMall } from "@/components/what-is-shift-mall"
import { WhySection } from "@/components/why-section"
import { PreregisterSection } from "@/components/preregister-section"
import { NewsSection } from "@/components/news-section"
import { HowItWorks } from "@/components/how-it-works"
import { GetApp } from "@/components/get-app"
import { SiteFooter } from "@/components/site-footer"
import { DownloadFab } from "@/components/download-fab"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SiteHero />
        <NewsSection />
        <PhilosophySection />
        <WhatIsShiftMall />
        <WhySection />
        <HowItWorks />
        <PreregisterSection />
        <GetApp />
        <SiteFooter />
        <DownloadFab />
      </main>
    </>
  )
}
