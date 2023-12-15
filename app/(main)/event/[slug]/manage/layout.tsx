import { ShareEventtModal } from '@/components/event/manage/share-modal'
import TabNav from '@/components/event/manage/tab-nav'
import { formatPascalCase } from '@/lib/utils'
import { NavItem } from '@/types/nav'

export default function EventManageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const eventManageTabs: NavItem[] = [
    {
      title: 'Overview',
      href: `/event/${params.slug}/manage`,
    },
    {
      title: 'Guests',
      href: `/event/${params.slug}/manage/guests`,
    },
    {
      title: 'Tickets',
      href: `/event/${params.slug}/manage/tickets`,
    },
    {
      title: 'Insights',
      href: `/event/${params.slug}/manage/insights`,
    },
    {
      title: 'Settings',
      href: `/event/${params.slug}/manage/settings`,
      segment: 'settings',
    },
  ]

  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full">
          <div className="flex-1 space-y-4 pt-0">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">{formatPascalCase(params.slug)}</h2>
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
