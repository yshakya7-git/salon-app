import Image from "next/image";
import TitleBar from "../section-content/TitleBar";

export const services = [
  {
    id: 1,
    title: "Signature Hair Coloring",
    duration: "90 mins",
    role: "Professional Stylist",
    price: "$120+",
    image: "/banner.png",
  },
  {
    id: 2,
    title: "24K Gold Luxury Facial",
    duration: "60 mins",
    role: "Skin Specialist",
    price: "$85",
    image: "/Cart2.png",
  },
  {
    id: 3,
    title: "Glam Party Makeover",
    duration: "45 mins",
    role: "Senior Artist",
    price: "$65",
    image: "/gallery3.jpg",
  },
];

export const CartCard = () => {
  return (
    <div className="space-y-4 lg:px-4">
      <TitleBar title="Trending Now" />

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export const ServiceCard = ({
  title,
  duration,
  role,
  price,
  image,
  btnTitle = "Add to Cart",
}: {
  title: string;
  duration: string;
  role: string;
  price: string;
  image: string;
  btnTitle?: string;
}) => {
  return (
    <div className="flex flex-row lg:flex-col items-center  gap-2 bg-white rounded-3xl p-2 shadow-sm border border-gray-200 w-full">
      <div className="w-26 h-22 lg:w-full lg:h-56 relative rounded-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">
          {duration} • {role}
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-pink-500 font-semibold text-sm">{price}</p>

          <button className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-pink-700 transition text-xs">
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};
