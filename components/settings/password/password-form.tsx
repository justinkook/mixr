'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox, CheckboxIndicator } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

const passwordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: 'Your password must contain 8 or more characters.',
      })
      .max(72, {
        message: 'Your password must contain less than 72 characters.',
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: 'Your password must contain 8 or more characters.',
      })
      .max(72, {
        message: 'Your password must contain less than 72 characters.',
      }),
    signOutAllDevices: z.boolean().default(true).optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ['confirmPassword'],
    message: 'Passwords must match',
  })

type PasswordFormValues = z.infer<typeof passwordFormSchema>

// This can come from your database or API.
const defaultValues: Partial<PasswordFormValues> = {
  signOutAllDevices: true,
}

export function PasswordForm() {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  function onSubmit(data: PasswordFormValues) {
    toast({
      title: 'Password changed',
      description: "You've successfully changed your password.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input id="confirmPassword" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="signOutAllDevices"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  id="signOutAllDevices"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                >
                  <CheckboxIndicator />
                </Checkbox>
              </FormControl>
              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Sign out of all devices
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Change Password</Button>
      </form>
    </Form>
  )
}
