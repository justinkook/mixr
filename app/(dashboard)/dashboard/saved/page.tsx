import { ZapIcon } from 'lucide-react'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { EventGridCard } from '@/components/event/event-grid-card'

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
    description: 'Develop. Preview. Ship. For the best frontend teams – Vercel.',
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
  {
    name: 'tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
  {
    name: 'nextjs',
    description: 'The React Framework - created and maintained by @vercel.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
  {
    name: 'vercel',
    description: 'Develop. Preview. Ship. For the best frontend teams – Vercel.',
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
  {
    name: 'tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
  {
    name: 'nextjs',
    description: 'The React Framework - created and maintained by @vercel.',
    avatar: '',
    followers: 1000,
    createdAt: 'December 2021',
  },
  {
    name: 'vercel',
    description: 'Develop. Preview. Ship. For the best frontend teams – Vercel.',
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.length > 0 ? (
          events.map((event, index) => <EventGridCard key={index} event={event} />)
        ) : (
          <EmptyPlaceholder
            className="col-span-4"
            content={{
              icon: ZapIcon,
              title: 'No events available',
              description: 'You have not saved any events.',
            }}
          />
        )}
      </div>
    </>
  )
}
