import { BackNavbar } from '@/components/navigation/back-navbar'

export default function EventManageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackNavbar />
      <main>{children}</main>
    </>
  )
}
