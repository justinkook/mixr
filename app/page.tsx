import { Zap, ZapOffIcon } from 'lucide-react'

import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CurrentLocationCombobox } from '@/components/current-location-combobox'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { EventCard } from '@/components/event-card'
import { EventGridCard } from '@/components/event-grid-card'

export default function Home() {
  return (
    <>
      <div className="h-full space-y-6 px-4 py-6 lg:px-8">
        <div>
          <div className="text-muted-secondary self-stretch whitespace-nowrap text-sm leading-5">
            Find events near
          </div>
          <CurrentLocationCombobox />
        </div>
        <Tabs defaultValue="all" className="h-full space-y-6">
          <div className="flex items-center">
            <ScrollArea className="w-full">
              <TabsList>
                <TabsTrigger value="all" className="relative">
                  <Zap className="mr-2 h-4 w-4" />
                  All
                </TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="weekend">Weekend</TabsTrigger>
                <TabsTrigger value="free">Free</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <TabsContent value="all" className="border-none p-0 outline-none">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Planned for You
                </h2>
                <p className="text-sm text-muted-foreground">
                  Your personalized picks.
                </p>
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
                <h2 className="text-2xl font-semibold tracking-tight">
                  Trending Events
                </h2>
                <p className="text-sm text-muted-foreground">
                  Sorted by activity such as by views and likes.
                </p>
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

            <div className="mt-6 flex justify-between space-y-1">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Events going on Today
                </h2>
                <p className="text-sm text-muted-foreground">
                  All events held today.
                </p>
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

            <div className="mt-6 flex justify-between space-y-1">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Events this Weekend
                </h2>
                <p className="text-sm text-muted-foreground">
                  Excited for the weekend? Here are some events you can attend.
                </p>
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

            <div className="mt-6 flex justify-between space-y-1">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Free Events
                </h2>
                <p className="text-sm text-muted-foreground">
                  Events that are free to attend.
                </p>
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

            <div className="mt-6 flex justify-between space-y-1">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Newest Events
                </h2>
                <p className="text-sm text-muted-foreground">
                  Events hot off the press.
                </p>
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
          </TabsContent>
          <TabsContent value="trending">
            <div className="mt-6 flex justify-between space-y-1">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Trending Events
                </h2>
                <p className="text-sm text-muted-foreground">
                  Sorted by activity such as by views and likes.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
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
        </Tabs>
      </div>
    </>
  )
}
