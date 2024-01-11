'use client'

import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ClerkThemeProvider } from '@/components/providers/clerk-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <ClerkThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ClerkThemeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
