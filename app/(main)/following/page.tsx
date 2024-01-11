import { UsersIcon } from 'lucide-react'

import { OrganizerCard } from '@/components/cards/organizer-card'
import { EmptyPlaceholder } from '@/components/empty-placeholder'

const organizations = [
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

export default async function FollowingPage() {
  return (
    <>
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Following</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {organizations.length > 0 ? (
            organizations.map((organization, index) => (
              <OrganizerCard key={index} {...organization} />
            ))
          ) : (
            <EmptyPlaceholder
              className="col-span-3"
              placeholder={{
                icon: UsersIcon,
                title: 'No organizers available',
                description: 'You are not following any organizers.',
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
