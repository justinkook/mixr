import * as React from "react"
import Image from "next/image"
import { ArrowLeft, CalendarPlus, Heart, Share } from "lucide-react"

type ArtEventComponentProps = {
  eventTitle: string
  eventDate: string
  eventMonth: string
  eventDay: string
  eventTime: string
  aboutEvent: string
  ticketPrice: string
  spotsLeft: string
}

export default function ArtEventComponent() {
  const { eventTitle, eventDate, eventMonth, eventDay, eventTime, aboutEvent, ticketPrice, spotsLeft } = {
    eventTitle: "NewY Art Festival: 2022 Dana",
    eventDate: "29",
    eventMonth: "Sep",
    eventDay: "Friday",
    eventTime: "09:00 PM - 11:00 PM",
    aboutEvent:
      "We're celebrating our 30th edition of the California Art Festival in CA this Spring so join us at the Building Park in California State University from March 29 - 30, 2022 with our Private View opening on Saturday, March 26!",
    ticketPrice: "$60.98 - $75.00",
    spotsLeft: "200",
  }

  return (
    <article className="flex w-[375px] flex-col bg-white">
      <div className="flex h-[56px] items-center justify-between self-stretch px-6 max-md:px-5">
        <ArrowLeft />
        <div className="flex items-center gap-4 self-center">
          <Share />
          <Heart />
        </div>
      </div>
      <hr className="h-px w-full self-stretch bg-gray-100" />
      <section className="mt-3 flex w-full flex-col self-stretch px-6 max-md:px-5">
        <div className="relative mt-3.5 flex aspect-[1.3625] w-full flex-col self-stretch overflow-hidden rounded-xl pb-4 pl-4 pr-20 pt-48 max-md:pr-5 max-md:pt-44">
          <Image
            priority
            src="/images/card.png"
            className="absolute inset-0 h-full w-full object-cover object-center"
            alt="banner image"
            width={375}
            height={274}
          />
        </div>
        <h2 className="mt-3.5 self-stretch text-xl font-bold leading-8 text-gray-900">{eventTitle}</h2>
        <div className="mt-8 flex w-full items-start justify-between gap-5 self-stretch">
          <div className="flex items-start justify-between gap-4 self-stretch">
            <div className="flex w-12 max-w-full flex-col items-center justify-center self-stretch rounded-xl bg-zinc-100 px-4 py-1.5">
              <div className="self-stretch whitespace-nowrap text-center text-sm font-bold leading-5 text-gray-900">
                {eventDate}
              </div>
              <div className="self-stretch whitespace-nowrap text-center text-xs leading-4 text-gray-400">
                {eventMonth}
              </div>
            </div>
            <div className="my-auto flex flex-col items-start self-center">
              <div className="self-stretch whitespace-nowrap text-sm font-bold leading-5 text-gray-900">{eventDay}</div>
              <div className="mt-1 self-stretch whitespace-nowrap text-xs leading-5 text-gray-400">{eventTime}</div>
            </div>
          </div>
          <div className="flex w-12 max-w-full flex-col items-center justify-center self-stretch rounded-xl border border-solid border-[color:var(--primary-base,#5766C7)] p-3">
            <CalendarPlus color="#5766C7" />
          </div>
        </div>
        <div className="mt-6 flex grow flex-col items-start self-stretch">
          <h3 className="self-stretch text-base font-bold leading-6 text-gray-900">About this event</h3>
          <p className="mt-2 self-stretch text-sm leading-5 text-gray-400">{aboutEvent}</p>
          <a href="#" className="mt-2 self-stretch text-sm font-medium leading-5 text-indigo-500">
            Show more
          </a>
        </div>
      </section>
      <section className="mb-9 mt-4 flex w-full flex-col items-start self-stretch bg-white px-6 py-2 max-md:px-5">
        <div className="flex w-full items-start justify-between gap-5 self-stretch">
          <div className="my-auto flex flex-col items-start self-center">
            <div className="self-stretch whitespace-nowrap text-base font-bold leading-6 text-gray-900">
              {ticketPrice}
            </div>
            <div className="mt-1 self-stretch whitespace-nowrap text-xs leading-5 text-gray-400">
              {spotsLeft} Spots left
            </div>
          </div>
          <a
            href="#"
            className="w-[148px] max-w-full items-center justify-center self-stretch rounded-2xl bg-indigo-500 px-4 py-5 text-center text-sm font-bold leading-5 text-white"
          >
            Get a Ticket
          </a>
        </div>
      </section>
    </article>
  )
}
