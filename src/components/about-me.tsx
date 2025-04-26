export default function AboutMe() {
  return (
    <section id="about-me" className="relative flex items-center h-full">
      {/* <SectionHeader>About Me</SectionHeader> */}
      <div className="lg:flex-1 lg:px-32 font-light text-md lg:text-3xl text-center">
        <p>
          I&apos;m a software engineer with{" "}
          <span className="lg:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            1 year of experience
          </span>{" "}
          and a passion for building clean, responsive, and user-friendly
          websites. Right now, I&apos;m exploring the world of modern web
          development and sharpening my skills one project at a time.
        </p>
        <br />
        <p>
          I mostly work with{" "}
          <span className="lg:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            Next.js
          </span>
          ,{" "}
          <span className="lg:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            Tailwind CSS
          </span>
          , and{" "}
          <span className="lg:font-medium font-bold text-[#576856] dark:text-[#90ab8f] underline">
            TypeScript
          </span>
          —tools I love for how flexible and powerful they are. Whether
          it&apos;s crafting smooth animations, building responsive layouts, or
          experimenting with new UI libraries like Shadcn, I&apos;m always down
          to learn something new and make things better.
        </p>
      </div>

      <div className="top-[10%] lg:top-[10%] -left-[2%] lg:left-[5%] -z-10 absolute">
        <div className="-z-10 inset-0 bg-gray-700 blur-2xl lg:blur-3xl rounded-full w-20 lg:w-32 h-20 lg:h-32" />
        <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-gray-500/10 border rounded-lg w-10 h-10 -rotate-30 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center text-xl">⚛️</div>
        </div>
      </div>

      <div className="top-[75%] lg:top-[70%] -right-[3%] lg:right-[3%] -z-10 absolute">
        <div className="-z-10 inset-0 bg-gray-700 blur-3xl rounded-full w-32 h-32" />
        <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-gray-500/10 border rounded-lg w-10 h-10 rotate-30 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center text-xl">⚛️</div>
        </div>
      </div>
    </section>
  );
}
