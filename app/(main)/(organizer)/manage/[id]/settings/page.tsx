import { Separator } from '@/components/ui/separator'

import { EventForm } from './components/event-form'

export default function EventSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Event</h3>
        <p className="text-sm text-muted-foreground">Manage event settings.</p>
      </div>
      <Separator />
      <EventForm />
    </div>
  )
}
