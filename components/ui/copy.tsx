'use client'

import React, { useState } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import copy from 'copy-to-clipboard'
import { CheckCircle2Icon, CopyIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'

import { Button } from './button'

type CopyProps = {
  content: string
  asChild?: boolean
}

const Copy = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & CopyProps
>(({ children, className, content, asChild = false, ...props }, ref) => {
  const [done, setDone] = useState(false)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('Copy')

  const copyToClipboard = () => {
    setDone(true)
    copy(content)

    setTimeout(() => {
      setDone(false)
    }, 2000)
  }

  React.useEffect(() => {
    if (done) {
      setText('Copied')
      return
    }

    setTimeout(() => {
      setText('Copy')
    }, 500)
  }, [done])

  const Component = asChild ? Slot : Button

  return (
    <TooltipProvider>
      <Tooltip open={done || open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Component
            variant="secondary"
            ref={ref}
            aria-label="Copy code snippet"
            type="button"
            className={cn('h-fit w-fit', className)}
            onClick={copyToClipboard}
            {...props}
          >
            {children ? (
              children
            ) : done ? (
              <CheckCircle2Icon className="w-4 h-4" />
            ) : (
              <CopyIcon className="w-4 h-4" />
            )}
          </Component>
        </TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
})
Copy.displayName = 'Copy'

export { Copy }
