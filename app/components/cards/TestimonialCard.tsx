import StarIcon from "@/app/icons/StarIcon";
import Image from "next/image";

export const TestimonialCard = () => {
  return (
    <div className="bg-pink-50 border border-pink-200 rounded-3xl p-6 max-w-2xl">
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

      <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
        "The home service was absolutely impeccable. The stylist arrived on time
        with all premium equipment. Truly a five-star luxury experience!"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
            src="/banner.png"
            alt="Sophia Martinez"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Sophia Martinez</h4>
          <p className="text-sm text-gray-500">Loyal Customer</p>
        </div>
      </div>
    </div>
  );
};
