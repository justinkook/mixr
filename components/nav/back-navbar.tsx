'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeftIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function BackNavbar() {
  const { back } = useRouter()
  return (
    <nav className="sticky top-16 z-40 flex h-12 w-full items-center gap-x-6 overflow-hidden bg-background/95 py-2.5 backdrop-blur sm:px-1.5 lg:px-3">
      <Button variant="ghost" onClick={back}>
        <ChevronLeftIcon className="h-6 w-6 stroke-muted-foreground" />
      </Button>
    </nav>
  )
}
