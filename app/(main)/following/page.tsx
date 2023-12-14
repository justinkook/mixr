import { OrganizerCard } from '@/components/organizer-card'
import { OrganizerEmptyPlaceholder } from '@/components/organizer-empty-placeholder'

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

export default async function FollowingPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {organizations.length > 0 ? (
          organizations.map((organization) => <OrganizerCard key={organization.name} organizer={organization} />)
        ) : (
          <OrganizerEmptyPlaceholder className="col-span-4" />
        )}
      </div>
    </>
  )
}
