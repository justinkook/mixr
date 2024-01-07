'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
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
import { RemoveEmailModal } from '@/components/remove-email-modal'
import { VerifyEmailModal } from '@/components/verify-email-modal'

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  emails: z
    .array(
      z.object({
        label: z.string(),
        value: z.string().email({ message: 'Please enter a valid email.' }),
      })
    )
    .optional(),
  dob: z.date().optional(),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  emails: [{ value: 'm@example.com', label: 'Primary' }],
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  const { fields, append, remove } = useFieldArray({
    name: 'emails',
    control: form.control,
  })

  function onSubmit(data: AccountFormValues) {
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`emails.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Email addresses
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Add and verify email address.
                  </FormDescription>
                  <FormControl>
                    <div className="flex w-full justify-between rounded-md border px-4 py-3 flex-row items-center">
                      <p className="text-sm font-medium leading-none">
                        <span className="text-muted-foreground">
                          {field.value}
                        </span>
                        {(form.getValues(`emails.${index}.label`) ===
                          'Primary' ||
                          form.getValues(`emails.${index}.label`) ===
                            'Unverified') && (
                          <span
                            className={cn(
                              'ml-2 rounded-lg bg-destructive px-2 py-1 text-xs text-primary-foreground',
                              {
                                'bg-primary':
                                  form.getValues(`emails.${index}.label`) ===
                                  'Primary',
                              }
                            )}
                          >
                            {form.getValues(`emails.${index}.label`)}
                          </span>
                        )}
                      </p>
                      <RemoveEmailModal
                        email={field.value}
                        index={index}
                        remove={remove}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <VerifyEmailModal append={append} />
        </div>
        <Button type="submit">Update account</Button>
      </form>
    </Form>
  )
}
