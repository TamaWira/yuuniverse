"use client";

import { useState } from "react";
import { SkillList } from "./skill-list";
import { SkillContent } from "./skill-content";

export default function Skills() {
  const skills = ["Frontend", "Backend", "Database", "Deployment"];
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  return (
    <section
      id="skills"
      className="flex flex-col border-2 rounded-lg lg:h-full"
    >
      <div className="my-10 text-center">
        <h2 className="font-bold text-3xl">What I Do?</h2>
        <p>Well, basically everyting 😁</p>
      </div>

      <div className="flex flex-col-reverse flex-1 items-center gap-10 lg:gap-2 lg:grid lg:grid-cols-3 h-full">
        <SkillList
          skills={skills}
          selectedSkillIndex={selectedSkillIndex}
          setSelectedSkillIndex={setSelectedSkillIndex}
        />
        <SkillContent skills={skills} selectedSkillIndex={selectedSkillIndex} />
      </div>
    </section>
  );
}
