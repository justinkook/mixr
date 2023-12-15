import { Clock6Icon, CopyPlusIcon, MoreHorizontal, PenIcon, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function AgendaCard() {
  return (
    <Card className="rounded-l-none border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-sm font-semibold">Workshop: Zero Knowledge Proofs 101</span>
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
                    Edit Agenda
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyPlusIcon className="mr-2 h-4 w-4" />
                    Duplicate Agenda
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
      </CardHeader>
      <CardFooter className="flex space-x-4 text-sm text-muted-foreground">
        <Clock6Icon className="h-3 w-3" />
        <div className="flex items-center">10:00 AM - 2:00 PM</div>
      </CardFooter>
    </Card>
  )
}
