import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Counter } from '@/components/ui/counter'

export function RegistrationCard() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex justify-between text-base">
          <span>General Admission</span>$54
        </CardTitle>
        <CardDescription>GA Tickets for entrance A</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Counter />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  )
}