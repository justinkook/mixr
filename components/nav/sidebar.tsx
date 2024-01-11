'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { SignedIn } from '@clerk/nextjs'
import { Zap } from 'lucide-react'

import { dashboardSidebarNav, sidebarNav } from '@/config/nav'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const events = [
  {
    name: 'React Rendezvous',
    href: '/manage/react-rendezvous',
    slug: 'react-rendezvous',
    icon: Zap,
    current: false,
  },
  {
    name: 'Async Awakenings',
    href: '/manage/async-awakenings',
    slug: 'async-awakenings',
    icon: Zap,
    current: false,
  },
  {
    name: 'The Art of Reusability',
    href: '/manage/the-art-of-reusability',
    slug: 'the-art-of-reusability',
    icon: Zap,
    current: false,
  },
  {
    name: 'Thinking Components',
    href: '/manage/thinking-components',
    slug: 'thinking-components',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/manage/stateful-symphony',
    slug: 'stateful-symphony',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/manage/functional-fury',
    slug: 'functional-fury',
    icon: Zap,
    current: false,
  },
]

type SidebarProps = {
  setOpen: (open: boolean) => void
  className?: string
}

export function Sidebar({
  setOpen,
  className,
}: React.HTMLAttributes<HTMLDivElement> & SidebarProps) {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()

  // TODO: Replace with verifying user from auth as organizer
  const sidebarNavItems = pathname.includes('dashboard')
    ? dashboardSidebarNav
    : sidebarNav

  return (
    <div
      className={cn(
        'flex grow flex-col overflow-y-auto border-r bg-background pb-4',
        className
      )}
    >
      <ScrollArea>
        <Link href="/">
          <div className="flex h-16 shrink-0 items-center px-6 py-2">
            <span className="sr-only">Revent</span>
            <Image
              className="h-4 w-auto dark:invert"
              src="/images/logo-black.svg"
              alt="Revent Logo"
              height={32}
              width={128}
            />
          </div>
        </Link>
        <nav className="flex flex-1 flex-col space-y-4 py-4">
          <ul role="list" className="flex flex-1 flex-col">
            {sidebarNavItems.map((navItem, index) => (
              <li key={index} className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {navItem.title}
                </h2>
                <ul role="list" className="space-y-1">
                  {navItem.items.map((subItem) => (
                    <li key={subItem.href}>
                      <Button
                        onClick={() => setOpen(false)}
                        disabled={subItem.disabled}
                        variant={
                          pathname === subItem.href ||
                          (subItem.segment &&
                            segments.includes(subItem.segment) &&
                            segments.length < 4)
                            ? 'secondary'
                            : 'ghost'
                        }
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href={subItem.href}>
                          {subItem.icon && (
                            <subItem.icon
                              className="mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                          )}
                          {subItem.title}
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <SignedIn>
              <li className="py-2">
                <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                  Events
                </h2>
                <ScrollArea className="h-[270px] px-1">
                  <ul role="list" className="space-y-1 p-2">
                    {events.map((event, index) => (
                      <li key={index}>
                        <Button
                          onClick={() => setOpen(false)}
                          variant={
                            pathname === event.href ||
                            (event.slug && pathname.includes(event.slug))
                              ? 'secondary'
                              : 'ghost'
                          }
                          className="w-full justify-start font-normal"
                          asChild
                        >
                          <Link href={event.href}>
                            <event.icon
                              className="mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                            <span className="truncate">{event.name}</span>
                          </Link>
                        </Button>
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
