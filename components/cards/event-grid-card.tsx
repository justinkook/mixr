import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { CalendarDaysIcon, Clock7Icon, MapPinIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { AvatarStack } from '@/components/ui/avatar-stack'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { HeartButton } from '@/components/buttons/heart-button'

// Replace later with Organizer type from db
type Organizer = {
  name: string
}

type EventGridCardProps = React.HTMLAttributes<HTMLDivElement> & {
  organizer: Organizer
  name: string
  slug: string
  thumbnailUrl: string
  location: string
  startDateTime: string
  avatars: string[]
}

type EventInfoProps = {
  organizer: Organizer
  name: string
  location: string
}

type EventImageProps = {
  slug: string
  thumbnailUrl: string
}

const EventInfo: React.FC<EventInfoProps> = ({ organizer, name, location }) => (
  <div className="flex-col space-y-1">
    <h4 className="text-sm font-semibold">{organizer.name}</h4>
    <p className="line-clamp-2 text-sm">{name}</p>
    <div className="flex items-center pt-2">
      <MapPinIcon className="mr-2 h-4 w-4 opacity-70" />
      <span className="text-xs text-muted-foreground">{location}</span>
    </div>
  </div>
)

const EventImage: React.FC<EventImageProps> = ({ slug, thumbnailUrl }) => (
  <Link href={`/event/${slug}`}>
    <div className="w-[80px] overflow-hidden rounded-lg">
      <Image
        src={thumbnailUrl}
        alt="event cover image"
        width={80}
        height={80}
        className="aspect-square h-auto w-auto object-cover transition-all hover:scale-105"
      />
    </div>
  </Link>
)

export const EventGridCard: React.FC<EventGridCardProps> = ({
  className,
  organizer,
  name,
  slug,
  thumbnailUrl,
  location,
  startDateTime,
  avatars,
  ...props
}) => {
  const date = format(new Date(startDateTime), 'MMM dd')
  const time = format(new Date(startDateTime), 'h:mm a')

  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="pt-6">
        <div className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
          <div className="flex justify-start space-x-4">
            <EventImage slug={slug} thumbnailUrl={thumbnailUrl} />
            <EventInfo organizer={organizer} name={name} location={location} />
          </div>
          <HeartButton className="px-3" />
        </div>
      </CardContent>
      <CardFooter className="flex space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <CalendarDaysIcon className="mr-1 h-3 w-3" />
          {date}
        </div>
        <div className="flex items-center">
          <Clock7Icon className="mr-1 h-3 w-3" />
          {time}
        </div>
        <AvatarStack avatars={avatars} />
      </CardFooter>
    </Card>
  )
}
