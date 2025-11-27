"use client";

import { useEffect, useState } from "react";
import Logo from "../ui/logo";

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
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact Me",
    href: "#cta",
  },
];

export function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll direction for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible at the very top of the page
      if (currentScrollPos <= 30) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      // Determine scroll direction
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Track active section with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll(
      "#home, #about-me, #skills, #projects, #cta"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`sticky overflow-hidden top-0 z-50 flex justify-between items-center p-2 px-5 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`z-[60] absolute inset-0 bg-red-500 ${
          prevScrollPos > 30
            ? "bg-white/80 dark:bg-[#576856]/30 backdrop-blur-md"
            : "bg-transparent"
        }`}
      />

      <div className="z-[70] flex items-center gap-3">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden z-[70] md:flex items-center gap-3">
        <ul className="flex items-center gap-4 p-3 px-5 h-9 text-black">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-all text-sm font-medium ${
                    isActive
                      ? "text-black font-bold border-b-2 border-black"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden z-[70] flex">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button>
              <Menu />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-white dark:bg-[#263026] border-none rounded-s-3xl">
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
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
