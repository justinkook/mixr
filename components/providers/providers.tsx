import * as React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkThemeProvider } from "./clerk-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkThemeProvider>{children}</ClerkThemeProvider>
    </ThemeProvider>
  );
}
