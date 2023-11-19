import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FileText, Heart, Home, LayoutGrid, ShieldCheck, Ticket, Zap } from 'lucide-react'
import { SignedIn } from '@clerk/nextjs'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', icon: Home, current: true },
  { name: 'Browse', href: '/search', icon: LayoutGrid, current: false },
]

const events = [
  {
    name: 'React Rendezvous',
    href: '/event/react-rendezvous',
    icon: Zap,
    current: false,
  },
  {
    name: 'Async Awakenings',
    href: '/event/async-awakenings',
    icon: Zap,
    current: false,
  },
  {
    name: 'The Art of Reusability',
    href: '/event/the-art-of-reusability',
    icon: Zap,
    current: false,
  },
  {
    name: 'Thinking Components',
    href: '/event/thinking-components',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/event/functional-fury',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/event/stateful-symphony',
    icon: Zap,
    current: false,
  },
  {
    name: 'Functional Fury',
    href: '/event/functional-fury',
    icon: Zap,
    current: false,
  },
  {
    name: 'Stateful Symphony',
    href: '/event/stateful-symphony',
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
            <SignedIn>
              <li className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">You</h2>
                <ul role="list" className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="mr-2 h-4 w-4" />
                    Saved
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Ticket className="mr-2 h-4 w-4" />
                    Tickets
                  </Button>
                </ul>
              </li>
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
            <li className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Legal</h2>
              <ul role="list" className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Privacy Policy
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Terms & Conditions
                </Button>
              </ul>
            </li>
            <li className="mt-auto px-3">
              <p className="px-4 py-2 text-sm text-muted-foreground">© 2023 Revent.</p>
            </li>
          </ul>
        </nav>
      </ScrollArea>
    </div>
  )
}
