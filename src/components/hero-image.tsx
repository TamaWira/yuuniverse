import React from "react";
import Image from "next/image";

import { motion, Variants } from "framer-motion";

const heroImageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeroImage() {
  return (
    <motion.div
      variants={heroImageVariants}
      initial="initial"
      animate="animate"
      className="w-full h-full"
    >
      <Image
        src="/hero-image.png"
        alt="Hero"
        className="object-cover"
        fill
        priority
      />
    </motion.div>
  );
}
