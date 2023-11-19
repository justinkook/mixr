import { Separator } from "@/components/ui/separator"
import { AccountForm } from "./account-form"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <Separator />
      <AccountForm />
    </div>
  )
}
