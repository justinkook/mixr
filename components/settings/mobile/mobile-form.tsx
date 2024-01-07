'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import parsePhoneNumber, {
  AsYouType,
  CountryCode,
  isSupportedCountry,
} from 'libphonenumber-js'
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
import { Modal } from '@/components/ui/modal'
import { toast } from '@/components/ui/use-toast'
import { CountrySelect } from '@/components/country-select'
import { RemoveEmailModal } from '@/components/remove-email-modal'

import { OtpForm } from '../otp/otp-form'

const mobileFormSchema = z.object({
  phoneNumbers: z.array(
    z.object({
      label: z.string().default('Unverified').optional(),
      value: z
        .string()
        .refine(
          (str) => parsePhoneNumber(str, { defaultCountry: 'US' })?.isValid()
        ),
    })
  ),
  countryCode: z.string().refine(isSupportedCountry),
})

type MobileFormValues = z.infer<typeof mobileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<MobileFormValues> = {
  phoneNumbers: [{ value: '+13123123123', label: 'Primary' }],
  countryCode: 'US',
}

enum STEPS {
  MOBILE = 0,
  VERIFICATION = 1,
}

export function MobileForm() {
  const [step, setStep] = useState(STEPS.MOBILE)
  const form = useForm<MobileFormValues>({
    resolver: zodResolver(mobileFormSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const { fields, remove } = useFieldArray({
    name: 'phoneNumbers',
    control: form.control,
  })

  const onSubmit = (data: MobileFormValues) => {
    if (step === STEPS.MOBILE) {
      setStep(STEPS.VERIFICATION)
      toast({
        title: 'Verification code sent',
        description: (
          <p className="mt-2">
            A text message containing a verification code has been sent to{' '}
            <span className="font-medium">
              {data.phoneNumbers[data.phoneNumbers.length - 1].value}
            </span>
            .
          </p>
        ),
      })
    }
  }

  const transform = (value: string) => {
    const asYouType = new AsYouType(
      form.getValues('countryCode') as CountryCode
    )
    return asYouType.input(value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`phoneNumbers.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Phone numbers
                  </FormLabel>
                  <FormControl>
                    <div className="flex w-full justify-between rounded-md border px-4 py-3 flex-row items-center">
                      <p className="text-sm font-medium leading-none">
                        <span className="text-muted-foreground">
                          {parsePhoneNumber(field.value)?.formatNational()}
                        </span>
                        {(form.getValues(`phoneNumbers.${index}.label`) ===
                          'Primary' ||
                          form.getValues(`phoneNumbers.${index}.label`) ===
                            'Unverified') && (
                          <span
                            className={cn(
                              'ml-2 rounded-lg bg-destructive px-2 py-1 text-xs text-primary-foreground',
                              {
                                'bg-primary':
                                  form.getValues(
                                    `phoneNumbers.${index}.label`
                                  ) === 'Primary',
                              }
                            )}
                          >
                            {form.getValues(`phoneNumbers.${index}.label`)}
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

          <Modal
            onOpenChange={() => setStep(STEPS.MOBILE)}
            trigger={
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
              >
                Add a phone number
              </Button>
            }
            title="Add phone number"
          >
            <div className="grid items-start gap-4 px-4 sm:px-0">
              {step === STEPS.MOBILE ? (
                <>
                  <FormField
                    control={form.control}
                    name={`phoneNumbers.${fields.length}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <span className="flex">
                            <FormField
                              control={form.control}
                              name={`countryCode`}
                              render={({ field }) => (
                                <CountrySelect
                                  countryCode={field.value}
                                  setCountryCode={field.onChange}
                                />
                              )}
                            />
                            <Input
                              type="tel"
                              id="phone"
                              {...field}
                              onChange={(e) =>
                                field.onChange(transform(e.target.value))
                              }
                            />
                          </span>
                        </FormControl>
                        <FormDescription>
                          A text message containing a verification code will be
                          sent to this phone number.
                          <br />
                          Message and data rates may apply.
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
                  target={form.getValues(`phoneNumbers.${fields.length}.value`)}
                />
              )}
            </div>
          </Modal>
        </div>
      </form>
    </Form>
  )
}
