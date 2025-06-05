import { skills } from "@/lib/constants";
import Image from "next/image";

interface SkillListItemsProps {
  selectedSkill: number;
}

export function SkillListItems({ selectedSkill }: SkillListItemsProps) {
  return (
    <div className="gap-2 md:gap-5 grid grid-cols-3 md:grid-cols-4">
      {skills[selectedSkill].tools.map((skill) => (
        <div
          className="flex flex-col py-3 border rounded-lg aspect-square md:aspect-[3/2]"
          key={skill.name}
        >
          <div className="relative flex flex-1 justify-end items-center p-3 w-full h-full">
            <Image
              src={skill.image}
              alt={skill.name}
              fill
              className="p-4 object-contain"
            />
          </div>
          <p className="font-extralight text-sm md:text-lg">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
