import Logo from "@/app/icons/Logo";

import BellIcon from "@/app/icons/BellIcon";
import UserIcon from "@/app/icons/UserIcon";

export const AppHeader = () => {
  return (
    <section className="h-16 px-4 py-3 flex justify-between items-center bg-white">
      <div className="flex gap-4 items-center">
        <Logo width={25} height={25} />
        <h1 className="font-bold text-lg">Luxe Beauty</h1>
      </div>
      <div className="flex items-center gap-4">
        <BellIcon width={40} height={40} />
        <UserIcon width={40} height={40} />
      </div>
    </section>
  );
};
