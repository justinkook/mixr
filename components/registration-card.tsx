import { SignedOut } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function RegistrationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Ticket Type</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup
          id="ticket-type"
          defaultValue="card"
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Card className="flex w-full flex-1 flex-col rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
              <CardTitle className="text-sm font-medium">
                General Admission
              </CardTitle>
              <CardDescription className="line-clamp-2">
                Ticket for GA access
              </CardDescription>
              <CardFooter className="w-full items-end justify-between p-0">
                <div className="flex items-center space-x-4">
                  <p className="text-sm font-medium">FREE</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quantity" className="sr-only">
                    Quantity
                  </Label>
                  <Select>
                    <SelectTrigger id="quantity" className="mr-4">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <RadioGroupItem value="vip" id="card" className="peer sr-only" />
            <Card className="flex w-full flex-1 flex-col rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
              <CardTitle className="text-sm font-medium">VIP</CardTitle>
              <CardDescription className="line-clamp-1">
                Elevate your event experience with premium perks like VIP access
                and recognition in event materials.
              </CardDescription>
              <CardFooter className="w-full items-end justify-between p-0">
                <div className="flex items-center space-x-4">
                  <p className="text-sm font-medium">FREE</p>
                  <p className="text-sm text-muted-foreground">
                    Requires Approval
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quantity" className="sr-only">
                    Quantity
                  </Label>
                  <Select>
                    <SelectTrigger id="quantity" className="mr-4">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardFooter>
            </Card>
          </div>
        </RadioGroup>
        <SignedOut>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="First Last" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Email Address</Label>
            <Input id="email" type="email" placeholder="" />
          </div>
        </SignedOut>
      </CardContent>
      <CardFooter>
        <Button type="submit" size="lg" className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
