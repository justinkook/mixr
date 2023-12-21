import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/clerk-react'
import { MenuIcon } from 'lucide-react'

import { OrganizationSwitcher } from '../organization-switcher'
import { SearchCommandModal } from '../search-command-modal'
import { Button } from '../ui/button'
import { Notifications } from '../ui/notifications'
import { NavContent } from './nav-content'
import { UserNav } from './user-nav'

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
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative flex-1">
              <SearchCommandModal />
            </div>
            {/* Profile dropdown */}
            <SignedIn>
              <Notifications />
              <UserNav />
            </SignedIn>
            <SignedOut>
              <Button variant="outline">
                <SignInButton mode="modal" />
              </Button>
              <Button>
                <SignUpButton mode="modal" />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  )
}
