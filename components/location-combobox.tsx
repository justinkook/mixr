'use client'

import * as React from 'react'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

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

export function LocationCombobox() {
  const [open, setOpen] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <>
      <Button
        variant="secondary"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpenModal(true)}
        className="flex h-full w-full flex-col bg-secondary text-left md:hidden"
      >
        <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
          {value ? locations.find((location) => location.value === value)?.label : 'Add Event Location'}
        </div>
        <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
          Offline location or virtual link
        </div>
      </Button>
      {/* Mobile Modal */}
      <CommandDialog open={openModal} onOpenChange={setOpenModal}>
        <CommandInput placeholder="Enter location or virtual link" />
        <CommandEmpty>Add virtual link</CommandEmpty>
        <CommandGroup>
          {locations.map((location) => (
            <CommandItem
              key={location.value}
              value={location.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? '' : currentValue)
                setOpen(false)
              }}
            >
              <Check className={cn('mr-2 h-4 w-4', value === location.value ? 'opacity-100' : 'opacity-0')} />
              {location.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandDialog>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className="hidden h-full w-full flex-col bg-secondary text-left md:flex"
          >
            <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
              {value ? locations.find((location) => location.value === value)?.label : 'Add Event Location'}
            </div>
            <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
              Offline location or virtual link
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          {/* Desktop Combobox */}
          <Command>
            <CommandInput placeholder="Enter location or virtual link" />
            <CommandEmpty>Add virtual link</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', value === location.value ? 'opacity-100' : 'opacity-0')} />
                  {location.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}
