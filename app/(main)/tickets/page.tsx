import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'

import { TicketCard } from '@/components/ticket-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TicketsPage() {
  return (
    <>
      <Tabs defaultValue="upcoming" className="flex-1 space-y-4 pt-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="upcoming">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            {eventMockData.map((event, index) => (
              <TicketCard key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            {madeForYouEvents.map((event, index) => (
              <TicketCard key={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
