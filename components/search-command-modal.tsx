'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { DialogProps } from '@radix-ui/react-dialog'
import { Calendar, FileIcon, SearchIcon, Smile } from 'lucide-react'

import { dashboardNav, mainNav, userNav } from '@/config/nav'
import { cn } from '@/lib/utils'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

import { Button } from './ui/button'

export function SearchCommandModal({ ...props }: DialogProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  const navItems = pathname.includes('dashboard') ? dashboardNav : userNav

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'relative hidden w-full justify-start text-sm text-muted-foreground sm:flex sm:pr-12 md:w-40 lg:w-64'
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Button variant="ghost" className="flex sm:hidden" asChild>
        <Link href={'/search'}>
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </Link>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={searchQuery}
          onValueChange={(q) => setSearchQuery(q)}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <Link
              href={`/search?input=${searchQuery}`}
              onClick={() => setOpen(false)}
            >
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>{`Search ${searchQuery} in Events`}</span>
              </CommandItem>
            </Link>
            <Link
              href={`/search?input=${searchQuery}&type=organizers`}
              onClick={() => setOpen(false)}
            >
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>{`Search ${searchQuery} in Organizers`}</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            {mainNav.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => window.open(navItem.href, '_blank'))
                }}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="You">
            {navItems.map((navItem) => (
              <CommandItem
                key={navItem.href}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href))
                }}
              >
                {navItem.icon && <navItem.icon className="mr-2 h-4 w-4" />}
                <span>{navItem.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
