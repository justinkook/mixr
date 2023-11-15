import type { Metadata } from "next";

export const metadataConfig: Metadata = {
  metadataBase: new URL("https://app.gen3tickets.com"),
  title: "MIXR",
  description: "Always be in the Mix",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MIXR",
    description: "Always be in the Mix",
    url: "https://app.gen3tickets.com",
    siteName: "MIXR",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "MIXR Logo 192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "MIXR Logo 512x512",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIXR",
    description: "Always be in the Mix",
    siteId: "1467726470533754880",
    creator: "@MIXR",
    creatorId: "1467726470533754880",
    images: ["/android-chrome-192x192.png", "/android-chrome-512x512.png"],
  },
  keywords: [
    "Event Management",
    "Event Ticketing",
    "Event Planning",
    "Event Marketing",
    "Event Registration",
    "Happy Hours",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    startupImage: ["/android-chrome-512x512.png"],
  },
  verification: {
    google: "google",
  },
};
