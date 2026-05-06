import FaceBookIcon from "@/app/icons/FaceBookIcon";
import { InstagramIcon } from "@/app/icons/InstagramIcon";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { InputField } from "../textfield/InputField";

export const Footer = () => {
  return (
    <div className="">
      <div className="px-8 py-12 border-y border-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <section className="space-y-6">
            <h1 className="text-primary font-bold text-2xl">Luxe Beauty</h1>
            <p className="text-font font-light">
              Elevating beauty to an art form. Join us for a personalized
              journey of transformation and relaxation.
            </p>
            <div className="flex gap-4 items-center">
              <BsFacebook size={22} />
              <BsInstagram size={22} />
              <BsWhatsapp size={22} />
              <BiLogoGmail size={22} />
            </div>
          </section>

          <section className="space-y-4">
            <h6 className="font-semibold">COMPANY</h6>
            <ul className="space-y-4">
              <li className="font-light">About Us</li>
              <li className="font-light">Career</li>
              <li className="font-light">Contact Us</li>
              <li className="font-light">Privacy Policy</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h6 className="font-semibold">SERVICES</h6>
            <ul className="space-y-4">
              <li className="font-light">Facial Treatment</li>
              <li className="font-light">Hair Styling</li>
              <li className="font-light">Massage Therapy</li>
              <li className="font-light">Gift Cards</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h6 className="font-semibold">STAY INSPIRED</h6>
            <p className="font-light">
              Subscribe for exclusive offers and beauty tips.
            </p>

            <InputField placeholder="Email Address" />
          </section>
        </div>
      </div>

      <section className="flex flex-col justify-center items-center p-8">
        <span className="text-secondary-font dark:text-foreground text-xs lg:text-sm">
          Follow us for beauty tips
        </span>
        <span className="text-secondary-font dark:text-foreground text-xs lg:text-sm">
          © 2024 Bloom Beauty Parlor. All rights reserved.
        </span>
      </section>
    </div>
  );
};
