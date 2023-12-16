import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Event } from '../lib/mockData/events'
import { DateCard } from './date-card'

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event
  aspectRatio?: 'portrait' | 'square'
  width: number
  height: number
}

export function EventCard({
  event,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: EventCardProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <Link href={`/event/${event.name}`}>
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={event.cover}
            alt={event.name}
            width={width}
            height={height}
            className={cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
            )}
          />
          {event.date?.day && event.date?.month && (
            <>
              <div className="absolute left-2 top-2">
                <DateCard
                  day={event.date?.day}
                  month={event.date?.month}
                  aspectRatio="square"
                />
              </div>
              <HeartIcon className="absolute right-4 top-4 fill-background stroke-primary hover:fill-primary" />
            </>
          )}
        </div>
      </Link>
      <div className="space-y-1 text-sm">
        <p className="text-xs text-muted-foreground">{event.organizer}</p>
        <h3 className="font-medium leading-none">{event.name}</h3>
        <p className="text-xs text-muted-foreground">{event.location}</p>
        <p className="text-xs text-secondary-foreground">{event.time}</p>
      </div>
    </div>
  )
}
