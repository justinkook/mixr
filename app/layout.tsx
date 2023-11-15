import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";

import { ClerkProvider, MultisessionAppSupport } from "@clerk/nextjs";

import "@/styles/globals.css";

export const fontSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
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
    icon: "/icon-192x192.png",
    shortcut: "/icon-512x512.png",
    apple: "/icon-192x192.png",
  },
  openGraph: {
    title: "MIXR",
    description: "Always be in the Mix",
    url: "https://app.gen3tickets.com",
    siteName: "MIXR",
    images: [
      {
        url: "/icon-192x192.png",
        width: 192,
        height: 192,
        alt: "MIXR Logo 192x192",
      },
      {
        url: "/icon-512x512.png",
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
    images: ["/icon-192x192.png", "/icon-512x512.png"],
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
    startupImage: ["/icon-512x512.png"],
  },
  verification: {
    google: "google",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClerkProvider
          appearance={{
            elements: {
              colorPrimary: "bg-primary",
            },
          }}
        >
          <MultisessionAppSupport>{children}</MultisessionAppSupport>
        </ClerkProvider>
      </body>
    </html>
  );
}
