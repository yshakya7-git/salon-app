import React from "react";

const HeartIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <div className="absolute top-3 right-3 bg-black/30 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-4 h-4"
      >
        <path d="M12 21s-6.5-4.35-9.33-8.02C.7 10.2 1.7 6.5 5 5c2.1-1 4.2-.2 5.3 1.1C11.4 4.8 13.5 4 15.6 5c3.3 1.5 4.3 5.2 2.33 7.98C18.5 16.65 12 21 12 21z" />
      </svg>
    </div>
  );
};

export default HeartIcon;
