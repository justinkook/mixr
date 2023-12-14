import { CalendarDaysIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'

type Organizer = {
  name: string
  description: string
  avatar: string
  followers: number
  createdAt: string
}

type OrganizerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  organizer?: Organizer
}

export function OrganizerCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & OrganizerCardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="pt-6">
        <div className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <div className="flex justify-start space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="flex-col">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="line-clamp-3 text-sm">The React Framework - created and maintained by @vercel.</p>
                <div className="flex items-center pt-2">
                  <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                  <span className="text-xs text-muted-foreground">Joined December 2021</span>
                </div>
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
    </Card>
  )
}