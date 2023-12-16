'use client'

import { useEffect, useState } from 'react'
import { ClerkProvider, MultisessionAppSupport } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export function ClerkThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <ClerkProvider
      appearance={{
        baseTheme: resolvedTheme === 'dark' ? dark : undefined,
        elements: {
          colorPrimary: 'primary',
          card: 'bg-background',
        },
      }}
    >
      <MultisessionAppSupport>{children}</MultisessionAppSupport>
    </ClerkProvider>
  )
}
