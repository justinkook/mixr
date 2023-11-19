import { cn } from "@/lib/utils";
import React from "react";

type DateCardProps = {
  day: string;
  month: string;
  aspectRatio?: "portrait" | "square";
};

const DateCard: React.FC<DateCardProps> = ({ day, month, aspectRatio }) => {
  return (
    <div
      className={cn(
        "justify-center items-center bg-secondary relative flex max-w-[62px] max-h-[62px] flex-col px-6 py-2.5 rounded-xl self-end max-md:px-5",
        aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
      )}
    >
      <h3 className="text-center text-sm font-bold leading-5 self-center whitespace-nowrap">
        {day}
      </h3>
      <div className="text-muted-foreground text-center text-xs leading-4 self-center whitespace-nowrap">
        {month}
      </div>
    </div>
  );
};

export default DateCard;
