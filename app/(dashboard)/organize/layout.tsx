import TabNav from '@/components/event/manage/tab-nav'
import { Button } from '@/components/ui/button'
import { PlusCircleIcon } from 'lucide-react'

const tabNavItems = [
  {
    title: 'Overview',
    href: '/organize',
  },
  {
    title: 'Contacts',
    href: '/organize/contacts',
  },
  {
    title: 'Insights',
    href: '/organize/insights',
  },
  {
    title: 'Settings',
    href: '/organize/settings',
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>
      </div>
      <TabNav items={tabNavItems} />
      {children}
    </div>
  )
}
