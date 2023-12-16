'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ScrollBar } from './ui/scroll-area'

const times = [
  {
    value: '12:00 AM',
    label: '12:00 AM',
  },
  {
    value: '12:30 AM',
    label: '12:30 AM',
  },
  {
    value: '01:00 AM',
    label: '01:00 AM',
  },
  {
    value: '01:30 AM',
    label: '01:30 AM',
  },
  {
    value: '02:00 AM',
    label: '02:00 AM',
  },
  {
    value: '02:30 AM',
    label: '02:30 AM',
  },
  {
    value: '03:00 AM',
    label: '03:00 AM',
  },
  {
    value: '03:30 AM',
    label: '03:30 AM',
  },
  {
    value: '04:00 AM',
    label: '04:00 AM',
  },
  {
    value: '04:30 AM',
    label: '04:30 AM',
  },
  {
    value: '05:00 AM',
    label: '05:00 AM',
  },
  {
    value: '05:30 AM',
    label: '05:30 AM',
  },
  {
    value: '06:00 AM',
    label: '06:00 AM',
  },
  {
    value: '06:30 AM',
    label: '06:30 AM',
  },
  {
    value: '07:00 AM',
    label: '07:00 AM',
  },
  {
    value: '07:30 AM',
    label: '07:30 AM',
  },
  {
    value: '08:00 AM',
    label: '08:00 AM',
  },
  {
    value: '08:30 AM',
    label: '08:30 AM',
  },
  {
    value: '09:00 AM',
    label: '09:00 AM',
  },
  {
    value: '09:30 AM',
    label: '09:30 AM',
  },
  {
    value: '10:00 AM',
    label: '10:00 AM',
  },
  {
    value: '10:30 AM',
    label: '10:30 AM',
  },
  {
    value: '11:00 AM',
    label: '11:00 AM',
  },
  {
    value: '11:30 AM',
    label: '11:30 AM',
  },
  // PM Times
  {
    value: '12:00 PM',
    label: '12:00 PM',
  },
  {
    value: '12:30 PM',
    label: '12:30 PM',
  },
  {
    value: '01:00 PM',
    label: '01:00 PM',
  },
  {
    value: '01:30 PM',
    label: '01:30 PM',
  },
  {
    value: '02:00 PM',
    label: '02:00 PM',
  },
  {
    value: '02:30 PM',
    label: '02:30 PM',
  },
  {
    value: '03:00 PM',
    label: '03:00 PM',
  },
  {
    value: '03:30 PM',
    label: '03:30 PM',
  },
  {
    value: '04:00 PM',
    label: '04:00 PM',
  },
  {
    value: '04:30 PM',
    label: '04:30 PM',
  },
  {
    value: '05:00 PM',
    label: '05:00 PM',
  },
  {
    value: '05:30 PM',
    label: '05:30 PM',
  },
  {
    value: '06:00 PM',
    label: '06:00 PM',
  },
  {
    value: '06:30 PM',
    label: '06:30 PM',
  },
  {
    value: '07:00 PM',
    label: '07:00 PM',
  },
  {
    value: '07:30 PM',
    label: '07:30 PM',
  },
  {
    value: '08:00 PM',
    label: '08:00 PM',
  },
  {
    value: '08:30 PM',
    label: '08:30 PM',
  },
  {
    value: '09:00 PM',
    label: '09:00 PM',
  },
  {
    value: '09:30 PM',
    label: '09:30 PM',
  },
  {
    value: '10:00 PM',
    label: '10:00 PM',
  },
  {
    value: '10:30 PM',
    label: '10:30 PM',
  },
  {
    value: '11:00 PM',
    label: '11:00 PM',
  },
  {
    value: '11:30 PM',
    label: '11:30 PM',
  },
]

export function TimePicker({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-fit justify-between', className)}
        >
          {value ? times.find((time) => time.value.toLowerCase() === value.toLowerCase())?.label : '12:00 AM'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <ScrollArea className="max-h-[300px] overflow-y-auto">
            <CommandGroup>
              {times.map((time) => (
                <CommandItem
                  key={time.value}
                  value={time.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', value === time.value ? 'opacity-100' : 'opacity-0')} />
                  {time.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
