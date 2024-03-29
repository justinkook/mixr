import React from 'react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type DateCardProps = {
  day: string
  month: string
  aspectRatio?: 'portrait' | 'square'
}

export const DateCard: React.FC<DateCardProps> = ({
  day,
  month,
  aspectRatio,
}) => {
  return (
    <Card
      className={cn(
        'relative flex max-h-[62px] max-w-[62px] flex-col items-center justify-center self-end rounded-xl bg-secondary px-6 py-2.5 max-md:px-5',
        aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
      )}
    >
      <h3 className="self-center whitespace-nowrap text-center text-sm font-bold leading-5">
        {day}
      </h3>
      <div className="self-center whitespace-nowrap text-center text-xs leading-4 text-muted-foreground">
        {month}
      </div>
    </Card>
  )
}
