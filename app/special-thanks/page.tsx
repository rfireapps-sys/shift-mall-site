import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"
import { siteConfig } from "@/lib/site-config"
import { specialThanks } from "@/lib/special-thanks"

export const metadata: Metadata = {
  title: `スペシャルサンクス | ${siteConfig.appName}`,
  description: `${siteConfig.appName}の事前登録をしてくださった方のニックネームを、感謝をこめて載せています。`,
}

export default function SpecialThanksPage() {
  return (
    <LegalLayout title="スペシャルサンクス">
      <p className="text-muted-foreground">
        {siteConfig.appName}の事前登録をしてくださった方のニックネームを、感謝をこめて載せています。
      </p>

      {specialThanks.length > 0 ? (
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg font-bold text-foreground">
          {specialThanks.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-lg font-bold text-foreground">ここに、事前登録の方のニックネームが並びます。</p>
      )}

      <p className="text-sm text-muted-foreground">
        掲載をやめたいときは、公式LINEからご連絡ください。
      </p>
    </LegalLayout>
  )
}
