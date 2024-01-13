'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDownIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'

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

const roles = [
  { name: 'Viewer', description: 'Can view and comment.' },
  { name: 'Organizer', description: 'Can view, comment and edit.' },
  { name: 'Billing', description: 'Can view, comment and manage billing.' },
  { name: 'Owner', description: 'Admin-level access to all resources.' },
]

const teamMembersSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
})

export function TeamMembersForm() {
  const [memberRoles, setMemberRoles] = useState<Record<string, string>>(
    teamMembers.reduce(
      (acc, member) => ({ ...acc, [member.email]: member.role }),
      {}
    )
  )

  const form = useForm({
    resolver: zodResolver(teamMembersSchema),
    defaultValues: {
      email: teamMembers[0].email,
    },
    mode: 'onBlur',
  })

  const onSubmit = (data: z.infer<typeof teamMembersSchema>) => {
    toast({ title: 'Invite sent!', description: `Email send to ${data.email}` })
  }

  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex space-x-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Enter email to send an invite"
                      type="email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Send Invite</Button>
          </div>
        </form>
      </Form>
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
                    {memberRoles[member.email]}
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[16rem]" align="end">
                  <Command>
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        {roles.map((role) => (
                          <PopoverClose
                            key={role.name}
                            className="p-0 w-full text-left"
                          >
                            <CommandItem
                              className="space-y-1 flex flex-col items-start px-4 py-2"
                              onSelect={() => {
                                setMemberRoles((prev) => ({
                                  ...prev,
                                  [member.email]: role.name,
                                }))
                              }}
                            >
                              <p>{role.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {role.description}
                              </p>
                            </CommandItem>
                          </PopoverClose>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            ) : (
              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline" className="ml-auto">
                    {memberRoles[member.email]}
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>{memberRoles[member.email]}</DrawerTitle>
                  </DrawerHeader>
                  <Command>
                    <CommandInput placeholder="Select new role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        {roles.map((role) => (
                          <DrawerClose key={role.name} className="w-full">
                            <CommandItem
                              className="space-y-1 flex flex-col items-start px-4 py-2"
                              onSelect={() => {
                                setMemberRoles((prev) => ({
                                  ...prev,
                                  [member.email]: role.name,
                                }))
                              }}
                            >
                              <p>{role.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {role.description}
                              </p>
                            </CommandItem>
                          </DrawerClose>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                  <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                      <Button variant="outline" type="button">
                        Cancel
                      </Button>
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
