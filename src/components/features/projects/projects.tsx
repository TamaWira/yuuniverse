"use client";

import { Github, SquareArrowOutUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Heading from "@/components/heading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    coverImage: "",
    title: "Fooloos | Personal Finance Tracker",
    description:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    stack: ["React", "Next.js"],
    liveLink: "",
    githubLink: "",
  },
  {
    coverImage: "",
    title: "Kaboor | Online Travel Agent",
    description:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    stack: ["React", "Next.js"],
    liveLink: "",
    githubLink: "",
  },
];

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

export function Projects() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <motion.div variants={itemVariants} className="text-center">
        <Heading variant="h2">My Work</Heading>
        <p className="mx-3 font-extralight text-sm md:text-lg">
          Selected Projects that reflect how I build and solve.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="gap-5 grid md:grid-cols-2 mt-10"
      >
        {projects.map((project) => (
          <Card
            className="dark:bg-[#576856] pt-0 pb-6 overflow-hidden"
            key={project.title}
          >
            <div className="bg-white h-60" />
            <CardContent>
              <h3 className="m-0 p-0 font-bold text-xl">{project.title}</h3>
              <p className="m-0 p-0">{project.description}</p>
              <div className="flex gap-1 mt-2">
                {project.stack.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="rounded-full"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="secondary">
                <Github />
                Demo
              </Button>
              <Button>
                <SquareArrowOutUpRight />
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
