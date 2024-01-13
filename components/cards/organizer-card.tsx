import Link from 'next/link'
import { format } from 'date-fns'
import { CalendarDaysIcon, UserPlusIcon, ZapIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

type OrganizerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  name?: string
  description?: string
  avatarUrl?: string
  followers?: number
  createdAt?: string
  events?: number
}

export function OrganizerCard({
  className,
  name = '@nextjs',
  description = 'The React Framework - created and maintained by @vercel.',
  avatarUrl = 'https://github.com/vercel.png',
  followers = 12000,
  createdAt = '2024-01-13T05:16:06.071Z',
  events = 23,
  ...props
}: OrganizerCardProps) {
  const formattedDate = format(new Date(createdAt), 'MMMM yyyy')

  return (
    <Card className={cn('flex flex-col', className)} {...props}>
      <CardContent className="pt-6">
        <div className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
          <div className="flex justify-start space-x-4">
            <Avatar>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-col">
              <Button variant="link" asChild className="p-0 h-fit">
                <Link href={`/organizer/${name}`}>
                  <h4 className="text-sm font-semibold">@{name}</h4>
                </Link>
              </Button>
              <p className="line-clamp-3 text-sm">{description}</p>
              <div className="flex items-center pt-2">
                <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined {formattedDate}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              Follow
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex space-x-4 text-sm text-muted-foreground mt-auto">
        <div className="flex items-center">
          <ZapIcon className="mr-1 h-3 w-3" />
          {events} Events
        </div>
        <div className="flex items-center">
          <UserPlusIcon className="mr-1 h-3 w-3" />
          {followers} Followers
        </div>
      </CardFooter>
    </Card>
  )
}
