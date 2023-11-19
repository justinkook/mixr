const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-full w-full flex-col justify-start gap-3 overflow-auto bg-background">{children}</div>
}

export default ProfileLayout
