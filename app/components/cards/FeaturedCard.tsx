import BellIcon from "@/app/icons/BellIcon";
import { desc } from "framer-motion/client";

interface IconProps {
  icons: React.ReactNode;
  title: string;
  description?: string;
}
const FeaturedCard = ({ icons, title, description }: IconProps) => {
  return (
    <div className="rounded-2xl flex flex-col justify-center items-center p-4 border border-secondary bg-white gap-2">
      {icons}
      <span className="font-bold text-[10px] lg:text-base text-center dark:text-black/70">{title}</span>
      <p className="hidden lg:block text-center text-sm text-gray-600 dark:text-black">
        {description}
      </p>
    </div>
  );
};

export default FeaturedCard;
