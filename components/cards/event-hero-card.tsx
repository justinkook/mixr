import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ShareModal } from '@/components/modals/share-modal'

const EventDate: React.FC = () => (
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
)

const EventLocation: React.FC = () => (
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
              222 W 23rd St
            </div>
            <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
              New York, NY 10011
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const EventHeroCard: React.FC = () => {
  return (
    <div className="flex w-full flex-col justify-between lg:flex-row">
      <div className="flex w-full flex-col md:flex-row md:space-x-8">
        {/* Event Image */}
        <Link href={`/event/react-rendevous`}>
          <Card className="h-auto w-full max-w-[350px] overflow-hidden rounded-lg">
            <Image
              priority
              src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
              alt={'alt'}
              width={350}
              height={350}
              className="aspect-square h-full w-full object-cover object-center"
            />
          </Card>
        </Link>
        {/* Event Details */}
        <div className="flex flex-col md:mt-auto">
          <div className="mt-4">
            <h4 className="text-sm font-medium leading-8 tracking-tight text-muted-foreground sm:text-base">
              Private
            </h4>
            <h2 className="text-2xl font-bold leading-8 tracking-tight sm:text-3xl">
              React Rendezvous
            </h2>
          </div>
          <EventDate />
          <EventLocation />
          <div className="mt-6 flex h-full items-end">
            <h3 className="sr-only">Save Event Changes Button</h3>
            <Button className="max-w-xs flex-1" asChild>
              <Link href={'/event/react-rendevous/manage'}>Manage Event</Link>
            </Button>
            <ShareModal className="ml-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
