'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface TabNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export default function TabNav({ className, items }: TabNavProps) {
  const pathname = usePathname()
  return (
    <>
      <Tabs defaultValue={items[0].title} className={cn('space-y-4', className)}>
        <TabsList>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <TabsTrigger value={item.title} data-state={pathname === item.href && 'active'}>
                {item.title}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
    </>
  )
}
