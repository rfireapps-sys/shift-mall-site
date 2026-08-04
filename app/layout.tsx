import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Zen_Kaku_Gothic_New, Noto_Sans_JP } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-heading',
})

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: `${siteConfig.appName} | 公式サイト`,
  description: siteConfig.tagline,
  generator: 'v0.app',
  openGraph: {
    title: `${siteConfig.appName} | 公式サイト`,
    description: siteConfig.tagline,
    images: [{ url: siteConfig.heroPoster }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.appName} | 公式サイト`,
    description: siteConfig.tagline,
    images: [siteConfig.heroPoster],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`light bg-background ${zenKaku.variable} ${notoSansJp.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
