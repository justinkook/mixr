import { CopyPlusIcon, MoreHorizontal, PenIcon, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CreateTicketModal } from './create-ticket-modal'

export function CreateTicketCard() {
  return (
    <Card>
      <CardContent className="grid gap-6 pt-6">
        <RadioGroup id="ticket-type" defaultValue="card" className="grid grid-cols-1 gap-4">
          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Card className="flex w-full flex-1 flex-col rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
              <CardTitle className="flex flex-row items-center justify-between">
                <h2 className="text-sm font-medium">General Admission</h2>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <PenIcon className="mr-2 h-4 w-4" />
                          Edit Ticket
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CopyPlusIcon className="mr-2 h-4 w-4" />
                          Duplicate Ticket
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardTitle>
              <CardDescription className="line-clamp-2">Ticket for GA access</CardDescription>
              <CardFooter className="mt-4 w-full items-end justify-between p-0">
                <div className="flex items-center space-x-4">
                  <p className="text-sm font-medium">FREE</p>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <RadioGroupItem value="vip" id="card" className="peer sr-only" />
            <Card className="flex w-full flex-1 flex-col rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
              <CardTitle className="flex flex-row items-center justify-between">
                <h2 className="text-sm font-medium">VIP</h2>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <PenIcon className="mr-2 h-4 w-4" />
                          Edit Ticket
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CopyPlusIcon className="mr-2 h-4 w-4" />
                          Duplicate Ticket
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                Elevate your event experience with premium perks like VIP access and recognition in event materials.
              </CardDescription>
              <CardFooter className="mt-4 w-full items-end justify-between p-0">
                <div className="flex items-center space-x-4">
                  <p className="text-sm font-medium">FREE</p>
                  <p className="text-sm text-muted-foreground">Requires Approval</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <CreateTicketModal />
      </CardFooter>
    </Card>
  )
}
