import { Metadata } from "next";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AlbumArtwork } from "@/components/music/album-artwork";
import { PodcastEmptyPlaceholder } from "@/components/music/podcast-empty-placeholder";
import { listenNowAlbums, madeForYouAlbums } from "@/components/music/albums";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="upcoming" className="relative">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
                <TabsTrigger value="free">Free</TabsTrigger>
              </TabsList>
              <div className="ml-auto mr-4">
                <Button>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  Create event
                </Button>
              </div>
            </div>
            <TabsContent
              value="upcoming"
              className="border-none p-0 outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Planned for You
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Your personalized picks.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="relative">
                <ScrollArea>
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
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Upcoming
                </h2>
                <p className="text-sm text-muted-foreground">
                  All upcoming events.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="relative">
                <ScrollArea>
                  <div className="flex space-x-4 pb-4">
                    {madeForYouAlbums.map((album) => (
                      <AlbumArtwork
                        key={album.name}
                        album={album}
                        className="w-[150px]"
                        aspectRatio="square"
                        width={150}
                        height={150}
                      />
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="today"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    New Episodes
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Your favorite podcasts. Updated daily.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <PodcastEmptyPlaceholder />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
