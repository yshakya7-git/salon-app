"use client";

import { useState } from "react";
import HairStyleTabContent from "./components/tab-content/HairStyleTabContent";
import FacialStyleTabContent from "./components/tab-content/FacialTabContent";

const tabs = [
  { id: 1, label: "Hair Styling", content: <HairStyleTabContent /> },
  { id: 2, label: "Facial Treatments", content: <FacialStyleTabContent /> },
  { id: 3, label: "Spa", content: "🧖 Spa Content" },
  { id: 4, label: "Manicure", content: "💅 Mani Content" },
  { id: 5, label: "Pedicure", content: "💅 Pedicure Content" },
];

export default function Service() {
  const [active, setActive] = useState(1);

  return (
    <div className="p-4 space-y-4">
      
      {/* Tabs */}
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
                    ? "bg-primary text-white border-primary shadow-md scale-105"
                    : "bg-white text-gray-600 border-gray-300 hover:border-primary"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div>{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
}