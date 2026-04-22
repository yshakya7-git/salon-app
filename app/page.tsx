import Link from "next/link";
import FeaturedCard from "./components/cards/FeaturedCard";
import { HeroSection } from "./components/section-content/HeroSection";
import VerifiedIcon from "./icons/VerifiedIcon";
import { StoryHighlights } from "./components/section-content/StoryHighlights";
import { CartCard } from "./components/cards/CartCard";
import { TestimonialCard } from "./components/cards/TestimonialCard";

interface FeatureRes {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const salonFeatures: FeatureRes[] = [
  {
    id: 1,
    title: "Expert Staff",
    description:
      "Our highly trained professionals deliver top-quality beauty services.",
    icon: <VerifiedIcon width={45} height={45} />,
  },
  {
    id: 2,
    title: "Premium Products",
    description: "We use only high-end beauty products for the best results.",
    icon: <VerifiedIcon width={45} height={45} />,
  },
  {
    id: 3,
    title: "Online Booking",
    description:
      "Book your favorite beauty services anytime with our easy online system.",
    icon: <VerifiedIcon width={45} height={45} />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background  dark:bg-black p-4 gap-6">
      {/* banner section */}
      <HeroSection />

      {/* card section */}
      <section className="grid grid-cols-3 gap-2">
        {salonFeatures.map((feature) => (
          <FeaturedCard
            key={feature.id}
            icons={<VerifiedIcon width={45} height={45} />}
            title={feature.title}
          />
        ))}
      </section>

      {/* story section  */}
      <section className="space-y-4">
        <div className="flex justify-between items-center ">
          <h1 className="text-base font-semibold">Our Services</h1>
          <Link href={"/services"} className="text-primary">
            View All
          </Link>
        </div>

        <StoryHighlights />
      </section>

      {/* add to cart card */}
      <CartCard />

      {/* testimonial section */}
      <TestimonialCard />
    </div>
  );
}
