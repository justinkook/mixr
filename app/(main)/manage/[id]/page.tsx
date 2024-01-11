import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AgendaCard } from '@/components/cards/agenda-card'
import { EventHeroCard } from '@/components/cards/event-hero-card'
import { Editor } from '@/components/editor'

import { AgendaModal } from './components/agenda-modal'
import { CustomTagsForm } from './components/custom-tags-form'
import { FAQModal } from './components/faq-modal'

type EventOverviewPageProps = {
  params: {
    id: string
  }
}

export default async function EventOverviewPage({
  params,
}: EventOverviewPageProps) {
  return (
    <div className="h-full flex-col space-y-4 md:flex">
      <div className="flex lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Product info */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-7 lg:col-span-4">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>Event Details</CardTitle>
                <CardDescription>Edit location and date.</CardDescription>
              </div>
              <Link href={`/event/${params.id}`}>
                <Button variant="link">View Page</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <EventHeroCard />
            </CardContent>
          </Card>
          <Card className="col-span-7 lg:col-span-3">
            <CardHeader>
              <CardTitle>Custom Tags</CardTitle>
              <CardDescription>Add tags for help in discovery.</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <CustomTagsForm />
            </CardContent>
          </Card>
          <Card className="col-span-7">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>About Event</CardTitle>
                <CardDescription>
                  Edit event description or auto generate using AI.
                </CardDescription>
              </div>
              <Button variant="secondary">Save Changes</Button>
            </CardHeader>
            <CardContent>
              <Card>
                <Editor className="min-h-[300px] flex-wrap" />
              </Card>
            </CardContent>
          </Card>
          <Card className="col-span-7 lg:col-span-4">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>Event FAQ</CardTitle>
                <CardDescription>
                  Have a different question and can’t find the answer you’re
                  looking for?
                </CardDescription>
              </div>
              <FAQModal />
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="col-span-7 lg:col-span-3">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-1.5">
                <CardTitle>Event Agenda</CardTitle>
                <CardDescription>
                  Add Agenda for your event. You can add multiple agenda items.
                </CardDescription>
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
