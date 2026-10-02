import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { BIZ_UDPGothic } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://shift-mall-site.vercel.app'),
  title: `${siteConfig.appName} | 公式サイト`,
  description: siteConfig.tagline,
  generator: 'v0.app',
  openGraph: {
    title: `${siteConfig.appName} | 公式サイト`,
    description: siteConfig.tagline,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.appName} | 公式サイト`,
    description: siteConfig.tagline,
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
  themeColor: '#f4f5f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`light bg-background ${bizHeading.variable} ${bizBody.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
