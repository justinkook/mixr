'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { absoluteUrl } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Copy } from '@/components/ui/copy'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'

import { DeleteEventModal } from './delete-event-modal'

const EventFormSchema = z.object({
  publicUrl: z
    .string()
    .min(4, {
      message: 'Slug must be at least 4 characters.',
    })
    .max(20, {
      message: 'Slug must not be longer than 20 characters.',
    }),
  maxCapacity: z.number().min(1, {
    message: 'Capacity must be at least 1.',
  }),
})

type EventFormValues = z.infer<typeof EventFormSchema>

// This can come from your database or API.
const defaultValues: Partial<EventFormValues> = {
  publicUrl: 'newy-art-festival',
  maxCapacity: 100,
}

export function EventForm() {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(EventFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const onSubmit = (data: EventFormValues) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const onDelete = () => {
    toast({
      title: 'Deleted Event',
      description: 'Your event has been successfully deleted',
    })
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={'maxCapacity'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Capacity</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Auto-close registration when the capacity is reached. Only
                  approved guests count toward the cap.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'publicUrl'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Public Url</FormLabel>
                <FormDescription>
                  Url must be a unique slug. When you choose a new URL, the
                  current one will no longer work.
                </FormDescription>
                <div className="mt-2 flex rounded-md">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-muted bg-muted px-3 text-foreground sm:text-sm">
                    event/
                  </span>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-fit rounded-l-none border-l-0 min-w-0"
                    />
                  </FormControl>
                  <Copy
                    content={`${absoluteUrl(
                      `/event/${form.getValues('publicUrl')}`
                    )}`}
                    className="ml-2 my-auto"
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update event</Button>
        </form>
      </Form>
      <div className="pt-8">
        <h3 className="text-lg font-medium">Delete Event</h3>
        <p className="text-sm text-muted-foreground">
          Cancel and permanently delete this event. This action cannot be
          undone.
        </p>
      </div>
      <Separator />
      <DeleteEventModal action={onDelete} />
    </>
  )
}
