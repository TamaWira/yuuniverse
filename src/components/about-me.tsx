"use client";

import { motion, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Heading from "./heading";

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

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
      className="relative flex flex-col justify-center h-full text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="mx-auto max-w-[900px]">
        <Heading variant="h2" className="mb-10">
          About Me
        </Heading>
        <p className="font-light">
          I&apos;m a Software Engineer with{" "}
          <span className="font-bold">1 year of experience</span> and and a
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
      </div>

      {/* Timeline */}
      <div className="relative flex-1 mt-20 w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          slidesOffsetBefore={150}
          slidesOffsetAfter={150}
          className="flex flex-1 justify-between w-full h-full"
        >
          {[1, 2, 3].map((item) => (
            <SwiperSlide className="h-full" key={item}>
              <div className="relative flex flex-col gap-10 h-full">
                <div className="z-10 relative bg-[#576856] mx-auto px-6 py-1 rounded-full w-fit text-[#F1F1EE]">
                  2023
                </div>
                {/* Dashed line to next slide */}
                <div className="top-[15px] left-[50%] absolute border-[#576856] border-t-2 border-dashed w-[calc(100%+50px)] h-[2px]"></div>
                <div className="flex-1 bg-[#F1F1EE] dark:bg-[#576856] p-5 border border-[#576856] rounded-lg ring-3 ring-black/5 w-full text-left">
                  {/* <div className="flex items-start gap-4">
                        <div className="mt-1 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Graduated from Udayana University</h3>
                          <p className="text-white/80 text-sm">Information Technology degree, 3.89 GPA</p>
                        </div>
                      </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
