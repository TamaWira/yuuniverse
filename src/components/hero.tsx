"use client";

import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <section className="relative flex flex-1 justify-center rounded-xl w-full h-full overflow-hidden">
      <HeroImage />

      {/* Gradient Overlay */}
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-white dark:from-black via-white/20 dark:via-black/20 to-transparent h-[80%] pointer-events-none" />

      {/* Content */}
      <div className="top-10 lg:top-20 lg:left-1/2 z-20 absolute text-center lg:-translate-x-1/2">
        <p className="font-light text-xl">Hi there, I&apos;m Bayu</p>
        <h1 className="my-1 font-bold text-3xl lg:text-4xl">
          Welcome to my YuuNiverse
        </h1>
        <p className="mx-10 font-light lg:text-xl">
          Where curiosity meets clean code, and every click tells a story.
        </p>
        <button className="hover:bg-black dark:hover:bg-white mt-5 px-3 py-1 border dark:border-2 dark:border-white border-black rounded-full hover:text-white dark:hover:text-black transition-all">
          Contact Me
        </button>
      </div>
    </section>
  );
}
