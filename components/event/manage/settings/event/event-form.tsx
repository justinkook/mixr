'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { CopyIcon } from 'lucide-react'

const EventFormSchema = z.object({
  publicUrl: z
    .string()
    .min(4, {
      message: 'Slug must be at least 4 characters.',
    })
    .max(10, {
      message: 'Slug must not be longer than 10 characters.',
    }),
})

type EventFormValues = z.infer<typeof EventFormSchema>

// This can come from your database or API.
const defaultValues: Partial<EventFormValues> = {
  publicUrl: 'newy-art-festival',
}

export function EventForm() {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(EventFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  function onSubmit(data: EventFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <FormField
            control={form.control}
            name={'publicUrl'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Public Url</FormLabel>
                <FormDescription>
                  Url must be a unique slug. When you choose a new URL, the current one will no longer work.
                </FormDescription>
                <div className="mt-2 flex rounded-md">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-muted bg-muted px-3 text-foreground sm:text-sm">
                    event/
                  </span>
                  <FormControl>
                    <Input {...field} className="w-fit rounded-l-none border-l-0" />
                  </FormControl>
                  <Button variant="outline" className="ml-2 shrink-0">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="secondary" type="submit">
          Update URL
        </Button>
      </form>
    </Form>
  )
}
