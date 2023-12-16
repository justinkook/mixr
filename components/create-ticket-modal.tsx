import { ChevronDownIcon, PlusCircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { DatePicker } from './date-picker'
import { TimePicker } from './time-picker'
import { Separator } from './ui/separator'
import { Switch } from './ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function CreateTicketModal({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className={cn('w-full', className)}>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Create Ticket
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Ticket Type</DialogTitle>
          <DialogDescription>
            New ticket type and set ticket options.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Name</Label>
            <Input id="name" placeholder="VIP" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="VIP access and premium perks"
            />
          </div>
        </div>
        <Tabs defaultValue="free" className="mt-4 w-full space-y-4">
          <TabsList className="flex w-full items-center justify-around">
            <TabsTrigger value="free" className="relative w-[50%]">
              Free
            </TabsTrigger>
            <TabsTrigger value="paid" className="relative w-[50%]">
              Paid
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="free"
            className="border-none p-0 outline-none"
          ></TabsContent>
          <TabsContent value="paid" className="border-none p-0 outline-none">
            <div className="flex items-center justify-between">
              <Label htmlFor="security-level">Ticket Price</Label>
              <Input
                type="number"
                className="max-w-[100px] text-right"
                placeholder="0"
              />
            </div>
          </TabsContent>
        </Tabs>
        <Separator />
        <Collapsible>
          <CollapsibleTrigger className="mb-4 w-full">
            <Button
              variant="ghost"
              className="flex w-full items-center justify-between pl-0"
            >
              <p className="text-sm text-muted-foreground">
                Restrict Dates / Capacity
              </p>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="security-level">Required Approval</Label>
                <Switch id="approval-required" />
              </div>
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <Label htmlFor="sales-start">Sales Start</Label>
                  <Switch id="sales-start" />
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full justify-start">
                  <div className="mt-4 flex items-center">
                    <DatePicker />
                    <TimePicker />
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <Label htmlFor="sales-end">Sales End</Label>
                  <Switch id="sales-end" />
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full  justify-start">
                  <div className="mt-4 flex items-center">
                    <DatePicker />
                    <TimePicker />
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <div className="flex items-center justify-between">
                <Label htmlFor="security-level">Ticket Cap</Label>
                <Input
                  type="number"
                  className="max-w-[100px] text-right"
                  placeholder="∞"
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Create Ticket
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
