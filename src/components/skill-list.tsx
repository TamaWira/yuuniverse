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
    <div className="flex lg:flex-col gap-2 p-2 h-full text-xs">
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
