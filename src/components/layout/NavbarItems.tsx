import { navbar } from "@/constants";
import { MenuListItem } from "./Menu";

export default function NavbarItems() {
  return (
    <>
      {navbar.map((item, index) => (
        <MenuListItem
          key={index}
          className={"capitalize text-white/60 md:text-black/60"}
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
        >
          {item}
        </MenuListItem>
      ))}
      <MenuListItem
        className="capitalize self-center tracking-tight bg-white md:bg-black md:text-white py-2 px-4 rounded-lg text-black cursor-pointer"
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 250, damping: 25 },
          },
          close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
        }}
      >
        get for free
      </MenuListItem>
    </>
  );
}
