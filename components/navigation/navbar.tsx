"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { Bell, Menu, SearchIcon } from "lucide-react";
import { MainNav } from "./main-nav";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "../ui/button";
import useCommandModal from "@/hooks/useCommandModal";
import useNotifications from "@/hooks/useNotifications";

export function Navbar() {
  const { isOpen, onOpenChange } = useCommandModal();
  const { isOpen: showNotifications, onOpenChange: setShowNotifications } =
    useNotifications();

  return (
    <nav className="border-b sticky top-0 z-10 bg-background">
      <div className="flex h-16 items-center px-4 gap-6">
        <Button variant="ghost" className="lg:hidden">
          <Menu />
        </Button>
        <OrganizationSwitcher
          organizationProfileMode="modal"
          appearance={{
            elements: {
              rootBox: "mt-2",
            },
          }}
        />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost">
            <SearchIcon onClick={() => onOpenChange(!isOpen)} />
          </Button>
          <Button variant="ghost">
            <Bell onClick={() => setShowNotifications(!showNotifications)} />
          </Button>
          <SignedIn>
            <UserButton userProfileMode="modal" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
