import { OrganizerCard } from '@/components/organizer-card'

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

export default async function SavedPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {organizations.map((organization, index) => (
          <OrganizerCard key={index} organizer={organization} />
        ))}
      </div>
    </>
  )
}
