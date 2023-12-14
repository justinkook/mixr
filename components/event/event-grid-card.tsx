import Image from 'next/image'
import { cn } from '@/lib/utils'

import { CalendarDaysIcon, Clock7Icon, HeartIcon, MapPinIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

type Event = {
  name: string
  description: string
  avatar: string
  followers: number
  createdAt: string
}

type OrganizerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  event?: Event
}

export function EventGridCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & OrganizerCardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="pt-6">
        <div className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <div className="flex justify-start space-x-4">
              <div className="w-[80px] overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"
                  alt="event cover image"
                  width={80}
                  height={80}
                  className="aspect-square h-auto w-auto object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="flex-col space-y-1">
                <h4 className="text-sm font-semibold">Lena Logic</h4>
                <p className="line-clamp-3 text-sm">Thinking Components</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" className="px-3 hover:bg-transparent">
            <HeartIcon className="h-6 w-6 fill-background stroke-primary hover:fill-primary" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <MapPinIcon className="mr-1 h-3 w-3" />
          New York, NY
        </div>
        <div className="flex items-center">
          <CalendarDaysIcon className="mr-1 h-3 w-3" />
          Dec 08
        </div>
        <div className="flex items-center">
          <Clock7Icon className="mr-1 h-3 w-3" />
          7:00 PM
        </div>
      </CardFooter>
    </Card>
  )
}
