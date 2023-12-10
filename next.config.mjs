import { env } from './env.mjs'
import withPWA from 'next-pwa'

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: env.NODE_ENV === 'development',
}

/** @type {import('next').NextConfig} */
const nextConfig = withPWA(pwaConfig)({
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mucdgwedfzbqjqodwdrz.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
    ],
  },
})

export default nextConfig
