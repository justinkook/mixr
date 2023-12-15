import { PlusCircleIcon, XCircleIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Editor from '@/components/editor/editor'
import HeroEventCard from '@/components/hero-event-card'
import { FAQSection } from '@/components/faq-section'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AgendaCard } from '@/components/agenda-card'
import { AgendaModal } from '@/components/agenda-modal'
import { FAQModal } from '@/components/faq-modal'

export default async function EventOverviewPage() {
  return (
    <div className="hidden h-full flex-col space-y-4 md:flex">
      <div className="flex lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Product info */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>Event Details</CardTitle>
                <CardDescription>Edit location and date.</CardDescription>
              </div>
              <Button variant="link">View Page</Button>
            </CardHeader>
            <CardContent>
              <HeroEventCard />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Custom Tags</CardTitle>
              <CardDescription>Add tags for help in discovery.</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <Input placeholder="Add a tag" className="w-full" />
              <p className="py-2 text-xs text-muted-foreground">Enter a comma after each tag</p>
              <Separator className="my-4" />
              <h4 className="pt-4 text-sm font-medium">Custom tags</h4>
            </CardContent>
            <CardFooter className="flex-wrap gap-4 overflow-y-auto">
              <Badge className="mr-2">
                Tech <XCircleIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </Badge>
              <Badge className="mr-2">
                Crypto <XCircleIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </Badge>
              <Badge className="mr-2">
                NFT.NYC <XCircleIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </Badge>
              <Badge className="mr-2">
                Solana <XCircleIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </Badge>
              <Badge className="mr-2">
                Polygon Labs <XCircleIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </Badge>
              <Badge className="mr-2">
                Workshop <XCircleIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </Badge>
            </CardFooter>
          </Card>
          <Card className="col-span-7">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>About Event</CardTitle>
                <CardDescription>Edit event description or auto generate using AI.</CardDescription>
              </div>
              <Button variant="secondary">Save Changes</Button>
            </CardHeader>
            <CardContent>
              <Card>
                <Editor className="min-h-[300px] flex-wrap" />
              </Card>
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>Event FAQ</CardTitle>
                <CardDescription>
                  Have a different question and can’t find the answer you’re looking for?
                </CardDescription>
              </div>
              <FAQModal />
            </CardHeader>
            <CardContent>
              <FAQSection />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>Event Agenda</CardTitle>
                <CardDescription>Add Agenda for your event. You can add multiple agenda items.</CardDescription>
              </div>
              <AgendaModal />
            </CardHeader>
            <CardContent>
              <AgendaCard />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
