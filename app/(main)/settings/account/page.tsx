'use client'

import { UserProfile } from '@clerk/clerk-react'

import { Separator } from '@/components/ui/separator'

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings.
        </p>
      </div>
      <Separator />
      <UserProfile
        appearance={{
          elements: {
            navbarMobileMenuRow: 'hidden',
            navbar: 'hidden',
            card: 'shadow-none w-full',
            pageScrollBox: 'p-0 overflow-hidden',
            header: 'hidden',
            rootBox: 'w-full',
          },
        }}
      />
    </div>
  )
}
