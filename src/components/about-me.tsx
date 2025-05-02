"use client";

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

export default function AboutMe() {
  return (
    <motion.section
      id="about-me"
      className="relative flex items-center h-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {/* Content */}
      <motion.div
        variants={itemVariants}
        className="md:flex-1 md:px-32 font-light text-md md:text-3xl text-center"
      >
        <p>
          I&apos;m a software engineer with{" "}
          <span className="md:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            1 year of experience
          </span>{" "}
          and a passion for building clean, responsive, and user-friendly
          websites. Right now, I&apos;m exploring the world of modern web
          development and sharpening my skills one project at a time.
        </p>
        <br />
        <p>
          I mostly work with{" "}
          <span className="md:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            Next.js
          </span>
          ,{" "}
          <span className="md:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            Tailwind CSS
          </span>
          , and{" "}
          <span className="md:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            TypeScript
          </span>
          —tools I love for how flexible and powerful they are. Whether
          it&apos;s crafting smooth animations, building responsive layouts, or
          experimenting with new UI libraries like Shadcn, I&apos;m always down
          to learn something new and make things better.
        </p>
      </motion.div>

      {/* Floating Icons 1 */}
      <motion.div
        variants={itemVariants}
        className="top-[10%] md:top-[10%] -left-[2%] md:-left-[1%] -z-10 absolute"
      >
        <div className="-z-10 inset-0 bg-gray-700 blur-2xl md:blur-3xl rounded-full w-20 md:w-32 h-20 md:h-32" />
        <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-gray-500/10 shadow-xl border rounded-lg w-10 h-10 -rotate-30 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center text-xl">⚛️</div>
        </div>
      </motion.div>

      {/* Floating Icons 2 */}
      <motion.div
        variants={itemVariants}
        className="top-[75%] -right-[3%] md:right-[3%] -z-10 absolute"
      >
        <div className="-z-10 inset-0 bg-gray-700 blur-2xl md:blur-3xl rounded-full w-20 md:w-32 h-20 md:h-32" />
        <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-gray-500/10 shadow-xl border rounded-lg w-12 h-12 rotate-30 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center text-2xl">⚛️</div>
        </div>
      </motion.div>
    </motion.section>
  );
}
