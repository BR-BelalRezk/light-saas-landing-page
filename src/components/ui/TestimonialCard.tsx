import { testimonials } from "@/constants";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function TestimonialCard({
  id,
  className,
  duration,
}: {
  id: "col1" | "col2" | "col3";
  className?: string;
  duration: number;
}) {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);
  const testimonial = id === "col1" ? col1 : id === "col2" ? col2 : col3;
  return (
    <div className={className}>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-6 pb-6 flex-none"
      >
        {testimonial.map((item, index) => (
          <Testimonial key={index} item={item} />
        ))}
        {testimonial.map((item, index) => (
          <Testimonial key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function Testimonial({ item }: { item: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="p-10 border max-w-xs w-full border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea]"
    >
      <div>{item.text}</div>
      <figure className="flex items-center gap-2 mt-5">
        <Image
          src={item.imageSrc}
          alt={item.username}
          width={40}
          height={40}
          className="size-10 rounded-full"
        />
        <figcaption className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">
            {item.name}
          </div>
          <div className="leading-5 tracking-tight">{item.username}</div>
        </figcaption>
      </figure>
    </motion.div>
  );
}
