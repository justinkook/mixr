"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { MainNav } from "./main-nav";
import { Search } from "../manage/overview/search";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-6">
        <Menu />
        <OrganizationSwitcher
          organizationProfileMode="navigation"
          organizationProfileUrl="/organization-profile"
          appearance={{
            elements: {
              rootBox: "mt-2",
            },
          }}
        />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <SignedIn>
            <UserButton userProfileMode="navigation" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
