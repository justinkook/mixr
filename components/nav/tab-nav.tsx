'use client'

import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'

import { NavItem } from '@/types/nav'
import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface TabNavProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[]
}

export function TabNav({ className, items }: TabNavProps) {
  const pathname = usePathname()
  const segment = useSelectedLayoutSegment()

  return (
    <>
      <Tabs
        defaultValue={items[0].title}
        className={cn('space-y-4', className)}
      >
        <ScrollArea className="w-full">
          <TabsList>
            {items.map((item) => (
              <Link key={item.href} href={item.href}>
                <TabsTrigger
                  value={item.title}
                  data-state={
                    (pathname === item.href ||
                      (segment && item.href.includes(segment))) &&
                    'active'
                  }
                >
                  {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                  {item.title}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Tabs>
    </>
  )
}
