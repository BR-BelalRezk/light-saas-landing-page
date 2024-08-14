import { Menu, MenuToggleButton, MenuList } from "./Menu";
import HamburgerIcon from "./HamburgerIcon";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <Menu>
      <div className="relative">
        <MenuToggleButton
          variants={{
            open: {
              translateX: -15,
              translateY: 10,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
            close: {
              translateX: 0,
              translateY: 0,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
          className="z-50 flex flex-col items-center justify-center gap-1 size-10 relative bg-black rounded-full md:hidden"
        >
          <HamburgerIcon />
        </MenuToggleButton>
        <MenuList
          className="absolute md:hidden z-40 bg-black right-0 top-0 flex items-start gap-2.5 p-5 justify-center flex-col"
          variants={{
            open: {
              width: 200,
              height: 250,
              borderRadius: 25,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
            close: {
              width: 40,
              height: 40,
              borderRadius: 25,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
        >
          <NavbarItems />
        </MenuList>
        <MenuList
          variants={{
            open: {
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
          }}
          className="hidden md:flex items-center justify-center gap-5"
        >
          <NavbarItems />
        </MenuList>
      </div>
    </Menu>
  );
}
