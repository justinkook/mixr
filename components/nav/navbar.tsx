import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/clerk-react'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { NavContent } from '@/components/nav/nav-content'
import { UserNav } from '@/components/nav/user-nav'
import { Notifications } from '@/components/notifications'
import { OrganizationSwitcher } from '@/components/organization-switcher'

type NavbarProps = {
  setSidebarOpen: (open: boolean) => void
}

export function Navbar({ setSidebarOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background/95 px-4 shadow-sm backdrop-blur sm:gap-x-6 sm:px-6 lg:ml-72 lg:px-8">
      <Button
        variant="ghost"
        type="button"
        className="-m-2.5 p-2.5 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Button>
      <div className="flex flex-1 items-center justify-between gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex w-full items-center gap-x-4 lg:gap-x-6">
          <SignedIn>
            <OrganizationSwitcher />
          </SignedIn>
          <NavContent />
          <div className="ml-auto flex items-center md:space-x-4">
            <SignedIn>
              <div className="flex space-x-2">
                <Notifications />
                <UserNav />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <SignInButton mode="modal" />
                </Button>
                <Button>
                  <SignUpButton mode="modal" />
                </Button>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  )
}
