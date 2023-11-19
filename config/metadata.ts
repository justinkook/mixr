import type { Metadata } from 'next'

export const metadataConfig: Metadata = {
  metadataBase: new URL('https://app.gen3tickets.com'),
  title: 'Revent',
  description: 'Reinvent how you event',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  icons: {
    icon: '/android-chrome-512x512.png',
    shortcut: '/android-chrome-192x192.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Revent',
    description: 'Rinvent how you event',
    url: 'https://app.gen3tickets.com',
    siteName: 'Revent',
    images: [
      {
        url: '/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Revent Logo 192x192',
      },
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Revent Logo 512x512',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revent',
    description: 'Reinvent how you event',
    siteId: '1467726470533754880',
    creator: '@Revent',
    creatorId: '1467726470533754880',
    images: ['/android-chrome-192x192.png', '/android-chrome-512x512.png'],
  },
  keywords: [
    'Event Management',
    'Event Ticketing',
    'Event Planning',
    'Event Marketing',
    'Event Registration',
    'Happy Hours',
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    startupImage: ['/android-chrome-512x512.png'],
  },
  verification: {
    google: 'google',
  },
}
