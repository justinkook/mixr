import { Button } from '@/components/ui/button'
import SettingsProfilePage from '@/components/manage/settings/profile/profile-page'
import SettingsAppearancePage from '@/components/manage/settings/appearance/appearance-page'
import { Separator } from '@/components/ui/separator'
import { CopyPlusIcon } from 'lucide-react'

export default async function EventSettingsPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Change public url, appearance, or delete event.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            <CopyPlusIcon className="mr-2 h-4 w-4" />
            Duplicate
          </Button>
        </div>
      </div>
      <SettingsProfilePage />
      <SettingsAppearancePage />
      <div>
        <h3 className="text-lg font-medium">Delete Event</h3>
        <p className="text-sm text-muted-foreground">
          Cancel and permanently delete this event. This action cannot be undone.
        </p>
      </div>
      <Separator />
      <Button variant="destructive" className="w-fit">
        Delete Event
      </Button>
    </div>
  )
}
