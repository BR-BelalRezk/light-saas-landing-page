"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientH2 from "../ui/GradientH2";
import SectionText from "../ui/SectionText";
import ArrowRightIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ref}
      className="px-3 overflow-x-clip sm:px-5 md:px-10 xl:px-20 py-24 bg-gradient-to-b from-white to-[#d2dcff]"
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-[540px] relative">
          <GradientH2 className="text-center">
            Sign up for free today
          </GradientH2>
          <SectionText>
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </SectionText>
          <motion.figure
            style={{ translateY }}
            className="absolute -left-[350px] -top-[137px]"
          >
            <Image src={starImage} alt="star" width={360} />
          </motion.figure>
          <motion.figure
            style={{ translateY }}
            className="absolute -right-[331px] -top-[90px]"
          >
            <Image src={springImage} alt="spring" width={360} />
          </motion.figure>
        </div>
        <div className="flex justify-center items-center gap-3 mt-10">
          <button className="capitalize self-center tracking-tight bg-black text-white py-2 px-4 rounded-lg  cursor-pointer">
            Get for free
          </button>
          <button className="capitalize flex items-center justify-center gap-1.5 self-center tracking-tight bg-white text-black py-2 px-4 rounded-lg cursor-pointer">
            <span>Learn more</span>
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
