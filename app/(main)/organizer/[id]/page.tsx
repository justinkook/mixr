import { AlignJustifyIcon, LayoutGridIcon, ZapOffIcon } from 'lucide-react'

import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EventCard } from '@/components/cards/event-card'
import { EventGridCard } from '@/components/cards/event-grid-card'
import { EmptyPlaceholder } from '@/components/empty-placeholder'

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
            <Tabs defaultValue="grid" className="flex-1 space-y-4">
              <div className="mt-6 mb-3 flex justify-between">
                <h2 className="text-2xl font-semibold tracking-tight self-end">
                  Past events
                </h2>
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
                      <EventGridCard key={index} />
                    ))
                  ) : (
                    <EmptyPlaceholder
                      className="col-span-3"
                      placeholder={{
                        icon: ZapOffIcon,
                        title: 'No events available',
                        description: 'You have not saved any upcoming events.',
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
