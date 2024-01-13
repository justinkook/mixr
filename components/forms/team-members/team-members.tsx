'use client'

import { ChevronDownIcon } from 'lucide-react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

export function TeamMembersForm() {
  const teamMembers = [
    {
      avatarSrc: '/avatars/01.png',
      avatarFallback: 'OM',
      name: 'Sofia Davis',
      email: 'm@example.com',
      role: 'Owner',
    },
    {
      avatarSrc: '/avatars/02.png',
      avatarFallback: 'JL',
      name: 'Jackson Lee',
      email: 'p@example.com',
      role: 'Member',
    },
    // Add more team members here...
  ]

  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <div className="flex space-x-2">
        <Input placeholder="Enter email to send an invite" type="email" />
        <Button>Send Invite</Button>
      </div>
      <Separator className="my-4" />
      <div className="grid gap-6">
        <h4 className="text-sm font-medium">People with access</h4>
        {teamMembers.map((member) => (
          <div
            className="flex items-center justify-between space-x-4"
            key={member.email}
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.avatarSrc} />
                <AvatarFallback>{member.avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">
                  {member.name}
                </p>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
            </div>
            {isDesktop ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    {member.role}
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[16rem]" align="end">
                  <Command>
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Viewer</p>
                          <p className="text-sm text-muted-foreground">
                            Can view and comment.
                          </p>
                        </CommandItem>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Developer</p>
                          <p className="text-sm text-muted-foreground">
                            Can view, comment and edit.
                          </p>
                        </CommandItem>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Billing</p>
                          <p className="text-sm text-muted-foreground">
                            Can view, comment and manage billing.
                          </p>
                        </CommandItem>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Owner</p>
                          <p className="text-sm text-muted-foreground">
                            Admin-level access to all resources.
                          </p>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            ) : (
              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline" className="ml-auto">
                    {member.role}
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>{member.role}</DrawerTitle>
                  </DrawerHeader>
                  <Command>
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Viewer</p>
                          <p className="text-sm text-muted-foreground">
                            Can view and comment.
                          </p>
                        </CommandItem>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Developer</p>
                          <p className="text-sm text-muted-foreground">
                            Can view, comment and edit.
                          </p>
                        </CommandItem>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Billing</p>
                          <p className="text-sm text-muted-foreground">
                            Can view, comment and manage billing.
                          </p>
                        </CommandItem>
                        <CommandItem className="space-y-1 flex flex-col items-start px-4 py-2">
                          <p>Owner</p>
                          <p className="text-sm text-muted-foreground">
                            Admin-level access to all resources.
                          </p>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                  <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
