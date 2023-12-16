'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'

import { DatePicker } from './date-picker'
import { TimePicker } from './time-picker'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

const locations = [
  {
    value: 'new york',
    label: 'New York',
  },
  {
    value: 'miami',
    label: 'Miami',
  },
  {
    value: 'san francisco',
    label: 'San Francisco',
  },
  {
    value: 'los angeles',
    label: 'Los Angeles',
  },
  {
    value: 'chicago',
    label: 'Chicago',
  },
]

export function DateTimeCombobox() {
  const [value, setValue] = React.useState('')

  return (
    <>
      {/* Desktop Combobox */}
      <div className="hidden w-full flex-col items-start self-start rounded-lg bg-muted p-4 md:flex">
        <div className="flex w-full items-center justify-between space-x-2 pb-2">
          <div className="self-center whitespace-nowrap pr-4 text-sm font-bold leading-5 text-foreground lg:text-base">
            Start
          </div>
          <DatePicker />
          <TimePicker />
        </div>
        <div className="flex w-full items-center justify-between space-x-2">
          <div className="self-center whitespace-nowrap pr-6 text-sm font-bold leading-5 text-foreground lg:text-base">
            End
          </div>
          <DatePicker />
          <TimePicker />
        </div>
      </div>

      {/* Mobile Combobox */}
      <Dialog>
        <DialogTrigger className="w-full">
          <Button
            variant="secondary"
            className="flex h-full w-full flex-col text-left md:hidden"
          >
            <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
              {value
                ? locations.find((location) => location.value === value)?.label
                : 'Add Event Date'}
            </div>
            <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
              Enter start date and end date
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="self-start">Event Time</DialogTitle>
          </DialogHeader>
          <div className="w-full flex-col items-start self-start rounded-lg bg-muted p-4">
            <div className="flex w-full items-center justify-between space-x-2 pb-2">
              <div className="self-center whitespace-nowrap pr-4 text-sm font-bold leading-5 text-foreground lg:text-base">
                Start
              </div>
              <DatePicker />
              <TimePicker />
            </div>
            <div className="flex w-full items-center justify-between space-x-2">
              <div className="self-center whitespace-nowrap pr-6 text-sm font-bold leading-5 text-foreground lg:text-base">
                End
              </div>
              <DatePicker />
              <TimePicker />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
