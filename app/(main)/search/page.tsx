import {
  AlignJustifyIcon,
  CalendarCheckIcon,
  ChefHatIcon,
  CpuIcon,
  GraduationCapIcon,
  LayoutGridIcon,
  MedalIcon,
  MusicIcon,
  PaintbrushIcon,
  PartyPopperIcon,
  SchoolIcon,
  ShirtIcon,
  SlidersHorizontalIcon,
  UsersIcon,
  ZapOffIcon,
} from 'lucide-react'

import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { EventCard } from '@/components/event-card'
import { EventGridCard } from '@/components/event-grid-card'
import Search from '@/components/search'

export default function SearchPage() {
  return (
    <>
      <div className="h-full space-y-6">
        <Search />
        <Tabs defaultValue="grid" className="h-full space-y-6">
          <div className="flex items-center flex-wrap md:flex-nowrap space-y-2 md:space-y-0">
            <div className="space-x-2 min-w-fit">
              <TabsList className="h-[36px]">
                <TabsTrigger value="column" className="relative">
                  <AlignJustifyIcon className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="grid">
                  <LayoutGridIcon className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
              <Button variant={'outline'}>
                <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <Separator
              orientation="vertical"
              className="h-8 mx-4 hidden md:block"
            />

            <ScrollArea className="flex-1">
              <div className="flex space-x-2 overflow-x-auto">
                <Button variant={'outline'} className="rounded-full">
                  <CpuIcon className="mr-2 h-4 w-4" />
                  Tech
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <PaintbrushIcon className="mr-2 h-4 w-4" />
                  Art
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <MusicIcon className="mr-2 h-4 w-4" />
                  Music
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <MedalIcon className="mr-2 h-4 w-4" />
                  Sports
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <UsersIcon className="mr-2 h-4 w-4" />
                  Networking
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <ChefHatIcon className="mr-2 h-4 w-4" />
                  Cooking
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <PartyPopperIcon className="mr-2 h-4 w-4" />
                  Parties
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <CalendarCheckIcon className="mr-2 h-4 w-4" />
                  Conferences
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <ShirtIcon className="mr-2 h-4 w-4" />
                  Fashion
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <GraduationCapIcon className="mr-2 h-4 w-4" />
                  Education
                </Button>
                <Button variant={'outline'} className="rounded-full">
                  <SchoolIcon className="mr-2 h-4 w-4" />
                  Community
                </Button>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <Separator className="my-4" />
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
                  content={{
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
    </>
  )
}
