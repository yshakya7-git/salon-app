"use client";

import HairStyleTabContent from "./components/tab-content/HairStyleTabContent";
import FacialStyleTabContent from "./components/tab-content/FacialTabContent";
import { Tabs } from "../components/tabs/Tabs";

const tabs = [
  { id: 1, label: "Hair Styling", content: <HairStyleTabContent /> },
  { id: 2, label: "Facial Treatments", content: <FacialStyleTabContent /> },
  { id: 3, label: "Spa", content: "🧖 Spa Content" },
  { id: 4, label: "Manicure", content: "💅 Mani Content" },
  { id: 5, label: "Pedicure", content: "💅 Pedicure Content" },
];

const Service = () => {
  return <Tabs tabs={tabs} defaultActiveId={1} />;
};

export default Service;
