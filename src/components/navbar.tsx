import Logo from "./logo";
import MobileThemeToggle from "./mobile-theme-toggle";
import ThemeToggle from "./theme-toggle";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "Contact Me",
    href: "#contact-me",
  },
];

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-2 px-5">
      <div className="flex items-center gap-3">
        <Logo />
        <p className="font-bold text-xl">YuuNiverse</p>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden top-3 right-6 z-40 fixed lg:flex items-center gap-3">
        <ul className="flex items-center gap-4 bg-white shadow-xl p-3 px-5 border rounded-full h-9 text-black">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-black transition-all">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button>
              <Menu />
            </button>
          </DrawerTrigger>
          <DrawerContent className="rounded-s-3xl">
            {/* Hidden header for accessibility */}
            <DrawerHeader className="flex flex-row justify-between">
              <div>
                <DrawerTitle>YuuNiverse</DrawerTitle>
                <DrawerDescription>Description</DrawerDescription>
              </div>
              <DrawerClose asChild>
                <button>
                  <X />
                </button>
              </DrawerClose>
            </DrawerHeader>

            {/* Content */}
            <div className="p-4">
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <DrawerClose asChild>
                      <a
                        href={link.href}
                        className="hover:text-black transition-all"
                      >
                        {link.name}
                      </a>
                    </DrawerClose>
                  </li>
                ))}
              </ul>

              <div className="my-3 border-b" />

              <div className="flex items-center gap-3">
                <p>Theme</p>
                <MobileThemeToggle />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
