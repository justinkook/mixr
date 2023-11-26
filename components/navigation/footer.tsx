import * as React from 'react'
import Link from 'next/link'

import { GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

const social = [
  {
    name: 'Twitter',
    href: '#',
    icon: TwitterIcon,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: GithubIcon,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: InstagramIcon,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-10 lg:pl-72">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
        <p className="text-sm leading-7 text-muted-foreground">&copy; 2023 Revent. All rights reserved.</p>
        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-muted" />
        <Link href="/terms-conditions" className="text-muted-foreground hover:text-muted-foreground">
          <span className="sr-only">Terms & Conditions</span>
          <p className="text-sm leading-7 text-muted-foreground">Terms</p>
        </Link>
        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-muted" />
        <Link href="/privacy-policy" className="text-muted-foreground hover:text-muted-foreground">
          <span className="sr-only">Privacy Policy</span>
          <p className="text-sm leading-7 text-muted-foreground">Privacy</p>
        </Link>
        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-muted" />
        <div className="flex gap-x-4">
          {social.map((item, itemIdx) => (
            <Link key={itemIdx} href={item.href} className="text-muted-foreground hover:text-muted-foreground">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}