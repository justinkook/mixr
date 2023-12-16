import { z } from 'zod'
import { guestSchema } from '@/lib/schema'
import dataJSON from '@/lib/mockData/guests.json'

import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/table/data-table'
import { columns } from '@/components/table/columns'
import { InviteGuestModal } from '@/components/invite-guest-modal'

// TODO: Replace Simulate a database read for tasks.
async function getTasks() {
  return z.array(guestSchema).parse(dataJSON)
}

export default async function EventGuestsPage() {
  const tasks = await getTasks()

  return (
    <div className="h-full flex-1 flex-col space-y-8 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Guests</h2>
          <p className="text-muted-foreground">Manage your guest list, approvals, and orders.</p>
        </div>
        <div className="flex items-center space-x-2">
          <InviteGuestModal />
        </div>
      </div>
      <Separator />
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
