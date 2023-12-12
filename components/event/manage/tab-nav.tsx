'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { LucideIcon } from 'lucide-react'

interface TabNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon?: LucideIcon
  }[]
}

export default function TabNav({ className, items }: TabNavProps) {
  const pathname = usePathname()
  return (
    <>
      <Tabs defaultValue={items[0].title} className={cn('space-y-4', className)}>
        <ScrollArea className="w-full">
          <TabsList>
            {items.map((item) => (
              <Link key={item.href} href={item.href}>
                <TabsTrigger value={item.title} data-state={pathname === item.href && 'active'}>
                  {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                  {item.title}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </ScrollArea>
      </Tabs>
    </>
  )
}
