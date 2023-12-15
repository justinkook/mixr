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

export function FAQModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Add FAQ
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add FAQ</DialogTitle>
          <DialogDescription>Frequently asked questions about your event.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Title</Label>
            <Input id="name" placeholder="What is the dress code?" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Cocktail attire with a bit of jazz" />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full">Add FAQ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
