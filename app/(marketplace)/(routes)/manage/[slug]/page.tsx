import { Metadata } from 'next'
import Link from 'next/link'
import { z } from 'zod'

import { ArrowUpRight, CalendarIcon, MapPinIcon, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/* Overview Components */
import { Overview } from '@/components/manage/overview/overview'
import { RecentSales } from '@/components/manage/overview/recent-sales'

/* Guest Components */
import { DataTable } from '@/components/manage/guests/data-table'
import { columns } from '@/components/manage/guests/columns'
import dataJSON from '@/components/manage/guests/tasks.json'
import { taskSchema } from '@/lib/schema'
import SettingsAccountPage from '@/components/manage/settings/account/settings-page'
import { LocationCombobox } from '@/components/location-combobox'
import { DateCombobox } from '@/components/date-combobox'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { OrganizationSwitcher } from '@clerk/clerk-react'

// TODO: Replace Simulate a database read for tasks.
async function getTasks() {
  return z.array(taskSchema).parse(dataJSON)
}

export default async function EventManagePage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full px-4 py-6 lg:px-8">
          <div className="flex-1 space-y-4 p-8 pt-6">
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
                <div className="mx-auto max-w-2xl py-4 sm:px-4 sm:py-8 lg:max-w-7xl lg:px-8">
                  <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    <div className="lg:col-span-3 lg:row-end-1 lg:min-w-fit">
                      {/* Product info */}
                      <div className="flex flex-col">
                        <Card>
                          <CardHeader>
                            <div className="mb-2">{/* <OrganizationSwitcher hidePersonal /> */}</div>
                            <CardTitle></CardTitle>
                            {/* Event Image */}
                            <Card className="max-h-[400px] overflow-hidden rounded-lg">
                              <Image
                                src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
                                alt={'alt'}
                                width={400}
                                height={400}
                                className="aspect-square h-full w-full object-cover object-center"
                              />
                            </Card>
                          </CardHeader>
                          <CardContent>
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
                              <h3 className="sr-only">Create Event Button</h3>
                              <Button className="w-full">Create Event</Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="guests" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Guests</h2>
                      <p className="text-muted-foreground">Manage your guest list, approvals, invitations</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">
                        <Plus size={20} />
                        Invite Guest
                      </Button>
                    </div>
                  </div>
                  <DataTable data={tasks} columns={columns} />
                </div>
              </TabsContent>
              <TabsContent value="tickets" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                  <div className="flex items-center justify-between space-y-2">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
                      <p className="text-muted-foreground">Create ticket types and set prices,</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="secondary">
                        <Plus size={20} />
                        Create Ticket
                      </Button>
                    </div>
                  </div>
                  <Separator />
                </div>
              </TabsContent>
              <TabsContent value="insights" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">$120.13 from sponsors</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Guests</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">50 going</div>
                      <p className="text-xs text-muted-foreground">180 guests invited</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">234 viewed</div>
                      <p className="text-xs text-muted-foreground">119 clicks</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Guests</CardTitle>
                      <CardDescription>You have 265 guests attending.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
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
