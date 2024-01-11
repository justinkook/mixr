'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { PlusIcon, TrashIcon } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
import { Modal } from '@/components/ui/modal'
import { toast } from '@/components/ui/use-toast'
import { OtpForm } from '@/components/forms/otp/otp-form'

const emailFormSchema = z.object({
  emails: z.array(
    z.object({
      label: z.string().default('Unverified').optional(),
      value: z.string().email({ message: 'Please enter a valid email.' }),
    })
  ),
})

type EmailFormValues = z.infer<typeof emailFormSchema>

// This can come from your database or API.
const defaultValues: Partial<EmailFormValues> = {
  emails: [{ value: 'm@example.com', label: 'Primary' }],
}

enum STEPS {
  EMAIL = 0,
  VERIFICATION = 1,
}

export function EmailForm() {
  const [step, setStep] = useState(STEPS.EMAIL)
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const { fields } = useFieldArray({
    name: 'emails',
    control: form.control,
  })

  const onSubmit = (data: EmailFormValues) => {
    if (step === STEPS.EMAIL) {
      setStep(STEPS.VERIFICATION)
      toast({
        title: 'Verification code sent',
        description: (
          <p className="mt-2">
            An email containing a verification code has been sent to{' '}
            <span className="font-medium">
              {data.emails[data.emails.length - 1].value}
            </span>
            .
          </p>
        ),
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                          >
                            <DotsVerticalIcon className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <PlusIcon className="mr-2 h-4 w-4" />
                              Set as Primary
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center text-destructive">
                              <TrashIcon className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Modal
            onOpenChange={() => setStep(STEPS.EMAIL)}
            trigger={
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
              >
                Add an email address
              </Button>
            }
            title="Add email address"
          >
            <div className="grid items-start gap-4 px-4 sm:px-0">
              {step === STEPS.EMAIL ? (
                <>
                  <FormField
                    control={form.control}
                    name={`emails.${fields.length}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input type="email" id="email" {...field} />
                        </FormControl>
                        <FormDescription>
                          An email containing a verification code will be sent
                          to this email address.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                    Continue
                  </Button>
                </>
              ) : (
                <OtpForm
                  target={form.getValues(`emails.${fields.length}.value`)}
                />
              )}
            </div>
          </Modal>
        </div>
      </form>
    </Form>
  )
}
