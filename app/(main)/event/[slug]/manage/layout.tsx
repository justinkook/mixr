import { ShareEventtModal } from '@/components/event/manage/share-modal'
import TabNav from '@/components/event/manage/tab-nav'

const tabNavItems = [
  {
    title: 'Overview',
    href: '/event/react-rendezvous/manage',
  },
  {
    title: 'Guests',
    href: '/event/react-rendezvous/manage/guests',
  },
  {
    title: 'Tickets',
    href: '/event/react-rendezvous/manage/tickets',
  },
  {
    title: 'Insights',
    href: '/event/react-rendezvous/manage/insights',
  },
  {
    title: 'Settings',
    href: '/event/react-rendezvous/manage/settings',
  },
]

export default function EventManageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full px-4 lg:px-8">
          <div className="flex-1 space-y-4 p-8 pt-0">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">NewY Art Festival: 2022 Dana Point 48-50</h2>
              <div className="flex items-center space-x-2">
                <ShareEventtModal />
              </div>
            </div>
            <TabNav items={tabNavItems} />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
