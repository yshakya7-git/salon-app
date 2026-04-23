import Image from "next/image";

export const storyList = [
  {
    id: 1,
    name: "Hair Care",
    image: "/banner.png",
  },
  {
    id: 2,
    name: "Facial",
    image: "/banner.png",
  },
  {
    id: 3,
    name: "Makeup",
    image: "/banner.png",
  },
  {
    id: 4,
    name: "Nails",
    image: "/banner.png",
  },
  {
    id: 5,
    name: "Spa",
    image: "/banner.png",
  },
];

export const StoryHighlights = () => {
  return (
    <section className="">
      <div className="max-w-7xl flex gap-2 lg:gap-6 overflow-x-auto scrollbar-hide">
        {storyList.map((item) => (
          <div key={item.id} className="flex flex-col items-center ">
            <div className="relative w-18 h-18 lg:w-24 lg:h-24 rounded-full overflow-hidden border-3 border-pink-500">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm lg:text-base mt-2 text-gray-700 text-center font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
