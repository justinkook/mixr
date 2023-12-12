'use client'

import { ChevronLeftIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export function BackNavbar() {
  const { back } = useRouter()
  return (
    <nav className="sticky top-16 z-40 flex h-12 w-full items-center gap-x-6 overflow-hidden bg-background px-3 py-2.5 sm:px-1.5">
      <Button variant="ghost" onClick={back}>
        <ChevronLeftIcon className="h-6 w-6 stroke-muted-foreground" />
      </Button>
    </nav>
  )
}
