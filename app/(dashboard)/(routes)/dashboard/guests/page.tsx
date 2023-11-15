import { Metadata } from "next";
import { z } from "zod";

import { columns } from "@/components/dashboard/guests/columns";
import { DataTable } from "@/components/dashboard/guests/data-table";

import dataJSON from "@/components/dashboard/guests/tasks.json";
import { taskSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// TODO: Replace Simulate a database read for tasks.
async function getTasks() {
  return z.array(taskSchema).parse(dataJSON);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Guests</h2>
            <p className="text-muted-foreground">
              Manage your guest list, approvals, invitations
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
