import { BellDotIcon, BellIcon, Check } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

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
  const isDesktop = useMediaQuery('(min-width: 640px)')

  if (isDesktop) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="hidden sm:block">
            <span className="sr-only">View notifications</span>
            {notifications.length > 1 ? (
              <span className="h-5 w-5 flex relative">
                <BellDotIcon
                  className="h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="animate-ping absolute top-0.5 right-0 inline-flex w-2 h-2 rounded-full bg-primary opacity-75"></span>
                <span className="absolute top-0.5 right-0 inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            ) : (
              <BellIcon
                className="h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[380px] mr-8 p-0 rounded-lg">
          <Card className={cn('shadow-none border-none', className)} {...props}>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>{`You have ${notifications.length} unread messages.`}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
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
                <Check className="mr-2 h-4 w-4" />
                Mark all as read
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="ghost" className="block sm:hidden">
          <span className="sr-only">View notifications</span>
          {notifications.length > 1 ? (
            <span className="h-5 w-5 flex relative">
              <BellDotIcon
                className="h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="animate-ping absolute top-0.5 right-0 inline-flex w-2 h-2 rounded-full bg-primary opacity-75"></span>
              <span className="absolute top-0.5 right-0 inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          ) : (
            <BellIcon
              className="h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>{`You have ${notifications.length} unread messages.`}</DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 space-y-4 px-5">
          <div className="py-8">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
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
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
