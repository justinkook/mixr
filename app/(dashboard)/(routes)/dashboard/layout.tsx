import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "@/components/dashboard/overview/date-range-picker";
import { Navbar } from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "NewY Art Festival: 2022 Dana Point 48-50",
  description: "Example dashboard app built using the components.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-col md:flex">
        <Navbar />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              NewY Art Festival: 2022 Dana Point 48-50
            </h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
