import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type EmptyPlaceholderProps = {
  content: {
    icon: LucideIcon
    title: string
    description: string
    action?: React.ReactNode
  }
  className?: string
}

export function EmptyPlaceholder({
  content,
  className,
}: EmptyPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed',
        className
      )}
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
        {content.icon && (
          <content.icon className="h-10 w-10 text-muted-foreground" />
        )}

        <h3 className="mt-4 text-lg font-semibold">{content.title}</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          {content.description}
        </p>
        {content.action}
      </div>
    </div>
  )
}
