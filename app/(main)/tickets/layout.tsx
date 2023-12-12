'use client'

import TabNav from '@/components/event/manage/tab-nav'
import { ZapIcon } from 'lucide-react'

const tabNavItems = [
  {
    title: 'All',
    href: '/tickets',
    icon: ZapIcon,
  },
  {
    title: 'Upcoming',
    href: '/tickets/upcoming',
  },
  {
    title: 'Past',
    href: '/tickets/past',
  },
]

export default function TicketsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full px-4 lg:px-8">
          <div className="flex-1 space-y-4 p-8 pt-0">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">My Tickets</h2>
            </div>
            <TabNav items={tabNavItems} />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
