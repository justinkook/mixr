import * as React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkThemeProvider } from "./clerk-provider";
import { NotificationsProvider } from "./notifications-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkThemeProvider>
        {children}
        <NotificationsProvider />
      </ClerkThemeProvider>
    </ThemeProvider>
  );
}
