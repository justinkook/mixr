import * as React from "react"
import Image from "next/image"

type EventCardMetadataProps = {
  title: string
  location: string
  time: string
  price: string
}

const EventCardMetadata: React.FC<EventCardMetadataProps> = ({ title, location, time, price }) => {
  return (
    <div className="relative mt-32 flex w-full flex-col self-end rounded-2xl bg-white px-4 py-4 shadow-lg max-md:mt-10">
      <h2 className="self-start text-sm font-bold leading-5 text-gray-900">{title}</h2>
      <div className="ml-4 mt-5 flex w-full items-start justify-between gap-5 self-start max-md:ml-2.5">
        <div className="my-auto flex items-start gap-1 self-center max-md:justify-center">
          <div className="self-stretch text-xs leading-5 text-gray-400">{location}</div>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b192767-128b-48d1-8b5b-8cc4bc920163?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce"
            className="my-auto aspect-square w-1 max-w-full self-center overflow-hidden rounded-[50%] object-contain object-center"
            alt="card image"
            width={600}
            height={100}
          />
          <div className="self-stretch whitespace-nowrap text-xs leading-5 text-gray-400">{time}</div>
        </div>
        <a
          href="#"
          className="w-[83px] max-w-full items-center justify-center self-stretch whitespace-nowrap rounded-lg bg-indigo-200 bg-opacity-30 py-2.5 pl-6 pr-6 text-center text-xs font-medium leading-5 text-indigo-500 max-md:px-5"
        >
          {price}
        </a>
      </div>
    </div>
  )
}

export default EventCardMetadata
