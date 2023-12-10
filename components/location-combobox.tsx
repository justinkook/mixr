'use client'

import * as React from 'react'
import { useMediaQuery } from 'react-responsive'
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
  const [value, setValue] = React.useState('')
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="h-full w-full flex-col bg-secondary text-left"
        >
          <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
            {value ? locations.find((location) => location.value === value)?.label : 'Add Event Location'}
          </div>
          <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
            Offline location or virtual link
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        style={{
          width: 'var(--radix-popover-trigger-width)',
          maxHeight: 'var(--radix-popover-content-available-height)',
        }}
      >
        {/* Desktop Combobox */}
        {!isMobile && (
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
        )}

        {/* Mobile Modal */}
        {isMobile && (
          <CommandDialog open={open} onOpenChange={setOpen}>
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
        )}
      </PopoverContent>
    </Popover>
  )
}
