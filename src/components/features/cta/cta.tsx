"use client";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

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

export function CTA() {
  return (
    <motion.section
      id="cta"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      <motion.div
        variants={itemVariants}
        className="bg-[#576856] bg-[url('/texture.png')] bg-cover bg-center p-3 md:p-12 py-10 md:py-12 rounded-xl text-white text-center"
      >
        <div className="space-y-10 mx-auto md:max-w-[70%]">
          <Heading>Ready To Build Something Together?</Heading>
          <p className="font-light text-base md:text-xl">
            Whether you&apos;re looking for a developer, collaborator, or just
            someone to talk ideas with -- I&apos;m open to connect.
          </p>
          <Button className="bg-white dark:hover:bg-black rounded-full text-black hover:text-white dark:hover:text-white">
            <Link
              target="_blank"
              href="https://linkedin.com/in/iputubayuadhyawiratama"
            >
              Let&apos;s Connect
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
