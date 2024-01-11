import { Separator } from '@/components/ui/separator'
import { TeamMembersForm } from '@/components/forms/team-members/team-members'

export default function EventSettingsTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Team Members</h3>
        <p className="text-sm text-muted-foreground">
          Invite collaborators to help manage your event.
        </p>
      </div>
      <Separator />
      <TeamMembersForm />
    </div>
  )
}
