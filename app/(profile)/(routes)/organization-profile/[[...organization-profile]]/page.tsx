import { OrganizationProfile } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="mb-12 flex justify-center">
      <OrganizationProfile path="/organization-profile" routing="path" />
    </div>
  )
}
