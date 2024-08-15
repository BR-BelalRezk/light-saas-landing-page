"use client";

import { testimonials } from "@/constants";
import Chip from "../ui/Chip";
import GradientH2 from "../ui/GradientH2";
import SectionText from "../ui/SectionText";
import TestimonialCard from "../ui/TestimonialCard";
import { motion } from "framer-motion";

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="px-3 sm:px-5 md:px-10 xl:px-20 bg-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[540px]">
          <div className=" flex items-center justify-center">
            <Chip>Testimonials</Chip>
          </div>
          <GradientH2 className="text-center">What our users say</GradientH2>
          <SectionText>
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world
          </SectionText>
        </div>
        <div className="flex justify-center items-center gap-6 pb-6 mt-10 max-h-[400px] overflow-hidden  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialCard id="col1" duration={15} />
          <TestimonialCard
            id="col2"
            className="hidden sm:block"
            duration={19}
          />
          <TestimonialCard
            id="col2"
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
