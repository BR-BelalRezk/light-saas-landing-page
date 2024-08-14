import acme from "@/assets/logo-acme.png";
import quantum from "@/assets/logo-quantum.png";
import echo from "@/assets/logo-echo.png";
import celestial from "@/assets/logo-celestial.png";
import pulse from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";
export const navbar = [
  "about",
  "features",
  "updates",
  "help",
  "customers",
] as const;

export const logos = [
  {
    src: acme,
    alt: "acme",
  },
  {
    src: quantum,
    alt: "quantum",
  },
  {
    src: echo,
    alt: "echo",
  },
  {
    src: celestial,
    alt: "celestial",
  },
  {
    src: pulse,
    alt: "pulse",
  },
  {
    src: apex,
    alt: "apex",
  },
] as const;
