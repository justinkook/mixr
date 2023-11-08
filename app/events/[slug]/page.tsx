import * as React from "react";
import Image from "next/image";
import { ArrowLeft, CalendarPlus, Heart, Share } from "lucide-react";

type ArtEventComponentProps = {
  eventTitle: string;
  eventDate: string;
  eventMonth: string;
  eventDay: string;
  eventTime: string;
  aboutEvent: string;
  ticketPrice: string;
  spotsLeft: string;
};

export default function ArtEventComponent(props: ArtEventComponentProps) {
  const {
    eventTitle,
    eventDate,
    eventMonth,
    eventDay,
    eventTime,
    aboutEvent,
    ticketPrice,
    spotsLeft,
  } = props || {
    eventTitle: "NewY Art Festival: 2022 Dana",
    eventDate: "29",
    eventMonth: "Sep",
    eventDay: "Friday",
    eventTime: "09:00 PM - 11:00 PM",
    aboutEvent:
      "We're celebrating our 30th edition of the California Art Festival in CA this Spring so join us at the Building Park in California State University from March 29 - 30, 2022 with our Private View opening on Saturday, March 26!",
    ticketPrice: "$60.98 - $75.00",
    spotsLeft: "200",
  };

  return (
    <article className="bg-white flex w-[375px] flex-col">
      <div className="flex justify-between items-center h-[56px] self-stretch px-6 max-md:px-5">
        <ArrowLeft />
        <div className="flex items-center gap-4 self-center">
          <Share />
          <Heart />
        </div>
      </div>
      <hr className="bg-gray-100 self-stretch w-full h-px" />
      <section className="self-stretch flex flex-col w-full mt-3 px-6 max-md:px-5">
        <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.3625] w-full pl-4 pr-20 pt-48 pb-4 max-md:pr-5 max-md:pt-44 rounded-xl mt-3.5">
          <Image
            priority
            src="/images/card.png"
            className="absolute h-full w-full object-cover object-center inset-0"
            alt="banner image"
            width={375}
            height={274}
          />
        </div>
        <h2 className="text-gray-900 text-xl font-bold leading-8 self-stretch mt-3.5">
          {eventTitle}
        </h2>
        <div className="justify-between items-start self-stretch flex w-full gap-5 mt-8">
          <div className="items-start self-stretch flex justify-between gap-4">
            <div className="justify-center items-center bg-zinc-100 self-stretch flex w-12 max-w-full flex-col px-4 py-1.5 rounded-xl">
              <div className="text-gray-900 text-center text-sm font-bold leading-5 self-stretch whitespace-nowrap">
                {eventDate}
              </div>
              <div className="text-gray-400 text-center text-xs leading-4 self-stretch whitespace-nowrap">
                {eventMonth}
              </div>
            </div>
            <div className="items-start self-center flex flex-col my-auto">
              <div className="text-gray-900 text-sm font-bold leading-5 self-stretch whitespace-nowrap">
                {eventDay}
              </div>
              <div className="text-gray-400 text-xs leading-5 self-stretch whitespace-nowrap mt-1">
                {eventTime}
              </div>
            </div>
          </div>
          <div className="justify-center items-center border border-[color:var(--primary-base,#5766C7)] self-stretch flex w-12 max-w-full flex-col p-3 rounded-xl border-solid">
            <CalendarPlus color="#5766C7" />
          </div>
        </div>
        <div className="items-start self-stretch flex grow flex-col mt-6">
          <h3 className="self-stretch text-gray-900 text-base font-bold leading-6">
            About this event
          </h3>
          <p className="self-stretch text-gray-400 text-sm leading-5 mt-2">
            {aboutEvent}
          </p>
          <a
            href="#"
            className="self-stretch text-indigo-500 text-sm font-medium leading-5 mt-2"
          >
            Show more
          </a>
        </div>
      </section>
      <section className="items-start bg-white self-stretch flex w-full flex-col mt-4 mb-9 px-6 py-2 max-md:px-5">
        <div className="justify-between items-start self-stretch flex w-full gap-5">
          <div className="items-start self-center flex flex-col my-auto">
            <div className="text-gray-900 text-base font-bold leading-6 self-stretch whitespace-nowrap">
              {ticketPrice}
            </div>
            <div className="text-gray-400 text-xs leading-5 self-stretch whitespace-nowrap mt-1">
              {spotsLeft} Spots left
            </div>
          </div>
          <a
            href="#"
            className="text-white text-center text-sm font-bold leading-5 self-stretch justify-center items-center bg-indigo-500 w-[148px] max-w-full px-4 py-5 rounded-2xl"
          >
            Get a Ticket
          </a>
        </div>
      </section>
    </article>
  );
}
