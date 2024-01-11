'use client'

import { OrganizationProfile } from '@clerk/clerk-react'

import { Separator } from '@/components/ui/separator'

export default function SettingsOrganizationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Organization</h3>
        <p className="text-sm text-muted-foreground">
          Manage organization settings.
        </p>
      </div>
      <Separator />
      <OrganizationProfile
        routing="path"
        path="/dashboard/settings/organization"
        appearance={{
          elements: {
            navbarMobileMenuRow: 'hidden',
            navbar: 'hidden',
            card: 'shadow-none w-full',
            pageScrollBox: 'p-0 overflow-hidden',
            scrollBox: 'overflow-visible',
            header: 'hidden',
            rootBox: 'w-full',
          },
        }}
      />
    </div>
  )
}
