import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Bell, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="self-center flex w-[329px] max-w-full items-start justify-between gap-5 mt-4 px-5 ">
      <div className="flex items-start gap-5 mt-2.5 self-start">
        <Menu />
        <div className="text-gray-900 text-lg font-bold leading-7 self-center whitespace-nowrap my-auto">
          MIXR
        </div>
      </div>
      <div className="flex items-center gap-3.5 self-center">
        <Search />
        <Bell />
        <SignedIn>
          <UserButton userProfileMode="navigation" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </div>
    </header>
  );
}
