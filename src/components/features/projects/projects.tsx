"use client";

import { Github, SquareArrowOutUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Heading from "@/components/heading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    coverImage: "/fooloos.png",
    title: "Fooloos | Personal Finance Tracker",
    description:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    stack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "RESTFul API",
      "Docker",
      "Fly.io",
      "Github Actions",
    ],
    liveLink: "https://fooloos.vercel.app",
    isPublic: false,
    githubLink: "",
  },
  {
    coverImage: "/kaboor.png",
    title: "Kaboor | Online Travel Agent",
    description:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    stack: [
      "React",
      "Typescript",
      "Material UI",
      "Netlify",
      "Express.js",
      "Knex.js",
      "PostgreSQL",
      "RESTFul API",
      "Docker",
      "Fly.io",
      "Github Actions",
    ],
    liveLink: "",
    isPublic: true,
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
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="h-full scroll-mt-10"
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
            <div className="relative h-60">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent>
              <h3 className="m-0 p-0 font-bold text-xl">{project.title}</h3>
              <p className="m-0 p-0">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
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
              {project.isPublic && (
                <Button variant="secondary">
                  <Link
                    href={project.githubLink}
                    className="flex items-center gap-2"
                  >
                    <Github />
                    <p>Github</p>
                  </Link>
                </Button>
              )}
              <Button>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <SquareArrowOutUpRight />
                  <p>Live Demo</p>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
