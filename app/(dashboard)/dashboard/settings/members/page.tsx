import { Separator } from '@/components/ui/separator'
import { TeamMembers } from '@/components/team-members'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SettingsMembersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Team Members</h3>
        <p className="text-sm text-muted-foreground">Add team member and manage their permissions.</p>
      </div>
      <div className="flex space-x-2">
        <Input placeholder="Enter email to send an invite" type="email" />
        <Button>Send Invite</Button>
      </div>
      <Separator className="my-4" />
      <TeamMembers />
    </div>
  )
}
