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
        size={24}
        className={cn('stroke-primary fill-[#eeeae6] transition-colors', {
          'fill-primary stroke-[#eeeae6]': hasLiked,
        })}
      />
    </Button>
  )
}
