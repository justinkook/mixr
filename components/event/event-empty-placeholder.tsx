import { ZapIcon } from 'lucide-react'
import CreateEventModal from '../create-event-modal'
import { cn } from '@/lib/utils'

export function EventEmptyPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed', className)}
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
        <ZapIcon className="h-10 w-10 text-muted-foreground" />

        <h3 className="mt-4 text-lg font-semibold">No events available</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">You have not created any events. Create one below.</p>
        <CreateEventModal />
      </div>
    </div>
  )
}
