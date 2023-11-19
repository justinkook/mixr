import { PlusCircledIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AlbumArtwork } from '@/components/music/album-artwork'
import { PodcastEmptyPlaceholder } from '@/components/music/podcast-empty-placeholder'
import { listenNowAlbums, madeForYouAlbums } from '@/components/music/albums'
import { LocationCombobox } from '@/components/location-combobox'

export default function Home() {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full space-y-6 px-4 py-6 lg:px-8">
          <div>
            <div className="text-muted-secondary text-s self-stretch whitespace-nowrap leading-5">Find events near</div>
            <LocationCombobox />
          </div>
          <Tabs defaultValue="trending" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <ScrollArea className="w-full">
                <TabsList>
                  <TabsTrigger value="trending" className="relative">
                    Trending
                  </TabsTrigger>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="networking">Networking</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                  <TabsTrigger value="parties">Parties</TabsTrigger>
                  <TabsTrigger value="art">Art</TabsTrigger>
                </TabsList>
              </ScrollArea>
              <div className="ml-auto mr-4 hidden md:block">
                <Button>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  Create event
                </Button>
              </div>
            </div>
            <TabsContent value="trending" className="border-none p-0 outline-none">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">Planned for You</h2>
                  <p className="text-sm text-muted-foreground">Your personalized picks.</p>
                </div>
              </div>
              <Separator className="my-4" />
              <ScrollArea>
                <div className="relative max-w-full">
                  <div className="flex space-x-4 pb-4">
                    {listenNowAlbums.map((album) => (
                      <AlbumArtwork
                        key={album.name}
                        album={album}
                        className="w-[250px]"
                        aspectRatio="portrait"
                        width={250}
                        height={330}
                      />
                    ))}
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              <div className="mt-6 flex justify-between space-y-1">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Upcoming</h2>
                  <p className="text-sm text-muted-foreground">All upcoming events.</p>
                </div>
                <div className="ml-auto mr-4">
                  <Button variant="link">See all</Button>
                </div>
              </div>
              <Separator className="my-4" />
              <ScrollArea>
                <div className="grid-auto-flow-column grid w-full grid-cols-1 gap-4 overflow-auto sm:grid-cols-2 md:grid-cols-4">
                  {madeForYouAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[200px]"
                      aspectRatio="square"
                      width={200}
                      height={200}
                    />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="music" className="h-full flex-col border-none p-0 data-[state=active]:flex">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
                  <p className="text-sm text-muted-foreground">Your favorite podcasts. Updated daily.</p>
                </div>
              </div>
              <Separator className="my-4" />
              <PodcastEmptyPlaceholder />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
