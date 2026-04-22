"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const images = ["/banner.png", "/banner.png", "/banner.png"];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-125 w-full overflow-hidden rounded-2xl">
      {/* IMAGE */}
      <motion.div
        key={index}
        className="absolute inset-0 z-0 will-change-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={images[index]}
          alt="Salon"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-6 gap-4 mt-24">
        <span className="bg-linear-to-r from-pink-400 to-orange-300 px-4 py-1 rounded-full text-xs">
          EXCLUSIVE SALON & SPA
        </span>

        <h1 className="text-4xl font-bold text-left">
          Indulge in <br /> Excellence
        </h1>

        <p className="max-w-xl text-gray-200 text-sm">
          Experience world-class beauty services at our salon or from home.
        </p>

        <button
          className="bg-primary hover:bg-pink-700 px-10 py-3 rounded-full text-sm font-semibold transition"
          onClick={() => router.push("/contact")}
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
};
