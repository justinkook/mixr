import Link from 'next/link'
import {
  AlignJustifyIcon,
  InstagramIcon,
  LayoutGridIcon,
  LinkedinIcon,
  TwitterIcon,
  UserPlusIcon,
  ZapIcon,
  ZapOffIcon,
} from 'lucide-react'

import { eventMockData, madeForYouEvents } from '@/lib/mockData/events'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EventCard } from '@/components/cards/event-card'
import { EventGridCard } from '@/components/cards/event-grid-card'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { ShareModal } from '@/components/modals/share-modal'

export default function OrganizerPage() {
  return (
    <div className="space-y-4">
      <div className="sm:mb-12 flex items-center justify-between space-y-6 flex-wrap sm:flex-nowrap">
        <div className="flex w-full flex-col justify-between lg:flex-row">
          <div className="flex w-full flex-col md:flex-row md:space-x-8">
            {/* Event Image */}
            <Avatar className="w-[250px] h-[250px]">
              <AvatarImage
                src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
                className="object-cover object-center"
              />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            {/* Event Details */}
            <div className="flex flex-col mt-6 sm:mt-auto sm:pl-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold leading-8 tracking-tight sm:text-3xl text-primary">
                  Lena Logic
                </h2>
                <div className="flex space-x-4 text-sm ">
                  <div className="flex items-center">
                    <ZapIcon className="mr-1 h-3 w-3" />
                    23 Events
                  </div>
                  <div className="flex items-center">
                    <UserPlusIcon className="mr-1 h-3 w-3" />
                    12k Followers
                  </div>
                </div>
              </div>

              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <section className="max-w-lg">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    Asked about the inspiration behind his eight-and-a-half-hour
                    2015 album Sleep, the composer and ambient musician Max
                    Richter said it was pretty simple: Sleep is really
                    important, and he really likes doing it. In that spirit,
                    here’s a mix of contemporary and classic ambient music we
                    feel is perfectly calibrated to smooth the passage between
                    the stresses and noise of waking life and the quiet mystery
                    of dreams. Tap in. Lie down. Tune out. Our editors switch up
                    selections regularly here, so if you hear something you
                    like—or, more pointedly, if you don’t hear it—then add it to
                    your library.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 hidden text-sm font-bold leading-6 lg:inline-block"
                  >
                    more
                  </Button>
                </section>
              </div>

              <div className="flex h-full items-end">
                <h3 className="sr-only">Register Event Button</h3>
                <Button className="w-[200px] mr-4">Follow</Button>

                <ShareModal />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center self-end">
          <div className="flex justify-center ">
            <Link href="https://twitter.com">
              <Button variant="link">
                <span className="sr-only">Twitter Icon</span>
                <TwitterIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/">
              <Button variant="link">
                <span className="sr-only">Linkedin Icon</span>
                <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="https://instagram.com">
              <Button variant="link">
                <span className="sr-only">Instagram Icon</span>
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
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
    </div>
  )
}
