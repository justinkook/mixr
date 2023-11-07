"use client";

import React, { useState } from "react";

type TabSliderProps = {
  tabs: string[];
};

export default function TabSlider(props: TabSliderProps) {
  const [activeTab, setActiveTab] = useState(props.tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="items-start self-stretch flex gap-5 mt-6 px-5 max-md:justify-center">
      {props.tabs.map((tab) => (
        <button
          key={tab}
          className={`text-xs font-bold leading-5 self-stretch whitespace-nowrap justify-center items-center ${
            activeTab === tab
              ? "bg-indigo-500 text-white"
              : "bg-zinc-100 text-gray-900"
          } w-[${tab.length * 10}px] max-w-full px-4 py-3 rounded-xl`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
