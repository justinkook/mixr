import Link from 'next/link'
import { PlusCircleIcon } from 'lucide-react'

import { dashboardTabs } from '@/config/nav'
import { Button } from '@/components/ui/button'
import { TabNav } from '@/components/nav/tab-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4 pt-6 px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/create">
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Create Event
            </Link>
          </Button>
        </div>
      </div>
      <TabNav items={dashboardTabs} />
      {children}
    </div>
  )
}
