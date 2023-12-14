import { navConfig } from '@/config/nav'

import TabNav from '@/components/event/manage/tab-nav'

export default function SavedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Saved Events</h2>
      </div>
      <TabNav items={navConfig.userNav.find((navItem) => navItem.title === 'Saved')?.items!} />
      {children}
    </div>
  )
}
