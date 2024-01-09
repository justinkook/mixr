import { PopoverContent } from '@radix-ui/react-popover'
import { BellIcon, Check } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Popover, PopoverTrigger } from './ui/popover'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function Notifications({ className, ...props }: CardProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="block sm:hidden">
            <span className="sr-only">View notifications</span>
            <BellIcon
              className="h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>You have 3 unread messages.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 space-y-4">
            <div className="py-8">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Mark all as read
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="hidden sm:block">
            <span className="sr-only">View notifications</span>
            <BellIcon
              className="h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[380px] mr-10">
          <Card className={cn('w-[380px]', className)} {...props}>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </>
  )
}
