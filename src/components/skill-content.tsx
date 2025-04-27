"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

type Props = {
  skills: string[];
  selectedSkillIndex: number;
};

const content = [
  {
    title: "Frontend",
    description:
      "I bring ideas to life through clean, responsive, and dynamic user interfaces. My frontend development focuses on creating experiences that are not only beautiful but also intuitive and accessible across devices.",
    stacks: ["React", "Next.js", "Tailwind CSS", "Vite", "TypeScript"],
  },
  {
    title: "Backend",
    description:
      "I develop efficient, secure, and scalable backends that power modern web applications. From building APIs to server-side rendering, I focus on writing clean and maintainable code that connects the frontend to the server seamlessly.",
    stacks: ["Node.js", "Express.js", "Web Sockets"],
  },
  {
    title: "Database",
    description:
      "I design and manage database solutions that are fast, reliable, and scalable. Whether it's structuring the data model or optimizing queries, I ensure data flows correctly to support the needs of the application.",
    stacks: ["SQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Deployment",
    description:
      "I handle deployments to make sure that what I build reaches the world reliably and efficiently. I optimize for performance, set up CI/CD workflows, and leverage cloud platforms for smooth scaling and delivery.",
    stacks: ["Vercel", "Fly.io", "Railway", "Netlify", "AWS"],
  },
];

const stacksContainerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stacksItemVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export function SkillContent({ selectedSkillIndex }: Props) {
  const [currentSelectedSkillIndex, setCurrentSelectedSkillIndex] =
    useState(selectedSkillIndex);
  const [direction, setDirection] = useState(0); // 1 for next (down), -1 for previous (up)
  const [isMobile, setIsMobile] = useState(false);

  const currentSkill = content[selectedSkillIndex]; // Get the current skill based on the index

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

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
    hidden: ({
      direction,
      isMobile,
    }: {
      direction: number;
      isMobile: boolean;
    }) => ({
      x: isMobile ? (direction > 0 ? 100 : -100) : 0,
      y: isMobile ? 0 : direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: ({
      direction,
      isMobile,
    }: {
      direction: number;
      isMobile: boolean;
    }) => ({
      x: isMobile ? (direction > 0 ? -100 : 100) : 0,
      y: isMobile ? 0 : direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="col-span-2 col-start-2 p-2 lg:p-10 rounded-md w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={{ direction, isMobile }}>
        <motion.div
          key={selectedSkillIndex}
          custom={{ direction, isMobile }}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col space-y-5 h-full"
        >
          <h3 className="font-bold text-xl">{currentSkill.title}</h3>
          <p>{currentSkill.description}</p>
          <p className="font-bold">Stacks</p>

          {/* Tech Stacks */}
          <div className="flex-1">
            <motion.ul
              variants={stacksContainerVariant}
              animate="show"
              initial="hidden"
              className="gap-3 grid grid-cols-3 lg:grid-cols-5 h-full"
            >
              {currentSkill.stacks.map((stack, index) => (
                <motion.li
                  key={index}
                  variants={stacksItemVariant}
                  className="group relative bg-white/10 p-3 rounded-md aspect-square font-medium text-white transition-all hover:-translate-y-2"
                >
                  <p className="top-1/2 left-1/2 absolute text-center -translate-x-1/2 -translate-y-1/2">
                    {stack}
                  </p>
                  <div className="-top-2 -left-2 z-10 absolute bg-zinc-800 opacity-0 group-hover:opacity-1 shadow-xl rounded-full ring-2 ring-black/10 w-5 h-5" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
