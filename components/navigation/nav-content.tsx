'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Bot } from 'lucide-react'
import NavItem from './nav-item'
import { mainNav } from '@/config/nav'

export function NavContent() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Bot />
                    <div className="mb-2 mt-4 text-lg font-medium">Ask Eva</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Get recommendations for your event using AI
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <NavItem href="/search" title="iOS">
                Download the app on the App Store
              </NavItem>
              <NavItem href="/save" title="Android">
                Download the app on the Google Play Store
              </NavItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {mainNav.map((navItem) => (
          <NavigationMenuItem key={navItem.href}>
            <Link
              href={navItem.href}
              {...(navItem.external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>{navItem.title}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
