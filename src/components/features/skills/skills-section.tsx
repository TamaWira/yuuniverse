"use client";

import Heading from "../../heading";
import { SkillList } from "./skill-list";
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

export function Skills() {
  return (
    <motion.section
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="space-y-10 h-full text-center scroll-mt-10"
    >
      <motion.div variants={itemVariants}>
        <Heading variant="h2" className="">
          What I Do
        </Heading>
        <p className="mx-3 font-extralight text-sm md:text-lg">
          Roles I&apos;m experienced with and tools I trust to build
          high-quality digital experiences.
        </p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillList />
      </motion.div>
    </motion.section>
  );
}
