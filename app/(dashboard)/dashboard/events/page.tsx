import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { EventCard } from '@/components/event-card'

export default function EventsPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full space-y-8 pt-4">
          <div className="border-none p-0 outline-none">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Upcoming events</h2>
                <p className="text-sm text-muted-foreground">Your upcoming events.</p>
              </div>
            </div>
            <Separator className="my-4" />
            <ScrollArea>
              <div className="relative max-w-full">
                <div className="flex space-x-4 pb-4">
                  {madeForYouEvents.map((event, index) => (
                    <EventCard
                      key={index}
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
                <h2 className="text-2xl font-semibold tracking-tight">Past events</h2>
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
                  {eventMockData.map((event, index) => (
                    <EventCard
                      key={index}
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
      </div>
    </>
  )
}
