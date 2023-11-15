import { OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex flex-row gap-4 justify-between items-center p-4">
        <Link href="/">
          <div className="text-gray-900 text-lg font-bold leading-7 self-center whitespace-nowrap my-auto">
            MIXR
          </div>
        </Link>
        <OrganizationSwitcher />
        <UserButton />
      </header>
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={{
          elements: {
            navbarMobileMenuRow: "hidden",
          },
        }}
      />
    </>
  );
}
