'use client'

import { useState } from 'react'
import { CalendarIcon, MapPinIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ImageUpload } from '@/components/image-upload'
import { OrganizationSwitcher } from '@/components/organization-switcher'
import { DateTimeCombobox } from '@/app/(main)/create/components/date-time-combobox'
import { LocationCombobox } from '@/app/(main)/create/components/location-combobox'

export default function CreateEventPage() {
  const [mode, setMode] = useState<'create' | 'edit'>('create')
  return (
    <div>
      {/* Product info */}
      <div className="flex flex-col space-y-4">
        <OrganizationSwitcher hidePersonal />

        {/* Event Image */}
        <Card className="max-h-[400px] overflow-hidden rounded-lg">
          {/* <Image
              src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
              alt={product.images[0].alt}
              width={400}
              height={400}
              className="aspect-square h-full w-full object-cover object-center"
            /> */}
          <ImageUpload
            onChange={(value) => console.log(value)}
            value={'/images/card.png'}
          />
        </Card>
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
                <DateTimeCombobox />
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
          <Button className="w-full">
            {mode === 'edit' ? 'Save changes' : 'Create event'}
          </Button>
        </div>
      </div>
    </div>
  )
}
