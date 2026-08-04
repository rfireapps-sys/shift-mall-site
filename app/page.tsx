import { SiteHero } from "@/components/site-hero"
import { AppIntro } from "@/components/app-intro"
import { GetApp } from "@/components/get-app"
import { AboutOperator } from "@/components/about-operator"
import { SupportSection } from "@/components/support-section"
import { SiteFooter } from "@/components/site-footer"
import { DownloadFab } from "@/components/download-fab"

export default function HomePage() {
  return (
    <main>
      <SiteHero />
      <AppIntro />
      <GetApp />
      <AboutOperator />
      <SupportSection />
      <SiteFooter />
      <DownloadFab />
    </main>
  )
}
