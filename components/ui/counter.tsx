'use client'

import * as React from 'react'
import { Minus, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

type CounterProps = {
  label?: string
  minCount?: number
  maxCount?: number
}

export function Counter({ label, minCount = 1, maxCount = 20 }: CounterProps) {
  const [count, setCount] = React.useState(1)

  function onClick(e: any, adjustment: number) {
    e.preventDefault()
    setCount(Math.max(minCount, Math.min(maxCount, count + adjustment)))
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
        onClick={(e) => onClick(e, -1)}
        disabled={count <= 1}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="flex-1 text-center">
        <div className="text-5xl font-bold tracking-tighter">{count}</div>
        <div className="text-[0.70rem] uppercase text-muted-foreground">
          {label ? label : 'Tickets'}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
        onClick={(e) => onClick(e, 1)}
        disabled={count >= 20}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  )
}
