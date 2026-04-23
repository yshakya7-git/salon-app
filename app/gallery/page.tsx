import Image from "next/image";
import { Tabs } from "../components/tabs/Tabs";
import FacialStyleTabContent from "../services/components/tab-content/FacialTabContent";
import HeartIcon from "../icons/HeartIcon";

const images = [
  "/gallery1.jpg",
  "/aboutBgImg.png",
  "/gallery2.jpg",
  "/banner.png",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

const Gallery = () => {
  const tabs = [
    { id: 1, label: "All", content: <AllGallery images={images} /> },
    { id: 2, label: "Bridal", content: <FacialStyleTabContent /> },
    { id: 3, label: "Spa", content: <div>🧖 Spa Content</div> },
    { id: 4, label: "Manicure", content: <div>💅 Mani Content</div> },
    { id: 5, label: "Pedicure", content: <div>💅 Pedicure Content</div> },
  ];

  return <Tabs tabs={tabs} defaultActiveId={1} />;
};

export default Gallery;

const AllGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="relative pb-24">
      <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-md group"
          >
            <Image
              src={src}
              alt="beauty"
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />

            <HeartIcon />
          </div>
        ))}
      </div>

      <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
        <button className="bg-white shadow-lg border border-pink-200 text-pink-600 font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
          <span>📅</span> Book Now
        </button>
      </div>
    </div>
  );
};
