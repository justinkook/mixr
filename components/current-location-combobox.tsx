'use client'

import { useEffect, useState } from 'react'
import { ChevronsUpDown, MapPin } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useCurrentLocation } from '@/hooks/use-current-location'
import { usePlaceAutocomplete } from '@/hooks/use-place-autocomplete'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Skeleton } from './ui/skeleton'
import { toast } from './ui/use-toast'

export function CurrentLocationCombobox() {
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [locationInput, setLocationInput] = useState('')
  const [currentCoords, setCurrentCoords] = useState({})
  const [displayLocation, setDisplayLocation] = useState('New York')

  const { data } = usePlaceAutocomplete(locationInput)
  const { isLoading, data: currentLocation } = useCurrentLocation(currentCoords)

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setCurrentCoords(position.coords)
      })
    } else {
      toast({ description: 'Geolocation is not supported by this browser.' })
    }
  }

  useEffect(() => {
    if (currentLocation) {
      const locationData = currentLocation.results[0].address_components
      const city = locationData.find((component: any) =>
        component.types.includes('locality')
      ).long_name
      const state = locationData.find((component: any) =>
        component.types.includes('administrative_area_level_1')
      ).short_name
      setDisplayLocation(`${city}, ${state}`)
    }
  }, [currentLocation])

  return (
    <>
      <Button
        variant="ghost"
        role="combobox"
        aria-expanded={open}
        className="-ml-4 flex max-w-xs justify-between md:hidden"
        onClick={() => setOpenModal(true)}
      >
        {isLoading ? (
          <Skeleton className="mt-2 h-[40px] w-[150px]" />
        ) : (
          <h2 className="mt-1 truncate text-3xl font-bold tracking-tight md:whitespace-normal">
            {displayLocation}
          </h2>
        )}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
      {/* Mobile Modal */}
      <CommandDialog open={openModal} onOpenChange={setOpenModal}>
        <CommandInput
          placeholder="Enter Location..."
          value={locationInput}
          onValueChange={(v) => setLocationInput(v)}
        />
        <CommandEmpty>No places found.</CommandEmpty>
        <CommandGroup>
          {data &&
            data.predictions?.length > 0 &&
            data.predictions.map((prediction: any, index: number) => (
              <CommandItem
                key={index}
                value={prediction.description}
                onSelect={(currentValue) => {
                  setDisplayLocation(
                    currentValue === prediction.description.toLowerCase() &&
                      prediction.description
                  )
                  setLocationInput('')
                  setOpenModal(false)
                }}
              >
                <MapPin
                  className={cn(
                    'mr-2 h-4 w-4',
                    displayLocation === prediction.description
                      ? 'opacity-100'
                      : 'opacity-50'
                  )}
                />
                {prediction.description}
              </CommandItem>
            ))}
          {locationInput.length === 0 && (
            <CommandItem
              onSelect={(currentValue) => {
                getCurrentLocation()
                setLocationInput('')
                setOpenModal(false)
              }}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Current Location
            </CommandItem>
          )}
        </CommandGroup>
      </CommandDialog>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="-ml-4 hidden max-w-xs justify-between md:flex md:max-w-full"
          >
            {isLoading ? (
              <Skeleton className="mt-2 h-[40px] w-[150px]" />
            ) : (
              <h2 className="mt-1 truncate text-3xl font-bold tracking-tight md:whitespace-normal">
                {displayLocation}
              </h2>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput
              placeholder="Enter Location..."
              value={locationInput}
              onValueChange={(v) => setLocationInput(v)}
            />
            <CommandEmpty>No places found.</CommandEmpty>
            <CommandGroup>
              {data &&
                data.predictions?.length > 0 &&
                data.predictions.map((prediction: any, index: number) => (
                  <CommandItem
                    key={index}
                    value={prediction.description}
                    onSelect={(currentValue) => {
                      setDisplayLocation(
                        currentValue === prediction.description.toLowerCase() &&
                          prediction.description
                      )
                      setLocationInput('')
                      setOpen(false)
                    }}
                  >
                    <MapPin
                      className={cn(
                        'mr-2 h-4 w-4',
                        displayLocation === prediction.description
                          ? 'opacity-100'
                          : 'opacity-50'
                      )}
                    />
                    {prediction.description}
                  </CommandItem>
                ))}
              {locationInput.length === 0 && (
                <CommandItem
                  onSelect={(currentValue) => {
                    getCurrentLocation()
                    setLocationInput('')
                    setOpen(false)
                  }}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Current Location
                </CommandItem>
              )}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}
