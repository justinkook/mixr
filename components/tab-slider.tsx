'use client'

import React, { useState } from 'react'

type TabSliderProps = {
  tabs: string[]
}

export default function TabSlider(props: TabSliderProps) {
  const [activeTab, setActiveTab] = useState(props.tabs[0])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="mt-6 flex items-start gap-5 self-stretch px-5 max-md:justify-center">
      {props.tabs.map((tab) => (
        <button
          key={tab}
          className={`items-center justify-center self-stretch whitespace-nowrap text-xs font-bold leading-5 ${
            activeTab === tab
              ? 'bg-indigo-500 text-white'
              : 'bg-zinc-100 text-gray-900'
          } w-[${tab.length * 10}px] max-w-full rounded-xl px-4 py-3`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
