import { dashboardTabs } from '@/config/nav'

import CreateEventModal from '@/components/create-event-modal'
import TabNav from '@/components/event/manage/tab-nav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CreateEventModal />
        </div>
      </div>
      <TabNav items={dashboardTabs} />
      {children}
    </div>
  )
}