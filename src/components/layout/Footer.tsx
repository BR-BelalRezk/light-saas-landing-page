import { footerLinks } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-3 sm:px-5 md:px-10 xl:px-20 py-5 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-3 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <pre className="text-xs lg:text-sm text-white/50">
            &copy; {year} LightSass. Inc. All right reserved
          </pre>
          <ul className="flex items-center justify-center gap-3">
            {footerLinks.map((Item, index) => (
              <li key={index}>
                <Item className="size-7 text-white/50" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
