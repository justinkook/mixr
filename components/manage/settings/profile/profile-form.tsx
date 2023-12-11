'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

const ProfileFormSchema = z.object({
  publicUrl: z
    .string()
    .min(4, {
      message: 'Slug must be at least 4 characters.',
    })
    .max(10, {
      message: 'Slug must not be longer than 10 characters.',
    }),
})

type ProfileFormValues = z.infer<typeof ProfileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  publicUrl: 'newy-art-festival',
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  function onSubmit(data: ProfileFormValues) {
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
                <div className="mt-2 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-muted bg-muted px-3 text-foreground sm:text-sm">
                    event/
                  </span>
                  <FormControl>
                    <Input {...field} className="w-fit rounded-l-none border-l-0" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Update settings</Button>
      </form>
    </Form>
  )
}
