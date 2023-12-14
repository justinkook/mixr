import { z } from 'zod'
import { guestSchema } from '@/lib/schema'
import dataJSON from '@/components/event/manage/guests/guests.json'

import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/event/manage/guests/data-table'
import { columns } from '@/components/event/manage/guests/columns'
import { InviteGuestModal } from '@/components/event/manage/guests/invite-guest-modal'
import { Button } from '@/components/ui/button'

// TODO: Replace Simulate a database read for tasks.
async function getTasks() {
  return z.array(guestSchema).parse(dataJSON)
}

export default async function EventGuestsPage() {
  const tasks = await getTasks()

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Contacts</h2>
          <p className="text-muted-foreground">See all previous guests and identify repeat customers.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">Download</Button>
        </div>
      </div>
      <Separator />
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
