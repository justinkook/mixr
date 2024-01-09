import Link from 'next/link'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  UserPlusIcon,
  ZapIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ShareModal } from '@/components/share-modal'

export default function OrganizerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex items-center justify-between space-y-2">
        <div className="flex w-full flex-col justify-between lg:flex-row">
          <div className="flex w-full flex-col md:flex-row md:space-x-8">
            {/* Event Image */}
            <Avatar className="w-[250px] h-[250px]">
              <AvatarImage
                src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
                className="object-cover object-center"
              />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            {/* Event Details */}
            <div className="flex flex-col mt-6 sm:mt-auto sm:pl-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold leading-8 tracking-tight sm:text-3xl text-primary">
                  Lena Logic
                </h2>
                <div className="flex space-x-4 text-sm ">
                  <div className="flex items-center">
                    <ZapIcon className="mr-1 h-3 w-3" />
                    23 Events
                  </div>
                  <div className="flex items-center">
                    <UserPlusIcon className="mr-1 h-3 w-3" />
                    12k Followers
                  </div>
                </div>
              </div>

              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <section className="max-w-lg">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    Asked about the inspiration behind his eight-and-a-half-hour
                    2015 album Sleep, the composer and ambient musician Max
                    Richter said it was pretty simple: Sleep is really
                    important, and he really likes doing it. In that spirit,
                    here’s a mix of contemporary and classic ambient music we
                    feel is perfectly calibrated to smooth the passage between
                    the stresses and noise of waking life and the quiet mystery
                    of dreams. Tap in. Lie down. Tune out. Our editors switch up
                    selections regularly here, so if you hear something you
                    like—or, more pointedly, if you don’t hear it—then add it to
                    your library.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 hidden text-sm font-bold leading-6 lg:inline-block"
                  >
                    more
                  </Button>
                </section>
              </div>

              <div className="flex h-full items-end">
                <h3 className="sr-only">Register Event Button</h3>
                <Button className="w-[200px] mr-4">Follow</Button>

                <ShareModal />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center self-end">
          <div className="flex justify-center ">
            <Link href="https://twitter.com">
              <Button variant="link">
                <span className="sr-only">Twitter Icon</span>
                <TwitterIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="https://facebook.com">
              <Button variant="link">
                <span className="sr-only">Facebook Icon</span>
                <FacebookIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/">
              <Button variant="link">
                <span className="sr-only">Linkedin Icon</span>
                <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="https://instagram.com">
              <Button variant="link">
                <span className="sr-only">Instagram Icon</span>
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
