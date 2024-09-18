"use client";
import { features } from "@/constants";
import Chip from "../ui/Chip";
import GradientH2 from "../ui/GradientH2";
import SectionText from "../ui/SectionText";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-24 px-3 sm:px-5 md:px-10 xl:px-20">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex items-center justify-center">
            <Chip>Everything you need</Chip>
          </div>
          <GradientH2 className="text-center">
            Streamlined for easy management
          </GradientH2>
          <SectionText>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </SectionText>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 drop-shadow-2xl rounded-lg p-10"
            >
              <motion.figure
                drag
                dragSnapToOrigin
                initial={{ translateY: 0 }}
                whileInView={{ translateY: [0, 50, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: index === 0 ? 2 : 3,
                }}
                className="relative z-50"
              >
                <Image draggable={false} src={item.src} alt={item.title} />
              </motion.figure>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm mt-3 max-w-60 mx-auto lg:max-w-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
