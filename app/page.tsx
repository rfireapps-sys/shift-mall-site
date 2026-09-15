import { SiteHero } from "@/components/site-hero"
import { PhilosophySection } from "@/components/philosophy-section"
import { HowItWorks } from "@/components/how-it-works"
import { PreregisterForm } from "@/components/preregister-form"
import { GetApp } from "@/components/get-app"
import { SiteFooter } from "@/components/site-footer"
import { DownloadFab } from "@/components/download-fab"

export default function HomePage() {
  return (
    <main>
      <SiteHero />
      <PhilosophySection />
      <HowItWorks />
      <PreregisterForm />
      <GetApp />
      <SiteFooter />
      <DownloadFab />
    </main>
  )
}
