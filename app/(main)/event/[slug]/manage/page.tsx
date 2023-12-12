import Image from 'next/image'
import {
  ArrowUpRightIcon,
  CalendarIcon,
  HeartIcon,
  MapPinIcon,
  PencilIcon,
  PlusCircleIcon,
  ShareIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { LocationCombobox } from '@/components/location-combobox'
import { DateCombobox } from '@/components/date-combobox'
import { Input } from '@/components/ui/input'
import Editor from '@/components/editor/editor'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

export default async function EventOverviewPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">Manage event details such as location and dates.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            Event Page
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Product info */}
        <Card className="flex w-full flex-row">
          <CardContent className="flex w-full flex-row justify-between pt-6">
            <div className="flex w-full space-x-8">
              {/* Event Image */}
              <Card className="h-[330px] w-[330px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
                  alt={'alt'}
                  width={400}
                  height={400}
                  className="aspect-square h-full w-full object-cover object-center"
                />
              </Card>
              <div className="flex flex-col">
                <Input
                  type="text"
                  placeholder="Event Name"
                  className="border-none pl-0 text-2xl font-bold leading-8 tracking-tight sm:text-3xl"
                />

                {/* Event Date & Time */}
                <div className="mt-6">
                  <h2 className="sr-only">Event Date</h2>
                  <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                    <div className="flex w-full items-start justify-start gap-4 self-stretch">
                      <div className="flex h-12 w-12 flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                        <CalendarIcon className="h-6 w-6" />
                      </div>
                      <div className="flex w-full flex-col items-start self-center">
                        <DateCombobox />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-3">
                  <h3 className="sr-only">Location</h3>
                  <div className="flex items-center">
                    <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                      <div className="flex w-full items-start justify-between gap-4 self-stretch">
                        <div className="flex h-12 w-12 flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                          <MapPinIcon />
                        </div>
                        <div className="flex w-full flex-col items-start self-center">
                          <LocationCombobox />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Save Event Changes Button</h3>
                  <Button className="w-full">Update Event</Button>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <Button variant="ghost">
                <HeartIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost">
                <ShareIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">About Event</h2>
          <p className="text-muted-foreground">Edit event description or auto generate with AI.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">Save Description</Button>
        </div>
      </div>
      <Separator className="my-4" />
      <Card className="min-h-[330px]">
        <Editor className="mb-0 flex-wrap" />
      </Card>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="text-muted-foreground">
            Have a different question and can’t find the answer you’re looking for?
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Add FAQ
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="py-8">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
