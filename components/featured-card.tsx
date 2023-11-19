'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import DateCard from './date-card'
import EventCardMetadata from './event-metadata'

type ArtFestivalCardProps = {
  imageUrl: string
  day: string
  month: string
  title: string
  location: string
  time: string
  price: string
}

const ArtFestivalCard: React.FC<ArtFestivalCardProps> = ({ imageUrl, day, month, title, location, time, price }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked)

    // Go to event page
  }

  return (
    <article className="relative mt-4 flex aspect-square w-[323px] max-w-full flex-col self-center overflow-hidden px-4 py-3.5">
      <Image
        loading="lazy"
        src={imageUrl}
        className="absolute inset-0 z-[-1] h-full w-full object-cover object-center"
        alt=""
      />
      <DateCard day={day} month={month} />
      <EventCardMetadata title={title} location={location} time={time} price={price} />
    </article>
  )
}

export default ArtFestivalCard
