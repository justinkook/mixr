'use client'

import { useSearchParams } from 'next/navigation'
import { SearchIcon } from 'lucide-react'

export default function Search() {
  const params = useSearchParams()

  const locationValue = params?.get('locationValue')
  const startDate = params?.get('startDate')
  const endDate = params?.get('endDate')
  const guestCount = params?.get('guestCount')

  return (
    <div className="flex justify-center">
      <div
        className="
        border-[1px] 
        w-full
        min-w-[300px] 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
      >
        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
        >
          <div
            className="
            text-sm 
            font-semibold 
            px-6
          "
          >
            {'Anywhere'}
          </div>
          <div
            className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
          >
            {`Anytime`}
          </div>
          <div
            className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-6
          "
          >
            <div className="hidden sm:block">{`Search`}</div>
            <div
              className="
              p-2 
              bg-primary
              rounded-full 
              text-background
            "
            >
              <SearchIcon size={18} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
