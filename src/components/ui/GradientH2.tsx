import { twMerge } from "tailwind-merge";

export default function GradientH2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={twMerge(
        className,
        "text-3xl md:text-[54px] md:leading-[60px] mt-5 font-bold tracking-tighter text-transparent bg-gradient-to-b from-black to-[#001e80] bg-clip-text"
      )}
    >
      {children}
    </h2>
  );
}
