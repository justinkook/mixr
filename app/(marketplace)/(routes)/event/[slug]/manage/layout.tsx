import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EventManageTabs from '@/components/manage/manage-tabs'

export default function EventManageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full px-4 lg:px-8">
          <div className="flex-1 space-y-4 p-8 pt-0">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">NewY Art Festival: 2022 Dana Point 48-50</h2>
              <div className="flex items-center space-x-2">
                <Link href="/event/[slug]" as="/event/newy-art-festival">
                  <Button>
                    Event Page <ArrowUpRight />
                  </Button>
                </Link>
              </div>
            </div>
            <EventManageTabs>{children}</EventManageTabs>
          </div>
        </div>
      </div>
    </>
  )
}
