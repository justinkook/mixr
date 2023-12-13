import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { EventCard } from '@/components/event/event-card'
import { eventMockData, madeForYouEvents } from '@/components/event/events'
import { PlacesCombobox } from '@/components/places-combobox'
import { Zap } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full space-y-6 px-4 py-6 lg:px-8">
          <div>
            <div className="text-muted-secondary text-s self-stretch whitespace-nowrap leading-5">Find events near</div>
            <PlacesCombobox />
          </div>
          <Tabs defaultValue="trending" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <ScrollArea className="w-full">
                <TabsList>
                  <TabsTrigger value="trending" className="relative">
                    <Zap className="mr-2 h-4 w-4" />
                    All
                  </TabsTrigger>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="networking">Networking</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                  <TabsTrigger value="parties">Parties</TabsTrigger>
                  <TabsTrigger value="art">Art</TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <TabsContent value="trending" className="border-none p-0 outline-none">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">Planned for You</h2>
                  <p className="text-sm text-muted-foreground">Your personalized picks.</p>
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
                  <h2 className="text-2xl font-semibold tracking-tight">Music Events</h2>
                  <p className="text-sm text-muted-foreground">All music events.</p>
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

              <div className="mt-6 flex justify-between space-y-1">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Networking Events</h2>
                  <p className="text-sm text-muted-foreground">All networking events.</p>
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

              <div className="mt-6 flex justify-between space-y-1">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Tech Events</h2>
                  <p className="text-sm text-muted-foreground">All tech events.</p>
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
