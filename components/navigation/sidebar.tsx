import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Heart, Home, LayoutGrid, SettingsIcon, Ticket, Zap } from 'lucide-react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { SignInButton, SignUpButton } from '@clerk/clerk-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home, current: true },
  { name: 'Browse', href: '/search', icon: LayoutGrid, current: false },
]

const events = [
  {
    name: 'React Rendezvous',
    href: '/manage/react-rendezvous',
    icon: Zap,
    current: false,
  },
  {
    name: 'Async Awakenings',
    href: '/manage/async-awakenings',
    icon: Zap,
    current: false,
  },
  {
    name: 'The Art of Reusability',
    href: '/manage/the-art-of-reusability',
    icon: Zap,
    current: false,
  },
  {
    name: 'Thinking Components',
    href: '/manage/thinking-components',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/manage/functional-fury',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/manage/stateful-symphony',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/manage/functional-fury',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/manage/stateful-symphony',
    icon: Zap,
    current: false,
  },
]

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex grow flex-col overflow-y-auto border-r bg-background pb-4', className)}>
      <ScrollArea>
        <nav className="flex flex-1 flex-col space-y-4 py-4">
          <ul role="list" className="flex flex-1 flex-col">
            <li className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
              <ul role="list" className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <Button variant={item.current ? 'secondary' : 'ghost'} className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {item.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">You</h2>
              <SignedIn>
                <ul role="list" className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="mr-2 h-4 w-4" />
                    Saved
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Ticket className="mr-2 h-4 w-4" />
                    Tickets
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </ul>
              </SignedIn>
              <SignedOut>
                <ul role="list" className="space-y-1">
                  <Button variant="link" className="w-full justify-start">
                    <SignInButton />
                  </Button>
                  <Button variant="link" className="w-full justify-start">
                    <SignUpButton />
                  </Button>
                </ul>
              </SignedOut>
            </li>
            <SignedIn>
              <li className="py-2">
                <h2 className="relative px-7 text-lg font-semibold tracking-tight">Events</h2>
                <ScrollArea className="h-[270px] px-1">
                  <ul role="list" className="space-y-1 p-2">
                    {events.map((event) => (
                      <li key={event.name}>
                        <Link href={event.href}>
                          <Button
                            variant={event.current ? 'secondary' : 'ghost'}
                            className="w-full justify-start font-normal"
                          >
                            <event.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                            <span className="truncate">{event.name}</span>
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </li>
            </SignedIn>
          </ul>
        </nav>
      </ScrollArea>
    </div>
  )
}
