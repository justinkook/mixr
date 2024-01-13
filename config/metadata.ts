import type { Metadata } from 'next'
import { env } from '@/env.mjs'

export const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Product',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://reventapp.com',
  },
  headline: 'Collaborate Seamlessly with Revent',
  name: 'Revent | One-Source Platform to Reinvent the Modern Event',
  image: 'https://www.reventapp.com/images/project-app-screenshot.png',
  description:
    "Experience a new level of efficiency and simplicity in event planning – it's your all-in-one solution.",
  url: 'https://reventapp.com',
  brand: [
    {
      '@type': 'Brand',
      name: 'Revent',
      logo: 'https://www.reventapp.com/images/logo-black.svg',
    },
  ],
  offers: {
    '@type': 'Offer',
    price: '$49/month',
  },
}

export const metadataConfig: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || 'https://reventapp.com'),
  title: 'Revent | One-Source Platform to Reinvent the Modern Event',
  description: `Experience a new level of efficiency and simplicity in event planning – it's your all-in-one solution.`,
  authors: [{ name: 'Revent Team', url: 'https://reventapp.com' }],
  creator: 'Revent Team',
  publisher: 'Revent',
  manifest: '/manifest.json',
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  icons: {
    icon: [
      '/icons/favicon.ico',
      '/icons/android-icon-192x192.png',
      '/icons/favicon-32x32.png',
      '/icons/favicon-96x96.png',
      '/icons/favicon-16x16.png',
    ],
    apple: [
      '/icons/apple-icon-57x57.png',
      '/icons/apple-icon-60x60.png',
      '/icons/apple-icon-72x72.png',
      '/icons/apple-icon-76x76.png',
      '/icons/apple-icon-114x114.png',
      '/icons/apple-icon-120x120.png',
      '/icons/apple-icon-144x144.png',
      '/icons/apple-icon-152x152.png',
      '/icons/apple-icon-180x180.png',
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-icon-precomposed.png',
    },
  },
  openGraph: {
    title: 'Revent | One-Source Platform to Reinvent the Modern Event',
    description: `Experience a new level of efficiency and simplicity in event planning – it's your all-in-one solution.`,
    url: 'https://reventapp.com',
    siteName: 'Revent',
    images: [
      {
        url: 'https://reventapp.com/android/android-launchericon-48-48.png',
        width: 48,
        height: 48,
        alt: 'Revent Logo',
      },
      {
        url: 'https://reventapp.com/android/android-launchericon-72-72.png',
        width: 72,
        height: 72,
        alt: 'Revent Logo',
      },
      {
        url: 'https://reventapp.com/android/android-launchericon-96-96.png',
        width: 96,
        height: 96,
        alt: 'Revent Logo',
      },
      {
        url: 'https://reventapp.com/android/android-launchericon-144-144.png',
        width: 144,
        height: 144,
        alt: 'Revent Logo',
      },
      {
        url: 'https://reventapp.com/android/android-launchericon-192-192.png',
        width: 192,
        height: 192,
        alt: 'Revent Logo',
      },
      {
        url: 'https://reventapp.com/android/android-launchericon-512-512.png',
        width: 512,
        height: 512,
        alt: 'Revent Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revent | One-Source Platform to Reinvent the Modern Event',
    description: `Experience a new level of efficiency and simplicity in event planning – it's your all-in-one solution.`,
    site: '@reventapp',
    creator: '@reventapp',
    images: [
      'https://reventapp.com/android/android-launchericon-48-48.png',
      'https://reventapp.com/android/android-launchericon-72-72.png',
      'https://reventapp.com/android/android-launchericon-96-96.png',
      'https://reventapp.com/android/android-launchericon-144-144.png',
      'https://reventapp.com/android/android-launchericon-192-192.png',
      'https://reventapp.com/android/android-launchericon-512-512.png',
    ],
  },
  keywords: [
    'Events',
    'Revent',
    'Event Management',
    'Event Ticketing',
    'Event Planning',
    'Event Marketplace',
  ],
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/ios/16.png',
      '/ios/32.png',
      '/ios/48.png',
      '/ios/64.png',
      '/ios/128.png',
      '/ios/256.png',
      '/ios/512.png',
    ],
  },
  verification: {
    google: 'google',
  },
}
