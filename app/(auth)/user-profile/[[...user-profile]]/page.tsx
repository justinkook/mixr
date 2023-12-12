import { UserProfile } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="mb-20 flex justify-center">
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={{
          elements: {
            navbarMobileMenuRow: 'hidden',
          },
        }}
      />
    </div>
  )
}
