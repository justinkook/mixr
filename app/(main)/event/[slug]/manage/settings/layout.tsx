import { Separator } from '@/components/ui/separator'
import { CreateEventModal } from '@/components/create-event-modal'
import { SettingsSidebar } from '@/components/nav/settings-sidebar'

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default function SettingsLayout({
  children,
  params,
}: SettingsLayoutProps) {
  const sidebarNavItems = [
    {
      title: 'Event',
      href: `/event/${params.slug}/manage/settings`,
    },
    {
      title: 'Appearance',
      href: `/event/${params.slug}/manage/settings/appearance`,
    },
  ]

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 pt-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Change public url, appearance, or delete event.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CreateEventModal label="Duplicate Event" variant="secondary" />
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:-mx-4 lg:w-1/5">
            <SettingsSidebar items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
