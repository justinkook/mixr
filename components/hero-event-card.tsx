import Image from 'next/image'
import { MapPinIcon, ShareIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default async function HeroEventCard() {
  return (
    <div className="flex w-full flex-row">
      <div className="flex w-full flex-row justify-between">
        <div className="flex w-full space-x-8">
          {/* Event Image */}
          <Card className="h-[330px] w-[330px] overflow-hidden rounded-lg">
            <Image
              priority
              src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
              alt={'alt'}
              width={400}
              height={400}
              className="aspect-square h-full w-full object-cover object-center"
            />
          </Card>
          <div className="mt-16 flex flex-col">
            <div className="mt-4">
              <h2 className="text-2xl font-bold leading-8 tracking-tight sm:text-3xl">React Rendezvous</h2>
            </div>

            {/* Event Date & Time */}
            <div className="mt-6">
              <h2 className="sr-only">Event Date</h2>
              <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                <div className="flex items-start justify-between gap-4 self-stretch">
                  <div className="flex h-full w-12 max-w-full flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                    <div className="self-stretch whitespace-nowrap text-center text-sm font-bold leading-5 text-foreground">
                      29
                    </div>
                    <div className="self-center whitespace-nowrap text-center text-xs leading-4 text-muted-foreground">
                      Nov
                    </div>
                  </div>
                  <div className="my-auto flex flex-col items-start self-center">
                    <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 text-foreground lg:text-base">
                      Wednesday, November 29
                    </div>
                    <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
                      5:00 PM to 7:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-3">
              <h3 className="sr-only">Location</h3>
              <div className="flex items-center">
                <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                  <div className="flex items-start justify-between gap-4 self-stretch">
                    <div className="flex h-full w-12 max-w-full flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                      <MapPinIcon />
                    </div>
                    <div className="my-auto flex flex-col items-start self-center">
                      <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
                        The Hotel Chelsea
                      </div>
                      <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
                        222 W 23rd St New York, NY 10011
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex h-full items-end">
              <h3 className="sr-only">Save Event Changes Button</h3>
              <Button className="max-w-xs flex-1">Manage Event</Button>
              <Button variant="secondary" className="ml-4">
                <ShareIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
