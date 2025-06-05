import Image from "next/image";
import { skills } from "@/lib/constants";

interface SkillListItemsProps {
  selectedSkill: number;
}

export function SkillListItems({ selectedSkill }: SkillListItemsProps) {
  return (
    <div className="gap-2 md:gap-5 grid grid-cols-3 md:grid-cols-4">
      {skills[selectedSkill].tools.map((skill) => (
        <div
          className="flex flex-col py-3 border rounded-lg aspect-square md:aspect-[3/2] overflow-hidden"
          key={skill.name}
        >
          <div className="relative flex flex-1 justify-end items-center w-full">
            <Image
              src="/react.svg"
              alt="React"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <p className="font-extralight text-sm md:text-lg">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
