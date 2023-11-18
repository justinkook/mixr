"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { MenuIcon, SearchIcon } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { NavigationContent } from "./navigation-content";
import { CommandModal } from "../command-modal";
import { useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";

type NavbarProps = {
  setSidebarOpen: (open: boolean) => void;
};

export function Navbar({ setSidebarOpen }: NavbarProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <SignedOut>
        <Image
          src={"/images/card.png"}
          width={26}
          height={26}
          alt={"Revent logo"}
        />
        Revent
      </SignedOut>
      <button
        type="button"
        className="-m-2.5 p-2.5 lg:hidden"
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
      <NavigationContent />
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-end">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <form
            className="hidden relative sm:flex flex-1"
            action="#"
            method="GET"
          >
            <Input
              type="search"
              placeholder="Search..."
              className="sm:w-[100px] md:w-[300px]"
              onClick={() => setOpenModal(!openModal)}
            />
          </form>
          <SearchIcon
            className="flex sm:hidden"
            onClick={() => setOpenModal(!openModal)}
          />
          {/* Profile dropdown */}
          <SignedIn>
            <UserButton userProfileMode="modal" />
          </SignedIn>
          <SignedOut>
            <Button variant="outline">
              <SignInButton mode="modal" />
            </Button>
            <Button>
              <SignUpButton mode="modal" />
            </Button>
          </SignedOut>
        </div>
      </div>
      <CommandModal open={openModal} onOpenChange={setOpenModal} />
    </nav>
  );
}
