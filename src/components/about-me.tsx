"use client";

import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import Heading from "./heading";
import TimelineCard from "./timeline-card";

import { TIMELINES } from "@/constants/timelines";
import { getSwiperConfig } from "@/utils/getSwiperConfig";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/custom-swiper.css";

export default function AboutMe() {
  const swiperConfig = getSwiperConfig(TIMELINES);

  return (
    <motion.section
      id="about-me"
      className="relative flex flex-col justify-center h-full text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {/* Content */}
      <motion.div variants={itemVariants} className="mx-auto max-w-[900px]">
        <Heading variant="h2" className="mb-10">
          About Me
        </Heading>
        <p className="font-extralight">
          I&apos;m a Software Engineer with{" "}
          <span className="font-semibold">1 year of experience</span> and a
          passion for building clean, responsive, and user-friendly websites.
          Right now, I&apos;m exploring the world of modern web development and
          sharpening my skills one project at a time.
          <br />
          <br /> I mostly work with Next.js, Tailwind CSS, and Typescript --
          tools I love for how flexible and powerful they are. Whether it&apos;s
          crafting smooth animations, building responsive layouts, or
          experimenting with new UI libraries like Shadcn, I&apos;m always down
          to learn something new and make things better.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={itemVariants}
        className="relative flex-1 mt-10 w-full"
      >
        <Swiper {...swiperConfig}>
          {TIMELINES.map(({ year, icon, description }) => (
            <SwiperSlide className="pb-12 h-full" key={year}>
              <TimelineCard
                year={year}
                icon={icon}
                description={description}
                isLastItem={year === "2025"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

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
