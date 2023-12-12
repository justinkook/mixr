import { Metadata } from 'next'

import { CopyPlusIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { SettingsSidebar } from '@/components/navigation/settings-sidebar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
  {
    title: 'Event',
    href: '/event/react-rendezvous/manage/settings',
  },
  {
    title: 'Appearance',
    href: '/event/react-rendezvous/manage/settings/appearance',
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">Change public url, appearance, or delete event.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="secondary">
              <CopyPlusIcon className="mr-2 h-4 w-4" />
              Duplicate
            </Button>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SettingsSidebar items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
