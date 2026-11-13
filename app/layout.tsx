import type { Metadata, Viewport } from 'next'
import { BIZ_UDPGothic } from 'next/font/google'
import { siteConfig, isReleased } from '@/lib/site-config'
import './globals.css'

const bizHeading = BIZ_UDPGothic({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-heading',
})

const bizBody = BIZ_UDPGothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-body',
})

const seoDescription = isReleased ? siteConfig.seoDescriptionReleased : siteConfig.seoDescription

export const metadata: Metadata = {
  metadataBase: new URL('https://shift-mall.com'),
  title: siteConfig.seoTitle,
  description: seoDescription,
  alternates: { canonical: './' },
  openGraph: {
    title: siteConfig.seoTitle,
    description: seoDescription,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seoTitle,
    description: seoDescription,
  },
  icons: {
    // 仮ロゴのうさぎ（XのアイコンのスクショからClaudeが切り出したもの。2026/11/13、ユーザー指示）。
    // 白い円に乗せてあるので、タブが明るくても暗くても同じ画像でよい。ロゴが決まったら差し替える。
    icon: [
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f5f7',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: siteConfig.appName,
      url: 'https://shift-mall.com',
      inLanguage: 'ja',
    },
    {
      '@type': 'Organization',
      name: siteConfig.tradeName,
      url: 'https://shift-mall.com',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`light bg-background ${bizHeading.variable} ${bizBody.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
