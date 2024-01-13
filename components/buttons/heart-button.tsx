'use client'

import { useState } from 'react'
import { HeartIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'

interface HeartButtonProps extends ButtonProps {
  className?: string
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  className,
  ...props
}) => {
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    setHasLiked(!hasLiked)
  }

  return (
    <Button
      variant="ghost"
      onClick={handleLike}
      className={className}
      {...props}
    >
      <HeartIcon
        className={cn(
          'h-5 w-5 stroke-primary fill-primary-foreground transition-colors dark:stroke-primary-foreground dark:fill-primary',
          {
            'fill-primary stroke-primary-foreground animate-pulse dark:fill-primary-foreground dark:stroke-primary':
              hasLiked,
          }
        )}
      />
    </Button>
  )
}
