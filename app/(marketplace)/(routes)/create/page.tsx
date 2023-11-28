'use client'

import { CalendarIcon, MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import { OrganizationSwitcher } from '@clerk/clerk-react'
import { Input } from '@/components/ui/input'
import { LocationCombobox } from '@/components/location-combobox'
import LexicalEditor from '@/components/editor/lexical-editor'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreateTicketCard } from '@/components/create-ticket-card'
import { DateCombobox } from '@/components/date-combobox'

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

export default function CreateEventPage() {
  return (
    <div className="mx-auto max-w-2xl py-4 sm:px-4 sm:py-8 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div className="lg:col-span-3 lg:row-end-1 lg:min-w-fit">
          {/* Product info */}
          <div className="flex flex-col">
            <Card>
              <CardHeader>
                <div className="mb-2">
                  <OrganizationSwitcher />
                </div>

                {/* Event Image */}
                <Card className="max-h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
                    alt={product.images[0].alt}
                    width={400}
                    height={400}
                    className="aspect-square h-full w-full object-cover object-center"
                  />
                </Card>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  placeholder="Event Name"
                  className="border-none pl-0 text-2xl font-bold leading-8 tracking-tight sm:text-3xl"
                />

                {/* Event Date & Time */}
                <div className="mt-6">
                  <h2 className="sr-only">Event Date</h2>
                  <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                    <div className="flex w-full items-start justify-start gap-4 self-stretch">
                      <div className="flex h-12 w-12 flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                        <CalendarIcon className="h-6 w-6" />
                      </div>
                      <div className="flex w-full flex-col items-start self-center">
                        <DateCombobox />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-3">
                  <h3 className="sr-only">Location</h3>
                  <div className="flex items-center">
                    <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                      <div className="flex w-full items-start justify-between gap-4 self-stretch">
                        <div className="flex h-12 w-12 flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                          <MapPinIcon />
                        </div>
                        <div className="flex w-full flex-col items-start self-center">
                          <LocationCombobox />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Create Event Button</h3>
                  <Button type="submit" className="w-full">
                    Create Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="row-span-1 mx-auto mt-6 max-w-2xl flex-wrap lg:col-span-4 lg:row-end-2 lg:mt-0 xl:row-span-2">
          <div className="flex flex-col">
            {/* Description */}
            <div className="mt-6 lg:mt-0">
              <h3 className="sr-only">Description</h3>
              <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">About Event</h3>
              <p className="mt-4">
                <LexicalEditor />
              </p>
            </div>

            {/* Tickets */}
            <div className="mt-12 lg:mt-6">
              <h3 className="sr-only">Tickets</h3>
              <h3 className="mb-4 self-stretch text-base font-bold leading-6 lg:text-lg">Tickets</h3>
              <CreateTicketCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
