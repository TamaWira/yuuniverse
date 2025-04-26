import React from "react";
import SectionHeader from "./section-header";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col h-full">
      <SectionHeader>Skills</SectionHeader>
      <div className="lg:flex-1 grid grid-cols-2 mt-10">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h2>My roles are:</h2>
          <ul>
            <li>
              <button>Frontend Developer</button>
            </li>
            <li>
              <button>Backend Developer</button>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="border"></div>
      </div>
    </section>
  );
}
