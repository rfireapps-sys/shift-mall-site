import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function SupportSection() {
  return (
    <section id="support" className="border-t border-border bg-secondary/40">
      <Reveal className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          サポート
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          ご不明な点や不具合のご報告は、メールにてお問い合わせください。
          アプリの使い方、不具合、ご要望などに対応しています。
        </p>

        <dl className="mt-8 max-w-2xl space-y-6">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              お問い合わせ先
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-medium text-primary underline underline-offset-4"
              >
                {siteConfig.supportEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              対応範囲
            </dt>
            <dd className="mt-1 leading-relaxed text-foreground">
              アプリの使い方・不具合・アカウント / 課金に関するご連絡
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              返信の目安
            </dt>
            <dd className="mt-1 leading-relaxed text-foreground">
              通常 2〜3 営業日以内にご返信します（土日祝を除く）
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  )
}
