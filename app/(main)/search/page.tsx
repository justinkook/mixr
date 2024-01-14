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
  UsersIcon,
  ZapOffIcon,
} from 'lucide-react'

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

import { SearchFiltersModal } from './components/search-filters-modal'
import { SearchModal } from './components/search-modal'

export default function SearchPage() {
  return (
    <>
      <div className="h-full space-y-6">
        <SearchModal />
        <Tabs defaultValue="grid" className="h-full space-y-6">
          <div className="flex items-center flex-wrap md:flex-nowrap space-y-4 md:space-y-0">
            <div className="flex space-x-2 min-w-fit">
              <TabsList className="h-[36px]">
                <TabsTrigger value="grid">
                  <LayoutGridIcon className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="column">
                  <AlignJustifyIcon className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
              <SearchFiltersModal />
            </div>

            <Separator
              orientation="vertical"
              className="h-8 mx-4 hidden md:block"
            />

            <ScrollArea>
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
                  <EventGridCard key={index} {...mockEventGridCardData} />
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
    </>
  )
}
