import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
    GOOGLE_PLACES_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
})
