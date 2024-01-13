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

export const EventCard: React.FC<EventCardProps> = ({
  event,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}) => {
  // Destructure event for cleaner code
  const { cover, name, date, organizer, location, time } = event

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <div className="relative">
        <Link href={`/event/${name}`}>
          <div className="w-full flex flex-1 rounded-lg overflow-hidden">
            <Image
              src={cover}
              alt={name}
              width={width}
              height={height}
              className={cn(
                'h-auto w-full object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </div>
        </Link>
        <div className="absolute left-2 top-2">
          <DateCard
            day={date?.day!}
            month={date?.month!}
            aspectRatio="square"
          />
        </div>
        <div className="absolute right-4 top-4">
          <HeartButton className="hover:bg-transparent" />
        </div>
      </div>
      <div className="space-y-1 text-sm">
        <p className="text-xs text-muted-foreground">{organizer}</p>
        <h3 className="font-medium leading-none">{name}</h3>
        <p className="text-xs text-muted-foreground">{location}</p>
        <p className="text-xs text-secondary-foreground">{time}</p>
      </div>
    </div>
  )
}
