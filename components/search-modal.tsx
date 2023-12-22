'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { formatISO } from 'date-fns'
import { MapPinIcon } from 'lucide-react'
import qs from 'query-string'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { usePlaceAutocomplete } from '@/hooks/use-place-autocomplete'
import { Calendar } from '@/components/ui/calendar'

import Search from './search'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './ui/command'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INPUT = 2,
}

export const SearchModal = () => {
  const router = useRouter()
  const params = useSearchParams()

  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(STEPS.LOCATION)

  const [location, setLocation] = useState('')
  const [input, setInput] = useState('')
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const { data } = usePlaceAutocomplete(location)

  const clearAll = useCallback(() => {
    setLocation('')
    setInput('')
    setDateRange(undefined)
  }, [])

  const onNext = useCallback(() => {
    setStep((value) => value + 1)
  }, [])

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INPUT) {
      return onNext()
    }

    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
    }

    if (input) {
      updatedQuery.input = input
    }

    if (location) {
      updatedQuery.locationValue = location
    }

    if (dateRange && dateRange.from) {
      updatedQuery.from = formatISO(dateRange.from)
    }

    if (dateRange && dateRange.to) {
      updatedQuery.to = formatISO(dateRange.to)
    }

    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    setOpen(false)
    router.push(url)
  }, [step, location, router, input, dateRange, onNext, params])

  const actionLabel = useMemo(() => {
    if (step === STEPS.INPUT) {
      return 'Search'
    }

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INPUT) {
      return 'Clear All'
    }

    return 'Skip'
  }, [step])

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="justify-center w-full">
          <Search />
        </SheetTrigger>
        <SheetContent className="w-full h-full flex items-center flex-col sm:min-w-[500px]">
          <SheetHeader>
            <SheetTitle>Search</SheetTitle>
          </SheetHeader>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="where"
            value={
              step === STEPS.LOCATION
                ? 'where'
                : step === STEPS.DATE
                  ? 'when'
                  : 'what'
            }
          >
            <AccordionItem value="where">
              <AccordionTrigger onClick={() => setStep(STEPS.LOCATION)}>
                Where
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Where do you wanna go?</CardTitle>
                    <CardDescription>
                      Find the perfect location for your next event
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Command>
                      <CommandInput
                        placeholder="Anywhere"
                        value={location}
                        onValueChange={setLocation}
                        className="w-full"
                      />
                      <CommandEmpty>No place found</CommandEmpty>
                      <CommandGroup className="min-h-[200px]">
                        {data &&
                          data.predictions?.length > 0 &&
                          data.predictions.map(
                            (prediction: any, index: number) => (
                              <CommandItem
                                key={index}
                                value={prediction.description}
                                onSelect={(currentValue) => {
                                  setLocation(
                                    currentValue ===
                                      prediction.description.toLowerCase() &&
                                      prediction.description
                                  )
                                }}
                              >
                                <MapPinIcon
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    location === prediction.description
                                      ? 'opacity-100'
                                      : 'opacity-50'
                                  )}
                                />
                                {prediction.description}
                              </CommandItem>
                            )
                          )}
                      </CommandGroup>
                    </Command>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when">
              <AccordionTrigger onClick={() => setStep(STEPS.DATE)}>
                When
              </AccordionTrigger>
              <AccordionContent>
                <Card className="flex justify-center w-full">
                  <CardContent>
                    <Calendar
                      classNames={{
                        caption_label: 'text-xl',
                        head_cell: 'w-[3rem]',
                        cell: 'w-[3rem]',
                        day: 'w-[3rem] h-[3rem]',
                      }}
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange?.from}
                      selected={dateRange}
                      onSelect={setDateRange}
                    />
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="what">
              <AccordionTrigger onClick={() => setStep(STEPS.INPUT)}>
                What
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Search terms</CardTitle>
                    <CardDescription>Ask anything you want</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                      placeholder="Search..."
                      value={input}
                      onChange={(v) => setInput(v.target.value)}
                    />
                    <Separator className="my-4" />
                    <div className="grid gap-4">
                      <h4 className="text-sm font-medium">Suggestions</h4>
                      <Button
                        variant="secondary"
                        className="rounded-full w-fit"
                        onClick={() =>
                          setInput('Show me the most popular events')
                        }
                      >
                        Show me the most popular events
                      </Button>
                      <Button
                        variant="secondary"
                        className="rounded-full w-fit"
                        onClick={() =>
                          setInput('Which event has the most attendees?')
                        }
                      >
                        Which event has the most attendees?
                      </Button>
                      <Button
                        variant="secondary"
                        className="rounded-full w-fit"
                        onClick={() => setInput(`New Year's Eve Parties`)}
                      >
                        New Year's Eve Parties
                      </Button>
                      <Button
                        variant="secondary"
                        className="rounded-full w-fit"
                        onClick={() => setInput('Running clubs')}
                      >
                        Running clubs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <SheetFooter className="absolute bottom-0 flex flex-row w-full p-6 space-x-2">
            {secondaryActionLabel && (
              <Button
                variant="outline"
                type="button"
                className="w-[50%]"
                size="lg"
                onClick={step === STEPS.INPUT ? clearAll : onNext}
              >
                {secondaryActionLabel}
              </Button>
            )}
            <Button
              type="button"
              onClick={onSubmit}
              className="w-[50%]"
              size="lg"
            >
              {actionLabel}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
