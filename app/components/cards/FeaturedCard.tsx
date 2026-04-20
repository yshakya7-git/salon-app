import BellIcon from "@/app/icons/BellIcon";

interface IconProps {
  icons: React.ReactNode;
  title: string;
}
const FeaturedCard = ({ icons, title }: IconProps) => {
  return (
    <div className="rounded-2xl flex flex-col justify-center items-center p-4 border border-secondary bg-white">
      {icons}
      <span className="font-bold text-[10px] text-center">{title}</span>
    </div>
  );
};

export default FeaturedCard;
