'use client'

import Link from 'next/link'
import { SignOutButton, useUser } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'

import { userNav } from '@/config/nav'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const UserNav: React.FC = () => {
  const { user } = useUser()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full flex pl-4"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} alt="Profile Avatar" />
              <AvatarFallback>
                {user?.username?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user?.fullName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.emailAddresses[0].emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {userNav.map((navItem) => (
              <Link key={navItem.href} href={navItem.href}>
                <DropdownMenuItem>
                  {navItem.icon && <navItem.icon className="mr-2 w-4 h-4" />}
                  <span>{navItem.title}</span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <SignOutButton>
            <DropdownMenuItem>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full flex pl-4"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.imageUrl} alt="Profile Avatar" />
            <AvatarFallback>
              {user?.fullName?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{user?.fullName}</DrawerTitle>
          <DrawerDescription>
            {user?.emailAddresses[0].emailAddress}
          </DrawerDescription>
        </DrawerHeader>
        {userNav.map((navItem) => (
          <Link key={navItem.href} href={navItem.href}>
            <div className="pl-4 relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              {navItem.icon && <navItem.icon className="mr-2 w-4 h-4" />}
              <span>{navItem.title}</span>
            </div>
          </Link>
        ))}
        <DrawerFooter>
          <DrawerClose asChild>
            <SignOutButton>
              <Button variant="secondary" className="w-full">
                Log out
              </Button>
            </SignOutButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
