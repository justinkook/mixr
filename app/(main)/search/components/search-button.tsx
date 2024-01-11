'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { format } from 'date-fns'
import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function SearchButton() {
  const params = useSearchParams()

  const locationValue = params?.get('locationValue')
  const startDate = params?.get('from')
  const endDate = params?.get('to')
  const input = params?.get('input')

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return locationValue as string
    }

    return 'Anywhere'
  }, [locationValue])

  const dateLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = format(new Date(startDate as string), 'LLL dd')
      const end = format(new Date(endDate as string), 'LLL dd')

      return `${start} - ${end}`
    }

    return 'Anytime'
  }, [startDate, endDate])

  const inputLabel = useMemo(() => {
    if (input) {
      return `${input}`
    }

    return 'Search'
  }, [input])

  return (
    <Button
      variant="outline"
      className="h-[50px] w-full min-w-[300px] md:w-auto py-2 px-0 rounded-full hover:bg-transparent hover:shadow-md"
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          {dateLabel}
        </div>
        <div className="text-sm pl-6 pr-2 text-muted-foreground flex flex-row items-center gap-6">
          <div className="hidden sm:block truncate line-clamp-1">
            {inputLabel}
          </div>
          <div className="p-2 bg-primary rounded-full">
            <SearchIcon size={18} className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </Button>
  )
}
