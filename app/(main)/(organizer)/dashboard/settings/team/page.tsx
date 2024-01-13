import { TeamMembersForm } from '@/components/forms/team-members/team-members-form'

export default function SettingsTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Team Members</h3>
        <p className="text-sm text-muted-foreground">
          Add team member and manage their permissions.
        </p>
      </div>
      <TeamMembersForm />
    </div>
  )
}
