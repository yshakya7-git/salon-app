import StarIcon from "@/app/icons/StarIcon";
import Image from "next/image";
import banner from "../../../public/banner.png";

export const TestimonialCard = () => {
  return (
    <div className="bg-pink-50 border border-pink-200 rounded-3xl p-6 lg:m-6">
      <div className="flex justify-center items-center gap-1 text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            width={18}
            height={18}
            fill="currentColor"
            stroke="none"
          />
        ))}
      </div>

      <p className="text-gray-700 italic text-lg leading-relaxed mb-6 text-center">
        "The home service was absolutely impeccable. The stylist arrived on time
        with all premium equipment. Truly a five-star luxury experience!"
      </p>

      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-12 h-12  rounded-full overflow-hidden">
          <Image src={banner} alt="Sophia Martinez" className="object-cover" />
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Sophia Martinez</h4>
          <p className="text-sm text-gray-500">Loyal Customer</p>
        </div>
      </div>
    </div>
  );
};
