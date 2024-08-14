"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

// compound components

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("use the useMenu hook inside the Menu context");
  return context;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const value = { toggle, setToggle };
  useEffect(() => {
    if (window.screen.width >= 768) {
      setToggle(true);
    }
  }, []);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const MenuList = ({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className: string;
  variants: Variants;
}) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          className={className}
          initial={"close"}
          animate={"open"}
          exit={"close"}
          variants={variants}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className: string;
  variants: Variants;
}) => {
  return (
    <motion.li variants={variants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuToggleButton = ({
  children,
  className,
  variants,
}: {
  children: React.ReactElement;
  className: string;
  variants: Variants;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      initial={false}
      animate={toggle ? "open" : "close"}
      variants={variants}
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

export { Menu, MenuList, MenuListItem, MenuToggleButton };
