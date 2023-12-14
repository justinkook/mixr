import { MainNavItem, SidebarNavItem } from '@/types/nav'
import {
  BarChartBigIcon,
  GithubIcon,
  HeartIcon,
  Home,
  InstagramIcon,
  LayoutGridIcon,
  SettingsIcon,
  TicketIcon,
  TwitterIcon,
  UserPlusIcon,
  UsersIcon,
  ZapIcon,
} from 'lucide-react'

export const userNav: SidebarNavItem[] = [
  {
    title: 'Saved',
    href: '/saved',
    icon: HeartIcon,
    items: [
      {
        title: 'Upcoming',
        href: '/saved',
        items: [],
      },
      {
        title: 'Past',
        href: '/saved/past',
        items: [],
      },
    ],
  },
  {
    title: 'Following',
    href: '/following',
    icon: UserPlusIcon,
    items: [],
  },
  {
    title: 'Tickets',
    href: '/tickets',
    icon: TicketIcon,
    items: [],
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    items: [],
  },
]

export const organizerNav: SidebarNavItem[] = [
  {
    title: 'Events',
    href: '/organize/events',
    icon: ZapIcon,
    items: [],
  },
  {
    title: 'Contacts',
    href: '/organize/contacts',
    icon: UsersIcon,
    items: [],
  },
  {
    title: 'Insights',
    href: '/organize/insights',
    icon: BarChartBigIcon,
    items: [],
  },
  {
    title: 'Settings',
    href: '/organize/settings',
    icon: SettingsIcon,
    items: [],
  },
]

export const mainNav: MainNavItem[] = [
  {
    title: 'Docs',
    href: 'https://github.com/gen3-tickets',
    external: true,
  },
  {
    title: 'Blog',
    href: 'https://medium.com/@contact_26315',
    external: true,
  },
]

export const sidebarNav: SidebarNavItem[] = [
  {
    title: 'Discover',
    href: '',
    items: [
      {
        title: 'Home',
        href: '/',
        icon: Home,
        items: [],
      },
      {
        title: 'Browse',
        href: '/browse',
        icon: LayoutGridIcon,
        items: [],
      },
    ],
  },
  {
    title: 'You',
    href: '',
    items: userNav,
  },
]

export const organizerSidebarNav: SidebarNavItem[] = [
  {
    title: 'Discover',
    href: '',
    items: [
      {
        title: 'Home',
        href: '/',
        icon: Home,
        items: [],
      },
      {
        title: 'Browse',
        href: '/browse',
        icon: LayoutGridIcon,
        items: [],
      },
    ],
  },
  {
    title: 'You',
    href: '',
    items: organizerNav,
  },
]

export const organizerTabs: MainNavItem[] = [
  {
    title: 'Overview',
    href: '/organize',
  },
  {
    title: 'Events',
    href: '/organize/events',
  },
  {
    title: 'Contacts',
    href: '/organize/contacts',
  },
  {
    title: 'Insights',
    href: '/organize/insights',
  },
  {
    title: 'Settings',
    href: '/organize/settings',
  },
]

export const socials: MainNavItem[] = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/reventapp',
    external: true,
    icon: TwitterIcon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/gen3-tickets',
    icon: GithubIcon,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/reventapp',
    icon: InstagramIcon,
  },
]
