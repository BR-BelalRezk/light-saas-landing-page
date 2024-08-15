import { productShowcaseFeatures } from "@/constants";
import ArrowRightIcon from "@/assets/arrow-right.svg";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export default function ProductShowcaseFeatures({
  item,
}: {
  item: { title: string; desc: string; icon: any };
}) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)
`;
  const refBorder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosistion = (e: MouseEvent) => {
      if (!refBorder.current) return;
      const borderRect = refBorder.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect?.x);
      offsetY.set(e.y - borderRect?.y);
    };
    window.addEventListener("mousemove", updateMousePosistion);
    return () => window.removeEventListener("mousemove", updateMousePosistion);
  }, []);
  return (
    <div className="flex relative flex-col items-start gap-2.5 justify-center border-2 flex-none xl:flex-1 h-64 w-80 border-black/50 rounded-lg px-5">
      <motion.div
        ref={refBorder}
        className="absolute inset-0 border-[#001e80] border-2 rounded-lg"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <item.icon className="text-lg" />
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="">{item.desc}</p>
      <span className="flex items-center justify-start gap-1.5 ">
        Learn more <ArrowRightIcon className="size-4" />
      </span>
    </div>
  );
}
