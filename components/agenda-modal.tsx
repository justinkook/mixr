import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusCircleIcon } from 'lucide-react'
import { TimePicker } from './time-picker'

export function AgendaModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Add Agenda
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Agenda</DialogTitle>
          <DialogDescription>A description of a session happening at you event.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Title</Label>
            <Input id="name" placeholder="Workshop: Zk 101" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Learn about how Zk works" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="description">Start</Label>
              <TimePicker className="w-full" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">End</Label>
              <TimePicker className="w-full" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full">Add Agenda</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
