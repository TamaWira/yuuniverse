"use client";

import { useState } from "react";
import { SkillButtons } from "./skill-buttons";
import { SkillListItems } from "./skill-list-items";

export function SkillList() {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  return (
    <div className="space-y-5">
      <SkillButtons
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      />
      <SkillListItems selectedSkill={selectedSkill} />
    </div>
  );
}
