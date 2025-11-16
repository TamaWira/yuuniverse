"use client";

import Link from "next/link";
import HeroImage from "./hero-image";
import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      duration: 0,
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex flex-1 justify-center rounded-b-xl w-full h-full overflow-hidden">
      <HeroImage />

      {/* Gradient Overlay */}
      <div className="z-20 absolute inset-0 bg-gradient-to-b from-[#F1F1EE] dark:from-[#171D17] via-[#F1F1EE]/70  dark:via-black/20 to-transparent h-[60%] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="top-10 md:top-10 lg:top-15 lg:left-1/2 h-full z-20 absolute md:w-4/5 lg:w-3/4 text-center lg:-translate-x-1/2"
      >
        <motion.h1
          variants={itemVariants}
          className="my-1 font-abhaya font-bold text-4xl md:text-5xl lg:text-[5rem] leading-8 md:leading-14 lg:leading-18 mb-4 lg:mb-2 text-shadow-lg"
        >
          Crafting Code With Purpose, Passion, & Precision
        </motion.h1>
        <motion.p variants={itemVariants} className="mx-10 text-sm md:text-xl">
          From landing pages to full-stack platforms, I deliver clean code and
          user-centric design. Let&apos;s build something that works —
          beautifully.
        </motion.p>
        <motion.button
          variants={itemVariants}
          className="absolute bottom-15 lg:bottom-20 left-0 right-0 w-fit mx-auto"
        >
          <Link
            target="_blank"
            href="https://linkedin.com/in/iputubayuadhyawiratama"
            className="flex items-center gap-3 bg-white hover:bg-black active:bg-black dark:bg-[#576856] dark:hover:bg-white mt-5 px-5 py-3 border dark:border-white border-black rounded-full ring-2 ring-black/10 hover:text-white active:text-white dark:hover:text-black dark:text-white text-sm lg:text-base transition-all"
          >
            <ExternalLink size={15} />
            <p>Get in Touch</p>
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
}
