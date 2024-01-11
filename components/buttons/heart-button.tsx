'use client'

import { useState } from 'react'
import { HeartIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface HeartButtonProps {
  // listingId: string
  // currentUser?: SafeUser | null
  className?: string
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  // listingId,
  // currentUser,
  className,
}) => {
  const [hasLiked, toggleLiked] = useState(false)

  return (
    <Button
      variant="ghost"
      onClick={() => toggleLiked(!hasLiked)}
      className={cn(className)}
    >
      <HeartIcon
        className={cn(
          'h-5 w-5 stroke-primary fill-primary-foreground transition-colors',
          {
            'fill-primary stroke-primary-foreground animate-pulse': hasLiked,
          }
        )}
      />
    </Button>
  )
}
