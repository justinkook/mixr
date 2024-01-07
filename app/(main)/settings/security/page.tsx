import { Separator } from '@/components/ui/separator'
import { EmailForm } from '@/components/settings/email/email-form'
import { MobileForm } from '@/components/settings/mobile/mobile-form'

export default function SettingsSecurityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your security preferences.
        </p>
      </div>
      <Separator />
      <EmailForm />
      <MobileForm />
    </div>
  )
}
