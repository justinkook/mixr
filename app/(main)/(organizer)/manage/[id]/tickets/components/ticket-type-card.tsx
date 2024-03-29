import { format } from 'date-fns'
import {
  CalendarDaysIcon,
  DollarSignIcon,
  LockIcon,
  MoreHorizontal,
  PenIcon,
  Trash,
  UserXIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface TicketTypeCardProps {
  title: string
  description: string
  price: number
  startDateTime: Date
  endDateTime: Date
  capacity?: number
  isApprovalRequired?: boolean
}

export function TicketTypeCard({
  title,
  description,
  price,
  capacity,
  isApprovalRequired,
  startDateTime,
  endDateTime,
}: TicketTypeCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-sm font-medium">{title}</span>
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
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="group text-destructive">
                      <Trash className="mr-2 h-4 w-4 group-hover:text-destructive" />
                      <span className="group-hover:text-destructive">
                        Delete
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
          <div className="flex items-center pt-2">
            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
            <span className="text-xs text-muted-foreground">
              {format(startDateTime, 'LLL dd, p')} -{' '}
              {format(endDateTime, 'LLL dd, p')}
            </span>
          </div>
        </CardHeader>
        <CardFooter className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <DollarSignIcon className="mr-1 h-3 w-3" />
            {price === 0 ? 'Free' : `${price}`}
          </div>
          {capacity && (
            <div className="flex items-center">
              <UserXIcon className="mr-1 h-3 w-3" />
              {capacity} Cap
            </div>
          )}
          {isApprovalRequired && (
            <div className="flex items-center">
              <LockIcon className="mr-1 h-3 w-3" />
              Requires approval
            </div>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
