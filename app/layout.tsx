import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const fontSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'MIXR',
  description: 'Always be in the Mix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  )
}
