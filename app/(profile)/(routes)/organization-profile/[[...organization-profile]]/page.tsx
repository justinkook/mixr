import { OrganizationProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mb-12">
      <OrganizationProfile path="/organization-profile" routing="path" />
    </div>
  );
}
