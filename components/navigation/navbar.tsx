'use client'

import { MenuIcon, SearchIcon } from 'lucide-react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Button } from '../ui/button'
import { NavigationContent } from './navigation-content'
import { CommandModal } from '../command-modal'
import { useState } from 'react'
import { Input } from '../ui/input'

type NavbarProps = {
  setSidebarOpen: (open: boolean) => void
}

export function Navbar({ setSidebarOpen }: NavbarProps) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <nav className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button variant="ghost" type="button" className="-m-2.5 p-2.5 lg:hidden" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Button>
      <h2 className="text-lg font-semibold leading-5 tracking-tight">Revent</h2>
      <NavigationContent />
      <div className="flex flex-1 items-center justify-end gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <form className="relative hidden flex-1 sm:flex" action="#" method="GET">
            <Input
              type="search"
              placeholder="Search..."
              className="sm:w-[100px] md:w-[300px]"
              onClick={() => setOpenModal(!openModal)}
            />
          </form>
          <SearchIcon className="flex sm:hidden" onClick={() => setOpenModal(!openModal)} />
          {/* Profile dropdown */}
          <SignedIn>
            <UserButton userProfileMode="modal" />
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
      <CommandModal open={openModal} onOpenChange={setOpenModal} />
    </nav>
  )
}
