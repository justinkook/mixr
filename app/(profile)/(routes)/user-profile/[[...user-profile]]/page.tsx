import { UserProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mb-20">
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={{
          elements: {
            navbarMobileMenuRow: "hidden",
          },
        }}
      />
    </div>
  );
}
