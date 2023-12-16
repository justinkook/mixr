import { TicketIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { CreateTicketModal } from '@/components/create-ticket-modal'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { TicketTypeCard } from '@/components/ticket-type-card'

const ticketTypes = [
  {
    title: 'GA',
    description: 'General Admission.',
    price: 0,
    capacity: 200,
    isApprovalRequired: false,
    startDateTime: new Date('2021-10-01T12:00:00Z'),
    endDateTime: new Date('2021-10-01T12:00:00Z'),
  },
  {
    title: 'VIP',
    description:
      'Elevate your event experience with premium perks like VIP access and recognition in event materials.',
    price: 210,
    capacity: 50,
    isApprovalRequired: true,
    startDateTime: new Date('2021-10-01T12:00:00Z'),
    endDateTime: new Date('2021-10-01T12:00:00Z'),
  },
  {
    title: 'VIP',
    description:
      'Elevate your event experience with premium perks like VIP access and recognition in event materials.',
    price: 210,
    capacity: 50,
    isApprovalRequired: true,
    startDateTime: new Date('2021-10-01T12:00:00Z'),
    endDateTime: new Date('2021-10-01T12:00:00Z'),
  },
  {
    title: 'VIP',
    description:
      'Elevate your event experience with premium perks like VIP access and recognition in event materials.',
    price: 210,
    capacity: 50,
    isApprovalRequired: true,
    startDateTime: new Date('2021-10-01T12:00:00Z'),
    endDateTime: new Date('2021-10-01T12:00:00Z'),
  },
]

export default async function EventTicketsPage() {
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 pt-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
            <p className="text-muted-foreground">
              Create ticket types and set prices.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CreateTicketModal />
          </div>
        </div>
        <Separator />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ticketTypes.length > 0 ? (
          ticketTypes.map((ticketType, index) => (
            <TicketTypeCard key={index} ticketType={ticketType} />
          ))
        ) : (
          <EmptyPlaceholder
            className="col-span-3"
            content={{
              icon: TicketIcon,
              title: 'No ticket types yet.',
              description: 'Create your first ticket type to get started.',
              action: <CreateTicketModal className="w-fit" />,
            }}
          />
        )}
      </div>
    </>
  )
}
