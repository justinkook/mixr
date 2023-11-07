import React from "react";

interface DateCardProps {
  day: string;
  month: string;
}

const DateCard: React.FC<DateCardProps> = ({ day, month }) => {
  return (
    <div className="justify-center items-center bg-white relative flex w-[62px] max-w-full flex-col px-6 py-2.5 rounded-xl self-end max-md:px-5">
      <div className="text-gray-900 text-center text-sm font-bold leading-5 self-stretch whitespace-nowrap">
        {day}
      </div>
      <div className="text-gray-400 text-center text-xs leading-4 self-stretch whitespace-nowrap">
        {month}
      </div>
    </div>
  );
};

export default DateCard;
