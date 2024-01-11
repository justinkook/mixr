import { BackNavbar } from '@/components/nav/back-navbar'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackNavbar />
      <main className="px-4 py-6 sm:px-6 lg:px-8 mb-16">{children}</main>
    </>
  )
}
