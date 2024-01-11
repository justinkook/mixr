import { Separator } from '@/components/ui/separator'
import { ProfileForm } from '@/components/forms/profile/profile-forrm'

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Manage profile settings.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}
