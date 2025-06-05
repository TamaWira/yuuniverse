"use client";

import HeroImage from "./hero-image";
import { motion, Variants } from "framer-motion";

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
      staggerChildren: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className="relative flex flex-1 justify-center rounded-xl w-full h-full overflow-hidden"
    >
      <HeroImage />

      {/* Gradient Overlay */}
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-[#F1F1EE] dark:from-[#171D17] via-white/20 dark:via-black/20 to-transparent h-[80%] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={itemVariants}
        className="top-3 md:top-10 lg:top-5 lg:left-1/2 z-20 absolute lg:w-3/4 text-center lg:-translate-x-1/2"
      >
        <h1 className="my-1 font-abhaya font-bold text-3xl lg:text-6xl">
          Crafting Code With Purpose, Passion, & Precision
        </h1>
        <p className="mx-10 font-light text-sm md:text-xl">
          From landing pages to full-stack platforms, I deliver clean code and
          user-centric design. Let&apos;s build something that works —
          beautifully.
        </p>
        <button className="bg-white hover:bg-black active:bg-black dark:bg-[#576856] dark:hover:bg-white mt-5 px-3 py-1 border dark:border-white border-black rounded-full ring-2 ring-black/10 hover:text-white active:text-white dark:hover:text-black dark:text-white text-sm lg:text-base transition-all">
          Contact Me
        </button>
      </motion.div>
    </motion.section>
  );
}
