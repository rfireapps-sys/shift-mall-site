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
  metadataBase: new URL('https://shift-mall.com'),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  alternates: { canonical: './' },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
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
