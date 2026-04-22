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
      <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
        {storyList.map((item) => (
          <div key={item.id} className="flex flex-col items-center min-w-22.5">
            <div className="relative w-18 h-18 rounded-full overflow-hidden border-3 border-pink-500">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm mt-2 text-gray-700 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
