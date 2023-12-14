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
    items: [
      {
        title: 'Account',
        href: '/settings',
        items: [],
      },
      {
        title: 'Appearance',
        href: '/settings/appearance',
        items: [],
      },
      {
        title: 'Notifications',
        href: '/settings/notifications',
        items: [],
      },
    ],
  },
]

export const dashboardNav: SidebarNavItem[] = [
  {
    title: 'Events',
    href: '/dashboard/events',
    icon: ZapIcon,
    items: [],
  },
  {
    title: 'Contacts',
    href: '/dashboard/contacts',
    icon: UsersIcon,
    items: [],
  },
  {
    title: 'Insights',
    href: '/dashboard/insights',
    icon: BarChartBigIcon,
    items: [],
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: SettingsIcon,
    items: [
      {
        title: 'Profile',
        href: '/dashboard/settings',
        items: [],
      },
      {
        title: 'Account',
        href: '/dashboard/settings/account',
        items: [],
      },
      {
        title: 'Members',
        href: '/dashboard/settings/members',
        items: [],
      },
      {
        title: 'Appearance',
        href: '/dashboard/settings/appearance',
        items: [],
      },
      {
        title: 'Notifications',
        href: '/dashboard/settings/notifications',
        items: [],
      },
    ],
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

export const dashboardSidebarNav: SidebarNavItem[] = [
  {
    title: 'Discover',
    href: '',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Home,
        items: [],
      },
      {
        title: 'Marketplace',
        href: '/marketplace',
        icon: LayoutGridIcon,
        items: [],
      },
    ],
  },
  {
    title: 'You',
    href: '',
    items: dashboardNav,
  },
]

export const dashboardTabs: MainNavItem[] = [
  {
    title: 'Overview',
    href: '/dashboard',
  },
  {
    title: 'Events',
    href: '/dashboard/events',
  },
  {
    title: 'Contacts',
    href: '/dashboard/contacts',
  },
  {
    title: 'Insights',
    href: '/dashboard/insights',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
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
