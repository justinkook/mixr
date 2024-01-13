import Link from 'next/link'
import { AlignJustifyIcon, LayoutGridIcon, ZapOffIcon } from 'lucide-react'

import {
  eventMockData,
  madeForYouEvents,
  mockEventGridCardData,
} from '@/lib/mockData/events'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EventCard } from '@/components/cards/event-card'
import { EventGridCard } from '@/components/cards/event-grid-card'
import { EmptyPlaceholder } from '@/components/empty-placeholder'

export default function EventsPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full space-y-8">
          <div className="border-none p-0 outline-none">
            <div className="hidden h-full flex-1 flex-col space-y-8 py-4 md:flex">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Upcoming events
                  </h2>
                  <p className="text-muted-foreground">
                    View your upcoming events.
                  </p>
                </div>
              </div>
              <Separator />
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

            <Tabs defaultValue="grid" className="flex-1 ">
              <div className="flex-1 flex-col space-y-8 pt-4 pb-2 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Past events
                    </h2>
                    <p className="text-muted-foreground">
                      View your past events.
                    </p>
                  </div>
                  <div className="space-between flex items-center">
                    <TabsList className="h-[36px]">
                      <TabsTrigger value="grid">
                        <LayoutGridIcon className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger value="column">
                        <AlignJustifyIcon className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
                <Separator />
              </div>
              <TabsContent value="grid">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {madeForYouEvents.map((event) => (
                    <EventCard
                      key={event.name}
                      event={event}
                      className="w-full flex-1"
                      aspectRatio="square"
                      width={450}
                      height={450}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="column">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {eventMockData.length > 0 ? (
                    eventMockData.map((event, index) => (
                      <EventGridCard key={index} {...mockEventGridCardData} />
                    ))
                  ) : (
                    <EmptyPlaceholder
                      className="col-span-3"
                      placeholder={{
                        icon: ZapOffIcon,
                        title: 'No events available',
                        description: 'You do have have any past events.',
                        action: (
                          <Button asChild>
                            <Link href="/create">Create event</Link>
                          </Button>
                        ),
                      }}
                    />
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
