import Image from "next/image";
import logoSaas from "@/assets/logosaas.png";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="py-5 overflow-x-clip px-3 sm:px-5 sticky top-0 w-full backdrop-blur-sm z-50">
      <nav className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <figure>
            <Image src={logoSaas} alt="logo" width={50} height={50} />
          </figure>
          <Navbar />
        </div>
      </nav>
    </header>
  );
}
