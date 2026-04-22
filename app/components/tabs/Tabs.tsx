"use client";

import { useState, ReactNode } from "react";

export type TabItem = {
  id: number | string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultActiveId?: number | string;
};

export const Tabs = ({ tabs, defaultActiveId }: TabsProps) => {
  const [active, setActive] = useState(defaultActiveId ?? tabs[0]?.id);

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide touch-pan-x pb-2">
        {tabs.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`
                shrink-0 min-w-fit whitespace-nowrap
                px-6 py-3 rounded-full border text-sm font-bold transition-all
                ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-md "
                    : "bg-white text-gray-600 border-gray-300 hover:border-primary"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div>{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
};
