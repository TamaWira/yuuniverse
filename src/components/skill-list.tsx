import React from "react";
import { SkillListButton } from "./skill-list-button";

type Props = {
  skills: string[];
  selectedSkillIndex: number;
  setSelectedSkillIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function SkillList({
  skills,
  selectedSkillIndex,
  setSelectedSkillIndex,
}: Props) {
  return (
    <div className="flex flex-col gap-2 h-full">
      {skills.map((skill, index) => (
        <SkillListButton
          key={skill}
          skill={skill}
          index={index}
          selectedSkillIndex={selectedSkillIndex}
          setSelectedSkillIndex={setSelectedSkillIndex}
        />
      ))}
    </div>
  );
}
