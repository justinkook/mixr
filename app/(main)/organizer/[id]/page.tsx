import { ZapOffIcon } from 'lucide-react'

import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { EventCard } from '@/components/event-card'
import { EventGridCard } from '@/components/event-grid-card'

export default function OrganizerPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full space-y-8">
          <div className="border-none p-0 outline-none">
            <Separator className="my-4" />
            <div className="mt-6 mb-3 flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                Upcoming events
              </h2>
            </div>
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

            <Separator className="my-4" />
            <div className="mt-6 mb-3 flex justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                Past events
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {eventMockData.length > 0 ? (
                eventMockData.map((event, index) => (
                  <EventGridCard key={index} />
                ))
              ) : (
                <EmptyPlaceholder
                  className="col-span-3"
                  content={{
                    icon: ZapOffIcon,
                    title: 'No events available',
                    description: 'You have not saved any upcoming events.',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
