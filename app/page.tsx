import DateCard from "@/components/date-card";
import EventCardMetadata from "@/components/event-metadata";
import Header from "@/components/header";
import LocationComponent from "@/components/location-component";
import TabSlider from "@/components/tab-slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white flex w-[375px] flex-col">
        <Header />
        <div className="bg-gray-100 self-stretch w-full h-px mt-2.5" />
        <div className="items-start flex w-[117px] max-w-full flex-col ml-6 mt-6 px-5 self-start max-md:ml-2.5">
          <div className="text-gray-400 text-xs leading-5 self-stretch whitespace-nowrap -mr-5">
            Find events near
          </div>
          <div className="text-gray-900 text-lg font-bold leading-7 self-stretch whitespace-nowrap -mr-5 mt-1">
            <LocationComponent />
          </div>
        </div>
        <TabSlider tabs={["Upcoming", "Today", "Tomorrow", "Popular"]} />
        <div className="justify-between items-start self-center flex w-[327px] max-w-full gap-5 mt-6 px-5">
          <div className="text-gray-900 text-base font-bold leading-6">
            Featured events
          </div>
          <div className="text-gray-400 text-right text-sm font-medium leading-5 whitespace-nowrap self-start">
            See All
          </div>
        </div>
        <div className="cursor-pointer flex-col overflow-hidden self-center relative flex aspect-square w-[323px] max-w-full mt-4 px-4 py-3.5">
          <Link href="/events/newy-art-festival">
            <Image
              src="/images/card.png"
              className="absolute  h-full w-full object-cover object-center inset-0"
              alt="card image"
              width={300}
              height={90}
              priority
            />
            <DateCard day="12" month="Aug" />
            <EventCardMetadata
              title="Art Festival"
              location="California"
              time="12:00 PM"
              price="FREE"
            />
          </Link>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/121755a3-20fa-4bec-84a5-2f633e45e8d3?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&"
          className="aspect-[14.2] object-contain object-center w-[71px] overflow-hidden self-center max-w-full mt-4"
        />
        <div className="self-stretch flex grow flex-col w-full mt-7 pl-6 pr-6 max-md:px-5">
          <div className="text-gray-900 text-base font-bold leading-6 self-stretch whitespace-nowrap">
            Upcoming events
          </div>
          <div className="bg-white self-stretch flex w-full items-start justify-between gap-3 mt-4 pl-3 pr-3.5 pt-3 rounded-2xl">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa0655d3-40cb-4078-ae36-fee53a9a559d?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&"
              className="aspect-square object-contain object-center w-[88px] overflow-hidden max-w-full self-start"
            />
            <div className="items-start flex flex-col w-[203px] self-start">
              <div className="text-gray-900 text-sm font-bold leading-5 self-stretch">
                House Of Materials Workshop Event For Creators
              </div>
              <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4">
                <div className="items-start flex gap-1 mt-2 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f4d4c09-e6fc-4ebc-9f04-2a4bcd440038?apiKey=dc0e24a5b59142fa962f2e2c6c5cffce&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-gray-400 text-xs font-medium leading-5 self-stretch whitespace-nowrap">
                    California
                  </div>
                </div>
                <div className="text-indigo-500 text-center text-xs font-medium leading-5 self-stretch whitespace-nowrap justify-center items-center bg-violet-50 flex-1 px-4 py-1.5 rounded-lg">
                  FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
