import Image from "next/image";
import { cn } from "@/lib/utils";

import { Album } from "./albums";
import DateCard from "../date-card";
import { Heart } from "lucide-react";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width: number;
  height: number;
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md relative">
        <Image
          src={album.cover}
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
        {album.date?.day && album.date?.month && (
          <>
            <div className="absolute top-2 left-2">
              <DateCard
                day={album.date?.day}
                month={album.date?.month}
                aspectRatio="square"
              />
            </div>
            <Heart className="absolute top-4 right-4 stroke-primary fill-background hover:fill-primary" />
          </>
        )}
      </div>
      <div className="space-y-1 text-sm">
        <p className="text-xs text-muted-foreground">{album.organizer}</p>
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.location}</p>
        <p className="text-xs text-secondary-foreground">{album.time}</p>
      </div>
    </div>
  );
}
