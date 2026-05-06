"use client";

import HairStyleTabContent from "./components/tab-content/HairStyleTabContent";
import FacialStyleTabContent from "./components/tab-content/FacialTabContent";
import { Tabs } from "../components/tabs/Tabs";
import { div } from "framer-motion/client";
import TitleBar from "../components/section-content/TitleBar";
import PageTitle from "../components/section-content/PageTitle";
import { Button } from "../components/button/Button";

const tabs = [
  { id: 1, label: "Hair Styling", content: <HairStyleTabContent /> },
  { id: 2, label: "Facial Treatments", content: <FacialStyleTabContent /> },
  { id: 3, label: "Spa", content: "🧖 Spa Content" },
  { id: 4, label: "Manicure", content: "💅 Mani Content" },
  { id: 5, label: "Pedicure", content: "💅 Pedicure Content" },
];

const Service = () => {
  return (
    <div className="p-6 flex flex-col md:flex-row justify-between  gap-6">
      <section className="w-full md:w-[70%] space-y-6">
        <PageTitle
          title="Our Services"
          content=" Indulge in our curated selection of premium beauty treatments. Each
          service is tailored to your unique style and needs."
        ></PageTitle>
        <Tabs tabs={tabs} defaultActiveId={1} />
      </section>
      <section className="flex-1 w-full md:w-[30%] bg-white p-4 space-y-4 rounded-xl">
        <TitleBar title="Booking Summary" />

        <div className="grid grid-cols-2 grid-rows-2 w-full border-b border-[#FFE9EA] p-2 items-center">
          <h4 className="text-base font-semibold">Balayage Artistry</h4>

          <span className="text-sm font-semibold text-primary justify-self-end">
            $180
          </span>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>🕒</span>
            <span>180 min</span>
          </div>

          <span className="text-[#BA1A1A] justify-self-end cursor-pointer text-sm">
            Remove
          </span>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 w-full border-b border-[#FFE9EA] p-2 items-center mt-6 gap-4">
          <h4 className="text-sm text-gray-600">SubTotal</h4>

          <span className="text-sm text-gray-600 justify-self-end">
            $180.00
          </span>

          <h4 className="text-sm text-gray-600">Service Fee</h4>

          <span className="text-gray-600 justify-self-end cursor-pointer text-sm">
            $5.00
          </span>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 w-full  p-2 items-center">
          <h4 className="text-lg font-semibold">Total</h4>

          <span className="text-lg font-semibold  justify-self-end">
            $180.00
          </span>
        </div>

        <Button size="lg" fullWidth>
          Proceed to Book
        </Button>

        <p className="text-center text-xs text-[#94A3B8]">
          NO COMMITMENT UNTIL CONFIRMATION
        </p>
      </section>
    </div>
  );
};

export default Service;
