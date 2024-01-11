'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronsUpDown, PlusCircleIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'

const ticketsTypes = [
  { label: 'General Admission', value: 'general admission' },
  { label: 'Vip', value: 'vip' },
  { label: 'Speaker', value: 'speaker' },
  { label: 'Sponsor', value: 'sponsor' },
  { label: 'Student', value: 'student' },
  { label: 'Senior', value: 'senior' },
  { label: 'Meet & Greet', value: 'meet and greet' },
  { label: 'Press', value: 'press' },
]

const InviteGuestFormSchema = z.object({
  name: z.string({
    required_error: 'Please enter a name.',
  }),
  email: z.string({
    required_error: 'Please enter an email.',
  }),
  ticketType: z.enum([
    'general',
    'vip',
    'speaker',
    'sponsor',
    'student',
    'senior',
    'meet and greet',
    'press',
  ]),
})

export function InviteGuestModal() {
  const form = useForm<z.infer<typeof InviteGuestFormSchema>>({
    resolver: zodResolver(InviteGuestFormSchema),
  })

  const onSubmit = (data: z.infer<typeof InviteGuestFormSchema>) => {
    toast({
      title: 'Sent Invite!',
      description: (
        <span className="mt-2 w-[340px] rounded-md bg-foreground p-4">{`Email sent to ${data.email}`}</span>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Invite Guest
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Guest</DialogTitle>
          <DialogDescription>Send a ticket invite via email.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Name</FormLabel>
                  <Input
                    id="name"
                    value={field.value}
                    placeholder="First Last"
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Email</FormLabel>
                  <Input
                    id="email"
                    value={field.value}
                    placeholder="m@example.com"
                  />
                </FormItem>
              )}
            />
            <Separator />
            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Ticket Type</FormLabel>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-full justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? ticketsTypes.find(
                                (type) => type.value === field.value
                              )?.label
                            : 'Select ticket type'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-1">
                      <DropdownMenuLabel>Types</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {ticketsTypes.map((type) => (
                        <DropdownMenuCheckboxItem
                          key={type.value}
                          checked={field.value === type.value}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange(type.value)
                            }
                          }}
                        >
                          {type.label}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full">
                Send Invite
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
