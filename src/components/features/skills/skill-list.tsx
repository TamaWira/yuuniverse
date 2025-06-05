"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { skills } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export function SkillList() {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  return (
    <div className="space-y-5">
      {/* Buttons */}
      <div className="flex items-center md:gap-3 dark:bg-[#576856] p-1 border border-[#576856] dark:border-0 rounded-lg">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(index)}
            className={cn(
              "w-full hover:bg-[#576856] hover:dark:bg-[#171D17] rounded-lg py-1 transition-all font-extralight text-sm md:text-lg",
              {
                "bg-[#576856] dark:bg-[#171D17] text-white":
                  selectedSkill === index,
              }
            )}
          >
            {skill.title}
          </button>
        ))}
      </div>

      {/* Skills */}
      <div className="gap-2 md:gap-5 grid grid-cols-2 md:grid-cols-4">
        {skills[selectedSkill].tools.map((skill) => (
          <AspectRatio
            className="border rounded-lg"
            ratio={3 / 2}
            key={skill.name}
          >
            {/* TODO: Implement tools image  */}
            {/* <Image
              src={skill.image}
              alt={skill.name}
              width={100}
              height={100}
              className="border"
            /> */}
            <p className="font-extralight text-sm md:text-lg">{skill.name}</p>
          </AspectRatio>
        ))}
      </div>
    </div>
  );
}
