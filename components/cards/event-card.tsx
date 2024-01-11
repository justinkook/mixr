import Image from 'next/image'
import Link from 'next/link'

import { Event } from '@/lib/mockData/events'
import { cn } from '@/lib/utils'
import { HeartButton } from '@/components/buttons/heart-button'
import { DateCard } from '@/components/cards/date-card'

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
      <div className="relative">
        <Link href={`/event/${event.name}`}>
          <div className="w-full flex flex-1 rounded-lg overflow-hidden">
            <Image
              src={event.cover}
              alt={event.name}
              width={width}
              height={height}
              className={cn(
                'h-auto w-full object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </div>
        </Link>
        {event.date?.day && event.date?.month && (
          <>
            <div className="absolute left-2 top-2">
              <DateCard
                day={event.date?.day}
                month={event.date?.month}
                aspectRatio="square"
              />
            </div>
            <HeartButton className="absolute right-4 top-4 hover:bg-transparent" />
          </>
        )}
      </div>
      <div className="space-y-1 text-sm">
        <p className="text-xs text-muted-foreground">{event.organizer}</p>
        <h3 className="font-medium leading-none">{event.name}</h3>
        <p className="text-xs text-muted-foreground">{event.location}</p>
        <p className="text-xs text-secondary-foreground">{event.time}</p>
      </div>
    </div>
  )
}