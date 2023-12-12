'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  HeartIcon,
  Home,
  LayoutGrid,
  ReceiptIcon,
  SettingsIcon,
  TicketIcon,
  UserPlusIcon,
  UsersIcon,
  WaypointsIcon,
  Zap,
} from 'lucide-react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { SignInButton, SignUpButton } from '@clerk/clerk-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home, current: true },
  { name: 'Browse', href: '/search', icon: LayoutGrid, current: false },
]

const events = [
  {
    name: 'React Rendezvous',
    href: '/event/react-rendezvous/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'Async Awakenings',
    href: '/event/async-awakenings/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'The Art of Reusability',
    href: '/event/the-art-of-reusability/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'Thinking Components',
    href: '/event/thinking-components/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/event/functional-fury/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/event/stateful-symphony/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/event/functional-fury/manage',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/event/stateful-symphony/manage',
    icon: Zap,
    current: false,
  },
]

const userNavItems = [
  { name: 'Saved', href: '/saved', icon: HeartIcon },
  { name: 'Following', href: '/following', icon: UserPlusIcon },
  { name: 'Tickets', href: '/tickets', icon: TicketIcon },
  { name: 'Settings', href: '/settings', icon: SettingsIcon },
]

const orgNavItems = [
  { name: 'Contacts', href: '/organize/contacts', icon: UsersIcon },
  { name: 'Insights', href: '/organize/insights', icon: WaypointsIcon },
  { name: 'Billing', href: 'https://finix.payments-dashboard.com', icon: ReceiptIcon },
  { name: 'Settings', href: '/organize/settings', icon: SettingsIcon },
]

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()

  return (
    <div className={cn('flex grow flex-col overflow-y-auto border-r bg-background pb-4', className)}>
      <ScrollArea>
        <div className="flex h-16 shrink-0 items-center px-6 py-2">
          <Image
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg"
            alt="Revent"
            width={32}
            height={32}
          />
        </div>
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
                  {pathname.includes('organize')
                    ? orgNavItems.map((item) => (
                        <Link href={item.href} key={item.href}>
                          <Button variant="ghost" className="w-full justify-start">
                            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                            {item.name}
                          </Button>
                        </Link>
                      ))
                    : userNavItems.map((item) => (
                        <Link href={item.href} key={item.href}>
                          <Button variant="ghost" className="w-full justify-start">
                            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                            {item.name}
                          </Button>
                        </Link>
                      ))}
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
