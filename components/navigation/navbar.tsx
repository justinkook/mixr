"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { MenuIcon, SearchIcon } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { Search } from "../manage/overview/search";

type NavbarProps = {
  setSidebarOpen: (open: boolean) => void;
};

export function Navbar({ setSidebarOpen }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <OrganizationSwitcher
        organizationProfileMode="modal"
        appearance={{
          elements: {
            rootBox: "mt-2",
          },
        }}
      />
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-end">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <form
            className="hidden relative sm:flex flex-1"
            action="#"
            method="GET"
          >
            <Search />
          </form>
          <SearchIcon className="flex sm:hidden" />
          {/* Profile dropdown */}
          <SignedIn>
            <UserButton userProfileMode="modal" />
          </SignedIn>
          <SignedOut>
            <Button variant="outline">
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
