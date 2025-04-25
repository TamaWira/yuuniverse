import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import SectionHeader from "./section-header";

export default function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col h-full">
      <SectionHeader>About Me</SectionHeader>
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
    </section>
  );
}
