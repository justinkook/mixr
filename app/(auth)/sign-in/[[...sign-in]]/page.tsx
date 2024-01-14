'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SignIn } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { AuthForm } from '@/components/forms/auth/auth-form'

export default function SignInPage() {
  return (
    <div className="h-screen container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/sign-up"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Sign up
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-violet-900"></div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            className="h-4 w-auto"
            src="/images/logo-white.svg"
            alt="Revent Logo"
            height={32}
            width={128}
          />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform has saved me countless hours of work and
              helped me coordinate with my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to login
            </p>
          </div>
          {/* <AuthForm /> */}
          <SignIn />
        </div>
      </div>
    </div>
  )
}
