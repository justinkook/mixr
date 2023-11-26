import EventManageBanner from '@/components/event-manage-banner'

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EventManageBanner />
      <main className="px-4 py-4 sm:px-6 lg:px-8">{children}</main>
    </>
  )
}
