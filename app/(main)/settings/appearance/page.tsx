import { Separator } from '@/components/ui/separator'
import { AppearanceForm } from '@/components/forms/appearance/appearance-form'

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the event page.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
