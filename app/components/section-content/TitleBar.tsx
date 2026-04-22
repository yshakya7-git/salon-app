import Link from "next/link";

interface TitleBarProps {
  title: string;
  link?: string;
  linkTitle?: string;
}

const TitleBar = ({ title, link, linkTitle }: TitleBarProps) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-md font-bold">{title}</h1>
      <Link href={link || "/"} className="text-primary font-semibold text-sm">
        {linkTitle}
      </Link>
    </div>
  );
};

export default TitleBar;
