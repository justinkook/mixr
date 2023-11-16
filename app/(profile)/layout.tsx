const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-3 justify-start overflow-auto bg-background">
      {children}
    </div>
  );
};

export default ProfileLayout;
