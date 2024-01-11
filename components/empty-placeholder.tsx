import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type EmptyPlaceholderProps = {
  placeholder: {
    icon: LucideIcon
    title: string
    description: string
    action?: React.ReactNode
  }
  className?: string
}

export function EmptyPlaceholder({
  placeholder,
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
        {placeholder.icon && (
          <placeholder.icon className="h-10 w-10 text-muted-foreground" />
        )}

        <h3 className="mt-4 text-lg font-semibold">{placeholder.title}</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          {placeholder.description}
        </p>
        {placeholder.action}
      </div>
    </div>
  )
}
