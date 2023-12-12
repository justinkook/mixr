export default function FollowingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="col-span-3 lg:col-span-5">
        <div className="h-full px-4 lg:px-8">
          <div className="flex-1 space-y-4 p-8 pt-0">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Following</h2>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
