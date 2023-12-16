import { ZapIcon } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { EventGridCard } from '@/components/event-grid-card'

const events = [
  {
    name: 'nextjs',
    description: 'The React Framework - created and maintained by @vercel.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
  {
    name: 'vercel',
    description:
      'Develop. Preview. Ship. For the best frontend teams – Vercel.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
  {
    name: 'tailwindlabs',
    description: 'Creators of Tailwind CSS.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
]

export default async function SavedPage() {
  return (
    <>
      <Tabs defaultValue="upcoming" className="flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Saved</h2>
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="upcoming">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.length > 0 ? (
              events.map((event, index) => (
                <EventGridCard key={index} event={event} />
              ))
            ) : (
              <EmptyPlaceholder
                className="col-span-3"
                content={{
                  icon: ZapIcon,
                  title: 'No events available',
                  description: 'You have not saved any upcoming events.',
                }}
              />
            )}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.length > 0 ? (
              events.map((event, index) => (
                <EventGridCard key={index} event={event} />
              ))
            ) : (
              <EmptyPlaceholder
                className="col-span-3"
                content={{
                  icon: ZapIcon,
                  title: 'No events available',
                  description: 'You have not saved any upcoming events.',
                }}
              />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
