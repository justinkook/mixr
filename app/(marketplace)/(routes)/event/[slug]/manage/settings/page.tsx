import { Button } from '@/components/ui/button'
import SettingsAccountPage from '@/components/manage/settings/account/settings-page'

export default async function EventSettingsPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">See active views, device, or location breakdown</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">Duplicate</Button>
        </div>
      </div>
      <SettingsAccountPage />
    </div>
  )
}
