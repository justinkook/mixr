import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RegistrationCard } from '@/components/registration-card'

const product = {
  name: `AIMG's Stacked Startup Showcase`,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
  ],
  description: `
    <p>Join AI Marketers Guild at our next Stacked Startup Showcase event in NYC!</p>
    <br><p>We'll be bringing together community members and friends. Participating startups will offer demos. Cash bar.</p>
    <br><p>Startups will share demos on their laptops. Presenters will be invited to join the previous day's virtual AI Insiders event for more formal presentations.</p>
    <br><strong>Request to demo when you RSVP.</strong><br>
    <br><p>The location is a centrally located bar in Chelsea, visible to all approved attendees.</p>
    <br><p>Demoing companies to be announced soon.</p>
  `,
}

export default function EventPage() {
  return (
    <div className="mx-auto max-w-2xl py-4 sm:px-4 sm:py-8 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Event Image */}
        <div className="lg:col-span-3 lg:row-end-1">
          <Card className="overflow-hidden rounded-lg">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width={590}
              height={590}
              className="h-full w-full object-cover object-center"
            />
          </Card>
        </div>

        {/* Product info */}
        <div className="mx-auto mt-6 max-w-2xl sm:mt-16 lg:col-span-4 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div className="flex flex-col">
            <Link href="/dashboard/revent">
              <div className="flex flex-row items-center">
                <Avatar className="mr-2 h-3 w-3">
                  <AvatarImage src="/images/card.png" alt="@revent" />
                  <AvatarFallback>RE</AvatarFallback>
                </Avatar>
                <h1 className="text-sm font-medium leading-8 tracking-tight text-muted-foreground sm:text-base">
                  Revent
                </h1>
                <ArrowUpRightIcon className="ml-1 h-4 w-4 text-muted-foreground" />
              </div>
            </Link>
            <div className="mt-4">
              <h2 className="text-2xl font-bold leading-8 tracking-tight sm:text-3xl">
                {product.name}
              </h2>
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

            {/* Registration */}
            <div className="mt-8 hidden lg:block">
              <h3 className="sr-only">Registration</h3>
              <RegistrationCard />
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">
                About Event
              </h3>
              <p
                className="mt-2 line-clamp-5 self-stretch text-sm leading-5 text-muted-foreground lg:line-clamp-none lg:text-base"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <Link
                href="/"
                className="mt-2 self-stretch text-sm font-medium leading-5 text-primary lg:hidden"
              >
                <Button variant="link" className="p-0">
                  Show more
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full max-w-2xl lg:col-span-3 lg:mt-0 lg:max-w-none">
          {/* Organizer */}
          <div className="mt-6">
            <h3 className="sr-only">Organizer</h3>
            <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">
              Organizer
            </h3>

            <div className="mt-4 flex items-center">
              <div className="flex h-full w-full items-center justify-between gap-5 self-stretch px-0">
                <div className="flex items-start justify-between gap-4 self-stretch">
                  <div className="flex h-full w-12 max-w-full flex-col items-center justify-center self-stretch px-4 py-1.5">
                    <Link href="/dashboard/revent">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/card.png" alt="@revent" />
                        <AvatarFallback>RE</AvatarFallback>
                      </Avatar>
                    </Link>
                  </div>
                  <div className="my-auto flex flex-col items-start self-center">
                    <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
                      Revent
                    </div>
                    <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
                      12k Members
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="lg">
                  Join
                </Button>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="mt-6">
            <h3 className="sr-only">Location Map</h3>
            <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">
              Location
            </h3>
            <p className="mt-4 line-clamp-2 self-stretch text-sm leading-5 text-foreground lg:text-base">
              The Hotel Chelsea, 222 W 23rd St New York, NY 10011
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.820241093209!2d-74.00096000919245!3d40.74398079761726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592b2fd36f67%3A0x1ff686d31ab672d3!2sThe%20Hotel%20Chelsea!5e0!3m2!1sen!2sus!4v1701014837537!5m2!1sen!2sus"
                width="100%"
                height="350"
                className="rounded-lg border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
