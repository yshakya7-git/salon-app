"use client";

import { Button } from "../components/button/Button";
import FeaturedCard from "../components/cards/FeaturedCard";
import { InputField } from "../components/textfield/InputField";
import VerifiedIcon from "../icons/VerifiedIcon";
import Link from "next/link";

const salonFeatures = [
  {
    id: 1,
    title: "Call Us",
    icon: <VerifiedIcon width={45} height={45} />,
  },
  {
    id: 2,
    title: "Email Us",
    icon: <VerifiedIcon width={45} height={45} />,
  },
  {
    id: 3,
    title: "Whatsapp",
    icon: <VerifiedIcon width={45} height={45} />,
  },
];

const getServiceIntData = [
  {
    id: 1,
    title: "Haircut",
  },
  { id: 2, title: "Manicure" },
  {
    id: 3,
    title: "Facial",
  },
];

const workDays = [
  {
    id: 1,
    workDays: "Monday - Friday",
    workSchedule: "9:00 AM - 7:00 PM",
  },
  {
    id: 2,
    workDays: "Saturday",
    workSchedule: "10:00 AM - 5:00 PM",
  },
  {
    id: 3,
    workDays: "Sunday",
    workSchedule: "Closed",
  },
];
const Contact = () => {
  return (
    <div className="p-4 space-y-6">
      <p className="text-center text-font text-sm">
        Have a question or want to book a service?
        <br /> We'd love to hear from you.
      </p>

      <section className="grid grid-cols-3 gap-2">
        {salonFeatures.map((feature) => (
          <FeaturedCard
            key={feature.id}
            icons={<VerifiedIcon width={45} height={45} />}
            title={feature.title}
          />
        ))}
      </section>

      <section className="space-y-4">
        <h1 className="text-base font-bold">Send us a Message</h1>
        <form action="" className="space-y-4">
          <InputField label="Full Name" placeholder="Jane Doe" />
          <InputField label="Email" placeholder="jane.doe@example.com" />
          <InputField
            as="select"
            required
            label="Service Interest"
            // {...register("complaintTypeID")}
            placeholder="Enter Complaint Type"
            // error={Boolean(errors.complaintTypeID?.message)}
            // helperText={errors.complaintTypeID?.message}
          >
            <option value="">Select Complaint Type</option>

            {getServiceIntData &&
              getServiceIntData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
          </InputField>
          <InputField
            label="Message"
            placeholder="How can we help you?"
            as="textarea"
          />

          <Button type="submit" variant="primary" fullWidth>
            Send Message
          </Button>
        </form>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center ">
          <h1 className="text-base font-bold">Visit Us</h1>
          <Link href={"/services"} className="text-primary font-bold text-sm">
            Get Directions
          </Link>
        </div>
        <iframe
          src="https://www.google.com/maps?q=Kathmandu&output=embed"
          width="100%"
          height="400"
        />
      </section>
      <section className="space-y-4">
        <div className="flex gap-3">
          <h1 className="text-base font-bold">Opening Hours</h1>
          <div className="flex items-center rounded-full bg-[#DCFCE7] px-3 py-1 ">
            <p className="text-success font-bold text-xs">Open Now</p>
          </div>
        </div>

        <div className="border border-secondary rounded-lg ">
          {workDays.map((day, index) => (
            <div
              key={day.id}
              className={`flex justify-between items-center px-4 py-2 ${
                index !== workDays.length - 1 ? "border-b border-secondary" : ""
              }`}
            >
              <p className="text-sm text-font">{day.workDays}</p>
              <p className="text-sm text-font font-bold">{day.workSchedule}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className="border border-secondary" />

      <section className="flex flex-col justify-center items-center ">
        <span className="text-secondary-font">Follow us for beauty tips</span>
        <span className="text-secondary-font">
          © 2024 Bloom Beauty Parlor. All rights reserved.
        </span>
      </section>
    </div>
  );
};

export default Contact;
