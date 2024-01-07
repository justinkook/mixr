'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { UseFieldArrayAppend, useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
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
import { toast } from '@/components/ui/use-toast'

const emailFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})

type EmailFormValues = z.infer<typeof emailFormSchema>

// This can come from your database or API.
const defaultValues: Partial<EmailFormValues> = {}

export function EmailForm({
  setOpen,
  append,
  className,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  append: UseFieldArrayAppend<
    {
      name: string
      emails?:
        | {
            label: string
            value: string
          }[]
        | undefined
      dob?: Date | undefined
    },
    'emails'
  >
  className?: React.ComponentProps<'form'>['className']
}) {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const isDesktop = useMediaQuery('(min-width: 768px)')

  function onSubmit(data: EmailFormValues) {
    append({ value: data.email, label: 'Unverified' })
    toast({
      title: 'Email verification sent to:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-foreground p-4">
          <code className="text-background">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    })
    if (!isDesktop) {
      setOpen(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid items-start gap-4', className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input type="email" id="email" {...field} />
              </FormControl>
              <FormDescription>
                An email containing a verification code will be sent to this
                email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  )
}
