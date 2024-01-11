import { dashboardNav } from '@/config/nav'
import { Separator } from '@/components/ui/separator'
import { SettingsSidebar } from '@/components/nav/settings-sidebar'

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="space-y-8 pb-16 pt-4 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">
          Organization Settings
        </h2>
        <p className="text-muted-foreground">
          Manage your organization settings and set e-mail preferences.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:-mx-4 lg:w-1/5">
          <SettingsSidebar
            items={dashboardNav.find((n) => n.title === 'Settings')?.items!}
          />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  )
}
