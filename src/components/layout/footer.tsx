import { Instagram, Linkedin, Github } from "lucide-react";
import Logo from "@/components/ui/logo";
import Link from "next/link";

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
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact Me",
    href: "#cta",
  },
];

export function Footer() {
  return (
    <footer className="space-y-5">
      {/* Content and nav */}
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex items-center gap-4 p-3 px-5 h-9 text-black dark:text-white">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-black transition-all">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Link target="_blank" href="https://www.instagram.com/bayuadhya/">
            <Instagram />
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/iputubayuadhyawiratama"
          >
            <Linkedin />
          </Link>
          <Link target="_blank" href="https://github.com/TamaWira">
            <Github />
          </Link>
        </div>
      </div>

      <ul className="md:hidden grid grid-cols-3 gap-y-2 gap-x-4 text-sm text-black dark:text-white">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-black transition-all">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-[#171D17] dark:border-white border-t-2 w-full" />

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 text-xs md:text-base">
        <p className="max-w-full md:max-w-[50%]">
          Heavily inspired by{" "}
          <span>
            <Link
              className="font-bold text-[#576856] dark:text-white underline"
              href="https://dribbble.com/shots/24998949-Sivaraga-Mental-Health-Wellness-Landing-Page"
            >
              Arya Pradana&apos;s Sivaraga UI Design
            </Link>
          </span>
          .
        </p>
        <p className="text-nowrap">@ 2025 Yuuniverse</p>
      </div>
    </footer>
  );
}
