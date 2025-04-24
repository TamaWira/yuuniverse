import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";

export default function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col h-full">
      <div className="flex items-center gap-2">
        <h2 className="bg-white/5 px-5 py-1 border-2 rounded-full font-extralight text-sm lg:text-xl">
          About Me
        </h2>
        <div className="flex-1 my-auto border-b" />
      </div>
      <div className="lg:flex lg:flex-col lg:flex-1 lg:justify-center mt-5 lg:px-20 text-md lg:text-2xl">
        <BlurText
          text="Hey, I'm Bayu 👋"
          delay={150}
          animateBy="words"
          direction="top"
          className="mb-8"
        />

        <BlurText
          text="I'm a junior software engineer with a passion for building clean, responsive, and user-friendly websites. Right now, I'm exploring the world of modern web development and sharpening my skills one project at a time."
          delay={150}
          animateBy="words"
          direction="top"
          className="mb-8"
        />

        <BlurText
          text="I mostly work with Next.js, Tailwind CSS, and TypeScript—tools I love for how flexible and powerful they are. Whether it's crafting smooth animations, building responsive layouts, or experimenting with new UI libraries like Shadcn, I’m always down to learn something new and make things better."
          delay={150}
          animateBy="words"
          direction="top"
          className="mb-8"
        />

        <BlurText
          text="This site, YuuNiverse, is my little corner of the web where I showcase what I'm working on, what I've learned, and where I'm heading next."
          delay={150}
          animateBy="words"
          direction="top"
          className="mb-8"
        />

        <BlurText
          text="Thanks for stopping by—I hope you enjoy the scroll 🚀"
          delay={150}
          animateBy="words"
          direction="top"
          className="mb-8"
        />
      </div>
      {/* <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
        containerClassName="px-5 lg:px-32 text-center"
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a
        disease? No! When he ate a soup made out of a poisonous mushroom? No! A
        man dies when he is forgotten!
      </ScrollReveal> */}
    </section>
  );
}
