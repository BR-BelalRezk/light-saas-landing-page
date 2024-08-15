"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import Chip from "../ui/Chip";
import GradientH2 from "../ui/GradientH2";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import ProductShowcaseFeatures from "../ui/ProductShowcaseFeatures";
import SectionText from "../ui/SectionText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { productShowcaseFeatures } from "@/constants";
export default function ProductShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const prodcutImageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress: prodcutImageScrollYProgress } = useScroll({
    target: prodcutImageRef,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(prodcutImageScrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(prodcutImageScrollYProgress, [0, 1], [15, 0]);
  return (
    <section className="px-3 sm:px-5 md:px-10 xl:px-20 py-24 overflow-x-clip bg-gradient-to-b from-white to-[#d2dcff]">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex items-center justify-center">
            <Chip>Boost your productivity</Chip>
          </div>
          <GradientH2 className="text-center">
            A more effective to track progress
          </GradientH2>
          <SectionText>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </SectionText>
        </div>
        <div className=" relative">
          <motion.figure
            ref={prodcutImageRef}
            style={{ opacity, rotateX, transformPerspective: "1000px" }}
            className="relative"
          >
            <Image src={productImage} alt="product" className="mt-10" />
          </motion.figure>
          <motion.figure
            style={{ translateY }}
            className="absolute -right-36 -top-32 hidden md:block"
          >
            <Image src={pyramidImage} alt="pyramid" height={262} width={262} />
          </motion.figure>
          <motion.figure
            style={{ translateY }}
            className="absolute bottom-24 -left-36 hidden md:block"
          >
            <Image src={tubeImage} alt="tube" height={248} width={248} />
          </motion.figure>
        </div>
        <div className="flex items-center justify-center md:flex-row flex-wrap  flex-col gap-5 mt-5">
          {productShowcaseFeatures.map((item, index) => (
            <ProductShowcaseFeatures key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
