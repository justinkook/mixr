'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CopyIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ShareIcon,
  TwitterIcon,
} from 'lucide-react'

import { absoluteUrl, cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'
import { Copy } from '@/components/ui/copy'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { toast } from './ui/use-toast'

type ShareModalProps = {
  className?: string
  props?: ButtonProps
}

export function ShareModal({ className, props }: ShareModalProps) {
  const pathname = usePathname()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className={cn(className)} {...props}>
          <ShareIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Share link via social media or copy link.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-x-4">
          <Link href="https://twitter.com">
            <Button variant="link">
              <span className="sr-only">Twitter Icon</span>
              <TwitterIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="https://facebook.com">
            <Button variant="link">
              <span className="sr-only">Facebook Icon</span>
              <FacebookIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/">
            <Button variant="link">
              <span className="sr-only">Linkedin Icon</span>
              <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="https://instagram.com">
            <Button variant="link">
              <span className="sr-only">Instagram Icon</span>
              <InstagramIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={absoluteUrl(pathname)} readOnly />
          </div>
          <Copy content={absoluteUrl(pathname)} className="ml-2 my-auto" />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
