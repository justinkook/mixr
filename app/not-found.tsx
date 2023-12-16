import Image from 'next/image'
import Link from 'next/link'
import {
  BookMarkedIcon,
  BookOpenIcon,
  ChevronRightIcon,
  LayersIcon,
  RssIcon,
} from 'lucide-react'

const links = [
  {
    name: 'Documentation',
    href: '#',
    description: 'Learn how to integrate our tools with your app.',
    icon: BookOpenIcon,
  },
  {
    name: 'API Reference',
    href: '#',
    description: 'A complete API reference for our libraries.',
    icon: LayersIcon,
  },
  {
    name: 'Guides',
    href: '#',
    description: 'Installation guides that cover popular setups.',
    icon: BookMarkedIcon,
  },
  {
    name: 'Blog',
    href: '#',
    description: 'Read our latest news and articles.',
    icon: RssIcon,
  },
]

export default function NotFoundPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <Image
        className="mx-auto h-10 w-auto sm:h-12"
        src="/images/card.png"
        alt="Revent Alt Logo"
        width={12}
        height={10}
      />
      <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        <p className="text-base font-semibold leading-8 text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          This page does not exist
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">Popular pages</h2>
        <ul
          role="list"
          className="-mt-6 divide-y divide-muted border-b border-muted"
        >
          {links.map((link, linkIdx) => (
            <li key={linkIdx} className="relative flex gap-x-6 py-6">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-muted">
                <link.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  <Link href={link.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {link.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {link.description}
                </p>
              </div>
              <div className="flex-none self-center">
                <ChevronRightIcon
                  className="h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-primary"
          >
            <span aria-hidden="true">&larr;</span>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
