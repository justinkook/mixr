import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

import { metadataConfig } from '@/config/metadata'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import NavLayout from '@/components/nav/nav-layout'
import { Providers } from '@/components/providers/providers'

import '@/styles/globals.css'

export const fontSans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = metadataConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <NavLayout>{children}</NavLayout>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
      <Script type="text/javascript" src="https://js.finix.com/v/1/finix.js" />
    </html>
  )
}
