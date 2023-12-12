import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import { EventCard } from '@/components/event/event-card'
import { eventMockData, madeForYouEvents } from '@/components/event/events'

export default function MyTicketsPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full space-y-6 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Upcoming</h2>
              <p className="text-sm text-muted-foreground">All upcoming events.</p>
            </div>
          </div>
          <Separator className="my-4" />
          <ScrollArea>
            <div className="relative max-w-full">
              <div className="flex space-x-4 pb-4">
                {madeForYouEvents.map((event) => (
                  <EventCard
                    key={event.name}
                    event={event}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="mt-6 flex justify-between space-y-1">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Past</h2>
              <p className="text-sm text-muted-foreground">All past events.</p>
            </div>
            <div className="ml-auto mr-4">
              <Button variant="link">See all</Button>
            </div>
          </div>
          <Separator className="my-4" />
          <ScrollArea>
            <div className="relative max-w-full">
              <div className="flex space-x-4 pb-4">
                {eventMockData.map((event) => (
                  <EventCard
                    key={event.name}
                    event={event}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </>
  )
}
