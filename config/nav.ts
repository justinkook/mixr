import {
  BarChartBigIcon,
  GithubIcon,
  HeartIcon,
  Home,
  InstagramIcon,
  LayoutGridIcon,
  ScrollTextIcon,
  SettingsIcon,
  TicketIcon,
  TwitterIcon,
  UserPlusIcon,
  UsersIcon,
  ZapIcon,
} from 'lucide-react'

import { MainNavItem, SidebarNavItem } from '@/types/nav'

export const userNav: SidebarNavItem[] = [
  {
    title: 'Saved',
    href: '/saved',
    icon: HeartIcon,
    items: [],
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
    segment: 'settings',
    icon: SettingsIcon,
    items: [
      {
        title: 'Profile',
        href: '/settings',
        items: [],
      },
      {
        title: 'Account',
        href: '/settings/account',
        items: [],
      },
      {
        title: 'Security',
        href: '/settings/security',
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
    title: 'Sales',
    href: '/dashboard/sales',
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
    title: 'Billing',
    href: 'https://finix.payments-dashboard.com/',
    icon: ScrollTextIcon,
    items: [],
    external: true,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    segment: 'settings',
    icon: SettingsIcon,
    items: [
      {
        title: 'Profile',
        href: '/dashboard/settings',
        items: [],
      },
      {
        title: 'Members',
        href: '/dashboard/settings/members',
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
        href: '/search',
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
        title: 'Home',
        href: '/dashboard',
        icon: Home,
        items: [],
      },
      {
        title: 'Marketplace',
        href: '/search',
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
    title: 'Sales',
    href: '/dashboard/sales',
  },
  {
    title: 'Insights',
    href: '/dashboard/insights',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    segment: 'settings',
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
