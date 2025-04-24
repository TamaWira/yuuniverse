import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-1 justify-center bg-[#576856] rounded-xl w-full h-full overflow-hidden">
      <Image
        src="/hero-image.png"
        alt="Hero"
        className="object-cover"
        fill
        priority
      />

      {/* Gradient Overlay */}
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-white/60 dark:from-black via-white/20 dark:via-black/20 to-transparent h-[80%] pointer-events-none" />

      <div className="top-10 lg:top-20 lg:left-1/2 z-20 absolute text-center lg:-translate-x-1/2">
        <h1 className="font-bold text-2xl lg:text-4xl">
          I&apos;m Bayu, and welcome to YuuNiverse
        </h1>
        <p className="lg:text-xl">where magic begins</p>
        <button className="hover:bg-black dark:hover:bg-white mt-5 px-3 py-1 border dark:border-2 dark:border-white border-black rounded-full hover:text-white dark:hover:text-black transition-all">
          Contact Me
        </button>
      </div>
    </section>
  );
}
