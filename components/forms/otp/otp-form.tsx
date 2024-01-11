'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import OtpInput from 'react-otp-input'
import * as z from 'zod'

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

const otpFormSchema = z.object({
  otp: z
    .string({ required_error: 'Please enter a valid code.' })
    .min(6, {
      message: 'Otp must be at least 6 characters.',
    })
    .max(6, {
      message: 'Otp must not be longer than 6 characters.',
    }),
})

type OtpFormValues = z.infer<typeof otpFormSchema>

// This can come from your database or API.
const defaultValues: Partial<OtpFormValues> = {}

export function OtpForm({ target }: { target: string }) {
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const resendOtpCode = () => {
    toast({
      title: 'Verification code sent',
      description: (
        <p className="mt-2">
          An email containing a verification code has been sent to{' '}
          <span className="font-medium">{target}</span>.
        </p>
      ),
    })
  }

  const onSubmit = (data: OtpFormValues) => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="otp"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Verification code</FormLabel>
              <FormControl>
                <OtpInput
                  value={value}
                  onChange={onChange}
                  containerStyle={'w-full gap-4'}
                  inputStyle={
                    'min-w-[40px] min-h-[40px] sm:min-w-[50px] sm:min-h-[50px] p-0'
                  }
                  numInputs={6}
                  renderInput={(props) => <Input {...props} />}
                />
              </FormControl>
              <FormDescription>
                {`Enter the verification code sent to ${target}`}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-6">
          <Button
            type="button"
            className="justify-start pl-0"
            onClick={resendOtpCode}
            variant="link"
          >
            {`Didn't receive a code? Resend`}
          </Button>

          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Verify
          </Button>
        </div>
      </form>
    </Form>
  )
}
