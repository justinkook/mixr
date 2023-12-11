'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function EventManageTabs({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const currentTab = pathname.split('/').pop()

  if (!currentTab) return null

  const handleTabChange = (value: string) => {
    if (currentTab === value) return

    if (currentTab === 'manage' && value !== 'manage') {
      const href = `${pathname}/${value}`
      router.push(href)
    } else if (currentTab !== 'manage' && value === 'manage') {
      const href = pathname.replace(`/${currentTab}`, '')
      router.push(href)
    } else {
      const href = pathname.replace(currentTab, value)
      router.push(href)
    }
  }

  return (
    <>
      <Tabs value={currentTab} defaultValue="manage" className="space-y-4" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="manage">Overview</TabsTrigger>
          <TabsTrigger value="guests">Guests</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value={currentTab} className="space-y-4">
          {children}
        </TabsContent>
      </Tabs>
    </>
  )
}
