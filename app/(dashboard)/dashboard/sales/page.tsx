import { z } from 'zod'

import dataJSON from '@/lib/mockData/guests.json'
import { guestSchema } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'

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
          <h2 className="text-2xl font-bold tracking-tight">Sales</h2>
          <p className="text-muted-foreground">
            See sales and guests for all events.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button disabled variant="secondary">
            Download CSV
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
