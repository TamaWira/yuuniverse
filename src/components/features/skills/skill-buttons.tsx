import { skills } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SkillButtonsProps {
  selectedSkill: number;
  setSelectedSkill: React.Dispatch<React.SetStateAction<number>>;
}

export function SkillButtons({
  selectedSkill,
  setSelectedSkill,
}: SkillButtonsProps) {
  return (
    <div className="flex items-center md:gap-3 dark:bg-[#576856] p-1 border border-[#576856] dark:border-0 rounded-lg">
      {skills.map((skill, index) => (
        <button
          key={index}
          onClick={() => setSelectedSkill(index)}
          className={cn(
            "w-full hover:bg-[#576856] hover:text-white hover:dark:bg-[#171D17] rounded-lg py-1 transition-all font-extralight text-sm md:text-lg",
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
  );
}
