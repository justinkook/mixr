import {
  ActivityIcon,
  DollarSignIcon,
  MousePointerClickIcon,
  UsersIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { DateRangePicker } from '@/components/date-range-picker'
import { SalesByTicketType } from '@/app/(main)/(organizer)/components/charts/sales-by-ticket-type'
import { SalesOverTime } from '@/app/(main)/(organizer)/components/charts/sales-over-time'

export default async function EventInsightsPage() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Insights</h2>
            <p className="text-muted-foreground">
              View tracking metrics and revenue reports.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <DateRangePicker />
          </div>
        </div>
        <Separator />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,231.89</div>
            <p className="text-xs text-muted-foreground">$120.13 refunded</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Guests</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50 going</div>
            <p className="text-xs text-muted-foreground">180 tickets sold</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impressions</CardTitle>
            <MousePointerClickIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234 viewed</div>
            <p className="text-xs text-muted-foreground">119 clicks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <span>Sales Over Time</span>
              <Select>
                <SelectTrigger className="w-[180px] items-start">
                  <SelectValue placeholder="Last 24 Hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="day">Last 24 Hours</SelectItem>
                    <SelectItem value="week">Last 7 Days</SelectItem>
                    <SelectItem value="month">Last 30 Days</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SalesOverTime />
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Sales by Ticket Type</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SalesByTicketType />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle>Countries</CardTitle>
            <CardDescription>
              Which countries your visitors are from.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Button variant="secondary" className="w-full">
                  <Avatar className="h-4 w-4">
                    <AvatarImage src="/images/card.png" alt="Avatar" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      United States of America
                    </p>
                  </div>
                  <div className="ml-auto font-medium">20</div>
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="secondary" className="w-full">
                  <Avatar className="flex h-4 w-4 items-center justify-center">
                    <AvatarImage src="/images/card.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">India</p>
                  </div>
                  <div className="ml-auto font-medium">12</div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Operating Systems</CardTitle>
            <CardDescription>
              Which operating systems your visitors are using.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Button variant="secondary" className="w-full">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">iOS</p>
                  </div>
                  <div className="ml-auto font-medium">20</div>
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="secondary" className="w-full">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Mac</p>
                  </div>
                  <div className="ml-auto font-medium">6</div>
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="secondary" className="w-full">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Windows</p>
                  </div>
                  <div className="ml-auto font-medium">6</div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle>Browsers</CardTitle>
            <CardDescription>
              Which browsers your visitors are using.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Button variant="secondary" className="w-full">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Chrome</p>
                  </div>
                  <div className="ml-auto font-medium">20</div>
                </Button>
              </div>
              <div className="flex items-center">
                <Button variant="secondary" className="w-full">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Mobile Safari
                    </p>
                  </div>
                  <div className="ml-auto font-medium">12</div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
