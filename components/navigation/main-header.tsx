import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Bell, Menu, Search } from "lucide-react";

type HeaderProps = {
  hidePersonal?: boolean;
};

export default function Header({ hidePersonal }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-background">
      <div className="flex items-center justify-center gap-6">
        <Menu />
        <OrganizationSwitcher
          hidePersonal={hidePersonal}
          organizationProfileMode="navigation"
          organizationProfileUrl="/organization-profile"
          appearance={{
            elements: {
              rootBox: "mt-2",
            },
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-6">
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
