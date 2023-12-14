import { Separator } from '@/components/ui/separator'
import { EventForm } from '@/components/event/manage/settings/event/event-form'
import { Button } from '@/components/ui/button'

export default function SettingsEventPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Event</h3>
        <p className="text-sm text-muted-foreground">Manage event settings.</p>
      </div>
      <Separator />
      <EventForm />
      <div className="pt-8">
        <h3 className="text-lg font-medium">Delete Event</h3>
        <p className="text-sm text-muted-foreground">
          Cancel and permanently delete this event. This action cannot be undone.
        </p>
      </div>
      <Separator />
      <Button variant="destructive">Delete event</Button>
    </div>
  )
}
