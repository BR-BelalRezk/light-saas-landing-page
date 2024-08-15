"use client";
import ArrowRightIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Chip from "../ui/Chip";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-3 sm:px-5 md:px-10 xl:px-20 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-[478px]">
            <Chip>Version 2.0 is here</Chip>
            <h1 className="text-5xl md:text-6xl mt-6 font-bold tracking-tighter text-transparent bg-gradient-to-b from-black to-[#001e80] bg-clip-text">
              Pathway to <br /> productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex items-center gap-5 mt-[30px]">
              <button className="capitalize self-center tracking-tight bg-black text-white py-2 px-4 rounded-lg  cursor-pointer">
                Get for free
              </button>
              <button className=" capitalize flex items-center justify-center gap-1.5 self-center tracking-tight bg-white text-black py-2 px-4 rounded-lg cursor-pointer">
                <span>Learn more</span>
                <ArrowRightIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 xl:flex-0 md:relative ">
            <motion.figure
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 xl:right-0 xl:left-auto"
            >
              <Image
                src={cogImage}
                alt="cog"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 xl:right-0 xl:left-auto"
              />
            </motion.figure>
            <motion.figure style={{ translateY }}>
              <Image
                src={cylinderImage}
                alt="cylinder"
                width={220}
                height={220}
                className="hidden md:block -top-8 xl:-top-10 xl:-left-7 -left-32 md:absolute"
              />
            </motion.figure>

            <motion.figure
              style={{ translateY }}
              className="hidden lg:block top-[524px] xl:top-auto xl:left-auto xl:-bottom-28 xl:-right-7 left-[448px] lg:absolute rotate-[30deg]"
            >
              <Image
                src={noodleImage}
                alt="noodle"
                width={220}
                height={220}
                className="max-w-none"
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
