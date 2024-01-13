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

type RegistrationCardProps = {
  title?: string
  price?: string
  description?: string
  buttonLabel?: string
}

export const RegistrationCard: React.FC<RegistrationCardProps> = ({
  title = 'General Admission',
  price = '$54',
  description = 'GA Tickets for entrance A',
  buttonLabel = 'Add to cart',
}) => {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex justify-between text-base">
          <span>{title}</span>
          {price}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Counter />
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonLabel}</Button>
      </CardFooter>
    </Card>
  )
}
