"use client";

import { logos } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoTicker() {
  return (
    <section className="px-3 sm:px-5 md:px-10 xl:px-20 py-8 md:py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.figure
            initial={{ translateX: 0 }}
            whileInView={{ translateX: "-50%" }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-14 pr-14 flex-none"
          >
            {logos.map((item, index) => (
              <Image
                key={index}
                className="h-8 w-auto"
                src={item.src}
                alt={item.alt}
              />
            ))}
            {logos.map((item, index) => (
              <Image
                key={index}
                className="h-8 w-auto"
                src={item.src}
                alt={item.alt}
              />
            ))}
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
