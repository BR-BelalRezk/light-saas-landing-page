import { logos } from "@/constants";
import Image from "next/image";

export default function LogoTicker() {
  return (
    <section className="px-3 md:px-5 py-8 md:py-12 bg-white">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="container mx-auto">
          <figure className="flex items-center gap-14 flex-none">
            {logos.map((item, index) => (
              <Image
                key={index}
                className="h-8 w-auto"
                src={item.src}
                alt={item.alt}
              />
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}
