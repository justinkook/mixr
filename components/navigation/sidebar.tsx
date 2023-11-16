import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookUser,
  Cpu,
  FileText,
  Headphones,
  Heart,
  PartyPopper,
  Radio,
  Settings,
  Shield,
  ShieldCheck,
  Ticket,
  Users,
  Zap,
} from "lucide-react";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Zap className="mr-2 h-4 w-4" />
              Trending
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Radio className="mr-2 h-4 w-4" />
              Live
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Headphones className="mr-2 h-4 w-4" />
              Music
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Cpu className="mr-2 h-4 w-4" />
              Tech
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Networking
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <PartyPopper className="mr-2 h-4 w-4" />
              Parties
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            You
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Heart className="mr-2 h-4 w-4" />
              Saved
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Ticket className="mr-2 h-4 w-4" />
              Tickets
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookUser className="mr-2 h-4 w-4" />
              Your Events
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Privacy Policy
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Terms & Conditions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
