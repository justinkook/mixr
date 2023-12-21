import { SlidersHorizontalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Input } from './input'
import { Separator } from './separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { Slider } from './slider'
import { Tabs, TabsList, TabsTrigger } from './tabs'

type SearchFilterProps = React.ComponentProps<
  typeof DialogContent | typeof SheetContent
>

export function SearchFilters({ className, ...props }: SearchFilterProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex sm:hidden">
            <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="space-y-6 py-4">
            <DialogTitle> What to search?</DialogTitle>
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="events" className="w-[50%]">
                  Events
                </TabsTrigger>
                <TabsTrigger value="organizers" className="w-[50%]">
                  Organizers
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Separator />
            <div className="space-y-2">
              <DialogTitle>Price Range</DialogTitle>
              <DialogDescription>
                Minimum and maximum price for a ticket
              </DialogDescription>
            </div>
            <Slider className="py-4" defaultValue={[1, 100]} />
            <div className="flex justify-between">
              <Input placeholder="Minimum" className="w-[40%]" />
              <Separator className="w-4 self-center" />
              <Input placeholder="Maximum" className="w-[40%]" />
            </div>
            <Separator />
            <div className="space-y-2">
              <DialogTitle className="flex justify-between">
                <span>Distance</span>
                <span>11 km</span>
              </DialogTitle>
              <DialogDescription>
                Maximum distance from your location
              </DialogDescription>
            </div>
            <Slider className="py-4" defaultValue={[50]} />
          </div>
          <SheetFooter>
            <Button variant="link">Clear All</Button>
            <SheetClose asChild>
              <Button>Apply Filters</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="hidden sm:flex">
            <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </DialogTrigger>

        <DialogContent className="w-[380px] mr-10">
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <DialogTitle> What to search?</DialogTitle>
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="events" className="w-[50%]">
                  Events
                </TabsTrigger>
                <TabsTrigger value="organizers" className="w-[50%]">
                  Organizers
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Separator />
            <div className="space-y-2">
              <DialogTitle>Price Range</DialogTitle>
              <DialogDescription>
                Minimum and maximum price for a ticket
              </DialogDescription>
            </div>
            <Slider className="py-4" defaultValue={[1, 100]} />
            <div className="flex justify-between">
              <Input placeholder="Minimum" className="w-[40%]" />
              <Separator className="w-4 self-center" />
              <Input placeholder="Maximum" className="w-[40%]" />
            </div>
            <Separator />
            <div className="space-y-2">
              <DialogTitle className="flex justify-between">
                <span>Distance</span>
                <span>11 km</span>
              </DialogTitle>
              <DialogDescription>
                Maximum distance from your location
              </DialogDescription>
            </div>
            <Slider className="py-4" defaultValue={[50]} />
          </div>
          <DialogFooter>
            <Button variant="link">Clear All</Button>
            <DialogClose asChild>
              <Button>Apply Filters</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
