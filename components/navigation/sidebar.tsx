import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  BookUser,
  Cpu,
  FileText,
  Headphones,
  Heart,
  PartyPopper,
  Radio,
  Settings,
  ShieldCheck,
  Ticket,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { SignedIn } from "@clerk/nextjs";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside
      className={cn("self-start sticky top-0 col-span-1 border-r", className)}
    >
      <div className="space-y-4 py-4">
        <ScrollArea>
          <div className="px-3 py-2 ">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button variant="secondary" className="w-full justify-start">
                <Zap className="mr-2 h-4 w-4" />
                Upcoming
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Today
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Headphones className="mr-2 h-4 w-4" />
                Tomorrow
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Cpu className="mr-2 h-4 w-4" />
                Free
              </Button>
            </div>
          </div>
          <SignedIn>
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
                  <Wallet className="mr-2 h-4 w-4" />
                  Billing
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </SignedIn>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Legal
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Privacy Policy
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Terms & Conditions
              </Button>
              <p className="text-sm text-muted-foreground px-4 py-2">
                © 2023 Revent. All rights reserved.
              </p>
            </div>
          </div>

          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </aside>
  );
}
