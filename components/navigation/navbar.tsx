'use client'

import { MenuIcon, SearchIcon } from 'lucide-react'
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Button } from '../ui/button'
import { SearchModal } from '../search-modal'
import { useState } from 'react'
import { Input } from '../ui/input'
import { UserNav } from './user-nav'
import OrganizationSwitcher from '../organization-switcher'
import { NavContent } from './nav-content'

type NavbarProps = {
  setSidebarOpen: (open: boolean) => void
}

export function Navbar({ setSidebarOpen }: NavbarProps) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <nav className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:ml-72 lg:px-8">
      <Button variant="ghost" type="button" className="-m-2.5 p-2.5 lg:hidden" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Button>
      <div className="flex flex-1 items-center justify-between gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex w-full items-center gap-x-4 lg:gap-x-6">
          <OrganizationSwitcher />
          <NavContent />
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative hidden flex-1 sm:flex">
              <Input
                type="search"
                placeholder="Search..."
                className="sm:w-[100px] md:w-[300px]"
                onClick={() => setOpenModal(!openModal)}
              />
            </div>
            <SearchIcon className="flex sm:hidden" onClick={() => setOpenModal(!openModal)} />
            {/* Profile dropdown */}
            <SignedIn>
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
      <SearchModal open={openModal} onOpenChange={setOpenModal} />
    </nav>
  )
}
