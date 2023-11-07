import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/providers/theme-provider";

import "@/styles/globals.css";

export const fontSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MIXR",
  description: "Always be in the Mix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5766C7" />
      </head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
