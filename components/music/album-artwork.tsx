import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { Album } from './albums'
import DateCard from '../date-card'
import { Heart } from 'lucide-react'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: 'portrait' | 'square'
  width: number
  height: number
}

export function AlbumArtwork({
  album,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <Link href={`/event/${album.name}`}>
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={album.cover}
            alt={album.name}
            width={width}
            height={height}
            className={cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
            )}
          />
          {album.date?.day && album.date?.month && (
            <>
              <div className="absolute left-2 top-2">
                <DateCard day={album.date?.day} month={album.date?.month} aspectRatio="square" />
              </div>
              <Heart className="absolute right-4 top-4 fill-background stroke-primary hover:fill-primary" />
            </>
          )}
        </div>
      </Link>
      <div className="space-y-1 text-sm">
        <p className="text-xs text-muted-foreground">{album.organizer}</p>
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.location}</p>
        <p className="text-xs text-secondary-foreground">{album.time}</p>
      </div>
    </div>
  )
}
