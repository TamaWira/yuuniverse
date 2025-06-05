import { Instagram, Linkedin, Github } from "lucide-react";
import Logo from "../logo";
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
          <Link href="/instagram.com">
            <Instagram />
          </Link>
          <Link href="/linkedin.com">
            <Linkedin />
          </Link>
          <Link href="/github.com">
            <Github />
          </Link>
        </div>
      </div>

      <ul className="md:hidden flex justify-between items-center gap-4 h-9 text-black dark:text-white">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-black transition-all">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-[#171D17] border-t-2 w-full" />

      {/* Copyright */}
      <div className="flex justify-between items-start text-xs md:text-base">
        <p className="max-w-[50%] md:max-w-full">
          Heavily inspired by{" "}
          <span>
            <Link
              className="font-bold text-[#576856] underline"
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
