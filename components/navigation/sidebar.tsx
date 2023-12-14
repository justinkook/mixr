'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { organizerSidebarNav, sidebarNav } from '@/config/nav'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Zap } from 'lucide-react'
import { SignedIn } from '@clerk/nextjs'

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

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()

  const sidebarNavItems = pathname.includes('organize') ? organizerSidebarNav : sidebarNav

  return (
    <div className={cn('flex grow flex-col overflow-y-auto border-r bg-background pb-4', className)}>
      <ScrollArea>
        <div className="flex h-16 shrink-0 items-center px-6 py-2">
          <Image src="/images/card.png" alt="Revent" className="h-8 w-auto" width={32} height={32} />
        </div>
        <nav className="flex flex-1 flex-col space-y-4 py-4">
          <ul role="list" className="flex flex-1 flex-col">
            {sidebarNavItems.map((navItem, index) => (
              <li key={index} className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{navItem.title}</h2>
                <ul role="list" className="space-y-1">
                  {navItem.items.map((subItem) => (
                    <li key={subItem.href}>
                      <Link href={subItem.href}>
                        <Button
                          variant={pathname === subItem.href ? 'secondary' : 'ghost'}
                          className="w-full justify-start"
                        >
                          {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" aria-hidden="true" />}
                          {subItem.title}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <SignedIn>
              <li className="py-2">
                <h2 className="relative px-7 text-lg font-semibold tracking-tight">Events</h2>
                <ScrollArea className="h-[270px] px-1">
                  <ul role="list" className="space-y-1 p-2">
                    {events.map((event, index) => (
                      <li key={index}>
                        <Link href={event.href}>
                          <Button
                            variant={pathname === event.href ? 'secondary' : 'ghost'}
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
