import Image from 'next/image'
import Link from 'next/link'
import { TicketIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DateCard } from '@/components/cards/date-card'

export function TicketCard() {
  return (
    <div className="flex flex-col space-y-1">
      <Card className="w-full border-none">
        <CardContent className="p-0">
          <Link href={`/event/react-rendevous`}>
            <div className="relative w-full overflow-hidden rounded-md">
              {/* Half circle ticket stub */}
              <div className="absolute -top-6 left-[45%] z-30 h-[40px] w-[40px] rounded-full bg-background"></div>
              <div className="absolute -bottom-6 left-[45%] z-30 h-[40px] w-[40px] rounded-full bg-background"></div>
              <Image
                src="https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"
                alt="ticket cover image"
                width={250}
                height={330}
                className="aspect-[3/4] h-auto w-full object-cover transition-all hover:scale-105"
              />
              <div className="absolute left-2 top-2">
                <DateCard day={'08'} month={'Jan'} aspectRatio="square" />
              </div>
              <Card className="absolute bottom-0 w-full border-none bg-transparent backdrop-blur-[1px]">
                <CardHeader>
                  <CardTitle className="text-white">React Rendevous</CardTitle>
                  <CardDescription className="text-white">
                    7:00 PM
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </Link>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
        <CardHeader className="flex flex-row items-center space-x-4 p-4">
          <TicketIcon className="h-6 w-6" />
          <div className="text-sm">
            <h3 className="mb-1 font-medium leading-none">Your tickets</h3>
            <p className="text-xs text-muted-foreground">4 x GA - Project 91</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
