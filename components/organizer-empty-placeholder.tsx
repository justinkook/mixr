import { ZapIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function OrganizerEmptyPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed', className)}
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
        <ZapIcon className="h-10 w-10 text-muted-foreground" />

        <h3 className="mt-4 text-lg font-semibold">No organizers available</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">You are not following any organizers.</p>
      </div>
    </div>
  )
}
