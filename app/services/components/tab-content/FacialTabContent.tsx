import { ServiceCard, services } from "@/app/components/cards/CartCard";

const hairStyleServices = [
  {
    id: 1,
    title: "Signature Hair Coloring",
    duration: "90 mins",
    role: "Professional Stylist",
    price: "$120+",
    image: "/banner.png",
    btnTitle: "Book Now",
  },
  {
    id: 2,
    title: "24K Gold Luxury Facial",
    duration: "60 mins",
    role: "Skin Specialist",
    price: "$85",
    image: "/Cart2.png",
    btnTitle: "Book Now",
  },
  {
    id: 3,
    title: "Glam Party Makeover",
    duration: "45 mins",
    role: "Senior Artist",
    price: "$65",
    image: "/Cart1.png",
    btnTitle: "Book Now",
  },
];
const FacialStyleTabContent = () => {
  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-semibold">Facial Treatments</h1>
        <span className="text-primary text-sm font-semibold">3 SERVICES</span>
      </div>

      <div className="space-y-5">
        {hairStyleServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default FacialStyleTabContent;
