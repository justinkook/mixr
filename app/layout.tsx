import type { Metadata } from "next";
import { metadataConfig } from "@/config/metadata";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";

import "@/styles/globals.css";

export const fontSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = metadataConfig;

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
