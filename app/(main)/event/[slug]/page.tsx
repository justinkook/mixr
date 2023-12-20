'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPinIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { OrganizerCard } from '@/components/organizer-card'
import { RegistrationCard } from '@/components/registration-card'

const product = {
  name: 'React Rendevous',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Event', href: '/event' },
  ],
  images: [
    {
      src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description: `
  <p>Join AI Marketers Guild at our next Stacked Startup Showcase event in NYC!</p>
  <br><p>We'll be bringing together community members and friends. Participating startups will offer demos. Cash bar.</p>
  <br><p>Startups will share demos on their laptops. Presenters will be invited to join the previous day's virtual AI Insiders event for more formal presentations.</p>
  <br><strong>Request to demo when you RSVP.</strong><br>
  <br><p>The location is a centrally located bar in Chelsea, visible to all approved attendees.</p>
  <br><p>Demoing companies to be announced soon.</p>
`,
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block w-[384px] h-[544px]">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width={384}
              height={544}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 w-[384px] h-[544px]">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg w-[384px] h-[256px]">
              <Image
                src={product.images[1].src}
                alt={product.images[1].alt}
                width={384}
                height={256}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg w-[384px] h-[256px]">
              <Image
                src={product.images[2].src}
                alt={product.images[2].alt}
                width={384}
                height={256}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg w-[384px] h-[544px]">
            <Image
              src={product.images[3].src}
              alt={product.images[3].alt}
              width={384}
              height={544}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Event Date & Time */}
          <div className="mt-6 lg:col-span-2 lg:col-start-1 ">
            <h2 className="sr-only">Event Date</h2>
            <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
              <div className="flex items-start justify-between gap-4 self-stretch">
                <div className="flex h-full w-12 max-w-full flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                  <div className="self-stretch whitespace-nowrap text-center text-sm font-bold leading-5 text-foreground">
                    29
                  </div>
                  <div className="self-center whitespace-nowrap text-center text-xs leading-4 text-muted-foreground">
                    Nov
                  </div>
                </div>
                <div className="my-auto flex flex-col items-start self-center">
                  <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 text-foreground lg:text-base">
                    Wednesday, November 29
                  </div>
                  <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
                    5:00 PM to 7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-3 lg:col-span-2 lg:col-start-1 ">
            <h3 className="sr-only">Location</h3>
            <div className="flex items-center">
              <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                <div className="flex items-start justify-between gap-4 self-stretch">
                  <div className="flex h-full w-12 max-w-full flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                    <MapPinIcon />
                  </div>
                  <div className="my-auto flex flex-col items-start self-center">
                    <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
                      The Hotel Chelsea
                    </div>
                    <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
                      222 W 23rd St New York, NY 10011
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Options */}
          <Card className="hidden sm:flex sm:flex-col mt-4 lg:row-span-3 lg:mt-0 h-fit">
            <CardHeader>
              <CardTitle>Registration</CardTitle>
              <CardDescription>Select number of tickets</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p> */}

              {/* Reviews */}
              {/* <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={cn(
                          reviews.average > rating
                            ? 'text-gray-900'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div> */}

              <form>
                {/* Colors */}
                <div className="space-y-4">
                  {/* <h3 className="text-sm font-medium text-gray-900">Color</h3> */}
                  {product.colors.map((color, index) => (
                    <RegistrationCard key={index} />
                  ))}

                  {/* <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            cn(
                              color.selectedClass,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={cn(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup> */}
                </div>

                {/* Sizes */}
                {/* <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            cn(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={cn(
                                    active ? 'border' : 'border-2',
                                    checked
                                      ? 'border-indigo-500'
                                      : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

                <Button type="submit" className="mt-10 w-full">
                  Continue
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            <Separator className="mb-8" />

            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg mb-4">
                Description
              </h3>
              <div className="space-y-6">
                <p
                  className="text-base text-gray-900"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>

            <div className="mt-10">
              <Separator className="my-8" />
              <h3 className="sr-only">FAQ</h3>
              <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">
                FAQ
              </h3>

              <div className="mt-4 space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Organizer */}
            <div className="mt-6 space-y-4">
              <Separator className="my-8" />
              <h3 className="sr-only">Organizer</h3>
              <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">
                Organizer
              </h3>

              <OrganizerCard />

              {/* <div className="mt-4 flex items-center">
                <div className="flex h-full w-full items-center justify-between gap-5 self-stretch px-0">
                  <div className="flex items-start justify-between gap-4 self-stretch">
                    <div className="flex h-full w-12 max-w-full flex-col items-center justify-center self-stretch px-4 py-1.5">
                      <Link href="/dashboard/revent">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/images/card.png" alt="@revent" />
                          <AvatarFallback>RE</AvatarFallback>
                        </Avatar>
                      </Link>
                    </div>
                    <div className="my-auto flex flex-col items-start self-center">
                      <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 lg:text-base">
                        Revent
                      </div>
                      <div className="mt-1 self-stretch whitespace-nowrap text-left text-xs leading-5 text-muted-foreground lg:text-sm">
                        12k Members
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="lg">
                    Join
                  </Button>
                </div>
              </div> */}
            </div>

            {/* Location Map */}
            <div className="mt-6">
              <Separator className="my-8" />
              <h3 className="sr-only">Location Map</h3>
              <h3 className="self-stretch text-base font-bold leading-6 lg:text-lg">
                Location
              </h3>
              <p className="mt-4 line-clamp-2 self-stretch text-sm leading-5 text-foreground lg:text-base">
                The Hotel Chelsea, 222 W 23rd St New York, NY 10011
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.820241093209!2d-74.00096000919245!3d40.74398079761726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592b2fd36f67%3A0x1ff686d31ab672d3!2sThe%20Hotel%20Chelsea!5e0!3m2!1sen!2sus!4v1701014837537!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  className="rounded-lg border-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
