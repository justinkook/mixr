import { NavItem } from '@/types/nav'
import { formatPascalCase } from '@/lib/utils'
import { TabNav } from '@/components/nav/tab-nav'
import { ShareEventtModal } from '@/components/share-event-modal'

export default function EventManageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const eventManageTabs: NavItem[] = [
    {
      title: 'Overview',
      href: `/manage/${params.id}`,
    },
    {
      title: 'Guests',
      href: `/manage/${params.id}/guests`,
    },
    {
      title: 'Tickets',
      href: `/manage/${params.id}/tickets`,
    },
    {
      title: 'Insights',
      href: `/manage/${params.id}/insights`,
    },
    {
      title: 'Settings',
      href: `/manage/${params.id}/settings`,
      segment: 'settings',
    },
  ]

  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full">
          <div className="flex-1 space-y-4 pt-0">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                {formatPascalCase(params.id)}
              </h2>
              <div className="flex items-center space-x-2">
                <ShareEventtModal />
              </div>
            </div>
            <TabNav items={eventManageTabs} />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
