import { BackNavbar } from '@/components/navigation/back-navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackNavbar />
      <main className="px-4 py-4 sm:px-6 lg:px-8">{children}</main>
    </>
  )
}
