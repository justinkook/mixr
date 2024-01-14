'use client'

import Link from 'next/link'
import { SignOutButton, useUser } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'

import { userNav } from '@/config/nav'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full hidden sm:flex pl-4"
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
            <p className="text-sm font-medium leading-none">{user?.fullName}</p>
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
