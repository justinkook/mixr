import { PlusCircleIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CreateTicketCard } from '@/components/create-ticket-card'

export default async function EventTicketsPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
          <p className="text-muted-foreground">Create ticket types and set prices.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Create Ticket
          </Button>
        </div>
      </div>
      <Separator />
      <CreateTicketCard />
    </div>
  )
}
