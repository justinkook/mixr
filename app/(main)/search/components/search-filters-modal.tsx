'use client'

import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SlidersHorizontalIcon } from 'lucide-react'
import qs from 'query-string'

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
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const SearchFiltersModal: React.FC = () => {
  const router = useRouter()
  const params = useSearchParams()

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)

  const clearAllFilters = () => {
    setMinPrice(0)
    setMaxPrice(10000)
  }

  const applyFilters = useCallback(async () => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
    }

    if (minPrice) {
      updatedQuery.minPrice = minPrice
    }

    if (maxPrice) {
      updatedQuery.maxPrice = maxPrice
    }

    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    router.push(url)
  }, [minPrice, maxPrice, router])

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="flex sm:hidden">
            <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full">
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
          </DrawerHeader>
          <div className="space-y-6 px-4">
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
            <Slider
              className="py-4"
              defaultValue={[0, 10000]}
              value={[minPrice, maxPrice]}
              minStepsBetweenThumbs={500}
              min={0}
              max={10000}
              onValueChange={(value) => {
                setMinPrice(value[0])
                setMaxPrice(value[1])
              }}
            />
            <div className="flex justify-between">
              <div>
                <Label htmlFor="minPrice">Minimum Price</Label>
                <Input
                  id="minPrice"
                  name="minPrice"
                  placeholder="Minimum"
                  className="w-[80%]"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
              </div>
              <Separator className="w-4 self-center mt-4" />
              <div className="flex flex-col space-y-1 justify-end items-end">
                <Label htmlFor="maxPrice">Maximum Price</Label>
                <Input
                  id="maxPrice"
                  placeholder="Maximum"
                  className="w-[80%] self-end "
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="link" onClick={clearAllFilters}>
              Clear All
            </Button>
            <DrawerClose asChild>
              <Button onClick={applyFilters}>Apply Filters</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

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
            <Slider
              className="py-4"
              defaultValue={[0, 10000]}
              value={[minPrice, maxPrice]}
              minStepsBetweenThumbs={500}
              min={0}
              max={10000}
              onValueChange={(value) => {
                setMinPrice(value[0])
                setMaxPrice(value[1])
              }}
            />
            <div className="flex justify-between">
              <div>
                <Label htmlFor="minPrice">Minimum Price</Label>
                <Input
                  id="minPrice"
                  name="minPrice"
                  placeholder="Minimum"
                  className="w-[80%]"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
              </div>
              <Separator className="w-4 self-center" />
              <div className="flex flex-col space-y-1 justify-end items-end">
                <Label htmlFor="maxPrice">Maximum Price</Label>
                <Input
                  id="maxPrice"
                  placeholder="Maximum"
                  className="w-[80%] self-end "
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="link" onClick={clearAllFilters}>
              Clear All
            </Button>
            <DialogClose asChild>
              <Button onClick={applyFilters}>Apply Filters</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
