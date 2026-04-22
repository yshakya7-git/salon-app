import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex items-start gap-6 bg-background  p-4 rounded-3xl">
      <span>{icon}</span>

      <div>
        <h3 className="text-lg font-semibold text-font">{title}</h3>
        <p className="text-[#4B5563] mt-2 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};
