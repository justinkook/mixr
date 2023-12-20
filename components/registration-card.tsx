'use client'

import * as React from 'react'
import { Minus, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function RegistrationCard() {
  const [goal, setGoal] = React.useState(1)

  function onClick(e: any, adjustment: number) {
    e.preventDefault()
    setGoal(Math.max(1, Math.min(20, goal + adjustment)))
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex justify-between text-base">
          <span>General Admission</span>$54
        </CardTitle>
        <CardDescription>GA Tickets for entrance A</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={(e) => onClick(e, -1)}
            disabled={goal <= 1}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center">
            <div className="text-5xl font-bold tracking-tighter">{goal}</div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Tickets
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={(e) => onClick(e, 1)}
            disabled={goal >= 20}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
