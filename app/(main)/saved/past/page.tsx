import { EventEmptyPlaceholder } from '@/components/event/event-empty-placeholder'
import { EventGridCard } from '@/components/event/event-grid-card'

const organizations = [
  {
    name: 'nextjs',
    description: 'The React Framework - created and maintained by @vercel.',
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
          organizations.map((organization) => <EventGridCard key={organization.name} />)
        ) : (
          <EventEmptyPlaceholder className="col-span-4" />
        )}
      </div>
    </>
  )
}
