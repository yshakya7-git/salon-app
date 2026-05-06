import Image from "next/image";
import bannerIMG from "../../public/bannerIMG.jpg";
import aboutImg from "../../public/aboutImg.jpg";
import SparkleIcon from "../icons/SparkleIcon";
import TitleBar from "../components/section-content/TitleBar";
import expert1 from "../../public/expert1.jpg";
import expert2 from "../../public/expert2.png";
import { ServiceCard } from "../components/cards/ServiceCard";
import LeafIcon from "../icons/LeafIcon";
import { Button } from "../components/button/Button";

const experts = [
  {
    id: 1,
    name: "Elena Rossi",
    role: "Lead Hair Stylist",
    image: expert1,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Skin Specialist",
    image: expert2,
  },
  {
    id: 3,
    name: "Elena Rossi",
    role: "Lead Hair Stylist",
    image: expert1,
  },
];

const services = [
  {
    id: 1,
    title: "100% Organic Ingredients",
    description:
      "We exclusively use botanical extracts and chemical-free formulas for all treatments.",
  },
  {
    id: 2,
    title: "100% Organic Ingredients",
    description:
      "We exclusively use botanical extracts and chemical-free formulas for all treatments.",
  },
  {
    id: 3,
    title: "100% Organic Ingredients",
    description:
      "We exclusively use botanical extracts and chemical-free formulas for all treatments.",
  },
];

const About = () => {
  return (
    <div className="">
      <section className="relative h-125 w-full overflow-hidden ">
        <Image
          src={bannerIMG}
          alt="Salon"
          fill
          className="object-cover absolute inset-0 z-0 will-change-opacity"
          priority
        />

        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-6 gap-4 mt-20">
          <span className="bg-primary px-4 py-1.5 rounded-full text-xs uppercase">
            Established 2021
          </span>

          <h1 className="text-lg lg:text-4xl font-bold text-left">
            Empowering Women
            <br /> Through Beauty
          </h1>

          <p className="max-w-xl text-gray-200 text-sm lg:text-lg">
            We believe that beauty is not just about aesthetics—it's a form of
            self-expression and a pathway to confidence.
          </p>
        </div>
      </section>

      <div className="space-y-6 p-4 ">
        <div className="flex justify-between gap-8 items-center">
          <section className="w-full md:w-[60%]">
            <div className="flex items-center gap-4">
              <SparkleIcon width={22} height={22} />
              <h2 className="text-primary uppercase text-sm font-semibold">
                Our Mission
              </h2>
            </div>

            <p className="border-l-4 border-primary pl-4 mt-2 text-font dark:text-foreground text-justify font-medium">
              "At our salon, we believe beauty is a journey of self-love. Our
              mission is to provide premium beauty services that empower women
              to feel confident and radiant in their own skin."
            </p>

            <p className="text-[#181114B2] dark:text-foreground/90 text-sm text-justify mt-4 font-medium">
              Luxe Beauty was founded on the principle that premium wellness
              should be accessible, ethical, and deeply personal. We don't just
              provide services; we curate experiences that celebrate your unique
              identity. Our mission is to foster a space where self-love is the
              ultimate priority, utilizing only the finest organic ingredients
              and expert techniques.
            </p>
            <p className="text-[#181114B2] dark:text-foreground/90 text-sm text-justify mt-4 font-medium">
              Whether you visit our sanctuary in the city or book our expert
              team for a session at home, we are dedicated to providing an
              unparalleled experience tailored specifically to your needs.
            </p>
          </section>

          <section className="w-[45%] hidden md:block">
            <Image src={aboutImg} alt="AboutImg" className="rounded-2xl h-full lg:h-[650px]" />
          </section>
        </div>

        <section>
          <TitleBar title="Meet The Experts" />

          <div className="grid grid-cols-3 gap-2">
            {experts.map((expert) => (
              <div key={expert.id}>
                <Image
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-auto rounded-lg mt-4"
                />

                <p className="text-md text-font dark:text-foreground font-bold text-center">
                  {expert.name}
                </p>

                <p className="text-center text-sm text-[#6B7280] dark:text-foreground/90">
                  {expert.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-white dark:bg-black p-4 space-y-4">
        <TitleBar title="The Organic Promise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <ServiceCard
            icon={<LeafIcon width={40} height={40} />}
            title="100% Organic Ingredients"
            description="We exclusively use botanical extracts and chemical-free formulas for all treatments."
          />
          <ServiceCard
            icon={<LeafIcon width={40} height={40} />}
            title="100% Organic Ingredients"
            description="We exclusively use botanical extracts and chemical-free formulas for all treatments."
          />
          <ServiceCard
            icon={<LeafIcon width={40} height={40} />}
            title="100% Organic Ingredients"
            description="We exclusively use botanical extracts and chemical-free formulas for all treatments."
          />
        </div>
      </section>

      <section className="p-4">
        <div className="bg-primary rounded-2xl p-4 text-white space-y-4">
          <h1 className="text-lg md:text-2xl font-bold">Luxury at Home</h1>

          <p className="text-justify text-sm md:text-base">
            Experience the full Luxe Beauty journey from the comfort of your
            <br />
            sanctuary. Our mobile experts bring premium equipment and
            <br /> products directly to you.
          </p>

          <div className="w-full md:w-fit">
            <Button variant="secondary">Explore Home Service</Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-black dark:border-t dark:border-t-secondary p-4 block md:hidden">
        <Button fullWidth variant="primary">
          Book an Appointment
        </Button>
      </section>
    </div>
  );
};

export default About;
