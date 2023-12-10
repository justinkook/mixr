import Link from 'next/link'
import { z } from 'zod'

import {
  ActivityIcon,
  ArrowUpRight,
  CalendarIcon,
  DollarSignIcon,
  HeartIcon,
  MapPinIcon,
  MousePointerClickIcon,
  PencilIcon,
  PlusCircleIcon,
  ShareIcon,
  UsersIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/* Insights Components */
import { SalesOverTime } from '@/components/manage/insights/sales-over-time'
import { SalesByTicketType } from '@/components/manage/insights/sales-by-ticket-type'

/* Guest Components */
import { DataTable } from '@/components/manage/guests/data-table'
import { columns } from '@/components/manage/guests/columns'
import dataJSON from '@/components/manage/guests/guests.json'
import { guestSchema } from '@/lib/schema'
import SettingsAccountPage from '@/components/manage/settings/account/settings-page'
import { LocationCombobox } from '@/components/location-combobox'
import { DateCombobox } from '@/components/date-combobox'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { CreateTicketCard } from '@/components/create-ticket-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { InviteGuestModal } from '@/components/manage/guests/invite-guest-modal'
import Editor from '@/components/editor/editor'

// TODO: Replace Simulate a database read for tasks.
async function getTasks() {
  return z.array(guestSchema).parse(dataJSON)
}

export default async function EventManagePage() {
  const tasks = await getTasks()

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
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="guests">Guests</TabsTrigger>
                <TabsTrigger value="tickets">Tickets</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
                <TabsTrigger value="settings">More</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
                      <p className="text-muted-foreground">Manage event details such as location and dates.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">
                        <PencilIcon className="mr-2 h-4 w-4" />
                        Edit Details
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* Product info */}
                    <Card className="flex w-full flex-row">
                      <CardContent className="flex w-full flex-row justify-between pt-6">
                        <div className="flex w-full space-x-8">
                          {/* Event Image */}
                          <Card className="h-[330px] w-[330px] overflow-hidden rounded-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
                              alt={'alt'}
                              width={400}
                              height={400}
                              className="aspect-square h-full w-full object-cover object-center"
                            />
                          </Card>
                          <div className="flex flex-col">
                            <Input
                              type="text"
                              placeholder="Event Name"
                              className="border-none pl-0 text-2xl font-bold leading-8 tracking-tight sm:text-3xl"
                            />

                            {/* Event Date & Time */}
                            <div className="mt-6">
                              <h2 className="sr-only">Event Date</h2>
                              <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                                <div className="flex w-full items-start justify-start gap-4 self-stretch">
                                  <div className="flex h-12 w-12 flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                                    <CalendarIcon className="h-6 w-6" />
                                  </div>
                                  <div className="flex w-full flex-col items-start self-center">
                                    <DateCombobox />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="mt-3">
                              <h3 className="sr-only">Location</h3>
                              <div className="flex items-center">
                                <div className="flex h-full w-full items-start justify-between gap-5 self-stretch px-0">
                                  <div className="flex w-full items-start justify-between gap-4 self-stretch">
                                    <div className="flex h-12 w-12 flex-col items-center justify-center self-stretch rounded-xl bg-muted px-4 py-1.5">
                                      <MapPinIcon />
                                    </div>
                                    <div className="flex w-full flex-col items-start self-center">
                                      <LocationCombobox />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6">
                              <h3 className="sr-only">Save Event Changes Button</h3>
                              <Button className="w-full">Update Event</Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-end justify-end">
                          <Button variant="ghost">
                            <HeartIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost">
                            <ShareIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">About Event</h2>
                      <p className="text-muted-foreground">Edit event description or auto generate with AI.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">
                        <PencilIcon className="mr-2 h-4 w-4" />
                        Edit Description
                      </Button>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Card className="min-h-[330px]">
                    <Editor className="mb-0 flex-wrap" disableLocalStorage />
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="guests" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Guests</h2>
                      <p className="text-muted-foreground">Manage your guest list, approvals, and orders.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <InviteGuestModal />
                    </div>
                  </div>
                  <Separator />
                  <DataTable data={tasks} columns={columns} />
                </div>
              </TabsContent>
              <TabsContent value="tickets" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
                      <p className="text-muted-foreground">Create ticket types and set prices.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">
                        <PlusCircleIcon className="mr-2 h-4 w-4" />
                        Create Ticket
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <CreateTicketCard />
                </div>
              </TabsContent>
              <TabsContent value="insights" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Insights</h2>
                      <p className="text-muted-foreground">View tracking metrics and revenue reports.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">
                        <PlusCircleIcon className="mr-2 h-4 w-4" />
                        Add Google Analytics
                      </Button>
                    </div>
                  </div>
                  <Separator />
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
                        <p className="text-xs text-muted-foreground">+201 since last hour</p>
                      </CardContent>
                    </Card>
                  </div>
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
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Sales by Ticket Type</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <SalesByTicketType />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Countries</CardTitle>
                      <CardDescription>Which countries your visitors are from.</CardDescription>
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
                              <p className="text-sm font-medium leading-none">United States of America</p>
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
                      <CardDescription>Which operating systems your visitors are using.</CardDescription>
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
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Browsers</CardTitle>
                      <CardDescription>Which browsers your visitors are using.</CardDescription>
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
                              <p className="text-sm font-medium leading-none">Mobile Safari</p>
                            </div>
                            <div className="ml-auto font-medium">12</div>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 pt-4 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                      <p className="text-muted-foreground">See active views, device, or location breakdown</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">Enable</Button>
                    </div>
                  </div>
                  <SettingsAccountPage />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
