'use client'

import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { getCountries, getCountryCallingCode } from 'libphonenumber-js'
import en from 'react-phone-number-input/locale/en'

import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function CountrySelect({
  countryCode,
  setCountryCode,
}: {
  countryCode: string
  setCountryCode: (countryCode: string) => void
}) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] h-10 justify-between"
          >
            {`${
              en[countryCode.toUpperCase() as unknown as keyof typeof en]
            } +${getCountryCallingCode(countryCode.toUpperCase() as any)}`}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <CountryList
            setOpen={setOpen}
            setCountryCode={setCountryCode}
            countryCode={countryCode}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] h-10 justify-start">
          {`${
            en[countryCode.toUpperCase() as unknown as keyof typeof en]
          } +${getCountryCallingCode(countryCode.toUpperCase() as any)}`}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CountryList
            setOpen={setOpen}
            setCountryCode={setCountryCode}
            countryCode={countryCode}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function CountryList({
  countryCode,
  setOpen,
  setCountryCode,
}: {
  countryCode?: string
  setOpen: (open: boolean) => void
  setCountryCode: (country: string) => void
}) {
  return (
    <Command>
      <CommandInput className="h-9" />
      <CommandEmpty>No countries found.</CommandEmpty>
      <CommandGroup className="max-h-[300px] overflow-y-auto">
        {getCountries().map((country, index) => (
          <CommandItem
            key={country}
            value={en[country]}
            onSelect={() => {
              setCountryCode(
                getCountries()[index].toLowerCase() ===
                  countryCode?.toLowerCase()
                  ? 'US'
                  : getCountries()[index]
              )
              setOpen(false)
            }}
          >
            {en[country]} +{getCountryCallingCode(country)}
            <CheckIcon
              className={cn(
                'ml-auto h-4 w-4',
                countryCode?.toLowerCase() === country.toLowerCase()
                  ? 'opacity-100'
                  : 'opacity-0'
              )}
            />
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  )
}
