import React from "react";

type Props = {
  skills: string[];
  selectedSkillIndex: number;
};

export function SkillContent({ skills, selectedSkillIndex }: Props) {
  return (
    <div className="col-span-2 col-start-2 p-5 border rounded-md w-full h-full">
      <h3>{skills[selectedSkillIndex]}</h3>
    </div>
  );
}
