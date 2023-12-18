import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const avatarStackVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row -space-x-1',
      vertical: 'flex-col -space-y-1',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export interface AvatarStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStackVariants> {
  avatars: string[]
  maxAvatarsAmount?: number
}

function AvatarStack({
  className,
  orientation,
  avatars,
  maxAvatarsAmount = 3,
  ...props
}: AvatarStackProps) {
  const maxAvatars = avatars.slice(0, maxAvatarsAmount)

  return (
    <div
      className={cn(avatarStackVariants({ orientation }), className)}
      {...props}
    >
      {maxAvatars.map((avatarUrl, index) => (
        <Avatar key={index} className="w-4 h-4">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
      ))}

      {maxAvatars.length < avatars.length && (
        <Avatar key={'Excesive avatars'} className="w-fit h-4">
          <AvatarFallback className="text-xs p-2">
            +{avatars.length - maxAvatars.length}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

export { AvatarStack, avatarStackVariants }
