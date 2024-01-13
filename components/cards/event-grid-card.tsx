import Image from 'next/image'
import Link from 'next/link'
import { CalendarDaysIcon, Clock7Icon, MapPinIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { AvatarStack } from '@/components/ui/avatar-stack'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { HeartButton } from '@/components/buttons/heart-button'

// Mock data to be replaced later
const mockData = {
  name: 'Lena Logic',
  description: 'Thinking Components',
  eventLink: '/event/react-rendevous',
  eventImage:
    'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
  location: '123 W 29 St, New York, NY',
  date: 'Dec 08',
  time: '7:00 PM',
  avatars: [
    '/images/card.png',
    'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
    'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
  ],
}

type EventGridCardProps = React.HTMLAttributes<HTMLDivElement> & {
  name?: string
  description?: string
  eventLink?: string
  eventImage?: string
  location?: string
  date?: string
  time?: string
  avatars?: string[]
}

export const EventGridCard: React.FC<EventGridCardProps> = ({
  className,
  name = mockData.name,
  description = mockData.description,
  eventLink = mockData.eventLink,
  eventImage = mockData.eventImage,
  location = mockData.location,
  date = mockData.date,
  time = mockData.time,
  avatars = mockData.avatars,
  ...props
}) => {
  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="pt-6">
        <div className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <div className="flex justify-start space-x-4">
              <Link href={eventLink}>
                <div className="w-[80px] overflow-hidden rounded-lg">
                  <Image
                    src={eventImage}
                    alt="event cover image"
                    width={80}
                    height={80}
                    className="aspect-square h-auto w-auto object-cover transition-all hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex-col space-y-1">
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="line-clamp-2 text-sm">{description}</p>
                <div className="flex items-center pt-2">
                  <MapPinIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    {location}
                  </span>
                </div>
              </div>
            </div>
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
        <div className="flex items-center">
          <AvatarStack avatars={avatars} />
        </div>
      </CardFooter>
    </Card>
  )
}
