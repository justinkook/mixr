import * as React from "react";
import Image from "next/image";

type EventCardMetadataProps = {
  title: string;
  location: string;
  time: string;
  price: string;
};

const EventCardMetadata: React.FC<EventCardMetadataProps> = ({
  title,
  location,
  time,
  price,
}) => {
  return (
    <div className="relative shadow-lg bg-white flex w-full flex-col mt-32 px-4 py-4 rounded-2xl self-end max-md:mt-10">
      <h2 className="text-gray-900 text-sm font-bold leading-5 self-start">
        {title}
      </h2>
      <div className="flex w-full items-start justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
        <div className="items-start self-center flex gap-1 my-auto max-md:justify-center">
          <div className="text-gray-400 text-xs leading-5 self-stretch">
            {location}
          </div>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b192767-128b-48d1-8b5b-8cc4bc920163?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce"
            className="aspect-square object-contain object-center w-1 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
            alt="card image"
            width={600}
            height={100}
          />
          <div className="text-gray-400 text-xs leading-5 self-stretch whitespace-nowrap">
            {time}
          </div>
        </div>
        <a
          href="#"
          className="text-indigo-500 text-center text-xs font-medium leading-5 self-stretch whitespace-nowrap justify-center items-center bg-indigo-200 bg-opacity-30 w-[83px] max-w-full pl-6 pr-6 py-2.5 rounded-lg max-md:px-5"
        >
          {price}
        </a>
      </div>
    </div>
  );
};

export default EventCardMetadata;
