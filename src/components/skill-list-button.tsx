import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  skill: string;
  index: number;
  selectedSkillIndex: number;
  setSelectedSkillIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function SkillListButton({
  skill,
  index,
  selectedSkillIndex,
  setSelectedSkillIndex,
}: Props) {
  return (
    <button
      key={skill}
      onClick={() => setSelectedSkillIndex(index)}
      className={cn(
        "group flex-1 bg-black/10 dark:bg-white/10 rounded-md font-bold hover:ring-[#96b494]/50 transition-all",
        {
          "ring-2 ring-[#96b494]/50 ": selectedSkillIndex === index,
        }
      )}
    >
      <p
        className={cn("group-hover:text-[#96b494] transition-all", {
          "text-[#96b494]": selectedSkillIndex === index,
        })}
      >
        {skill}
      </p>
    </button>
  );
}
