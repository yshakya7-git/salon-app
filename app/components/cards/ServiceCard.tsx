import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 bg-background dark:bg-secondary p-4 rounded-3xl">
      <span >{icon}</span>

      <div>
        <h3 className="text-lg font-semibold text-font text-start lg:text-center">{title}</h3>
        <p className="text-[#4B5563] mt-2 leading-relaxed text-sm text-start lg:text-center">{description}</p>
      </div>
    </div>
  );
};
