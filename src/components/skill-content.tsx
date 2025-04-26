"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

type Props = {
  skills: string[];
  selectedSkillIndex: number;
};

export function SkillContent({ skills, selectedSkillIndex }: Props) {
  const [currentSelectedSkillIndex, setCurrentSelectedSkillIndex] =
    useState(selectedSkillIndex);
  const [direction, setDirection] = useState(0); // 1 for next (down), -1 for previous (up)

  useEffect(() => {
    // Determine direction based on index comparison
    if (selectedSkillIndex > currentSelectedSkillIndex) {
      setDirection(1); // Moving to next skill (down)
    } else if (selectedSkillIndex < currentSelectedSkillIndex) {
      setDirection(-1); // Moving to previous skill (up)
    }
    setCurrentSelectedSkillIndex(selectedSkillIndex);
  }, [selectedSkillIndex, currentSelectedSkillIndex]);

  // Animation variants
  const contentVariants: Variants = {
    hidden: (direction: number) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="col-span-2 col-start-2 p-5 border rounded-md w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={selectedSkillIndex}
          custom={direction}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="h-full"
        >
          <motion.h3 className="text-xl font-bold mb-4">{skills[selectedSkillIndex]}</motion.h3>
          <motion.p>
            This is the content for {skills[selectedSkillIndex]}. You can add more details about this skill here.
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
