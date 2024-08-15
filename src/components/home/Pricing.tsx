"use client";
import { pricing } from "@/constants";
import Chip from "../ui/Chip";
import GradientH2 from "../ui/GradientH2";
import SectionText from "../ui/SectionText";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className=" py-24 px-3 sm:px-5 md:px-10 xl:px-20 bg-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[540px]">
          <div className=" flex items-center justify-center">
            <Chip>Pay less money</Chip>
          </div>
          <GradientH2 className="text-center">
            Less money but professional service
          </GradientH2>
          <SectionText>
            Choose a plan that fits your needs and unlock all the features to
            build your ideal no-code SaaS website effortlessly.
          </SectionText>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10">
          {pricing.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                "p-10 border max-w-xs w-full border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#eaeaea]",
                item.inverse && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    item.inverse && "text-white/60"
                  )}
                >
                  {item.title}
                </h3>
                {item.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{ backgroundPositionX: "100%" }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                        duration: 1.5,
                      }}
                      className="font-medium bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${item.monthlyPrice}
                </span>
                <span
                  className={twMerge(
                    " tracking-tight font-bold text-black/50",
                    item.inverse && "text-white/60"
                  )}
                >
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "capitalize w-full mt-[30px] self-center tracking-tight bg-black text-white py-2 px-4 rounded-lg  cursor-pointer",
                  item.inverse && "bg-white text-black"
                )}
              >
                {item.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {item.features.map((item, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon className="size-6" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
