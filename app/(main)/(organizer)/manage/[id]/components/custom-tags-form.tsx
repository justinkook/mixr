'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { XCircleIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Badge } from '@/components/ui/badge'
import { Checkbox, CheckboxIndicator } from '@/components/ui/checkbox'
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

const FormSchema = z.object({
  tag: z.string().min(2, {
    message: 'tag must be at least 2 characters.',
  }),
  tags: z
    .string()
    .min(2, {
      message: 'tag must be at least 2 characters.',
    })
    .array(),
})

export function CustomTagsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tag: '',
      tags: [],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    data.tag.split(',').forEach((tag) => {
      if (tag.trim() !== '' && !data.tags.includes(tag.trim())) {
        form.setValue('tags', [...form.getValues('tags'), tag.trim()])
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full max-w-sm items-center gap-1.5">
                  <Input
                    placeholder="Add a tag"
                    className="w-full"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>Enter a comma after each tag</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex flex-row items-center space-x-2 space-y-0">
                Entered tags
              </FormLabel>
              <div className="flex flex-wrap gap-2 w-full overflow-y-auto">
                {field.value.length > 0 &&
                  field.value.map((item, index) => (
                    <FormField
                      key={index}
                      control={form.control}
                      name="tags"
                      render={({ field }) => {
                        return (
                          <Badge>
                            <FormItem
                              key={index}
                              className="flex flex-row items-center space-x-2 space-y-0"
                            >
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        )
                                  }}
                                >
                                  <CheckboxIndicator>
                                    <XCircleIcon className="w-4 h-4" />
                                  </CheckboxIndicator>
                                </Checkbox>
                              </FormControl>
                            </FormItem>
                          </Badge>
                        )
                      }}
                    />
                  ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
