import Heading from "../../heading";
import { SkillList } from "./skill-list";

export function Skills() {
  return (
    <section id="skills" className="space-y-10 h-full text-center">
      <div>
        <Heading variant="h2" className="">
          What I Do
        </Heading>
        <p className="mx-3 font-extralight text-sm md:text-lg">
          Roles I&apos;m experienced with and tools I trust to build
          high-quality digital experiences.
        </p>
      </div>
      <SkillList />
    </section>
  );
}
