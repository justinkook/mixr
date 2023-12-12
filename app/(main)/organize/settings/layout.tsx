import { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'
import { SettingsSidebar } from '@/components/navigation/settings-sidebar'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/organize/settings',
  },
  {
    title: 'Account',
    href: '/organize/settings/account',
  },
  {
    title: 'Appearance',
    href: '/organize/settings/appearance',
  },
  {
    title: 'Notifications',
    href: '/organize/settings/notifications',
  },
  {
    title: 'Display',
    href: '/organize/settings/display',
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 px-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Organization Settings</h2>
          <p className="text-muted-foreground">Manage your organization settings and set e-mail preferences.</p>
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
