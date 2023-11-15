import type { Metadata } from "next";
import { metadataConfig } from "@/config/metadata";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider, MultisessionAppSupport } from "@clerk/nextjs";

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
        <ClerkProvider
          appearance={{
            elements: {
              colorPrimary: "primary",
            },
          }}
        >
          <MultisessionAppSupport>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </MultisessionAppSupport>
        </ClerkProvider>
      </body>
    </html>
  );
}
